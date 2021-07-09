import React from 'react'
import styles from './Layout.module.css'
import Header from './Header'

const Layout = ({children}) => {


    return (
        <div className={styles['outer-wrapper']}>
            <div className={styles['inner-wrapper']}>
                <Header />
                {children}
            </div>
        </div>
    )
}
    


export default Layout