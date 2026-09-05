import { ArrowUpRight } from 'lucide-react'

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-300 px-5 lg:px-8 ${className}`}>{children}</div>
}

export function Section({ children, className = '', id }) {
  return <section id={id} className={`py-20 md:py-28 mb-16 md:mb-24  ${className}`}>{children}</section>
}

export function SectionDivider() {
  return <div className="h-16 md:h-24 bg-background" />
}

export function Heading({ eyebrow, children, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-info">{eyebrow}</p>}
      <h2 className="max-w-3xl font-display text-4xl font-bold leading-none text-text-primary md:text-6xl">{children}</h2>
    </div>
  )
}

export function Button({ children, variant = 'primary', href, disabled = false }) {
  const classes = variant === 'primary'
    ? 'bg-primary text-text-primary hover:bg-surface'
    : 'border border-border bg-surface text-text-primary hover:border-secondary hover:bg-secondary hover:text-surface'
  const content = <>{children}<ArrowUpRight aria-hidden="true" size={18} strokeWidth={2.2} /></>
  if (disabled) return <span className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-md bg-border px-5 py-3 font-sans text-sm font-semibold text-text-secondary">{children}</span>
  return <a className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 font-sans text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-info ${classes}`} href={href}>{content}</a>
}

export function Card({ children, className = '' }) {
  return <article className={`rounded-lg border border-border bg-surface p-6 md:p-8 ${className}`}>{children}</article>
}
