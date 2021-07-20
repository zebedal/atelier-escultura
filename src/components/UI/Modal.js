import React, {useRef, useState} from 'react'
import styles from './Modal.module.css'
import Button from './Button'
import facebook from '../../assets/img/facebook.svg'
import instagram from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin.svg'
import close from '../../assets/img/close_black.svg'
import {send} from 'emailjs-com'
import Spinner from './Spinner'

const Modal = ({ opened, openModal }) => {

    const [showSpinner, setShowSpinner] = useState(false);

    const nameRef = useRef("");
    const emailRef = useRef("");
    const messageRef = useRef("");
    const formRef = useRef();

    const handleClick = () => {
        openModal(opened => !opened);
    }

    const handleSubmit = (e) => {
        /* e.preventDefault();  */
        
        if(formRef.current.checkValidity()) {
            const sendObj = {
                to_name: 'Sérgio Paulo Neves',
                name: nameRef.current.value,
                from: emailRef.current.value,
                message: messageRef.current.value
            }
            setShowSpinner(true);
            send('service_fl41qxo', 'template_dxttruc', sendObj, 'user_iWbPrmI24ECfjNbEP8nfU' ).then(res => {
                setShowSpinner(false)
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
                {!showSpinner && <div className={styles.content}>
                    <div className={styles.left}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit enim ad minim veniam, sed do eiusmod tempor nisi ut aliquip.</p>
                        <div className={styles.contact}>
                            <p><span>Tel:</span> 915478512</p>
                            <p><span>Email:</span> contramestre@gmail.com</p>
                            <p><span>Morada:</span> Rua das Camélias 44 28720-231 Montijo</p>
                        </div>
                        <div className={styles.social}>
                            <div>
                                <img src={facebook} alt="" />
                                <img src={instagram} alt="" style={{marginLeft:'15px'}}/>
                                <img src={linkedin} alt="" style={{marginLeft:'15px'}}/>
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


