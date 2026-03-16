import { useEffect, useRef } from 'react'
import styles from './Details.module.css'

const details = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#B8923A" strokeWidth="1.2"/>
        <path d="M20 10 V20 L26 26" stroke="#B8923A" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Ceremony',
    line1: '4:00 in the afternoon',
    line2: 'Beachfront Chapel, Mactan Island',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 6 L22.5 14 L31 14 L24.5 19 L27 27 L20 22 L13 27 L15.5 19 L9 14 L17.5 14 Z" stroke="#B8923A" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
    label: 'Cocktails',
    line1: '5:30 in the evening',
    line2: 'CHI, The Spa Garden Terrace',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M10 28 Q15 12 20 10 Q25 12 30 28" stroke="#B8923A" strokeWidth="1.2" fill="none"/>
        <line x1="10" y1="28" x2="30" y2="28" stroke="#B8923A" strokeWidth="1.2"/>
        <line x1="15" y1="28" x2="14" y2="34" stroke="#B8923A" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="25" y1="28" x2="26" y2="34" stroke="#B8923A" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="12" y1="34" x2="28" y2="34" stroke="#B8923A" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Reception Dinner',
    line1: '7:00 in the evening',
    line2: 'Lantaw Floating Restaurant, Cebu',
  },
]

export default function Details() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(styles.visible); obs.unobserve(e.target) }})
    }, { threshold: 0.15 })
    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.headingWrap} data-reveal>
        <p className={styles.eyebrow}>The Celebration</p>
        <h2 className={styles.heading}>Ceremony &amp; Reception</h2>
        <div className="divider" style={{ margin: '1rem auto' }}>
          <span />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2.5" fill="#B8923A" opacity="0.9"/>
          </svg>
          <span />
        </div>
        <p className={styles.subheading}>Mactan Island · Cebu, Philippines</p>
      </div>

      <div className={styles.cards}>
        {details.map((d, i) => (
          <div key={d.label} className={styles.card} data-reveal style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className={styles.icon}>{d.icon}</div>
            <p className={styles.cardLabel}>{d.label}</p>
            <p className={styles.cardLine}>{d.line1}</p>
            <p className={styles.cardVenue}>{d.line2}</p>
          </div>
        ))}
      </div>

      <div className={styles.mapNote} data-reveal>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1 C5.2 1 3 3.3 3 6.2 C3 10 8 15 8 15 S13 10 13 6.2 C13 3.3 10.8 1 8 1Z" stroke="#B8923A" strokeWidth="1.2" fill="none"/>
          <circle cx="8" cy="6.2" r="1.5" fill="#B8923A" opacity="0.8"/>
        </svg>
        <span>Shangri-La Mactan Resort & Spa · Punta Engaño Rd, Lapu-Lapu City, Cebu</span>
      </div>
    </section>
  )
}