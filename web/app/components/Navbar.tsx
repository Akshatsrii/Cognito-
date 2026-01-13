"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkle } from "lucide-react";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-30 bg-black/80 backdrop-blur-xl border-b border-red-500/20 shadow-[0_4px_30px_rgba(220,38,38,0.1)]"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3">
        <motion.span 
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-900/30 backdrop-blur border border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
        >
          <Sparkle size={20} className="text-red-400" />
        </motion.span>
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
          Cognito
        </span>
      </div>
    </motion.div>
  );
}

export default Navbar;