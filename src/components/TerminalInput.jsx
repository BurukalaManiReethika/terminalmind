import React, { useRef, useEffect } from 'react'
import styles from './TerminalInput.module.css'

export function TerminalInput({ value, onChange, onSubmit, onNavigate, disabled }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (!disabled) inputRef.current?.focus()
  }, [disabled])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); onSubmit(value) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); onNavigate('up') }
    else if (e.key === 'ArrowDown') { e.preventDefault(); onNavigate('down') }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); onSubmit('clear') }
    else if (e.key === 'c' && e.ctrlKey) { e.preventDefault(); onSubmit('__INTERRUPT__') }
  }

  return (
    <div className={styles.wrapper} onClick={() => inputRef.current?.focus()}>
      <span className={styles.promptGhost}>ghost</span>
      <span className={styles.promptAt}>@</span>
      <span className={styles.promptHost}>neuralmind</span>
      <span className={styles.promptColon}>:</span>
      <span className={styles.promptPath}>~</span>
      <span className={styles.promptDollar}>$</span>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
        />
        {!disabled && <span className={styles.cursor} style={{ left: `${value.length}ch` }} />}
      </div>
      {disabled && <span className={styles.spinner} />}
    </div>
  )
}
