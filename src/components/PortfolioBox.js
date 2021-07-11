import { statement } from '@babel/template';
import React, { useState } from 'react'
import styles from './PortfolioBox.module.css'
import { Fragment } from 'react'
import Spinner from '../components/UI/Spinner'

const PortfolioBox = ({ src, caption, count }) => {

    /* const [loading, setLoading] = useState(true); */


    const isLoaded = () => {
        /* setLoading(false); */
        count();
    }

    return (

       
            
            <div className={styles['portfolio-box']}>
                {/* {loading && <Spinner />} */}
                <div className={styles['image-wrapper']}>
                    <a href={src} alt="">
                        <img src={src} alt={caption} onLoad={isLoaded} />
                    </a>
                </div>
                <p className={styles['image-title']}>{caption}</p>
            </div>
       
    )



}


export default PortfolioBox;