import React from 'react'
import styles from './Button.module.css'

const Button = ({text}) => (
    <div className={styles.Button}><span>{text}</span></div>
)

export default Button