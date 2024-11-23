import React from 'react'
import styles from './section.module.css'
import PulsingCircle from '@/ui-compnents/pulsing_circle/PulsingCircle'
function Section2() {
  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.section2}>
        <div className={styles.card}>
        <div className={styles.order}>
          <PulsingCircle  number={1}/>
          <div className={styles.line}></div>
          </div>
          <h6>
          Sample Pre-Registration/ Registration
          </h6>
        </div>
        <div className={styles.card}>
        <div className={styles.order}>
          <PulsingCircle  number={2}/>
          <div className={styles.line}></div>
          </div>
          <h6>
          Result Entry (Manual, Instrument interface)
          </h6>
        </div>
        <div className={styles.card}>
        <div className={styles.order}>
          <PulsingCircle  number={3}/>
          <div className={styles.line}></div>
          </div>
          <h6>
          Approval & Release (HOD, Study Director, CRO)
          </h6>
        </div>
        <div className={styles.card}>
          <PulsingCircle number={4}/>
          <h6>
          Reports
          </h6>
        </div>
      </section>
    </div>
  )
}

export default Section2