import styles from './Header.module.css'
import logo from '../assets/img/logo.svg'
import {motion} from 'framer-motion'

const Header = ({openNav}) => (
    <motion.header initial={{y: -100}} animate={{y:0}}>
        <img src={logo} className={styles.logo} alt="Escultor ricardo contramestre" />
        <div className={styles['burger-wrapper']} onClick={openNav}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </motion.header>
)

export default Header