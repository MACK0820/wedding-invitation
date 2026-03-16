import { useEffect, useRef, useState } from 'react'
import styles from './RSVP.module.css'

export default function RSVP() {
  const ref = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', attending: '', guests: '1', dietary: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="rsvp" ref={ref}>
      <div className={styles.headingWrap} data-reveal>
        <p className={styles.eyebrow}>Kindly Reply By May 1st</p>
        <h2 className={styles.heading}>RSVP</h2>
        <div className="divider" style={{ margin: '1rem auto' }}>
          <span />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1L8.1 5.1L12.3 5.1L9 7.6L10.3 11.8L7 9.3L3.7 11.8L5 7.6L1.7 5.1L5.9 5.1Z" fill="#C9A96E" opacity="0.6"/>
          </svg>
          <span />
        </div>
        <p className={styles.sub}>We would be honoured to celebrate with you</p>
      </div>

      {submitted ? (
        <div className={styles.thanks} data-reveal>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="20" stroke="#C9A96E" strokeWidth="1"/>
            <path d="M14 24 L21 31 L34 18" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3 className={styles.thanksHeading}>Thank you, {form.name}!</h3>
          <p className={styles.thanksMsg}>
            {form.attending === 'yes'
              ? "We're delighted you'll be joining us. We can't wait to celebrate with you!"
              : "We'll miss you dearly and will be thinking of you on our special day."}
          </p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} data-reveal style={{ transitionDelay: '0.15s' }}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Full Name</label>
              <input
                className={styles.input}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Email Address</label>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Will you attend?</label>
              <select
                className={styles.input}
                name="attending"
                value={form.attending}
                onChange={handleChange}
                required
              >
                <option value="">Please select…</option>
                <option value="yes">Joyfully accepts</option>
                <option value="no">Regretfully declines</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Number of Guests</label>
              <select
                className={styles.input}
                name="guests"
                value={form.guests}
                onChange={handleChange}
              >
                {[1,2,3,4].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Dietary Requirements</label>
            <input
              className={styles.input}
              type="text"
              name="dietary"
              value={form.dietary}
              onChange={handleChange}
              placeholder="Vegetarian, vegan, allergies, etc."
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>A Note for the Couple <span className={styles.optional}>(optional)</span></label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Share your wishes…"
              rows={4}
            />
          </div>

          <button className={styles.btn} type="submit">
            Send My RSVP
          </button>
        </form>
      )}
    </section>
  )
}
