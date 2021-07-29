
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
            delay: 0.5,
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        x: '-100vw',
        transition: {
            ease: 'easeOut'
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
                       
                            <Button text="contactar" openModal={true}/>
                        
                    </motion.div>
                </div>
                <div className={styles.social}>
                    <a href="https://www.facebook.com/contramestre" target="_blank"><img src={facebook} alt="" /></a>
                    <a href="https://www.instagram.com/ricardomiguel281/" target="_blank"><img src={instagram} alt="" /></a>
                    <a href="http://linkedin.com/in/ricardo-miguel-59309734" target="_blank"><img src={linkedin} alt="" /></a>
                </div>
                <LatestWorks />
            </section>

            <section className={`${styles.Section}`} >
                <InView as="div" onChange={(inView, entry) => handleInView(inView, entry)} className={`${styles.obs} `}>
                    <div className={`${styles['news-wrapper']}`}  >
                        <div className={styles.text}>
                            <h2>Esculturas </h2>
                            <h3 className={styles.subtitle}>em Esferovite</h3>
                            <p className={styles['text-paragraph']}>Criamos e produzimos para cenografia, carnaval, exposições temáticas, eventos e campanhas sazonais. Executamos esculturas e adereços em esferovite, poliuretano e fibra. Além da produção das figuras ou adereços produzimos também todo o cenário envolvente.</p>
                            <Link to="/portfolio"><Button text="Ver Trabalhos" /></Link>
                        </div>
                        <div className={styles['news-image-wrapper']}>
                            <img src={Outros} alt="" />
                        </div>
                    </div>
                </InView>
            </section>

            <section className={`${styles.Section} ${styles.grid}`} style={{ marginTop: '50px' }}>

                <h2 style={{textAlign: 'center'}}>Portfolio</h2>
                <h3 style={{textAlign: 'center'}}>Consulte os nossos trabalhos</h3>
                <br />
                <p style={{textAlign: 'center'}}>No nosso portfólio poderá encontrar os mais variados projectos desde a escultura, cenografia, , desenho e impressão 3D. Trabalhamos ainda com diversas empresas na área do entretenimento onde produzimos adereços para efeitos especiais, decorações publicitárias e reprodução de peças através de moldes</p>

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