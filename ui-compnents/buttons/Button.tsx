import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'
const Button = (props:any) => {
  return (
    <div className={styles.button} style={{background:props.color || "#fff"}}>
    <Link href={""} style={{color:props.textColor}}>{props.text}</Link>
  </div>
  )
}

export default Button