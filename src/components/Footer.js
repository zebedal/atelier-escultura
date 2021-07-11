import styles from './Footer.module.css'
import logo from '../assets/img/logo-branco.svg'

const Footer = props => (
    <section className={styles.footer}>
        <div className={styles.content}>
            <div className={styles.column}>
                <img src={logo} alt="" />
                <br/>
                <br/>
                <p className={styles.grey}>Trabalho em proximidade com os meus clientes para garantir um nível de serviço com qualidade.</p>
                <br />
                <p>Copyright ©2021 Atelier Escultura. <br />All Rights Reserved</p>
            </div>
            <div className={styles.column}>
                <h5 className={styles.title}>Contacto</h5>
                <p className={styles.grey}>Rua das Camélias 44, 2870-231 Montijo</p>
                <p className={styles.grey}>T. 923547414</p>
                <p className={styles.grey}>E. rcontramestre@gmail.com</p>
            </div>
                <div className={styles.column}>
                    <h5 className={styles.title}>Social</h5>
                    <p className={styles.grey}>Facebook</p>
                    <p className={styles.grey}>Instagram</p>
                    <p className={styles.grey}>Linkedin</p>
                </div>
            </div>
    </section>
        )

export default Footer