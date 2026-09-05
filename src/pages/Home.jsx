import { Check, ChevronRight, Eye, MegaphoneOff, Minus, Share2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import homeImage from '../assets/prom2A.jpeg'
import listasImage from '../assets/prom3.png'
import plansImage from '../assets/promA.jpeg'
import newImage from '../assets/prom5.jpeg'
import dobleImage from '../assets/prom4.png'
import presupuestoImage from '../assets/prom3.png'
import ThreeDCarousel from '../components/3d-carousel/ThreeDCarousel.jsx'
import SEO from '../components/seo.jsx'
import { Button, Container, Section, SectionDivider } from '../components/ui.jsx'

const features = [
  { icon: Eye, number: '01', title: 'Visualizar y editar tus finanzas', description: 'Ingresos, egresos, presupuestos, metas e inversiones en una vista que puedes entender y actualizar.', image: presupuestoImage, alt: 'Pantalla de TEFINANCE con un presupuesto mensual' },
  { icon: Share2, number: '02', title: 'Compartir tus finanzas', description: 'Elige con quién compartir tu información y decide exactamente qué puede ver cada persona.', image: listasImage, alt: 'Pantalla de TEFINANCE con una lista financiera organizada' },
  { icon: Sparkles, number: '03', title: 'Informe financiero IA', description: 'Convierte tus datos en una lectura clara para detectar patrones y tomar mejores decisiones.', image: plansImage, alt: 'Pantalla de planes de TEFINANCE con acceso al informe financiero' },
]

const planFeatures = [
  ['Presupuestos completos', '3', 'Ilimitado'],
  ['Items de presupuestos', 'Ilimitado', 'Ilimitado'],
  ['Metas', '3', 'Ilimitado'],
  ['Listas', '2', 'Ilimitado'],
  ['Fondos de emergencia', '2', 'Ilimitado'],
  ['Tarjetas', '1', 'Ilimitado'],
  ['Préstamos', '1', 'Ilimitado'],
  ['Informe mensual generado con IA', false, true],
  ['Libre de anuncios', false, true],
]

const heroImages = [
  { id: 'home', src: homeImage, alt: 'Pantalla principal de TEFINANCE con resumen de las finanzas', label: 'Tu presupuesto' },
  { id: 'lists', src: listasImage, alt: 'Pantalla de TEFINANCE con una lista financiera organizada', label: 'Tu informe' },
  { id: 'plans', src: plansImage, alt: 'Pantalla de planes de TEFINANCE', label: 'Tu presupuesto compartido' },
  { id: 'doble', src: dobleImage, alt: 'Pantalla de TEFINANCE con una vista doble de las finanzas', label: 'Tu visión completa' },
  { id: 'new', src: newImage, alt: 'Pantalla de TEFINANCE con un nuevo diseño de la app', label: 'Tu nueva experiencia' },
]

function Availability({ value }) {
  if (typeof value === 'string') return <span>{value}</span>
  return value
    ? <span className="inline-flex items-center gap-1.5 text-success"><Check size={16} strokeWidth={2.5} aria-hidden="true" /><span className="sr-only">Incluido</span></span>
    : <span className="inline-flex items-center gap-1.5 text-text-secondary"><Minus size={16} aria-hidden="true" /><span className="sr-only">No incluido</span></span>
}

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const selectedFeature = features[activeFeature]

  return <>
    <SEO title="TEFINANCE — Tu espejo financiero" description="Visualiza, organiza y comparte tus finanzas con claridad desde TEFINANCE, tu espejo financiero." />
    <main>
      <section className=" overflow-hidden  bg-surface rounded-[2.5rem] md:rounded-b-[3.75rem]">
        <Container className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 ">
          <div className="max-w-xl text-left space-y-4">
            <p className="inline-block py-1 font-sans text-[41px] font-bold leading-[1.2] tracking-[0.04em] text-primary md:text-[48px]">
              TU ESPEJO FINANCIERO
            </p>
            
            <p className="font-sans text-[20px] font-bold leading-[1.9] text-text-primary md:text-[24px]">
              Tefinance <span className="text-info">.</span>
            </p>
            
            <p className="max-w-lg font-sans text-lg leading-8 text-text-secondary md:text-xl">
              Una imagen completa de tu dinero para observar, organizar y compartir lo que importa.
            </p>
            
            <div className="pt-2 flex flex-col justify-start gap-3 sm:flex-row">
              <Button href="https://apps.apple.com/do/app/TEFINANCE/id6798481426" target="_blank" rel="noopener noreferrer">Descargar en iOS</Button>
              <Button href="#features" variant="secondary">Conocer la app</Button>
            </div>
            
            <p className="font-sans text-xs text-text-secondary">
              Google Play: próximamente
            </p>
          </div>
          <div className="relative flex w-full justify-center lg:justify-center ">
            <ThreeDCarousel images={heroImages} />
          </div>
        </Container>
      </section>
      <SectionDivider />
      


      <Section id="features" className="isolate relative overflow-hidden border-y border-border/10 bg-surface bg-[radial-gradient(circle_at_12%_18%,rgb(33_127_222/0.08),transparent_28%),linear-gradient(115deg,rgb(255_255_255/0.42),transparent_52%)] py-20 md:py-28">
        <Container className="relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20">

            {/* =========================================
                COLUMNA IZQUIERDA — INTRODUCCIÓN
            ========================================== */}
            <aside className="lg:sticky lg:top-20">
              <div className="mb-8 border-l-2 border-info pl-5 md:pl-6">
                <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-info"> Funciones</p>
                <h2 className="max-w-xs font-display text-3xl font-bold leading-[1.08] tracking-tight text-text-primary md:text-4xl">
                  Todo lo que necesitas para{' '}
                  <span className="text-secondary">
                    Visualizar tu dinero.
                  </span>
                </h2>
                <p className="mt-4 max-w-sm font-sans text-sm leading-7 text-text-secondary">
                  Herramientas simples para organizar tus finanzas,
                  establecer objetivos y tomar mejores decisiones.
                </p>
              </div>
            </aside>

            {/* =========================================
                LISTA DE FUNCIONES
            ========================================== */}
            <div className="overflow-hidden rounded-lg border border-border/60 bg-background/35 shadow-[0_18px_45px_rgb(26_29_26/0.06)] divide-y divide-border/60"
              role="list"
              aria-label="Funciones de TEFINANCE"
            >
              {features.map(
                ({ icon: Icon, number, title, description }, index) => {
                  const isActive = index === activeFeature;

                  return (
                    <button
                      key={title}
                      type="button"
                      role="listitem"
                      aria-pressed={isActive}
                      onClick={() => setActiveFeature(index)}
                      className={`
                        group relative w-full
                        px-2 py-6 text-left
                        transition-colors duration-300
                        md:px-4 md:py-8
                        hover:bg-background/45
                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-info
                      `}
                    >
                      {/* Indicador lateral */}
                      <span
                        className={`
                          absolute left-0 top-0
                          h-full w-0.5
                          transition-all duration-300
                          ${
                            isActive
                              ? 'bg-info'
                              : 'bg-transparent group-hover:bg-border'
                          }
                        `}
                      />

                      <div className="flex items-start gap-4 md:gap-6">

                        {/* Número */}
                        <span
                          className={`
                            mt-1 w-7 shrink-0
                            font-sans text-3xl
                            font-bold tracking-[0.15em]
                            transition-colors duration-300
                            ${
                              isActive
                                ? 'text-pretty-primary'
                                : 'text-text-secondary/40'
                            }
                          `}
                        >
                          {number}
                        </span>

                        {/* Icono */}
                        <span
                          className={`
                            flex h-11 w-11 shrink-0
                            items-center justify-center
                            rounded-xl
                            transition-all duration-300
                            ${
                              isActive
                                ? 'bg-primary text-surface shadow-[0_6px_16px_rgb(48_49_48/0.16)]'
                                : 'bg-primary/10 text-text-secondary group-hover:bg-primary/20'
                            }
                          `}
                        >
                          <Icon size={20} aria-hidden="true" />
                        </span>

                        {/* Contenido */}
                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between gap-4">
                            <h3
                              className={`
                                font-display text-lg
                                font-semibold tracking-tight
                                transition-colors duration-300
                                md:text-xl
                                ${
                                  isActive
                                    ? 'text-text-primary'
                                    : 'text-text-secondary group-hover:text-text-primary'
                                }
                              `}
                            >
                              {title}
                            </h3>
                          </div>

                          {/* Descripción */}
                          <div
                            className={`
                              grid transition-all duration-300
                              ${
                                isActive
                                  ? 'grid-rows-[1fr] opacity-100'
                                  : 'grid-rows-[0fr] opacity-0'
                              }
                            `}
                          >
                            <div className="overflow-hidden">
                              <p className="max-w-2xl pt-3 pr-6 font-sans text-sm leading-6 text-text-secondary md:text-base md:leading-7">
                                {description}
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </Container>
      </Section>


      <Section id="pricing" className="border-y border-border bg-surface py-8 md:py-12">
        <Container>
          {/* Header */}
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="space-y-1">
              <p className="font-sans text-2xl font-bold uppercase tracking-[0.16em] text-info">
                Suscripción
              </p>
              <h2 className="max-w-xl font-display text-2xl font-bold tracking-tight text-text-primary md:text-4xl">
                Elige cuánto quieres ver.
              </h2>
            </div>
            <p className="max-w-xs font-sans text-xs text-text-secondary leading-relaxed">
              Empieza con lo esencial o desbloquea una visión ilimitada de tus finanzas.
            </p>
          </div>

          {/* Table Wrapper */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
            <table className="w-full min-w-100 border-collapse" aria-label="Comparación de planes Free y Pro">
              <caption className="sr-only">Funcionalidades incluidas en los planes Free y Pro</caption>
              
              <colgroup>
                <col className="w-1/2" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>

              <thead>
                <tr className="border-b border-border bg-secondary/5">
                  <th scope="col" className="p-3 px-4 text-left font-sans text-[10px] font-semibold uppercase tracking-wider text-text-secondary">
                    Funcionalidad
                  </th>
                  <th scope="col" className="p-3 text-center">
                    <span className="block font-sans text-xs font-bold text-text-primary">Free</span>
                    <span className="mt-0.5 block font-sans text-lg font-extrabold text-text-primary">$0</span>
                  </th>
                  <th scope="col" className="relative p-3 text-center bg-primary/5 border-l border-primary/20">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b bg-primary px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                      Recomendado
                    </span>
                    <span className="block font-sans text-xs font-bold text-primary">Pro</span>
                    <span className="mt-0.5 block font-sans text-lg font-extrabold text-text-primary">$8.99<span className="text-[10px] font-normal text-text-secondary">/mes</span></span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {planFeatures.map(([label, free, pro]) => (
                  <tr key={label} className="transition-colors hover:bg-surface/50">
                    <th scope="row" className="px-4 py-2.5 text-left font-sans text-xs font-medium text-text-primary">
                      {label}
                    </th>
                    <td className="px-3 py-2.5 text-center font-sans text-xs text-text-secondary">
                      <div className="flex justify-center"><Availability value={free} /></div>
                    </td>
                    <td className="border-l border-primary/20 bg-primary/5 px-3 py-2.5 text-center font-sans text-xs font-semibold text-text-primary">
                      <div className="flex justify-center"><Availability value={pro} /></div>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr className="border-t border-border bg-secondary/5">
                  <td className="px-4 py-3 font-sans text-[11px] text-text-secondary">
                    Cambia o cancela tu plan en cualquier momento.
                  </td>
                  <td className="px-2 py-3 text-center">
                    <button className="w-full max-w-24 rounded-md border border-border px-2 py-1 font-sans text-[11px] font-semibold text-text-primary hover:bg-surface transition-colors">
                      Plan actual
                    </button>
                  </td>
                  <td className="border-l border-primary/20 bg-primary/5 px-2 py-3 text-center">
                    <a 
                      href="mailto:amplexus.sagitta@gmail.com?subject=Actualizar%20a%20Pro" 
                      className="inline-block w-full max-w-28 rounded-md bg-primary px-3 py-1 text-center font-sans text-[11px] font-bold text-white shadow-sm transition-all hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info"
                    >
                      Obtener Pro
                    </a>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Footer Info */}
          <div className="mt-4 flex items-center justify-between font-sans text-[11px] text-text-secondary">
            <p className="flex items-center gap-1.5">
              <MegaphoneOff size={14} className="text-info" aria-hidden="true" />
              Cuando cancelas tu plan Pro, mantienes los datos que has generado.
            </p>
          </div>
        </Container>
      </Section>


      <section id="download" className="bg-primary py-20 md:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-text-primary/60">Empieza a mirar distinto</p>
              <p className=" font-display text-2xl font-bold leading-[0.95] text-shadow-text-primary md:text-2xl">Tu dinero merece una imagen completa.</p>
            </div>
            <Button href="mailto:amplexus.sagitta@gmail.com" variant="secondary">Quiero conocerla</Button>
          </div>
        </Container>
      </section>
    </main>
  </>
}