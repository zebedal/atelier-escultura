import close from '../../assets/img/close.svg'
import styles from './Sidebar.module.css'
import {Link} from 'react-router-dom'


const SideNav = ({open, openNav}) => {

    return(
        <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <div className={styles.close} onClick={openNav}><img src={close} alt=""/></div>
        <nav>
            <Link to="/" className={styles['nav-links']} onClick={openNav}>Home</Link>
            <Link to="/bio" className={styles['nav-links']} onClick={openNav}>Bio</Link>
            <Link to="/portfolio" className={styles['nav-links']} onClick={openNav}>Portfolio</Link>
            <Link to="/contact" className={styles['nav-links']} onClick={openNav}>Contactar</Link>
        </nav>
        <div className={styles.contacts}>
            <h3 className={styles['contactos-title']}>Contactos</h3>
            <p><span className={styles.bold}>Tel:</span> 912547412</p>
            <p><span className={styles.bold}>Email:</span> rcontramestre@gmail.com</p>
            <p><span className={styles.bold}>Morada:</span> Rua das Camélias 44, 2870-231 Montijo</p>
        </div>
    </div>
    )
}
    


export default SideNav