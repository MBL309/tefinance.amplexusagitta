import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const navItems = [
  ['Funciones', '/#features'],
  ['Suscripción', '/#pricing'],
  ['Legal', '/policy'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="relative z-20 mb-8 rounded-b-2xl bg-background">
      <div className="mx-auto flex max-w-300 items-center justify-between px-5 py-5 lg:px-8">
        <Link to="/" onClick={close} className="font-display text-2xl font-bold tracking-[0.08em] text-text-primary focus-visible:outline-2 focus-visible:outline-info">TEFINANCE<span className="text-info">.</span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {navItems.map(([label, href]) => <a key={label} href={href} className="font-sans text-sm font-medium text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-info">{label}</a>)}
          <a href="https://amplexusagitta.com" className="rounded-md bg-secondary px-4 py-2.5 font-sans text-sm font-semibold text-surface transition-colors hover:bg-primary hover:text-text-primary focus-visible:outline-2 focus-visible:outline-info">Amplexusagitta.com</a>
        </nav>
        <button className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border text-text-primary md:hidden" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="border-t border-border bg-surface px-5 py-4 md:hidden" aria-label="Navegación móvil">{navItems.map(([label, href]) => <a key={label} href={href} onClick={close} className="block border-b border-border py-4 font-sans text-sm font-semibold text-text-primary">{label}</a>)}<a href="https://apps.apple.com/do/app/TEFINANCE/id6798481426" onClick={close} className="mt-4 block rounded-md bg-secondary px-4 py-3 text-center font-sans text-sm font-semibold text-surface">Descargar la app</a></nav>}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-primary">
      <div className="mx-auto grid max-w-300 gap-12 pl-2 pr-5 px-5 py-12 md:grid-cols-[1fr_auto] md:items-end lg:pl-2 lg:pr-8">
        <div>
          <div className="text-left px-5">
            <Link to="/" className="font-display text-xl font-bold tracking-[0.08em]">
              TEFINANCE<span className="text-primary">.</span>
            </Link>
          </div>
          <p className="mt-4 max-w-xl font-sans text-sm leading-6 text-surface/70">
            Tu espejo financiero para mirar tus decisiones con más claridad.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-sm text-surface/80">
          <NavLink to="/policy" className="hover:text-primary">Privacy Policy</NavLink>
          <NavLink to="/terms" className="hover:text-primary">Terms & Conditions</NavLink>
          <a href="mailto:amplexus.sagitta@gmail.com" className="hover:text-primary">Contacto</a>
        </div>
        <p className="font-sans text-xs text-surface/50 md:col-span-2">
          © 2026 TEFINANCE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
