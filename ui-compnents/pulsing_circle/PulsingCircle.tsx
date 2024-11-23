import React from 'react'
import styles from './pulsing_circle.module.css'
function PulsingCircle(props:any) {
  return (
     <div className={styles.container}>
       <div className={styles.item}>
        <p>{props.number}</p>
       </div>
       <div className={styles.circle} style={{animationDelay:"0s"}}></div>
       <div className={styles.circle} style={{animationDelay:"1s"}}></div>
       <div className={styles.circle} style={{animationDelay:"2s"}}></div>
     </div>
  )
}

export default PulsingCircle