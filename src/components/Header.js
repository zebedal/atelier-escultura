import styles from './Header.module.css'
import logo from '../assets/img/logo.svg'


const Header = ({openNav}) => (
    <header>
        <img src={logo} className={styles.logo} alt="Escultor ricardo contramestre" />
        <div className={styles['burger-wrapper']} onClick={openNav}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </header>
)

export default Header