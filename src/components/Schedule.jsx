import { useEffect, useRef } from 'react'
import styles from './Schedule.module.css'

const events = [
  { time: '3:30 pm', label: 'Guest Arrival & Seating' },
  { time: '4:00 pm', label: 'Wedding Ceremony' },
  { time: '4:45 pm', label: 'Blessing & Ring Exchange' },
  { time: '5:00 pm', label: 'Newlyweds\' Portrait Session' },
  { time: '5:30 pm', label: 'Cocktail Hour & Live Music' },
  { time: '7:00 pm', label: 'Reception Dinner Opens' },
  { time: '8:30 pm', label: 'First Dance & Toasts' },
  { time: '9:00 pm', label: 'Dancing & Celebration' },
  { time: '12:00 am', label: 'Farewell & Cake Send-Off' },
]

export default function Schedule() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = el.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(styles.visible); obs.unobserve(e.target) }})
    }, { threshold: 0.1 })
    items.forEach(i => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.headingWrap} data-reveal>
        <p className={styles.eyebrow}>Day of</p>
        <h2 className={styles.heading}>Schedule of Events</h2>
        <div className="divider" style={{ margin: '1rem auto' }}>
          <span />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2.5" fill="#C9A96E" opacity="0.7"/>
          </svg>
          <span />
        </div>
      </div>

      <ul className={styles.list}>
        {events.map((ev, i) => (
          <li
            key={ev.time}
            className={styles.item}
            data-reveal
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className={styles.time}>{ev.time}</span>
            <span className={styles.dot} />
            <span className={styles.label}>{ev.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
