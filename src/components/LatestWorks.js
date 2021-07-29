import React, {useContext} from 'react'
import { AnimContext } from './Layout'
import latest1 from '../assets/img/latest1.jpg'
import latest2 from '../assets/img/latest2.jpg'
import styles from './LatestWorks.module.css'
/* import seta from '../assets/img/seta.svg' */
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
    start: {
        y: 300,
        opacity: 0
    },
    end: {
        y: 0,
        opacity: 1,
        transition: {
            duration:1.5,
            delay: 4.5
        }
    }
}



const LatestWorks = props => {

    const anim = useContext(AnimContext);


    return (
        <motion.div variants={container} initial={anim ? "start" : ""} animate="end" className={styles.wrapper}>
            <div className={styles['title-wrapper']}><h5 className={styles.title}>Últimos <span style={{ fontWeight: 'bold' }}>trabalhos</span></h5><div className={styles.line}></div></div>
            <div className={styles['img-wrapper']}>
                <Link to={{ pathname: '/portfolio', filter: 'ultimos', state: 'ultimos', id: 9}}><img src={latest1} alt="esculturas escultura esferovite" /></Link>
                <Link to={{ pathname: '/portfolio', filter: 'ultimos', state: 'ultimos', id: 9 }}><img src={latest2} alt="esculturas escultura madeira" /></Link>
            </div>
            <div className={styles['controls-wrapper']} >
                {/* <img src={seta} style={{ transform: 'rotate(180deg)' }} alt="" />
                <img src={seta} alt="" /> */}
            </div>
        </motion.div>
    )
}

export default LatestWorks