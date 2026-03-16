import { useEffect, useRef } from 'react'
import styles from './DressCode.module.css'

const palette = [
  { color: '#FAF0E6', label: 'Ivory' },
  { color: '#E8C4B0', label: 'Blush' },
  { color: '#C9A96E', label: 'Gold' },
  { color: '#D4956A', label: 'Terracotta' },
  { color: '#A07850', label: 'Warm Taupe' },
  { color: '#6B4C30', label: 'Bark' },
]

export default function DressCode() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(styles.visible); obs.unobserve(e.target) }})
    }, { threshold: 0.12 })
    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.text} data-reveal>
          <p className={styles.eyebrow}>Attire</p>
          <h2 className={styles.heading}>Dress Code</h2>
          <div className="divider" style={{ margin: '1rem 0' }}>
            <span />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="2.5" fill="#C9A96E" opacity="0.7"/>
            </svg>
            <span />
          </div>
          <p className={styles.code}>Black Tie Optional</p>
          <p className={styles.desc}>
            We invite our guests to dress in formal or semi-formal attire. 
            To honour the warmth of the Tuscan evening, we kindly suggest 
            embracing tones from our colour palette below — though above all, 
            wear what makes you feel beautiful.
          </p>
          <p className={styles.note}>
            Please avoid white, ivory, and cream tones out of consideration for the bride.
          </p>
        </div>

        <div className={styles.paletteWrap} data-reveal style={{ transitionDelay: '0.2s' }}>
          <p className={styles.paletteLabel}>Suggested Palette</p>
          <div className={styles.swatches}>
            {palette.map(p => (
              <div key={p.color} className={styles.swatch}>
                <div className={styles.swatchColor} style={{ background: p.color }} />
                <span className={styles.swatchName}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
