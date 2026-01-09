'use client'

import { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import './bubble-menu.css'

interface BubbleMenuItem {
  label: string
  href: string
}

interface BubbleMenuProps {
  items: BubbleMenuItem[]
  logo?: React.ReactNode
  menuBg?: string
  menuContentColor?: string
  useFixedPosition?: boolean
}

export function BubbleMenu({
  items,
  logo,
  menuBg = '#ffffff',
  menuContentColor = '#111111',
  useFixedPosition = true,
}: BubbleMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'back.out',
      })
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: 'back.in',
      })
    }
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      className={`bubble-menu-container ${useFixedPosition ? 'fixed' : 'relative'}`}
      style={{
        position: useFixedPosition ? 'fixed' : 'relative',
        top: useFixedPosition ? 0 : 'auto',
        left: useFixedPosition ? 0 : 'auto',
        right: useFixedPosition ? 0 : 'auto',
        zIndex: 100,
      }}
    >
      {/* Header / Logo Bar */}
      <div className="bubble-menu-header">
        <div className="bubble-menu-logo">{logo}</div>
        <button
          className="bubble-menu-toggle"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="bubble-menu-toggle-inner" style={{ backgroundColor: menuContentColor }} />
        </button>
      </div>

      {/* Bubble Menu */}
      <div
        ref={menuRef}
        className="bubble-menu"
        style={{
          backgroundColor: menuBg,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1)' : 'scale(0.8)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        <nav className="bubble-menu-nav">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bubble-menu-item"
              style={{ color: menuContentColor }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
