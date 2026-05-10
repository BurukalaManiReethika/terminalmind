import React, { useState, useEffect, useCallback } from 'react'
import { StatusBar }     from './components/StatusBar'
import { Terminal }      from './components/Terminal'
import { SettingsModal } from './components/SettingsModal'
import { useClaude }     from './hooks/useClaude'
import { useHistory }    from './hooks/useHistory'
import { BOOT_SEQUENCE } from './utils/terminal'
import styles from './App.module.css'

export default function App() {
  const [apiKey, setApiKey]             = useState(() => sessionStorage.getItem('tm_key') || '')
  const [input, setInput]               = useState('')
  const [showSettings, setShowSettings] = useState(false)

  const { lines, addLine, addLines, clearLines, pushCommand, navigateHistory, getHistoryEntry, historyIndex } = useHistory()
  const { sendCommand, isLoading } = useClaude(apiKey)

  useEffect(() => {
    addLines(BOOT_SEQUENCE)
    if (!apiKey) {
      setTimeout(() => {
        addLine('')
        addLine('[WARN] No API key. Click ⚙ Settings to configure.')
      }, 200)
    }
  }, [])

  useEffect(() => {
    const move = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const handleSubmit = useCallback(async (cmd) => {
    const trimmed = cmd.trim()
    if (trimmed === '__INTERRUPT__') { addLine('^C'); setInput(''); return }
    if (!trimmed) { addLine('', 'input'); setInput(''); return }

    addLine(trimmed, 'input')
    setInput('')
    pushCommand(trimmed)

    if (trimmed === 'clear') { clearLines(); return }

    const output = await sendCommand(trimmed, lines)

    if (output === '__CLEAR__') {
      clearLines()
    } else {
      addLines(output.split('\n').map(content => ({ content, type: 'output' })))
    }
  }, [lines, addLine, addLines, clearLines, pushCommand, sendCommand])

  const handleNavigate = useCallback((direction) => {
    navigateHistory(direction)
    const next = historyIndex + (direction === 'up' ? 1 : -1)
    setInput(getHistoryEntry(Math.max(-1, next)))
  }, [historyIndex, navigateHistory, getHistoryEntry])

  const handleSaveKey = (key) => {
    setApiKey(key)
    sessionStorage.setItem('tm_key', key)
    addLine('[OK] API key saved. Connection established.')
  }

  return (
    <div className={styles.app}>
      <StatusBar apiKey={apiKey} onOpenSettings={() => setShowSettings(true)} />
      <div className={styles.main}>
        <div className={styles.gutter}>
          <div className={styles.gutterLine} />
          <span className={styles.gutterLabel}>TTY1</span>
          <div className={styles.gutterLine} />
        </div>
        <Terminal
          lines={lines} input={input}
          onChange={setInput} onSubmit={handleSubmit}
          onNavigate={handleNavigate} isLoading={isLoading}
        />
        <div className={styles.gutter}>
          <div className={styles.gutterLine} />
          <span className={styles.gutterLabel}>{isLoading ? 'PROC' : 'IDLE'}</span>
          <div className={styles.gutterLine} />
        </div>
      </div>
      <footer className={styles.footer}>
        <span>↑↓ history</span>
        <span>Ctrl+L clear</span>
        <span>Ctrl+C interrupt</span>
        <span>Enter execute</span>
        <span className={styles.footerRight}>Powered by Claude Sonnet · NeuralOS 4.2.0</span>
      </footer>
      {showSettings && (
        <SettingsModal apiKey={apiKey} onSave={handleSaveKey} onClose={() => setShowSettings(false)} />
      )}
    </div>
  )
}
