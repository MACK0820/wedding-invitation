import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(styles.visible) })
    }, { threshold: 0.1 })
    items.forEach(i => observer.observe(i))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero} ref={heroRef}>
      <svg className={`${styles.corner} ${styles.cornerTL}`} viewBox="0 0 180 180" fill="none">
        <path d="M10 170 Q40 100 90 80 Q60 50 20 10" stroke="#B8923A" strokeWidth="1.5" fill="none" opacity="0.9"/>
        <path d="M30 160 Q55 110 100 95" stroke="#B8923A" strokeWidth="1" fill="none" opacity="0.6"/>
        <path d="M20 140 Q50 120 80 100" stroke="#B8923A" strokeWidth="0.8" fill="none" opacity="0.4"/>
        <ellipse cx="92" cy="78" rx="9" ry="6" fill="#D4A882" opacity="0.7" transform="rotate(-30 92 78)"/>
        <ellipse cx="108" cy="68" rx="7" ry="5" fill="#D4A882" opacity="0.6" transform="rotate(-50 108 68)"/>
        <ellipse cx="75" cy="90" rx="8" ry="5" fill="#B8784A" opacity="0.5" transform="rotate(-10 75 90)"/>
        <circle cx="90" cy="80" r="3" fill="#B8923A" opacity="0.9"/>
        <ellipse cx="60" cy="128" rx="6" ry="4" fill="#D4A882" opacity="0.4" transform="rotate(20 60 128)"/>
      </svg>

      <svg className={`${styles.corner} ${styles.cornerTR}`} viewBox="0 0 180 180" fill="none">
        <path d="M170 170 Q140 100 90 80 Q120 50 160 10" stroke="#B8923A" strokeWidth="1.5" fill="none" opacity="0.9"/>
        <path d="M150 160 Q125 110 80 95" stroke="#B8923A" strokeWidth="1" fill="none" opacity="0.6"/>
        <ellipse cx="88" cy="78" rx="9" ry="6" fill="#D4A882" opacity="0.7" transform="rotate(30 88 78)"/>
        <ellipse cx="72" cy="68" rx="7" ry="5" fill="#D4A882" opacity="0.6" transform="rotate(50 72 68)"/>
        <circle cx="90" cy="80" r="3" fill="#B8923A" opacity="0.9"/>
      </svg>

      <svg className={`${styles.corner} ${styles.cornerBL}`} viewBox="0 0 180 180" fill="none">
        <path d="M10 10 Q40 80 90 100 Q60 130 20 170" stroke="#B8923A" strokeWidth="1.5" fill="none" opacity="0.9"/>
        <ellipse cx="92" cy="102" rx="9" ry="6" fill="#D4A882" opacity="0.6" transform="rotate(30 92 102)"/>
        <circle cx="90" cy="100" r="3" fill="#B8923A" opacity="0.8"/>
      </svg>

      <svg className={`${styles.corner} ${styles.cornerBR}`} viewBox="0 0 180 180" fill="none">
        <path d="M170 10 Q140 80 90 100 Q120 130 160 170" stroke="#B8923A" strokeWidth="1.5" fill="none" opacity="0.9"/>
        <ellipse cx="88" cy="102" rx="9" ry="6" fill="#D4A882" opacity="0.6" transform="rotate(-30 88 102)"/>
        <circle cx="90" cy="100" r="3" fill="#B8923A" opacity="0.8"/>
      </svg>

      <div className={styles.inner}>
        <p className={styles.together} data-reveal>Together with their families</p>
        <h1 className={styles.names} data-reveal>
          <span className={styles.name}>Sofia</span>
          <span className={styles.ampersand}>&amp;</span>
          <span className={styles.name}>Marco</span>
        </h1>
        <div className={styles.dividerWrap} data-reveal>
          <div className="divider">
            <span />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1 L10.2 6.5 L16 6.5 L11.5 10 L13.2 16 L9 12.5 L4.8 16 L6.5 10 L2 6.5 L7.8 6.5 Z" fill="#B8923A" opacity="0.95"/>
            </svg>
            <span />
          </div>
        </div>
        <p className={styles.request} data-reveal>
          request the honour of your presence<br />
          at their wedding celebration
        </p>
        <div className={styles.date} data-reveal>
          <p className={styles.dateLine}>Saturday, the Fourteenth of June</p>
          <p className={styles.dateYear}>Two Thousand and Twenty-Six</p>
        </div>
        <p className={styles.venue} data-reveal>Shangri-La Mactan, Cebu, Philippines</p>
        <a href="#rsvp" className={styles.cta} data-reveal>Kindly RSVP</a>
      </div>
    </section>
  )
}