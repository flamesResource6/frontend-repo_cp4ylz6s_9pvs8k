import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { to: '/', label: 'בית' },
    { to: '/services', label: 'שירותים' },
    { to: '/how-it-works', label: 'איך זה עובד' },
    { to: '/cases', label: 'סיפורי לקוח' },
    { to: '/about', label: 'אודות' },
    { to: '/blog', label: 'בלוג' },
    { to: '/contact', label: 'צור קשר' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20" />
          <span className="text-white font-semibold tracking-tight">סוכני AI חכמים לעסקים</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-white ${isActive ? 'text-white' : 'text-blue-200/80'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="תפריט">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm rounded-lg px-3 transition hover:bg-white/5 ${isActive ? 'text-white' : 'text-blue-200/80'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
