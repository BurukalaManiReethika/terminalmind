import React, { useState } from 'react'
import styles from './SettingsModal.module.css'

export function SettingsModal({ apiKey, onSave, onClose }) {
  const [value, setValue] = useState(apiKey || '')
  const [show, setShow] = useState(false)

  const handleSave = () => { onSave(value.trim()); onClose() }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>⚙ CONFIGURE API KEY</span>
          <button className={styles.close} onClick={onClose}>✕</button>
        </div>
        <div className={styles.body}>
          <p className={styles.desc}>
            TerminalMind uses Claude API as its AI brain.<br/>
            Your key is stored in memory only — never sent elsewhere.
          </p>
          <label className={styles.label}>ANTHROPIC API KEY</label>
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              type={show ? 'text' : 'password'}
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="sk-ant-api03-..."
              onKeyDown={e => e.key === 'Enter' && handleSave()}
              autoFocus
            />
            <button className={styles.toggle} onClick={() => setShow(s => !s)}>
              {show ? '🙈' : '👁'}
            </button>
          </div>
          <p className={styles.hint}>
            Get your key at <a href="https://console.anthropic.com/keys" target="_blank" rel="noopener noreferrer" className={styles.link}>console.anthropic.com</a>
          </p>
        </div>
        <div className={styles.footer}>
          <button className={styles.cancel} onClick={onClose}>CANCEL</button>
          <button className={styles.save} onClick={handleSave}>SAVE & CONNECT</button>
        </div>
      </div>
    </div>
  )
}
