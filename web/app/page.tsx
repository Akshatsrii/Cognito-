"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoRoom from "./components/VideoRoom";
import { motion, AnimatePresence } from "motion/react";
import { Sparkle, Video, Loader2 } from "lucide-react";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL as string, {
  transports: ["websocket"],
});

export default function Home() {
  const [status, setStatus] = useState<"idle" | "waiting" | "chatting">("idle");
  const [roomId, setRoomId] = useState("");

  const startChat = () => {
    socket.emit("start");
    setStatus("waiting");
  };

  const nextChat = () => {
    socket.emit("next");
    setRoomId("");
    setStatus("waiting");
  };

  useEffect(() => {
    socket.on("matched", ({ roomId }) => {
      setRoomId(roomId);
      setStatus("chatting");
    });

    socket.on("partner-left", () => {
      setRoomId("");
      setStatus("idle");
    });

    return () => {
      socket.off("matched");
      socket.off("partner-left");
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="relative h-screen w-full bg-black text-white overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-red-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(127,29,29,0.2),transparent_50%)]" />
        
        <div className="absolute top-32 left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-red-800/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-red-950/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center"
            >
              <motion.div 
                initial={{ scale: 0.8, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500/20 to-red-900/30 backdrop-blur-xl border border-red-500/30 shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              >
                <Sparkle size={32} className="text-red-400" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
              >
                Cognito
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-zinc-400 max-w-md mb-10 text-sm sm:text-base leading-relaxed"
              >
                Anonymous video conversations with strangers worldwide.
                <br />
                <span className="text-red-400/80">No sign-up. No identity. Just pure connection.</span>
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(220,38,38,0.6)"
                }}
                whileTap={{ scale: 0.97 }}
                onClick={startChat}
                className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-lg shadow-[0_0_40px_rgba(220,38,38,0.4)] border border-red-500/50 backdrop-blur-sm transition-all duration-300"
              >
                <Video size={24} />
                Start Anonymous Chat
              </motion.button>
            </motion.div>
          )}

          {status === "waiting" && (
            <motion.div
              key="waiting"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center justify-center flex-1 gap-8 text-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                  className="w-24 h-24 rounded-full border-4 border-red-500/30 border-t-red-500"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
                  className="absolute inset-2 w-20 h-20 rounded-full border-4 border-red-600/20 border-b-red-600"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 size={40} className="text-red-400" />
                </div>
              </div>

              <div className="space-y-3">
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, ease: "easeInOut", duration: 2 }}
                  className="text-xl font-medium text-red-300"
                >
                  Matching you with someone new…
                </motion.p>
                <motion.div
                  className="flex gap-2 justify-center"
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ repeat: Infinity, ease: "easeInOut", duration: 1.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-500" style={{ animationDelay: '0s' }} />
                  <div className="w-2 h-2 rounded-full bg-red-500" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 rounded-full bg-red-500" style={{ animationDelay: '0.4s' }} />
                </motion.div>
              </div>
            </motion.div>
          )}

          {status === "chatting" && roomId && (
            <motion.div
              key="chatting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col flex-1"
            >
              <div className="flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-xl border-b border-red-500/20 shadow-[0_4px_20px_rgba(220,38,38,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                  <div className="text-sm font-medium text-zinc-300">
                    Cognito <span className="text-red-400">| connected</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(220,38,38,0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextChat}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm font-semibold border border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300"
                >
                  Next
                </motion.button>
              </div>

              <div className="flex-1 relative bg-black">
                <VideoRoom roomId={roomId} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
}