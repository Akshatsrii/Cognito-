"use client";

import { Sparkle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 backdrop-blur-xl border-t border-red-500/20 shadow-[0_-4px_30px_rgba(220,38,38,0.1)]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500/20 to-red-900/30 backdrop-blur border border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.3)]">
            <Sparkle size={20} className="text-red-400" />
          </span>
          <span className="text-white font-bold text-base bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            Cognito
          </span>
        </div>

        <div className="text-zinc-400 text-xs">
          © {new Date().getFullYear()} Cognito. All rights reserved.
        </div>
      </div>
    </footer>
  );
}