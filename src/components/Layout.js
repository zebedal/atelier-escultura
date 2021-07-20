import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import styles from './Layout.module.css'
import Header from './Header'
import SideNav from './Navigation/Sidebar'


export const AnimContext = React.createContext();

const Layout = ({ children }) => {

    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    const {pathname} = useLocation();

    useEffect(() => {
        setSideNavOpen(false);
        setFirstLoad(false);
    }, [pathname])

    const openSideNav = () => {
        setSideNavOpen(!sideNavOpen);
    }

    return (

        <React.Fragment>
            <SideNav open={sideNavOpen} openNav={openSideNav} />
            <div className={styles['outer-wrapper']}>
                <AnimContext.Provider value={firstLoad}>
                <div className={styles['inner-wrapper']}>
                    <Header openNav={openSideNav} />
                    {children}
                </div>
                </AnimContext.Provider>
            </div>
        </React.Fragment>


    )
}


export default Layout