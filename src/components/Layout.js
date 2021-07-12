import React, { useState } from 'react'
import styles from './Layout.module.css'
import Header from './Header'
import SideNav from './Navigation/Sidebar'




const Layout = ({ children }) => {
   

    const [sideNavOpen, setSideNavOpen] = useState(false);

    const openSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    }

    return (

        <React.Fragment>
            <SideNav open={sideNavOpen} openNav={openSideNav} />
            <div className={styles['outer-wrapper']}>
                <div className={styles['inner-wrapper']}>
                    <Header openNav={openSideNav} />
                    {children}
                </div>
            </div>
        </React.Fragment>


    )
}


export default Layout