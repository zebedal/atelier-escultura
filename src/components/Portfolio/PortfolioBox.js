
import React from 'react'
import styles from './PortfolioBox.module.css'


const PortfolioBox = ({ src, caption, count, srcGrid }) => {

    const isLoaded = () => {
        count();
    }

    return (
        <div className={styles['portfolio-box']}>
            <div className={styles['image-wrapper']}>
                <a href={src} alt="">
                    <img src={srcGrid} alt={caption} onLoad={isLoaded} />
                </a>
            </div>
            <p className={styles['image-title']}>{caption}</p>
        </div>
    )



}


export default PortfolioBox;