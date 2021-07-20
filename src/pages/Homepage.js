
import BackgroundImage from '../assets/img/background.jpg'
import Escultura from '../assets/img/escultura.jpg'
import Cenografia from '../assets/img/cenografia.jpg'
import Impressao from '../assets/img/impressao.jpg'
import Outros from '../assets/img/outros.jpg'
import Esferovite from '../assets/img/esferovite.jpg'
import Acrilico from '../assets/img/acrilicos.jpg'
import Moldes from '../assets/img/moldes.jpg'
import styles from './Homepage.module.css'
import Button from '../components/UI/Button'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import linkedin from '../assets/img/linkedin.svg'
import LatestWorks from '../components/LatestWorks'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Logo from '../components/UI/Logo'
import { useContext } from 'react'
import { AnimContext } from '../components/Layout'
import { InView } from 'react-intersection-observer';


const subTitleVariant = {
    start: {
        opacity: 0,
        x: -300
    },
    end: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 1
        }
    },

}
const button = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            delay: 5.5,
        }
    },
}

const container = {
    start: {
        opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        x: '-100vw',
        transition: {
            ease: 'easeInOut'
        }
    }
}


const Homepage = props => {


    const anim = useContext(AnimContext);

  
    const handleInView = (inView, entry) => {
        if (inView) {
            entry.target.classList.add(`${styles.inView}`)
        }
    }

    return (

        <motion.div variants={container} initial="start" animate="end" exit="exit">
            <section className={styles.top} >
                <div className={styles['image-wrapper']}>
                    <img src={BackgroundImage} alt="escultor montijo ricardo contramestre" />
                </div>
                <div className={styles['title-wrapper']} >
                    <motion.h5 variants={subTitleVariant} initial={anim ? "start" : ""} animate="end">ATELIER DE ESCULTURA</motion.h5>
                    <Logo />
                    <motion.div variants={button} initial={anim ? "start" : ""} animate="end">
                        <Link to="/" >
                            <Button text="contactar" openModal={true}/>
                        </Link>
                    </motion.div>
                </div>
                <div className={styles.social}>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={linkedin} alt="" />
                </div>
                <LatestWorks />
            </section>

            <section className={`${styles.Section}`} >
                <InView as="div" onChange={(inView, entry) => handleInView(inView, entry)} className={`${styles.obs} `}>
                    <div className={`${styles['news-wrapper']}`}  >
                        <div className={styles.text}>
                            <h2>Outro</h2>
                            <h3 className={styles.subtitle}>Título</h3>
                            <p className={styles['text-paragraph']}>Nullam elementum porttitor aliquam. Morbi dictum tristique nulla at sagittis. Nam imperdiet erat sit amet pharetra tempor. Quisque pharetra ipsum quis velit luctus porta. Aenean finibus mi nec urna mattis malesuada. Aliquam magna lorem, pulvinar ac ultrices ac, lobortis id nisl. Nunc at consectetur neque. Suspendisse viverra sollicitudin tortor et lacinia.</p>
                            <Link to="/portfolio"><Button text="Ver Trabalhos" /></Link>
                        </div>
                        <div className={styles['news-image-wrapper']}>
                            <img src={Outros} alt="" />
                        </div>
                    </div>
                </InView>
            </section>

            <section className={`${styles.Section} ${styles.grid}`} style={{ marginTop: '50px' }}>

                <InView as="div" onChange={(inView, entry) => handleInView(inView, entry)} className={`${styles.obs} `}>
                    <div className={styles['image-grid']} >
                        <Link to={{ pathname: '/portfolio', state: 'impressao', id: 4 }}>
                            <div className={styles['grid-item']}>
                                <img src={Impressao} alt="escultura trabalhos" />
                                <div>Impressão</div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/portfolio', state: 'cenografia', id: 6 }}>
                            <div className={styles['grid-item']}>
                                <img src={Cenografia} alt="cenografia" />
                                <div>Cenografia</div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/portfolio', state: 'esculturas', id: 1 }}>
                            <div className={styles['grid-item']}>
                                <img src={Escultura} alt="esculturas" />
                                <div>Escultura</div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/portfolio', state: 'esferovite', id: 1 }}>
                            <div className={styles['grid-item']}>
                                <img src={Esferovite} alt="esferovite esculturas" />
                                <div>Esferovite</div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/portfolio', state: 'acrilicos', id: 3 }}>
                            <div className={styles['grid-item']}>
                                <img src={Acrilico} alt="" />
                                <div>Acrílicos</div>
                            </div>
                        </Link>
                        <Link to={{ pathname: '/portfolio', state: 'moldes', id: 7 }}>
                            <div className={styles['grid-item']}>
                                <img src={Moldes} alt="moldes" />
                                <div>Moldes</div>
                            </div>
                        </Link>
                    </div>
                </InView>
            </section>


        </motion.div>

    )
}

export default Homepage