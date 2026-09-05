import { BrowserRouter, Route, Routes } from 'react-router'
import AppShell from './layouts/AppShell.jsx'
import Home from './pages/Home.jsx'
import Policy from './pages/Policy.jsx'
import Terms from './pages/Terms.jsx'

function NotFound() {
  return <main className="mx-auto flex min-h-[60vh] max-w-300 flex-col justify-center px-5 py-16 lg:px-8"><p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-info">404</p><h1 className="font-display text-5xl font-bold leading-none text-text-primary">Página no encontrada.</h1><a className="mt-8 w-fit border-b-2 border-primary pb-1 font-sans font-semibold text-text-primary" href="/">Volver al inicio</a></main>
}

export default function App() {
  return <BrowserRouter><AppShell><Routes><Route path="/" element={<Home />} /><Route path="/policy" element={<Policy />} /><Route path="/terms" element={<Terms />} /><Route path="*" element={<NotFound />} /></Routes></AppShell></BrowserRouter>
}
