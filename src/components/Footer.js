import styles from './Footer.module.css'
import logo from '../assets/img/logo-branco.svg'

const Footer = props => (
    <section className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.column}>
                <img src={logo} alt="" />
                <br />
                <br />
                <p className={styles.grey}>Trabalho em proximidade com os meus clientes para garantir um nível de serviço com qualidade.</p>
                <br />
                <p>Copyright ©2021 Atelier Escultura. <br />All Rights Reserved</p>
            </div>
            <div className={styles.column}>
                <h5 className={styles.title}>Contacto</h5>
                <p className={styles.grey}>Praça da Liberdade Lote 79 1ºesq
                    2870-214 Montijo
                </p>
                <p className={styles.grey}>T. 913183194</p>
                <p className={styles.grey}>E. rcontramestre@gmail.com</p>
            </div>
            <div className={styles.column}>
                <h5 className={styles.title}>Social</h5>
                <a href="https://www.facebook.com/contramestre" target="blank" className={styles.grey}><p >Facebook</p></a>
                <a href="https://www.instagram.com/ricardomiguel281/" target="blank" className={styles.grey}><p >Instagram</p></a>
                <a href="http://linkedin.com/in/ricardo-miguel-59309734" target="blank" className={styles.grey}> <p >Linkedin</p></a>
            </div>
        </div>
    </section>
)

export default Footer