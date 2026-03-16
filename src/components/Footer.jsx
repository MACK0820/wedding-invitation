import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <svg className={styles.floral} viewBox="0 0 320 60" fill="none">
        <path d="M30 50 Q80 20 160 30 Q240 40 290 10" stroke="#B8923A" strokeWidth="1" fill="none" opacity="0.7"/>
        <path d="M50 55 Q100 30 160 38 Q220 46 270 20" stroke="#B8923A" strokeWidth="0.7" fill="none" opacity="0.45"/>
        <ellipse cx="80" cy="32" rx="7" ry="5" fill="#D4A882" opacity="0.55" transform="rotate(-20 80 32)"/>
        <ellipse cx="160" cy="30" rx="8" ry="5" fill="#D4A882" opacity="0.5" transform="rotate(10 160 30)"/>
        <ellipse cx="240" cy="28" rx="6" ry="4" fill="#B8784A" opacity="0.45" transform="rotate(-15 240 28)"/>
        <circle cx="80" cy="32" r="2" fill="#B8923A" opacity="0.7"/>
        <circle cx="160" cy="30" r="2.5" fill="#B8923A" opacity="0.8"/>
        <circle cx="240" cy="28" r="2" fill="#B8923A" opacity="0.7"/>
      </svg>
      <div className={styles.names}>Sofia &amp; Marco</div>
      <p className={styles.date}>14 · 06 · 2026</p>
      <p className={styles.place}>Shangri-La Mactan · Cebu, Philippines</p>
      <div className="divider" style={{ margin: '1.5rem auto', maxWidth: '180px' }}>
        <span style={{ background: 'rgba(212,176,106,0.3)' }} />
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="2" fill="#B8923A" opacity="0.7"/>
        </svg>
        <span style={{ background: 'rgba(212,176,106,0.3)' }} />
      </div>
      <p className={styles.fine}>
        For enquiries, please contact{' '}
        <a href="mailto:wedding@sofiaandmarco.com" className={styles.link}>
          wedding@sofiaandmarco.com
        </a>
      </p>
    </footer>
  )
}