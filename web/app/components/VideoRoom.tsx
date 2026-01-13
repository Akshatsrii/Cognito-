"use client";

import { useEffect, useRef } from "react";

function VideoRoom({ roomId }: { roomId: string }) {
  const containerRef = useRef(null);
  const zpRef = useRef(null);
  const joinedRef = useRef(false);

  useEffect(() => {
    if (!roomId || joinedRef.current) return;

    joinedRef.current = true;

    const start = async () => {
      const { ZegoUIKitPrebuilt } = await import(
        "@zegocloud/zego-uikit-prebuilt"
      );

      const userId = crypto.randomUUID();

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID),
        process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET as string,
        roomId,
        userId,
        "stranger"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zpRef.current = zp;

      zp.joinRoom({
        container: containerRef.current!,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        turnOnCameraWhenJoining: true,
        turnOnMicrophoneWhenJoining: true,
        showMyCameraToggleButton: true,
        showMyMicrophoneToggleButton: true,
        showAudioVideoSettingsButton: true,
        showPreJoinView: false,
        showLeaveRoomConfirmDialog: false,
      });
    };

    start();

    return () => {
      if (zpRef.current) {
        try {
          zpRef.current.leaveRoom();
        } catch {}
        zpRef.current = null;
        joinedRef.current = false;
      }
    };
  }, [roomId]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)] animate-pulse"></div>
      </div>
   
      <div 
        ref={containerRef}
        className="relative z-10 w-full h-full"
        style={{
          '--primary-color': '#dc2626',
          '--secondary-color': '#7f1d1d',
          '--background-color': '#000000',
          '--button-bg': 'rgba(220, 38, 38, 0.2)',
          '--button-hover': 'rgba(220, 38, 38, 0.4)',
        } as React.CSSProperties}
      />
      
   
      <style jsx global>{`
        /* Override Zego UI Kit styles */
        #root {
          background: transparent !important;
        }
        
        /* Video containers */
        [class*="video"] {
          border-radius: 12px;
          border: 2px solid rgba(220, 38, 38, 0.3);
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.2);
          transition: all 0.3s ease;
        }
        
        [class*="video"]:hover {
          border-color: rgba(220, 38, 38, 0.6);
          box-shadow: 0 0 40px rgba(220, 38, 38, 0.4);
        }
        
        /* Control buttons */
        [class*="button"],
        button {
          background: rgba(220, 38, 38, 0.2) !important;
          border: 1px solid rgba(220, 38, 38, 0.4) !important;
          border-radius: 50% !important;
          backdrop-filter: blur(10px) !important;
          transition: all 0.3s ease !important;
        }
        
        [class*="button"]:hover,
        button:hover {
          background: rgba(220, 38, 38, 0.4) !important;
          border-color: rgba(220, 38, 38, 0.8) !important;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.5) !important;
          transform: scale(1.05);
        }
        
        /* Active/selected state */
        [class*="button"][class*="active"],
        button[class*="active"] {
          background: rgba(220, 38, 38, 0.6) !important;
          border-color: #dc2626 !important;
        }
        
        /* Control bar */
        [class*="control-bar"],
        [class*="toolbar"] {
          background: rgba(0, 0, 0, 0.8) !important;
          border-top: 1px solid rgba(220, 38, 38, 0.3) !important;
          backdrop-filter: blur(20px) !important;
        }
        
        /* User name labels */
        [class*="username"],
        [class*="name-label"] {
          background: rgba(0, 0, 0, 0.8) !important;
          color: #dc2626 !important;
          border: 1px solid rgba(220, 38, 38, 0.4) !important;
          border-radius: 6px !important;
          padding: 4px 12px !important;
          font-weight: 600 !important;
          backdrop-filter: blur(10px) !important;
        }
        
        /* Icons */
        svg path {
          fill: #dc2626 !important;
        }
        
        /* Mute icon overlay */
        [class*="mute-icon"] {
          background: rgba(127, 29, 29, 0.9) !important;
          border-radius: 50% !important;
        }
        
        /* Settings panel */
        [class*="settings"],
        [class*="menu"],
        [class*="dialog"] {
          background: rgba(0, 0, 0, 0.95) !important;
          border: 1px solid rgba(220, 38, 38, 0.4) !important;
          border-radius: 12px !important;
          backdrop-filter: blur(20px) !important;
          box-shadow: 0 0 40px rgba(220, 38, 38, 0.3) !important;
        }
        
        /* Text elements */
        [class*="text"],
        span,
        p {
          color: #f5f5f5 !important;
        }
        
        /* Scrollbars */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.8);
        }
        
        /* Loading states */
        [class*="loading"],
        [class*="spinner"] {
          border-color: rgba(220, 38, 38, 0.3) !important;
          border-top-color: #dc2626 !important;
        }
        
        /* Network quality indicator */
        [class*="network"] {
          color: #dc2626 !important;
        }
      `}</style>
    </div>
  );
}

export default VideoRoom;