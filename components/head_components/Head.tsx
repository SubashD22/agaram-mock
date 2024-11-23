import React from 'react'
import styles from './head.module.css'
import Image from 'next/image'
import Button from '@/ui-compnents/buttons/Button'
const Head = () => {
  return (
    <div className={styles.head_wrapper}>
        <main className={styles.head}>
            <div className={styles.textcontents}>
            <Image
            src="/lims-white.png"
            alt='banner image'
            width={153}
            height={65}/>
            <h1>
            A Configurable LIMS for Quality, Research & Healthcare Labs
            </h1>
            <p>
            Manage all your laboratory processes in a paperless compliant environment, 
            from sample receipt to report generation & beyond.
            </p>
            <div className={styles.buttons}>
                <Button text="Request a Demo" color="#18A579" textColor="#fff"/>
                <Button text="Download Brochure" textColor="#000"/>
            </div>
            </div>
            <div>
            <Image
            src='/lims-banner.png'
            alt='lims-banner'
            width={676}
            height={372.05}/>
            </div>
        </main>
    </div>
  )
}

export default Head