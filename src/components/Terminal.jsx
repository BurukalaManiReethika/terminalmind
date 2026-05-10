import React from 'react'
import { getLineClass } from '../utils/terminal'
import styles from './TerminalLine.module.css'

export function TerminalLine({ line }) {
  const { content, type } = line

  if (type === 'input') {
    return (
      <div className={styles.inputLine}>
        <span className={styles.promptGhost}>ghost</span>
        <span className={styles.promptAt}>@</span>
        <span className={styles.promptHost}>neuralmind</span>
        <span className={styles.promptColon}>:</span>
        <span className={styles.promptPath}>~</span>
        <span className={styles.promptDollar}>$</span>
        <span className={styles.inputText}>{content}</span>
      </div>
    )
  }

  if (type === 'ascii') {
    return <pre className={styles.ascii}>{content}</pre>
  }

  if (!content) return <div className={styles.blank}>&nbsp;</div>

  const cls = getLineClass(content)

  return (
    <div className={`${styles.line} ${styles[cls]}`}>
      <pre className={styles.pre}>{content}</pre>
    </div>
  )
}
