import { useEffect } from 'react'
import { Footer, Navbar } from '../components/layout.jsx'

export default function AppShell({ children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return <div className="min-h-screen  bg-background"><Navbar /><div>{children}</div><Footer /></div>
}
