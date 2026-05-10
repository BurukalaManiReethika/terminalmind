export const BOOT_SEQUENCE = [
  { content: '███╗   ██╗███████╗██╗   ██╗██████╗  █████╗ ██╗      ██████╗ ███████╗', type: 'ascii' },
  { content: '████╗  ██║██╔════╝██║   ██║██╔══██╗██╔══██╗██║     ██╔═══██╗██╔════╝', type: 'ascii' },
  { content: '██╔██╗ ██║█████╗  ██║   ██║██████╔╝███████║██║     ██║   ██║███████╗', type: 'ascii' },
  { content: '██║╚██╗██║██╔══╝  ██║   ██║██╔══██╗██╔══██║██║     ██║   ██║╚════██║', type: 'ascii' },
  { content: '██║ ╚████║███████╗╚██████╔╝██║  ██║██║  ██║███████╗╚██████╔╝███████║', type: 'ascii' },
  { content: '╚═╝  ╚═══╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝', type: 'ascii' },
  { content: '', type: 'output' },
  { content: '  TerminalMind v1.0.0  •  NeuralOS 4.2.0-LTS  •  AI: Claude Sonnet', type: 'info' },
  { content: '  Kernel: neuralmind-5.15.0 #1 SMP  •  Arch: x86_64', type: 'muted' },
  { content: '', type: 'output' },
  { content: '[OK] Loading AI subsystems ........ READY', type: 'success' },
  { content: '[OK] Mounting virtual filesystem .. DONE', type: 'success' },
  { content: '[OK] Initializing neural hooks .... ACTIVE', type: 'success' },
  { content: '', type: 'output' },
  { content: '  Type "help" for commands. Type anything — AI will execute it.', type: 'info' },
  { content: '─'.repeat(72), type: 'muted' },
]

export function getLineClass(content) {
  if (!content) return 'line-blank'
  if (content.startsWith('[ERR]') || content.startsWith('bash:')) return 'line-error'
  if (content.startsWith('[WARN]')) return 'line-warn'
  if (content.startsWith('[OK]')) return 'line-success'
  if (content.startsWith('[INFO]')) return 'line-info'
  return 'line-output'
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
