import React from 'react'
import latest1 from '../assets/img/latest1.jpg'
import latest2 from '../assets/img/latest2.jpg'
import styles from './LatestWorks.module.css'
import seta from '../assets/img/seta.svg'
import { Link } from 'react-router-dom'

const LatestWorks = props => (
    <div className={styles.wrapper}>
        <div className={styles['title-wrapper']}><h5 className={styles.title}>Últimos <span style={{fontWeight: 'bold'}}>trabalhos</span></h5><div className={styles.line}></div></div>
        <div className={styles['img-wrapper']}>
            <Link to={{pathname: '/portfolio', filter: 'ultimos'}}><img src={latest1} alt="esculturas escultura esferovite" /></Link>
            <Link to={{pathname: '/portfolio', filter: 'ultimos'}}><img src={latest2} alt="esculturas escultura madeira" /></Link>
        </div>
        <div className={styles['controls-wrapper']} >
            <img src={seta} style={{transform: 'rotate(180deg)'}} alt=""/>
            <img src={seta} alt=""/>
        </div>
    </div>
)

export default LatestWorks