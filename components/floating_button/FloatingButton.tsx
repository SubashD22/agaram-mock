'use client'
import React, { useState } from 'react'
import styles from './floating_button.module.css'
import Image from 'next/image'
function FloatingButton() {
  const[buttonState,setButtonState] =useState(false)
  return (
    <>{
        buttonState ? 
    <div className={styles.floating_card}>
        <div className={styles.content}>
        <h6>
        Interested In Our Product Services?
        </h6>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <p>Request A Demo</p>
          </div>
          <div className={styles.button}>
            <p>Email Us</p>
          </div>
          <div className={styles.button}>
            <p>Contact Us</p>
          </div>
          <div className={styles.closeButton} onClick={()=>setButtonState(false)}>Close</div>
        </div>
        </div>
      
    </div> :
           <div className={styles.floating_button} onClick={()=> setButtonState(true)}>
           <Image
           src={'/message-solid.svg'}
           alt='message'
           width={17}
           height={17}
           />
       </div>
    }
     
    </>
   
  )
}

export default FloatingButton