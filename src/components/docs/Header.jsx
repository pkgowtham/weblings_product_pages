'use client';

import React from 'react'
import Link from 'next/link'
import weblingslogolight from '../../assets/docs/icon_dark.svg'
import weblingslogodark from '../../assets/docs/icon_light.svg'

function SearchIcon() {
  return (
    <svg
      className="search-icon-svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MenuIcon({ isOpen }) {
  return isOpen ? (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ) : (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export default function Header({
  searchQuery,
  setSearchQuery,
  theme,
  onToggleTheme,
  isSidebarOpen,
  onToggleSidebar,
}) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? theme : 'light'
  const logoAsset = currentTheme === 'dark' ? weblingslogolight : weblingslogodark
  const logoSrc = typeof logoAsset === 'string' ? logoAsset : logoAsset?.src || ''

  return (
    <header className="app-header">
      <div className="header-left">
        <button
          type="button"
          className="hamburger-btn"
          onClick={onToggleSidebar}
          aria-label={isSidebarOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          title={isSidebarOpen ? 'Close Menu' : 'Open Menu'}
        >
          <MenuIcon isOpen={Boolean(isSidebarOpen)} />
        </button>

        <a href="/" className="brand-logo">
          <img src={logoSrc} alt="Weblings Logo" style={{ height: '48px', width: 'auto', display: 'block' }} />
        </a>
      </div>

      <div className="header-right">
        <div className="search-box">
          <span className="search-icon">
            <SearchIcon />
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="Search documentation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <button
          className="theme-toggle-btn"
          onClick={onToggleTheme}
          title={`Switch to ${currentTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle Theme"
        >
          {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}
