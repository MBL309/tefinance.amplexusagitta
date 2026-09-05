import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const spring = { type: 'spring', stiffness: 320, damping: 32, mass: 0.75 }

function getRelativePosition(index, activeIndex, length) {
  const distance = index - activeIndex
  if (distance > length / 2) return distance - length
  if (distance < -length / 2) return distance + length
  return distance
}

function getSlideStyle(position, reducedMotion, horizontalOffset) {
  const distance = Math.min(Math.abs(position), 2)

  if (reducedMotion) {
    return {
      x: position === 0 ? 0 : position * horizontalOffset * 0.45,
      scale: position === 0 ? 1 : 0.8,
      opacity: position === 0 ? 1 : 0.3,
      rotateY: 0,
      z: 0,
      zIndex: 3 - distance,
    }
  }

  return {
    x: position === 0 ? 0 : position * horizontalOffset,
    scale: 1 - distance * 0.11,
    opacity:
      position === 0
        ? 1
        : 0.58 - (distance - 1) * 0.18,
    rotateY:
      position === 0
        ? 0
        : position > 0
          ? -16
          : 16,
    z: -distance * 92,
    zIndex: position === 0 ? 3 : 3 - distance,
  }
}

export default function ThreeDCarousel({
  images,
  autoPlay = true,
  interval = 3000,
  title = 'Galería de pantallas de TEFINANCE',
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth)
  const isVisible = useRef(true)
  const interactionTimeout = useRef()
  const reducedMotion = useReducedMotion()
  const count = images.length
  const horizontalOffset = viewportWidth < 640 ? 64 : viewportWidth < 1024 ? 88 : 112

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      isVisible.current = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  useEffect(() => {
    if (!autoPlay || count < 2 || isInteracting || isHovered) return undefined
    const timer = window.setInterval(() => {
      if (isVisible.current) setActiveIndex((index) => (index + 1) % count)
    }, interval)
    return () => window.clearInterval(timer)
  }, [autoPlay, count, interval, isHovered, isInteracting, reducedMotion])

  useEffect(() => () => window.clearTimeout(interactionTimeout.current), [])

  if (!count) return null

  const goTo = (index) => setActiveIndex((index + count) % count)
  const goPrevious = () => goTo(activeIndex - 1)
  const goNext = () => goTo(activeIndex + 1)
  const pauseAfterInteraction = () => {
    window.clearTimeout(interactionTimeout.current)
    setIsInteracting(true)
    interactionTimeout.current = window.setTimeout(() => setIsInteracting(false), 650)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      pauseAfterInteraction()
      goPrevious()
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      pauseAfterInteraction()
      goNext()
    }
    if (event.key === 'Home') {
      event.preventDefault()
      pauseAfterInteraction()
      goTo(0)
    }
    if (event.key === 'End') {
      event.preventDefault()
      pauseAfterInteraction()
      goTo(count - 1)
    }
  }

  return (
    <section
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-transparent
      "
      aria-label={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >

      {/* VIEWPORT */}
      <div
        className="
          relative
          mx-auto
          mt-7
          h-105
          w-full
          overflow-visible
        "
      >
        <div className="absolute inset-0 perspective-distant">
          <div className="absolute inset-0 transform-3d">
            {images.map((image, index) => {
              const position = getRelativePosition(
                index,
                activeIndex,
                count
              )

              const isActive = position === 0
              const isVisibleSlide = Math.abs(position) <= 2

              const style = isVisibleSlide
                ? getSlideStyle(
                    position,
                    reducedMotion,
                    horizontalOffset
                  )
                : {
                    ...getSlideStyle(
                      position,
                      reducedMotion,
                      horizontalOffset
                    ),
                    opacity: 0,
                    zIndex: 0,
                  }

              return (
                <motion.button
                  key={image.id}
                  type="button"
                  className="absolute left-1/2 top-1/2 w-45 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.65rem] border border-secondary/40 bg-secondary p-1.5 text-left shadow-[0_22px_48px_rgba(26_29_26_0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-info sm:w-55"
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center',
                    pointerEvents: isVisibleSlide ? 'auto' : 'none',
                  }}
                  animate={style}
                  transition={reducedMotion ? { duration: 0.12 } : spring}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.14}
                  whileDrag={{ scale: 0.96, rotateY: 0 }}
                  onDragStart={() => setIsInteracting(true)}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -72) goNext()
                    if (info.offset.x > 72) goPrevious()
                    pauseAfterInteraction()
                  }}
                  onClick={() => {
                    pauseAfterInteraction()
                    goTo(index)
                  }}
                  aria-label={`${image.alt}${isActive ? ', imagen activa' : ', seleccionar imagen'}`}
                  aria-current={isActive ? 'true' : undefined}
                  tabIndex={isVisibleSlide ? 0 : -1}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    draggable="false"
                    className="block aspect-3/5 w-full rounded-[1.25rem] object-cover"
                  />
                </motion.button>
              )
            })}
          </div>
        </div>
        
      </div>

      {/* INDICADORES */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => {
              pauseAfterInteraction()
              goTo(index)
            }}
            className={`
              h-2
              rounded-full
              transition-all
              duration-200
              ${
                index === activeIndex
                  ? 'w-8 bg-info'
                  : 'w-2 bg-border'
              }
            `}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* LABEL */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={images[activeIndex].id}
          className="mt-2 text-center font-sans text-xs text-text-secondary"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{
            duration: reducedMotion ? 0 : 0.2,
          }}
        >
          {images[activeIndex].label ||
            `Pantalla ${activeIndex + 1}`}
        </motion.p>
      </AnimatePresence>
    </section>
  )
}
