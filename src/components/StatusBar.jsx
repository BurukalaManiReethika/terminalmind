import React, { useState, useEffect } from 'react'
import styles from './StatusBar.module.css'

export function StatusBar({ onOpenSettings, apiKey }) {
  const [time, setTime] = useState('')
  const [uptime, setUptime] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }))
      setUptime(Math.floor((Date.now() - start) / 1000))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const fmt = (s) => `${Math.floor(s/60)}m ${s%60}s`

  return (
    <header className={styles.bar}>
      <div className={styles.left}>
        <span className={styles.logo}>TERMINAL<span className={styles.accent}>MIND</span></span>
        <span className={styles.sep}>│</span>
        <span className={styles.pill}>NeuralOS 4.2.0</span>
      </div>
      <div className={styles.center}>
        <Metric label="AI"     value={apiKey ? 'CONNECTED' : 'NO KEY'} green={!!apiKey} />
        <Metric label="UPTIME" value={fmt(uptime)} />
        <Metric label="KERNEL" value="5.15.0" />
      </div>
      <div className={styles.right}>
        <span className={styles.clock}>{time}</span>
        <button className={styles.settingsBtn} onClick={onOpenSettings} title="Settings">⚙</button>
      </div>
    </header>
  )
}

function Metric({ label, value, green }) {
  return (
    <div className={styles.metric}>
      <span className={styles.metricLabel}>{label}</span>
      <span className={`${styles.metricValue} ${green ? styles.metricGreen : ''}`}>{value}</span>
    </div>
  )
}
