import React, { useContext } from 'react'
import styles from './Button.module.css'
import { ModalContext } from './ModalWrapper'

const Button = ({ text, tipo, click, openModal }) => {

    const context = useContext(ModalContext);

    if (tipo === 'submit') {
        return <button className={styles.Button} onClick={click} type={tipo ? tipo : "text"}><span>{text}</span></button>
    }


    return <button className={styles.Button} onClick={openModal ? context.openModal : null} type={tipo ? tipo : "text"}><span>{text}</span></button>



}





export default Button