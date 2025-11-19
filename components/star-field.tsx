"use client"

import { useEffect, useState } from "react"

interface Star {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  twinkleDelay: number
}

export function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      const starCount = 150

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleDelay: Math.random() * 3,
        })
      }

      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated aurora-like background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-800/20 via-transparent to-cyan-800/20 animate-pulse"
          style={{ animationDuration: "12s", animationDelay: "2s" }}
        />
      </div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse hover:scale-150 transition-transform duration-1000"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.twinkleDelay}s`,
            animationDuration: "3s",
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity * 0.5})`,
          }}
        />
      ))}

      {/* Enhanced constellation lines with gradient */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line
          x1="10%"
          y1="20%"
          x2="25%"
          y2="35%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          className="animate-pulse"
        />
        <line
          x1="25%"
          y1="35%"
          x2="40%"
          y2="25%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <line
          x1="70%"
          y1="15%"
          x2="85%"
          y2="30%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <line
          x1="85%"
          y1="30%"
          x2="90%"
          y2="45%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <line
          x1="15%"
          y1="70%"
          x2="30%"
          y2="85%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <line
          x1="60%"
          y1="75%"
          x2="75%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          filter="url(#glow)"
          className="animate-pulse"
          style={{ animationDelay: "3s" }}
        />
      </svg>
    </div>
  )
}
