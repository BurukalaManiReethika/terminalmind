import { useState, useCallback } from 'react'

const SYSTEM_PROMPT = `You are the AI brain of "TerminalMind" — a futuristic browser-based terminal emulator.
You simulate a Unix-like OS called "NeuralOS v4.2.0" with creative, realistic terminal output.

Rules:
1. ALWAYS respond in raw terminal text. No markdown, no backticks.
2. Simulate realistic output for real commands (ls, cat, pwd, whoami, ps, etc.)
3. For fake/fun commands, generate creative immersive fictional output.
4. Maintain a consistent fictional filesystem (/home/ghost).
5. Machine name is neuralmind.local. Username is ghost.
6. For 'help', list commands in a styled ASCII table.
7. For dangerous commands (rm -rf /, etc.) output a dramatic warning but don't execute.
8. Keep responses under 30 lines unless needed.
9. Easter eggs: 'sudo make me a sandwich', 'hack nasa', 'meaning of life', 'neofetch'.
10. Use prefixes [OK], [ERR], [WARN], [INFO] where appropriate.
11. For 'clear', output exactly: __CLEAR__
12. For unknown commands: bash: <command>: command not found`

export function useClaude(apiKey) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendCommand = useCallback(async (command, history) => {
    if (!apiKey) {
      return '[ERR] No API key set. Click ⚙ Settings to configure.'
    }

    setIsLoading(true)
    setError(null)

    const messages = []
    const contextHistory = history.slice(-10)

    for (const entry of contextHistory) {
      if (entry.type === 'input') {
        messages.push({ role: 'user', content: `Command: ${entry.content}` })
      } else if (entry.type === 'output' && messages.length > 0) {
        messages.push({ role: 'assistant', content: entry.content })
      }
    }

    messages.push({ role: 'user', content: `Command: ${command}` })

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-calls': 'true'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages
        })
      })

      if (!response.ok) {
        const err = await response.json()
        throw new Error(err.error?.message || `HTTP ${response.status}`)
      }

      const data = await response.json()
      return data.content.filter(b => b.type === 'text').map(b => b.text).join('').trim()

    } catch (err) {
      setError(err.message)
      return `[ERR] API Error: ${err.message}`
    } finally {
      setIsLoading(false)
    }
  }, [apiKey])

  return { sendCommand, isLoading, error }
}
