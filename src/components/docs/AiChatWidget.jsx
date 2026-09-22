'use client';

import React, { useState, useEffect, useRef } from 'react'
import {
  loadChatHistory,
  saveChatMessage,
  saveAllChatMessages,
  clearChatHistoryDB,
} from '../../lib/docs/chatHistoryDb'

function BotAvatarIcon({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`weblings-avatar-svg ${className}`}
    >
      <defs>
        {/* Theme-Adaptive Circle Background Gradient */}
        <radialGradient id="avatarBgGrad" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="var(--avatar-bg-start)" />
          <stop offset="100%" stopColor="var(--avatar-bg-end)" />
        </radialGradient>
      </defs>

      {/* Circle Base */}
      <circle cx="32" cy="32" r="31" fill="url(#avatarBgGrad)" className="weblings-avatar-bg" />

      {/* Rotating AI Orbit Ring */}
      <circle
        cx="32"
        cy="32"
        r="29"
        fill="none"
        stroke="var(--avatar-ring-color)"
        strokeWidth="1.8"
        strokeDasharray="135 45"
        className="weblings-avatar-orbit-ring"
      />

      {/* Pulsing Outer Glow Ring */}
      <circle
        cx="32"
        cy="32"
        r="30.5"
        fill="none"
        stroke="var(--avatar-glow)"
        strokeWidth="1.5"
        className="weblings-avatar-pulse-ring"
      />

      {/* Perfectly Centered Weblings "W" Monogram */}
      <g transform="translate(32, 32.8) scale(1.1) translate(-27.555, -27.895)">
        <g className="weblings-avatar-w">
          {/* Right Arm */}
          <path
            d="M47.8832 18.0409C48.003 17.8332 47.9319 17.5679 47.7244 17.4481L46.4092 16.6888C42.4142 14.3823 37.3058 15.7511 34.9992 19.746L27.3787 32.9452C25.9558 35.4096 26.8002 38.5609 29.2646 39.9838C31.7292 41.4066 34.8804 40.5623 36.3033 38.0978L47.8832 18.0409Z"
            fill="var(--avatar-w-arm)"
          />
          {/* Left Arm */}
          <path
            d="M7.22813 18.0409C7.10831 17.8332 7.17941 17.5679 7.38695 17.4481L8.70215 16.6888C12.6972 14.3823 17.8056 15.7511 20.1122 19.746L27.7327 32.9452C29.1556 35.4096 28.3112 38.5609 25.8466 39.9838C23.3822 41.4066 20.2309 40.5623 18.808 38.0978L7.22813 18.0409Z"
            fill="var(--avatar-w-arm)"
          />
          {/* Center Node */}
          <path
            d="M31.4735 24.8354C32.7609 26.4441 33.005 28.7411 31.9126 30.6331L27.6264 38.0571C27.572 38.1513 27.515 38.243 27.4558 38.3325C27.4114 38.2633 27.3685 38.1929 27.3269 38.121L23.0408 30.6971C21.6179 28.2327 22.4623 25.0814 24.9267 23.6585C27.1375 22.3821 29.9008 22.9302 31.4735 24.8354Z"
            fill="var(--avatar-w-center)"
          />
        </g>
      </g>
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" opacity="0.3" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" />
    </svg>
  )
}

function DoubleCheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L7 17l-5-5" />
      <path d="M22 10l-7.5 7.5L13 16" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function DragGripIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4, cursor: 'grab' }}>
      <circle cx="9" cy="6" r="1.2" />
      <circle cx="15" cy="6" r="1.2" />
      <circle cx="9" cy="12" r="1.2" />
      <circle cx="15" cy="12" r="1.2" />
      <circle cx="9" cy="18" r="1.2" />
      <circle cx="15" cy="18" r="1.2" />
    </svg>
  )
}

function ResizeHandleIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  )
}

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Hello! 👋\nI'm your AI assistant.\nHow can I help you today?",
    time: '10:30 AM',
  },
  //   {
  //     id: 2,
  //     sender: 'user',
  //     text: 'Can you explain how AI works in simple terms?',
  //     time: '10:31 AM',
  //   },
  //   {
  //     id: 3,
  //     sender: 'bot',
  //     text: 'Sure! 🤖\nAI (Artificial Intelligence) allows machines to learn from data, recognize patterns, and make decisions — similar to how humans learn and think.',
  //     time: '10:31 AM',
  //   },
  //   {
  //     id: 4,
  //     sender: 'user',
  //     text: 'That makes sense! Thanks 😊',
  //     time: '10:32 AM',
  //   },
]

export default function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  // Dragging & Resizing state
  const [position, setPosition] = useState(null) // { x, y } in px, or null for default CSS positioning
  const [isDragging, setIsDragging] = useState(false)
  const [dimensions, setDimensions] = useState(null) // { width, height } in px, or null for default
  const [isResizing, setIsResizing] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )
  const dragOffsetRef = useRef({ x: 0, y: 0 })
  const containerRef = useRef(null)
  const resizeRef = useRef({
    startX: 0,
    startY: 0,
    startW: 0,
    startH: 0,
    corner: 'top-left',
    startPosX: 0,
    startPosY: 0,
  })

  const messagesEndRef = useRef(null)
  const menuRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Window resize handler: re-clamp position within bounds or reset on mobile (< 640px)
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return
      const currentWidth = window.innerWidth
      const currentHeight = window.innerHeight
      setWindowWidth(currentWidth)

      if (currentWidth <= 640) {
        // Reset position to null on mobile so CSS responsive rules take full control
        setPosition(null)
      } else if (position && containerRef.current) {
        const width = containerRef.current.offsetWidth || 390
        const height = containerRef.current.offsetHeight || 600

        const maxX = Math.max(10, currentWidth - width - 10)
        const maxY = Math.max(10, currentHeight - height - 10)

        setPosition((prev) => {
          if (!prev) return null
          return {
            x: Math.min(Math.max(10, prev.x), maxX),
            y: Math.min(Math.max(10, prev.y), maxY),
          }
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [position])

  useEffect(() => {
    async function initIndexedDBChat() {
      try {
        const history = await loadChatHistory()
        if (history && history.length > 0) {
          setMessages(history)
        } else {
          await saveAllChatMessages(INITIAL_MESSAGES)
          setMessages(INITIAL_MESSAGES)
        }
      } catch (err) {
        console.error('IndexedDB initialization failed:', err)
      }
    }
    initIndexedDBChat()
  }, [])

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, isTyping])

  // Close options menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Drag handlers (enabled only when screen width > 640px)
  const handlePointerDownHeader = (e) => {
    if (e.target.closest('button') || e.target.closest('.ai-chat-header-actions')) {
      return
    }
    if (typeof window !== 'undefined' && window.innerWidth <= 640) {
      return
    }

    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()

    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }

    if (!position) {
      setPosition({ x: rect.left, y: rect.top })
    }

    setIsDragging(true)
  }

  const handlePointerMoveHeader = (e) => {
    if (!isDragging || (typeof window !== 'undefined' && window.innerWidth <= 640)) return

    const newX = e.clientX - dragOffsetRef.current.x
    const newY = e.clientY - dragOffsetRef.current.y

    const width = containerRef.current ? containerRef.current.offsetWidth : 390
    const height = containerRef.current ? containerRef.current.offsetHeight : 600

    const maxX = Math.max(10, window.innerWidth - width - 10)
    const maxY = Math.max(10, window.innerHeight - height - 10)

    const clampedX = Math.min(Math.max(10, newX), maxX)
    const clampedY = Math.min(Math.max(10, newY), maxY)

    setPosition({ x: clampedX, y: clampedY })
  }

  const handlePointerUpHeader = (e) => {
    if (isDragging) {
      setIsDragging(false)
    }
  }

  // Resize pointer down handler
  const handlePointerDownResize = (e, corner = 'top-left') => {
    e.stopPropagation()
    e.preventDefault()

    if (typeof window !== 'undefined' && window.innerWidth <= 640) return
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: rect.width,
      startH: rect.height,
      corner,
      startPosX: position ? position.x : rect.left,
      startPosY: position ? position.y : rect.top,
    }

    setIsResizing(true)
  }

  // Global pointer listeners for smooth dragging and resizing
  useEffect(() => {
    if (!isResizing && !isDragging) return

    const handleGlobalPointerMove = (e) => {
      if (isResizing) {
        const { startX, startY, startW, startH, corner, startPosX, startPosY } = resizeRef.current
        const dx = e.clientX - startX
        const dy = e.clientY - startY

        const minW = 280
        const maxW = Math.min(900, window.innerWidth - 20)
        const minH = 320
        const maxH = Math.min(900, window.innerHeight - 20)

        let newW = startW
        let newH = startH

        if (corner === 'top-left') {
          // Shrink/Expand from top-left
          newW = Math.min(maxW, Math.max(minW, startW - dx))
          newH = Math.min(maxH, Math.max(minH, startH - dy))

          if (position) {
            const actualDx = startW - newW
            const actualDy = startH - newH
            setPosition({
              x: startPosX + actualDx,
              y: startPosY + actualDy,
            })
          }
        } else if (corner === 'bottom-right') {
          // Shrink/Expand from bottom-right
          newW = Math.min(maxW, Math.max(minW, startW + dx))
          newH = Math.min(maxH, Math.max(minH, startH + dy))
        } else if (corner === 'top-right') {
          newW = Math.min(maxW, Math.max(minW, startW + dx))
          newH = Math.min(maxH, Math.max(minH, startH - dy))
          if (position) {
            const actualDy = startH - newH
            setPosition((prev) => (prev ? { ...prev, y: startPosY + actualDy } : prev))
          }
        }

        setDimensions({ width: newW, height: newH })
      } else if (isDragging) {
        handlePointerMoveHeader(e)
      }
    }

    const handleGlobalPointerUp = (e) => {
      if (isResizing) {
        setIsResizing(false)
      }
      if (isDragging) {
        handlePointerUpHeader(e)
      }
    }

    window.addEventListener('pointermove', handleGlobalPointerMove)
    window.addEventListener('pointerup', handleGlobalPointerUp)
    return () => {
      window.removeEventListener('pointermove', handleGlobalPointerMove)
      window.removeEventListener('pointerup', handleGlobalPointerUp)
    }
  }, [isResizing, isDragging, position])

  const handleResetPosition = () => {
    setPosition(null)
    setDimensions(null)
    setShowMenu(false)
  }

  const getFormattedTime = () => {
    const now = new Date()
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputText).trim()
    if (!query) return

    const nowTimestamp = Date.now()
    const userMsg = {
      id: nowTimestamp,
      sender: 'user',
      text: query,
      time: getFormattedTime(),
      timestamp: nowTimestamp,
    }

    const updatedMessages = [...messages, userMsg]
    setMessages(updatedMessages)
    saveChatMessage(userMsg)

    if (!textToSend) setInputText('')
    setIsTyping(true)

    try {
      const chatApiUrl = process.env.NEXT_PUBLIC_CHAT_API_URL || '/api/chat'
      const response = await fetch(chatApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
          messages: updatedMessages,
        }),
      })

      if (response.status === 404) {
        const botTimestamp = Date.now() + 1
        const botMsg = {
          id: botTimestamp,
          sender: 'bot',
          text: 'The AI Chat API route (/api/chat) is not available. If running static export mode (`output: "export"`), API routes are disabled. Run `npm run dev` with standard Next.js server to use AI Chat.',
          time: getFormattedTime(),
          timestamp: botTimestamp,
        }
        setMessages((prev) => [...prev, botMsg])
        saveChatMessage(botMsg)
        return
      }

      const contentType = response.headers.get('content-type') || ''
      let data = {}
      if (contentType.includes('application/json')) {
        data = await response.json()
      } else {
        throw new Error(`Server returned status ${response.status} (${response.statusText})`)
      }

      let botAnswer = ''
      if (response.ok && data.answer) {
        botAnswer = data.answer
      } else {
        botAnswer = data.error || 'Sorry, I encountered an issue connecting to the documentation search. Please try again.'
      }

      const botTimestamp = Date.now() + 1
      const botMsg = {
        id: botTimestamp,
        sender: 'bot',
        text: botAnswer,
        time: getFormattedTime(),
        timestamp: botTimestamp,
        sources: data.sources || [],
      }

      setMessages((prev) => [...prev, botMsg])
      saveChatMessage(botMsg)
    } catch (err) {
      console.error('Failed to get RAG response:', err)
      const botTimestamp = Date.now() + 1
      const botMsg = {
        id: botTimestamp,
        sender: 'bot',
        text: 'Sorry, I was unable to connect to the server. Please check your connection and try again.',
        time: getFormattedTime(),
        timestamp: botTimestamp,
      }
      setMessages((prev) => [...prev, botMsg])
      saveChatMessage(botMsg)
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleClearChat = async () => {
    const defaultMsg = {
      id: Date.now(),
      sender: 'bot',
      text: "Hello! 👋\nI'm your AI assistant.\nHow can I help you today?",
      time: getFormattedTime(),
      timestamp: Date.now(),
    }
    await clearChatHistoryDB()
    await saveChatMessage(defaultMsg)
    setMessages([defaultMsg])
    setShowMenu(false)
  }

  const handleResetSample = async () => {
    await clearChatHistoryDB()
    await saveAllChatMessages(INITIAL_MESSAGES)
    setMessages(INITIAL_MESSAGES)
    setShowMenu(false)
  }

  return (
    <div className="ai-chat-root">
      {/* Floating Trigger Button (Circular FAB with logo avatar & assistant status dot) */}
      {!isOpen && (
        <button
          type="button"
          className="ai-chat-trigger"
          onClick={() => setIsOpen(true)}
          aria-label="Open Weblings Assist"
          title="Open Weblings Assist"
        >
          <div className="ai-chat-trigger-icon">
            <BotAvatarIcon size={48} />
          </div>
          <span className="ai-chat-trigger-badge" title="Assistant Available" />
        </button>
      )}

      {/* Main Chatbot Modal/Window */}
      {isOpen && (
        <div
          ref={containerRef}
          className={`ai-chat-container ${isDragging ? 'is-dragging' : ''} ${isResizing ? 'is-resizing' : ''
            }`}
          style={{
            ...(position && windowWidth > 640
              ? {
                left: `${position.x}px`,
                top: `${position.y}px`,
                bottom: 'auto',
                right: 'auto',
                transform: 'none',
              }
              : {}),
            ...(dimensions && windowWidth > 640
              ? {
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
              }
              : {}),
          }}
        >
          {/* Resizable Corner Handles (Desktop only > 640px) */}
          {windowWidth > 640 && (
            <>
              <div
                className="ai-chat-resize-corner top-left"
                onPointerDown={(e) => handlePointerDownResize(e, 'top-left')}
                title="Drag to shrink or expand window vertically & horizontally"
              >
                <ResizeHandleIcon />
              </div>

              <div
                className="ai-chat-resize-corner bottom-right"
                onPointerDown={(e) => handlePointerDownResize(e, 'bottom-right')}
                title="Drag to shrink or expand window vertically & horizontally"
              >
                <ResizeHandleIcon />
              </div>
            </>
          )}
          {/* Header - Draggable Area */}
          <div
            className="ai-chat-header draggable-header"
            onPointerDown={handlePointerDownHeader}
            onPointerMove={handlePointerMoveHeader}
            onPointerUp={handlePointerUpHeader}
            title={windowWidth > 640 ? "Click and drag to move chatbot anywhere" : "AI Chatbot Header"}
          >
            <div className="ai-chat-header-info">
              {windowWidth > 640 && (
                <div className="ai-chat-drag-handle">
                  <DragGripIcon />
                </div>
              )}

              <div className="ai-chat-avatar">
                <BotAvatarIcon size={42} />
              </div>
              <div className="ai-chat-title-group">
                <h3 className="ai-chat-title">Weblings Assist</h3>
                <div className="ai-chat-subtitle-row">
                  <span className="ai-chat-subtitle">Always here to help you</span>
                  <span className="ai-chat-status-dot" title="Online" />
                </div>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                type="button"
                className="ai-chat-header-btn close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                title="Close Chat"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="ai-chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`ai-chat-message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="ai-chat-msg-avatar">
                    <BotAvatarIcon size={32} />
                  </div>
                )}

                <div className="ai-chat-msg-content">
                  <div className={`ai-chat-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                    {msg.text.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="ai-chat-sources" style={{ marginTop: '8px', paddingTop: '6px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '11px', opacity: 0.9 }}>
                        <span style={{ fontWeight: 600, display: 'block', marginBottom: '3px' }}>📖 Context Sources:</span>
                        {Array.from(new Set(msg.sources.map(s => s.title))).slice(0, 3).map((title, sIdx) => (
                          <span key={sIdx} className="ai-chat-source-badge" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '2px 6px', borderRadius: '4px', marginRight: '4px', marginTop: '3px' }}>
                            {title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="ai-chat-meta">
                    <span className="ai-chat-time">{msg.time}</span>
                    {msg.sender === 'user' && (
                      <span className="ai-chat-ticks" title="Read">
                        <DoubleCheckIcon />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="ai-chat-message-row bot-row">
                <div className="ai-chat-msg-avatar">
                  <BotAvatarIcon size={32} />
                </div>
                <div className="ai-chat-msg-content">
                  <div className="ai-chat-bubble bot-bubble typing-bubble">
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                    <span className="typing-dot" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Pill Bar */}
          <div className="ai-chat-quick-bar">
            <button
              type="button"
              className="ai-chat-quick-pill prompt-pill"
              onClick={() => handleSendMessage('How do I create an organization?')}
            >
              How do I create an organization?
            </button>
            <button
              type="button"
              className="ai-chat-quick-pill prompt-pill"
              onClick={() => handleSendMessage('How do I create a project?')}
            >
              How do I create a project?
            </button>
          </div>

          {/* Footer Input */}
          <div className="ai-chat-footer">
            <div className="ai-chat-input-wrapper">
              <input
                type="text"
                className="ai-chat-input"
                placeholder="Type your message..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              <button
                type="button"
                className="ai-chat-sparkle-btn"
                onClick={() => handleSendMessage('Suggest documentation topics')}
                title="AI Quick Suggestion"
              >
                <SparklesIcon />
              </button>

              <button
                type="button"
                className="ai-chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                title="Send Message"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
