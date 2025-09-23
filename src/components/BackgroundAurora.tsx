import React, { useEffect, useRef } from 'react'

export default function BackgroundAurora() {
  const refA = useRef<HTMLDivElement>(null)
  const refB = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const t0 = performance.now()
    const loop = () => {
      const t = (performance.now() - t0) / 1000
      const a = refA.current, b = refB.current
      if (a) a.style.transform = `translate3d(${Math.sin(t/6)*10}px, ${Math.cos(t/8)*8}px, 0)`
      if (b) b.style.transform = `translate3d(${Math.cos(t/7)*-14}px, ${Math.sin(t/9)*10}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[60vh] w-[60vw] rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(167,139,250,0.7), transparent 70%)' }}
        ref={refA}
      />
      <div
        className="absolute -bottom-40 -right-40 h-[60vh] w-[60vw] rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(34,211,238,0.7), transparent 70%)' }}
        ref={refB}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-base" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'2\' stitchTiles=\'stitch\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.04\'/></svg>")'
        }}
      />
    </div>
  )
}