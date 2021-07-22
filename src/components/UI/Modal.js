import React, {useRef, useState, useEffect} from 'react'
import styles from './Modal.module.css'
import Button from './Button'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import close from '../../assets/img/close_black.svg'
import {send} from 'emailjs-com'
import Spinner from './Spinner'
import Success from '../../assets/img/success.svg'

const Modal = ({ opened, openModal }) => {

    const [showSpinner, setShowSpinner] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");
    const formRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setFormSubmitted(false);
        }, 6000)
    });

    const handleClick = () => {
        openModal(false);
    }

    const handleSubmit = (e) => {
        /* e.preventDefault();  */
        
        if(formRef.current.checkValidity()) {
            const sendObj = {
                to_name: 'Ricardo Contramestre',
                name: nameRef.current.value,
                from: emailRef.current.value,
                message: messageRef.current.value
            }
            setShowSpinner(true);
            send('service_4mqt85d', 'template_lv5bjid', sendObj, 'user_s4vpi9C9DO4G2eNR4sUjb' ).then(res => {
                setShowSpinner(false);
                setFormSubmitted(true);
            });
        }  
        
    }

 


    return (

        <React.Fragment>
            <div className={`${styles.backdrop} ${opened ? styles.open : ""}`} onClick={handleClick}></div>
            <div className={`${styles.modal} ${opened ? styles.open : ""}`}>

        
                <div className={styles.header}>
                    <h5>Deixe a sua mensagem</h5>
                    <img src={close} alt="" onClick={handleClick} style={{cursor: 'pointer'}}/>
                </div>
                {showSpinner && <Spinner size="50" text="A enviar mensagem" />}
                {formSubmitted && <div style={{textAlign:' center'}}><p>Obrigado pelo seu contacto, responderei o mais breve possível</p><br /><div><img src={Success} alt="" /></div></div>}
                {(!formSubmitted && !showSpinner) && <div className={styles.content}>
                    <div className={styles.left}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit enim ad minim veniam, sed do eiusmod tempor nisi ut aliquip.</p>
                        <div className={styles.contact}>
                            <p><span>Tel:</span> 913183194</p>
                            <p><span>Email:</span> contramestre@gmail.com</p>
                            <p><span>Morada:</span> Praça da Liberdade Lote 79 1ºesq
                    2870-214 Montijo</p>
                        </div>
                        <div className={styles.social}>
                            <div>
                                <a href="https://www.facebook.com/contramestre" target="_blank" rel="noreferrer"><img src={facebook} alt="" /></a>
                                <a href="https://www.instagram.com/ricardomiguel281/" target="_blank" rel="noreferrer"><img src={instagram} alt="" style={{marginLeft:'15px'}}/></a>
                                <a href="http://linkedin.com/in/ricardo-miguel-59309734" target="_blank" rel="noreferrer"><img src={linkedin} alt="" style={{marginLeft:'15px'}}/></a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <form ref={formRef}>
                            <div className={styles['form-row']}>
                                <div className={styles['form-control']}>
                                    <input ref={nameRef} type="text" name="name" required></input>
                                    <label htmlFor="name">Nome*</label>
                                </div>
                                <div className={styles['form-control']}>
                                    
                                    <input ref={emailRef} type="email" name="email" required></input>
                                    <label htmlFor="email">Email*</label>
                                </div>
                            </div>
                            <div className={styles['form-row']}>
                                <div className={`${styles['form-control']} ${styles.textarea}`}>
                                    <textarea ref={messageRef} name="area" rows="10" placeholder="Mensagem"></textarea>
                                </div>
                            </div>
                            <Button text="Enviar" tipo="submit" click={handleSubmit}/>
                        </form>
                    </div>
                </div>}

            </div>
        </React.Fragment>
    )
}
export default Modal


