# 🐍 Snake Game

[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Platform](https://img.shields.io/badge/platform-iOS%20|%20Android-lightgrey?logo=react)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A nostalgic Snake game built with **React Native + TypeScript**, featuring a responsive, notch-safe grid system and smooth gameplay. Perfect for learning grid logic, animation timing, and mobile-safe layouts.

---

## 📸 Preview

> _Coming soon_

---

## 🚀 Features

- 🎮 Classic snake movement with arrow/button controls
- 🍎 Random food placement on a dynamic grid
- 🧱 Safe area aware on iOS and Android (notch support)
- ⚛️ Clean, modular TypeScript structure
- 🧠 Grid-calculated boundaries (no overflow bugs)
- 🔁 Automatic game reset on collision

---

## 🧱 Folder Structure

<pre>
src/
├── assets/                     # Images, sounds, etc.
├── components/                 # Reusable UI components
├── constants/                  # Global constants (app-wide)
├── hooks/                      # Custom React hooks
├── modules/
│   └── SnakeGame/
│       ├── Controller.tsx           # Game control buttons
│       ├── SnakeGameScreen.tsx      # Main game screen
│       ├── SnakeGame.constants.ts   # Game-related constants
│       ├── SnakeGame.utils.ts       # Grid calculation utilities
│       └── index.ts                 # Barrel export for module
├── redux/                      # Redux store and slices (if used)
├── routes/                     # App navigation setup
├── services/                   # API integrations or helpers
└── utils/                      # Shared utility functions (e.g., colors)
</pre>

---

## 📦 Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/meKushdeepSingh/SnakeGame.git
cd SnakeGame
npm install
# or
yarn
```

### 2. iOS Setup (bare React Native only)

```bash
cd ios
pod install
cd ..
yarn ios
```

### 3. Android

```bash
yarn android
```

---

## 🛠️ Tech Stack

```
⚛️ React Native
🔷 TypeScript
📏 Dynamic layout calculation
```

---

## 🧠 Planned Improvements

```
⏸ Pause/Resume support
🔊 Sound effects
💾 High score persistence (AsyncStorage or SQLite)
🧍‍♂️ Swipe gesture controls
```
