# TerminalMind 🧠

<div align="center">

████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗     ███╗   ███╗██╗███╗   ██╗██████╗
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║     ████╗ ████║██║████╗  ██║██╔══██╗
██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║     ██╔████╔██║██║██╔██╗ ██║██║  ██║
██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║     ██║╚██╔╝██║██║██║╚██╗██║██║  ██║
██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗██║ ╚═╝ ██║██║██║ ╚████║██████╔╝
╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝
**An AI-powered browser terminal emulator. Type any command — real or imaginary.**

[![React](https://img.shields.io/badge/React-18.2-61dafb?style=flat-square&logo=react&logoColor=black)](https://reactjs.org)
[![Vite](https://img.shields.io/badge/Vite-5.0-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Claude](https://img.shields.io/badge/Claude-Sonnet-cc785c?style=flat-square)](https://anthropic.com)
[![License](https://img.shields.io/badge/License-MIT-00ff9f?style=flat-square)](#license)
[![Stars](https://img.shields.io/github/stars/yourusername/terminalmind?style=flat-square&color=ffb800)](https://github.com/yourusername/terminalmind/stargazers)

[**Live Demo**](https://terminalmind.vercel.app) · [**Report Bug**](https://github.com/yourusername/terminalmind/issues) · [**Request Feature**](https://github.com/yourusername/terminalmind/issues)

</div>

---

## ⚡ What Is This?

**TerminalMind** is a browser-based terminal emulator powered by Claude AI (NeuralOS v4.2.0).  
Every command you type — real Unix commands, made-up commands, easter eggs — gets interpreted and executed by AI in real time.

It looks like a terminal. It feels like a terminal. But the brain behind it is Claude Sonnet.

``bash
ghost@neuralmind:~$ hack nasa
ghost@neuralmind:~$ sudo make me a sandwich
ghost@neuralmind:~$ ls -la /home/ghost/secrets
ghost@neuralmind:~$ git log --oneline
ghost@neuralmind:~$ meaning of life
`

All of them work. All of them surprise you.


## 🎥 Preview
┌─────────────────────────────────────────────────────────────────────┐
│  TERMINALMIND  │  NeuralOS 4.2.0    AI: CONNECTED  UPTIME: 4m 32s  │
├──┬──────────────────────────────────────────────────────────────┬───┤
│  │                                                              │   │
│T │  [OK] Loading AI subsystems ........ READY                  │ I │
│T │  [OK] Mounting virtual filesystem .. DONE                   │ D │
│Y │  [OK] Initializing neural hooks .... ACTIVE                 │ L │
│1 │                                                              │ E │
│  │  ghost@neuralmind:~ $ ls -la                                │   │
│  │  total 48                                                    │   │
│  │  drwxr-xr-x  ghost ghost 4096 May 10 09:12 .               │   │
│  │  drwxr-xr-x  ghost ghost 4096 May 10 09:12 ..              │   │
│  │  -rw-r--r--  ghost ghost  220 May 10 09:12 .bashrc         │   │
│  │  drwxr-xr-x  ghost ghost 4096 May 10 09:12 projects/       │   │
│  │  drwxr-xr-x  ghost ghost 4096 May 10 09:12 secrets/        │   │
│  │                                                              │   │
│  │  ghost@neuralmind:~ $ _                                      │   │
│  │                                                              │   │
├──┴──────────────────────────────────────────────────────────────┴───┤
│  ↑↓ history    Ctrl+L clear    Ctrl+C interrupt    Enter execute    │
└─────────────────────────────────────────────────────────────────────┘
---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 **AI Brain** | Every command is processed by Claude Sonnet — real or fictional |
| 📁 **Stateful Filesystem** | Simulated `/home/ghost` persists throughout your session |
| 🖥️ **CRT Aesthetic** | Scanlines, vignette, green phosphor glow, screen flicker |
| ⌨️ **Real Keyboard UX** | Arrow history, Ctrl+L clear, Ctrl+C interrupt |
| 🎨 **Elite UI** | Orbitron + JetBrains Mono, custom cursor, blinking block caret |
| 🔒 **Secure Key Handling** | API key stored in `sessionStorage` only — never leaves your browser |
| 🚀 **Instant Boot** | Animated NeuralOS boot sequence on every launch |
| 🎭 **Easter Eggs** | `hack nasa`, `sudo make me a sandwich`, `neofetch`, `meaning of life` |
| 📊 **Status Bar** | Live clock, uptime counter, AI connection status |
| ⚙️ **Settings Modal** | One-click API key config with show/hide toggle |

---

## 🚀 Quick Start

### Prerequisites

- Node.js `18+`
- An [Anthropic API key](https://console.anthropic.com/keys)

### Installation

`bash
# 1. Clone the repo
git clone https://github.com/yourusername/terminalmind.git
cd terminalmind

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev


Open **`http://localhost:3000`** in your browser.

Click the **⚙** icon in the top-right corner, paste your Anthropic API key, and hit **SAVE & CONNECT**.

That's it. Start typing.

---

## 🏗️ Project Structure
terminalmind/
│
├── index.html                        # HTML entry — loads fonts, mounts React
├── vite.config.js                    # Vite + React plugin config
├── package.json                      # Dependencies & scripts
├── .gitignore
├── README.md
│
├── public/
│   └── favicon.svg                   # Custom $_ terminal favicon
│
└── src/
├── main.jsx                      # ReactDOM root
├── App.jsx                       # Root — all state, keyboard hooks, submit logic
├── App.module.css                # Layout: gutters, footer bar
│
├── styles/
│   └── global.css                # CSS vars, animations, scanlines, custom cursor
│
├── hooks/
│   ├── useClaude.js              # 🧠 Claude API — system prompt + message routing
│   └── useHistory.js             # Terminal lines state + arrow-key command history
│
├── utils/
│   └── terminal.js               # Boot sequence, line colorizer, helpers
│
└── components/
├── Terminal.jsx              # Scrollable terminal window + auto-scroll
├── Terminal.module.css
├── TerminalLine.jsx          # Single output line — color-coded by type
├── TerminalLine.module.css
├── TerminalInput.jsx         # Live input: prompt + block cursor + spinner
├── TerminalInput.module.css
├── StatusBar.jsx             # Top bar: branding, metrics, clock, settings
├── StatusBar.module.css
├── SettingsModal.jsx         # API key modal with reveal toggle
└── SettingsModal.module.css
---

## 🎮 Commands To Try

``bash
# Real Unix commands (AI simulates realistic output)
ls -la
pwd
whoami
ps aux
cat /etc/os-release
df -h
uname -a
git log --oneline
git status
top

# AI interprets creatively
hack nasa
crack the mainframe
deploy to production
sudo make me a sandwich
access classified files
run diagnostics

# Easter eggs
meaning of life
neofetch
sudo rm -rf /
matrix
fortune

# Meta
help                  # full command reference
clear                 # wipe terminal (also Ctrl+L)


## 🛠️ Tech Stack
Frontend    →  React 18  +  Vite 5  +  CSS Modules
AI Engine   →  Anthropic Claude Sonnet (claude-sonnet-4-20250514)
Typography  →  Orbitron (display)  +  JetBrains Mono (code)
Styling     →  Pure CSS — no Tailwind, no UI libraries
State       →  useState + useCallback hooks only
Storage     →  sessionStorage (API key, session-scoped)
---

## 🔑 API Key Setup

1. Go to [console.anthropic.com/keys](https://console.anthropic.com/keys)
2. Create a new key
3. Open TerminalMind → click **⚙** → paste key → **SAVE & CONNECT**

> Your key is stored in `sessionStorage` only.  
> It is **never** sent to any server other than `api.anthropic.com`.  
> It is **cleared** automatically when you close the tab.

---

## 🏗️ Build for Production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# drag & drop the /dist folder to netlify.com/drop
```

---

## 🤝 Contributing

Contributions are welcome and appreciated.

```bash
# Fork → Clone → Branch
git checkout -b feature/your-feature-name

# Make changes, then
git commit -m "feat: add your feature"
git push origin feature/your-feature-name

# Open a Pull Request
```

**Ideas for contributions:**
- [ ] Streaming token-by-token output
- [ ] Themes (amber, blue phosphor, paper white)
- [ ] Tab autocomplete
- [ ] Persistent filesystem via localStorage
- [ ] Split-pane support
- [ ] Mobile touch keyboard support

---

## 📄 License
MIT License
Copyright (c) 2026 BURUKALA MANI REETHIKA
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software.
---

## 🌟 Support

If TerminalMind made you smile, type `meaning of life` in the terminal —  
and maybe leave a ⭐ on GitHub while you're at it.

---

<div align="center">

**Built with 🖤 and too much green phosphor**

`ghost@neuralmind:~$ _`

</div>
