import React from 'react'
import styles from './section1.module.css'
import Image from 'next/image'
function Section1() {
  return (
    <section className={styles.sectionWrapper}>
        <div className={styles.section1}>
        <div className={styles.text_content}>
           <h2>
           The only LIMS solution designed to be Industry Agnostic 
           </h2>
           <p>
           Qualis LIMS provides integrated out-of-the-box modules that can be used by any QC, Research, Healthcare or Commercial lab. It provides a structured method to document laboratory investigations & results while adhering to various regulatory compliance requirements. 
           </p>
        </div>
        <div className={styles.section_flex}>
          <div className={styles.card_container}>
            <div className={styles.card}>
              <h5>Register & Test any kind of Sample </h5>
              <p> E.g. - Raw materials, Finished products, Patient Samples, Project samples etc </p>
            </div>
            <div className={styles.card}>
              <h5>Register & Test any kind of Sample </h5>
              <p> E.g. - Raw materials, Finished products, Patient Samples, Project samples etc </p>
            </div>
            <div className={styles.card}>
              <h5>Register & Test any kind of Sample </h5>
              <p> E.g. - Raw materials, Finished products, Patient Samples, Project samples etc </p>
            </div>
          </div>
          <div className={styles.image_content}>
            <Image
            className={styles.img}
            src='/sample-registration.webp'
            alt='sample-registration'
            width={746}
            height={421}/>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Section1