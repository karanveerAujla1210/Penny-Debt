import * as React from "react"

// Utility to create unique gradient IDs per component instance
function useGradientId(prefix = "g") {
  const idRef = React.useRef()
  if (!idRef.current) {
    idRef.current = `${prefix}-${Math.random().toString(36).slice(2, 9)}`
  }
  return idRef.current
}

export const ShieldGradient = ({ className = "", size = 20, title = "shield icon" }) => {
  const gid = useGradientId('shield')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 2l7 3v5c0 5-3.6 9.7-7 12-3.4-2.3-7-7-7-12V5l7-3z" fill={`url(#${gid})`} />
    </svg>
  )
}

export const PhoneGradient = ({ className = "", size = 20 }) => {
  const gid = useGradientId('phone')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFD166" />
          <stop offset="100%" stopColor="#EF476F" />
        </linearGradient>
      </defs>
      <path d="M21 16.5a3.5 3.5 0 0 1-3.5 3.5h-1A16 16 0 0 1 3 6.5v-1A3.5 3.5 0 0 1 6.5 2h1A1 1 0 0 1 8.5 3.1L9.8 6a1 1 0 0 1-.2 1.1l-1.2 1.2a12 12 0 0 0 5.6 5.6l1.2-1.2a1 1 0 0 1 1.1-.2l2.9 1.3a1 1 0 0 1 1.1 1.1v1z" fill={`url(#${gid})`} />
    </svg>
  )
}

export const WalletGradient = ({ className = "", size = 20 }) => {
  const gid = useGradientId('wallet')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="20" height="12" rx="2" fill={`url(#${gid})`} />
      <circle cx="18" cy="12" r="1.8" fill="#fff" opacity="0.9" />
    </svg>
  )
}

export const ScaleGradient = ({ className = "", size = 20 }) => {
  const gid = useGradientId('scale')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <path d="M12 3v2m0 0a6 6 0 0 0-6 6v1m12-7v2m0 0a6 6 0 0 1 6 6v1" stroke={`url(#${gid})`} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 16h10" stroke={`url(#${gid})`} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export const PeopleGradient = ({ className = "", size = 20 }) => {
  const gid = useGradientId('people')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      <path d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM6 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill={`url(#${gid})`} />
      <path d="M2 20c0-3 3-5 6-5s6 2 6 5" fill={`url(#${gid})`} opacity="0.95" />
    </svg>
  )
}

const icons = {
  shield: ShieldGradient,
  phone: PhoneGradient,
  wallet: WalletGradient,
  scale: ScaleGradient,
  people: PeopleGradient,
}

export const Icon = ({ name = 'shield', size = 20, className = '' }) => {
  const Comp = icons[name] || ShieldGradient
  return <Comp size={size} className={className} />
}

export default Icon

// Additional icons: Sun & Moon for theme toggle
export const SunGradient = ({ className = "", size = 20 }) => {
  const gid = useGradientId('sun')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#FDBA74" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="4" fill={`url(#${gid})`} />
      <g stroke={`url(#${gid})`} strokeWidth="1.2" strokeLinecap="round">
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      </g>
    </svg>
  )
}

export const MoonGradient = ({ className = "", size = 20 }) => {
  const gid = useGradientId('moon')
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 0021 12.79z" fill={`url(#${gid})`} />
    </svg>
  )
}

// register sun/moon
icons.sun = SunGradient
icons.moon = MoonGradient
