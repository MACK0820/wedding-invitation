import { useEffect, useRef } from 'react'
import styles from './Story.module.css'

const milestones = [
  { year: '2018', title: 'First Meeting', desc: 'A chance encounter at a mutual friend\'s gallery opening in Florence set everything in motion.' },
  { year: '2020', title: 'First Adventure', desc: 'A spontaneous road trip through the Amalfi Coast became the story we\'ve told at every dinner table since.' },
  { year: '2022', title: 'He Asked', desc: 'Under the stars in Positano, with the sea below and a lifetime ahead, Marco asked the only question that mattered.' },
  { year: '2025', title: 'We Do', desc: 'Surrounded by those we love most, in the hills of Tuscany — we begin the next chapter together.' },
]

export default function Story() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add(styles.visible); obs.unobserve(e.target) }
      })
    }, { threshold: 0.12 })
    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.headingWrap} data-reveal>
        <p className={styles.eyebrow}>Our Story</p>
        <h2 className={styles.heading}>How We Got Here</h2>
        <div className="divider" style={{ margin: '1rem auto' }}>
          <span />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.1 5.1L12.3 5.1L9 7.6L10.3 11.8L7 9.3L3.7 11.8L5 7.6L1.7 5.1L5.9 5.1Z" fill="#C9A96E" opacity="0.6"/>
          </svg>
          <span />
        </div>
      </div>

      <div className={styles.timeline}>
        {milestones.map((m, i) => (
          <div
            key={m.year}
            className={`${styles.milestone} ${i % 2 === 0 ? styles.left : styles.right}`}
            data-reveal
            style={{ transitionDelay: `${i * 0.18}s` }}
          >
            <div className={styles.content}>
              <span className={styles.year}>{m.year}</span>
              <h3 className={styles.title}>{m.title}</h3>
              <p className={styles.desc}>{m.desc}</p>
            </div>
            <div className={styles.dot} />
          </div>
        ))}
        <div className={styles.line} />
      </div>
    </section>
  )
}
