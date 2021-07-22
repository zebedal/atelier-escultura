import close from '../../assets/img/close.svg'
import styles from './Sidebar.module.css'
import {Link, NavLink} from 'react-router-dom'
import { ModalContext } from '../UI/ModalWrapper'
import { useContext } from 'react'


const SideNav = ({open, openNav}) => {

    const context = useContext(ModalContext);

    return(
        <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <div className={styles.close} onClick={openNav}><img src={close} alt=""/></div>
        <nav>
            <NavLink to="/" className={styles['nav-links']} onClick={openNav} activeClassName={styles.active} exact>Home</NavLink>
            <NavLink to="/bio" className={styles['nav-links']} onClick={openNav} activeClassName={styles.active} exact>Bio</NavLink>
            <NavLink to="/portfolio" className={styles['nav-links']} onClick={openNav} activeClassName={styles.active} exact>Portfolio</NavLink>
            <Link to="#" className={styles['nav-links']} onClick={context.openModal} >Contactar</Link>
        </nav>
        <div className={styles.contacts}>
            <h3 className={styles['contactos-title']}>Contactos</h3>
            <p><span className={styles.bold}>Tel:</span> 913183194</p>
            <p><span className={styles.bold}>Email:</span> rcontramestre@gmail.com</p>
            <p><span className={styles.bold}>Morada:</span> Praça da Liberdade Lote 79 1ºesq
                    2870-214 Montijo</p>
        </div>
    </div>
    )
}
    


export default SideNav