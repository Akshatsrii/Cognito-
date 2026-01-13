# 🕶️ Cognito — Anonymous Random Video Chat

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotdotio&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

</div>

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

```diff
! Cognito is a real-time anonymous video chat application that pairs users randomly
! for 1-to-1 video conversations with no sign-up, no identity, and instant connections.
```

**Built using Next.js, Socket.IO, and ZEGOCLOUD.**

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## ✨ Features

* 🔀 **Random 1-to-1 user pairing**
* 🎥 **Real-time video & audio chat**
* ⏭️ **Next / Skip partner instantly**
* 🔒 **No authentication or user accounts**
* ⚡ **Smooth animations and transitions**
* 🧠 **Safe matchmaking & disconnect handling**
* 🌙 **Dark, modern UI**

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 🛠️ Tech Stack

### Frontend
![Next.js Logo](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React Logo](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

* Next.js (App Router)
* React
* Tailwind CSS
* Motion (Framer Motion alternative)
* Socket.IO Client

### Backend
![Node.js Logo](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![Socket.io Logo](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socketdotdotio&logoColor=white)

* Node.js
* Socket.IO
* UUID
* HTTP Server

### Video & Audio
![ZEGOCLOUD](https://img.shields.io/badge/ZEGOCLOUD-6667AB?style=flat&logo=webrtc&logoColor=white)

* ZEGOCLOUD UIKit Prebuilt (WebRTC under the hood)

<p align="center">
  <img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">
</p>

## 📁 Project Structure

```
web/
├─ app/
│  ├─ page.tsx
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  └─ VideoRoom.tsx
├─ public/
├─ styles/
└─ .env.local

server/
├─ index.js
├─ package.json
└─ .env
```

---

## ⚙️ Environment Variables

### Frontend (`.env.local`)

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_ZEGO_APP_ID=YOUR_ZEGO_APP_ID
NEXT_PUBLIC_ZEGO_SERVER_SECRET=YOUR_ZEGO_SERVER_SECRET
```

### Backend (`.env`)

```env
PORT=5000
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/cognito.git
cd cognito
```

### 2️⃣ Start Backend Server

```bash
cd server
npm install
npm start
```

```diff
- Server runs on http://localhost:5000
```

### 3️⃣ Start Frontend

```bash
cd web
npm install
npm run dev
```

```diff
- App runs on http://localhost:3000
```

---

## 🔄 How It Works

1. **User clicks "Start Anonymous Chat"**
2. **Socket.IO sends `start` event to backend**
3. **Backend:**
   * Matches two waiting users
   * Generates a unique `roomId`
4. **Frontend receives `matched` event**
5. **`VideoRoom` joins the ZEGOCLOUD video room**
6. **Users can:**
   * Talk via video/audio
   * Click "Next" to skip and re-match

---

## 🧠 Matchmaking Logic (Backend)

* `waitingQueue[]` stores users waiting for a match
* `activePairs Map` tracks current 1-to-1 pairs
* **Supports:**
   * Skip (`next`)
   * Disconnect handling
   * No duplicate pairing

---

## 🔐 Privacy & Safety

```diff
! No user accounts • No chat history • No identity stored • Temporary room IDs only
```

* **No user accounts**
* **No chat history**
* **No identity stored**
* **Temporary room IDs only**
* **Media handled securely via ZEGOCLOUD WebRTC**

---

## 🧪 Tested On

* ✅ Google Chrome
* ✅ Microsoft Edge
* ✅ Localhost (camera & mic enabled)

```diff
! ⚠️ Production requires HTTPS for camera/microphone access.
```

---

## 📌 Future Improvements

* ⏱️ Skip cooldown
* 🔇 Auto mute on join
* 🧠 AI moderation
* 🌍 Region-based matching
* 🚀 Deployment (Vercel + Railway)

---

## 📹 What is ZEGOCLOUD (ZEGO)?

![ZEGOCLOUD](https://img.shields.io/badge/ZEGOCLOUD-6667AB?style=for-the-badge&logo=webrtc&logoColor=white)

**ZEGOCLOUD** is a real-time communication platform that provides:

* Video calling
* Audio calling
* Live streaming
* WebRTC infrastructure

### Why we used ZEGOCLOUD:

* ✅ No need to build WebRTC from scratch
* ✅ Handles:
   * Camera
   * Microphone
   * Peer connections
   * Network optimizations
* ✅ Provides a ready-made UI for video chat
* ✅ Scales well and is developer-friendly

