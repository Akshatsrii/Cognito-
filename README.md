# 🕶️ Cognito — Anonymous Random Video Chat

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=FF0000&height=120&section=header" width="100%">
</p>

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
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

**Built using Next.js, TypeScript, Socket.IO, and ZEGOCLOUD.**

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## ✨ Features

* 🔀 **Random 1-to-1 user pairing**
* 🎥 **Real-time video & audio chat**
* ⏭️ **Next / Skip partner instantly**
* 🔒 **No authentication or user accounts**
* ⚡ **Smooth animations and transitions**
* 🧠 **Safe matchmaking & disconnect handling**
* 🌙 **Dark, modern UI**
* 💎 **Fully typed with TypeScript**

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🛠️ Tech Stack

### Frontend
![Next.js Logo](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
![React Logo](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript Logo](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

* **Next.js 14+** (App Router)
* **React 18+**
* **TypeScript 5+**
* **Tailwind CSS**
* **Framer Motion**
* **Socket.IO Client**

### Backend
![Node.js Logo](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![TypeScript Logo](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Socket.io Logo](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socketdotdotio&logoColor=white)

* **Node.js**
* **TypeScript**
* **Socket.IO**
* **UUID**
* **Express** (HTTP Server)
* **ts-node-dev** (Development)

### Video & Audio
![ZEGOCLOUD](https://img.shields.io/badge/ZEGOCLOUD-6667AB?style=flat&logo=webrtc&logoColor=white)

* **ZEGOCLOUD UIKit Prebuilt** (WebRTC under the hood)

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 📁 Project Structure

```
cognito/
├─ web/                          # Frontend (Next.js + TypeScript)
│  ├─ app/
│  │  ├─ page.tsx               # Main landing page
│  │  ├─ layout.tsx             # Root layout
│  │  ├─ globals.css            # Global styles
│  │  └─ components/
│  │     ├─ Navbar.tsx          # Navigation bar
│  │     ├─ Footer.tsx          # Footer component
│  │     ├─ VideoRoom.tsx       # Video chat room
│  │     └─ WaitingScreen.tsx   # Waiting/matching screen
│  ├─ types/
│  │  └─ socket.ts              # Socket event types
│  ├─ lib/
│  │  ├─ socket.ts              # Socket.IO client setup
│  │  └─ zego.ts                # ZEGOCLOUD configuration
│  ├─ hooks/
│  │  └─ useSocket.ts           # Custom Socket.IO hook
│  ├─ public/                   # Static assets
│  ├─ tsconfig.json             # TypeScript config
│  ├─ tailwind.config.ts        # Tailwind config
│  ├─ next.config.js            # Next.js config
│  ├─ package.json
│  └─ .env.local                # Environment variables
│
├─ server/                       # Backend (Node.js + TypeScript)
│  ├─ src/
│  │  ├─ index.ts               # Main server file
│  │  ├─ types/
│  │  │  └─ socket.ts           # Socket types
│  │  └─ utils/
│  │     └─ matchmaking.ts      # Matchmaking logic
│  ├─ tsconfig.json             # TypeScript config
│  ├─ package.json
│  └─ .env                      # Environment variables
│
└─ README.md                     # Project documentation
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## ⚙️ Environment Variables

### Frontend (`web/.env.local`)

```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_ZEGO_APP_ID=YOUR_ZEGO_APP_ID
NEXT_PUBLIC_ZEGO_SERVER_SECRET=YOUR_ZEGO_SERVER_SECRET
```

### Backend (`server/.env`)

```env
PORT=5000
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🚀 Getting Started

### Prerequisites

* **Node.js** 18+ and **npm** or **yarn**
* **ZEGOCLOUD Account** ([Sign up here](https://www.zegocloud.com/))

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/cognito.git
cd cognito
```

### 2️⃣ Setup Backend Server

```bash
cd server
npm install
```

Create `.env` file with your configuration:
```env
PORT=5000
CLIENT_URL=http://localhost:3000
```

Start the server:
```bash
npm run dev
```

```diff
+ Server runs on http://localhost:5000
+ TypeScript compilation watching for changes
```

### 3️⃣ Setup Frontend

```bash
cd web
npm install
```

Create `.env.local` file with your ZEGOCLOUD credentials:
```env
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
NEXT_PUBLIC_ZEGO_APP_ID=YOUR_ZEGO_APP_ID
NEXT_PUBLIC_ZEGO_SERVER_SECRET=YOUR_ZEGO_SERVER_SECRET
```

Start the development server:
```bash
npm run dev
```

```diff
+ App runs on http://localhost:3000
+ TypeScript type-checking enabled
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🔄 How It Works

### User Flow

1. **User clicks "Start Anonymous Chat"**
2. **Socket.IO sends `start` event to backend**
3. **Backend matchmaking:**
   * Adds user to waiting queue
   * Searches for available match
   * Generates unique `roomId` using UUID
   * Notifies both users with `matched` event
4. **Frontend receives `matched` event**
5. **`VideoRoom` component initializes:**
   * Connects to ZEGOCLOUD with roomId
   * Establishes WebRTC connection
   * Renders video streams
6. **Active chat features:**
   * Real-time video/audio communication
   * Click "Next" to skip and find new partner
   * Automatic reconnection on disconnect

### Technical Flow

```
┌─────────┐                  ┌─────────┐                  ┌──────────┐
│ User A  │◄─────────────────┤ Backend │─────────────────►│  User B  │
└─────────┘   Socket.IO      └─────────┘   Socket.IO     └──────────┘
     │                             │                            │
     │ emit('start')               │                            │
     ├────────────────────────────►│                            │
     │                             │ Match users                │
     │                             │ Create roomId              │
     │                             ├───────────────────────────►│
     │ emit('matched', {roomId})   │  emit('matched', {roomId}) │
     │◄────────────────────────────┤                            │
     │                             │                            │
     │         ZEGOCLOUD WebRTC Connection                      │
     │◄─────────────────────────────────────────────────────────┤
     │                   Video/Audio Stream                     │
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🧠 Matchmaking Logic (Backend)

### Data Structures

```typescript
interface User {
  socketId: string;
  peerId?: string;
}

interface ActivePair {
  user1: string;
  user2: string;
  roomId: string;
}

const waitingQueue: User[] = [];
const activePairs = new Map<string, ActivePair>();
const socketToRoom = new Map<string, string>();
```

### Key Features

* **`waitingQueue[]`** - Stores users waiting for a match
* **`activePairs Map`** - Tracks current 1-to-1 pairs with roomIds
* **`socketToRoom Map`** - Quick lookup from socket to active room

### Supported Operations

* ✅ **Random pairing** - FIFO matching algorithm
* ✅ **Skip / Next** - Disconnect and re-queue for new match
* ✅ **Disconnect handling** - Automatic cleanup and partner notification
* ✅ **No duplicate pairing** - Prevents matching with yourself
* ✅ **Thread-safe operations** - Proper state management

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🔐 Privacy & Safety

```diff
! No user accounts • No chat history • No identity stored • Temporary room IDs only
```

### Privacy Guarantees

* ❌ **No user accounts** - Completely anonymous
* ❌ **No chat history** - Nothing is recorded or stored
* ❌ **No identity stored** - No personal information collected
* ✅ **Temporary room IDs** - Generated per-session with UUID
* ✅ **Secure media** - All video/audio handled via ZEGOCLOUD WebRTC
* ✅ **No tracking** - No cookies or analytics for user identification

### Security Features

* **HTTPS Required** - Production deployment requires SSL
* **CORS Protected** - Backend validates client origin
* **WebRTC Encryption** - End-to-end encrypted streams
* **No Data Persistence** - All state cleared on disconnect

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 📜 Available Scripts

### Frontend (web/)

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Backend (server/)

```bash
npm run dev          # Start with ts-node-dev (hot reload)
npm run build        # Compile TypeScript to JavaScript
npm run start        # Run compiled JavaScript
npm run type-check   # Check TypeScript types
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🧪 Testing

### Tested On

* ✅ **Google Chrome** 120+
* ✅ **Microsoft Edge** 120+
* ✅ **Firefox** 121+
* ✅ **Safari** 17+ (macOS/iOS)
* ✅ **Localhost** (camera & mic enabled)

```diff
! ⚠️ Production requires HTTPS for camera/microphone access
! ⚠️ Some browsers may require user permission for media devices
```

### Testing Locally

1. Open two browser windows/tabs
2. Navigate to `http://localhost:3000` in both
3. Click "Start Anonymous Chat" in both windows
4. You should be matched together
5. Test video/audio functionality
6. Test "Next" button to skip and rematch

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables:
   ```
   NEXT_PUBLIC_SOCKET_URL=https://your-backend.railway.app
   NEXT_PUBLIC_ZEGO_APP_ID=...
   NEXT_PUBLIC_ZEGO_SERVER_SECRET=...
   ```
4. Deploy automatically on push

### Backend (Railway)

1. Push code to GitHub
2. Create new project on [Railway](https://railway.app)
3. Add environment variables:
   ```
   PORT=5000
   CLIENT_URL=https://your-frontend.vercel.app
   ```
4. Deploy from GitHub repository

```diff
! Remember to update CORS settings to allow your production frontend URL
```

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 📌 Future Improvements

* ⏱️ **Skip cooldown** - Prevent spam clicking "Next"
* 🔇 **Auto mute on join** - Start with audio muted
* 🧠 **AI moderation** - Content filtering and safety
* 🌍 **Region-based matching** - Pair users by location for lower latency
* 💬 **Text chat** - Optional messaging alongside video
* 🎭 **Interest tags** - Match based on common interests
* 📊 **Analytics dashboard** - Monitor active users and connections
* 🎨 **Theme customization** - Light/dark mode toggle
* 📱 **Mobile app** - Native iOS/Android versions
* 🔊 **Screen sharing** - Share screen with partner
* ⭐ **Rating system** - Optional post-chat feedback
* 🚀 **WebSocket fallback** - Alternative transport for restricted networks

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 📹 What is ZEGOCLOUD (ZEGO)?

![ZEGOCLOUD](https://img.shields.io/badge/ZEGOCLOUD-6667AB?style=for-the-badge&logo=webrtc&logoColor=white)

**ZEGOCLOUD** is a real-time communication platform that provides:

* 📞 **Video calling**
* 🎤 **Audio calling**
* 📡 **Live streaming**
* 🌐 **WebRTC infrastructure**
* 🔒 **Secure connections**
* 🌍 **Global CDN**

### Why We Use ZEGOCLOUD

* ✅ **No WebRTC complexity** - No need to build from scratch
* ✅ **Handles everything:**
  * Camera access and management
  * Microphone input/output
  * Peer-to-peer connections
  * Network optimizations
  * NAT traversal
  * STUN/TURN servers
* ✅ **Ready-made UI** - Pre-built video chat interface
* ✅ **Excellent performance** - Low latency and high quality
* ✅ **Scales globally** - Reliable infrastructure
* ✅ **Developer-friendly** - Simple SDK integration
* ✅ **TypeScript support** - Full type definitions included

### Getting ZEGOCLOUD Credentials

1. Sign up at [zegocloud.com](https://www.zegocloud.com/)
2. Create a new project
3. Get your `AppID` and `ServerSecret`
4. Add to `.env.local` in the web folder

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

* Write TypeScript with strict type checking
* Follow existing code style and patterns
* Add comments for complex logic
* Test thoroughly before submitting PR
* Update documentation as needed

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 👨‍💻 Author

**Your Name**

* GitHub: [@your-username](https://github.com/your-username)
* LinkedIn: [Your Name](https://linkedin.com/in/your-profile)

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6&height=2" width="100%">
</p>

## 🙏 Acknowledgments

* [Next.js](https://nextjs.org/) - React framework
* [Socket.IO](https://socket.io/) - Real-time communication
* [ZEGOCLOUD](https://www.zegocloud.com/) - Video infrastructure
* [Tailwind CSS](https://tailwindcss.com/) - Styling framework
* [Framer Motion](https://www.framer.com/motion/) - Animation library

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=FF0000&height=120&section=footer" width="100%">
</p>

---

<div align="center">

**Made with ❤️ and TypeScript**

⭐ Star this repo if you found it helpful!

</div>
