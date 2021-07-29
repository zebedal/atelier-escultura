import styles from './Header.module.css'
import logo from '../assets/img/logo.svg' 
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const headerVariant = {
    start: {
        y: -100,
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 3,
            delay: 4.5
        }
    }
}


const Header = ({openNav}) => {

    const loc = useLocation();
    const anim = loc.pathname === '/';

    return (
        <motion.header variants={headerVariant} initial={!anim ? "" : "start"} animate="end">
        <Link to="/"><img src={logo} alt="" style={{width:'90px', height: 'auto'}}/></Link>
        <div className={styles['burger-wrapper']} onClick={openNav}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </motion.header>
    )
}



export default Header