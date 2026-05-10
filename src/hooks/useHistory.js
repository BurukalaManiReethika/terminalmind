import { useState, useCallback } from 'react'

export function useHistory() {
  const [lines, setLines] = useState([])
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)

  const addLine = useCallback((content, type = 'output') => {
    setLines(prev => [...prev, { id: Date.now() + Math.random(), content, type }])
  }, [])

  const addLines = useCallback((items) => {
    const stamped = items.map((item, i) => ({ id: Date.now() + i, ...item }))
    setLines(prev => [...prev, ...stamped])
  }, [])

  const clearLines = useCallback(() => setLines([]), [])

  const pushCommand = useCallback((cmd) => {
    setCmdHistory(prev => [cmd, ...prev.filter(c => c !== cmd)].slice(0, 100))
    setHistoryIndex(-1)
  }, [])

  const navigateHistory = useCallback((direction) => {
    setHistoryIndex(prev => {
      if (direction === 'up') return Math.min(prev + 1, cmdHistory.length - 1)
      return Math.max(prev - 1, -1)
    })
  }, [cmdHistory])

  const getHistoryEntry = useCallback((index) => {
    if (index === -1) return ''
    return cmdHistory[index] || ''
  }, [cmdHistory])

  return { lines, addLine, addLines, clearLines, pushCommand, navigateHistory, getHistoryEntry, historyIndex }
}
