import { Fragment } from 'react'
import BackgroundImage from '../assets/img/background.jpg'
import NewsImage from '../assets/img/news.jpg'
import styles from './Homepage.module.css'
import Button from '../components/UI/Button'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import LatestWorks from '../components/LatestWorks'

const Homepage = props => {

    return (

        <Fragment>
            <section className={styles.top}>
                <div className={styles['image-wrapper']}>
                    <img src={BackgroundImage} alt="escultor montijo ricardo contramestre" />
                </div>
                <div className={styles['title-wrapper']}>
                    <h5>ATELIER DE ESCULTURA</h5>
                    <h1>Ricardo <br />Contramestre</h1>
                    <Button text="contactar" />
                </div>
                <div className={styles.social}>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
                <LatestWorks />
            </section>

            <section className={`${styles.Section}`}>
                <div className={styles['news-wrapper']} >
                    <div className={styles.text}>
                        <h2>Outro</h2>
                        <h3 className={styles.subtitle}>Título</h3>
                        <p className={styles['text-paragraph']}>Nullam elementum porttitor aliquam. Morbi dictum tristique nulla at sagittis. Nam imperdiet erat sit amet pharetra tempor. Quisque pharetra ipsum quis velit luctus porta. Aenean finibus mi nec urna mattis malesuada. Aliquam magna lorem, pulvinar ac ultrices ac, lobortis id nisl. Nunc at consectetur neque. Suspendisse viverra sollicitudin tortor et lacinia.</p>
                        <Button text="Ver Trabalhos" />
                    </div>
                    <div className={styles['news-image-wrapper']}>
                        <img src={NewsImage} />
                    </div>
                </div>
            </section>

            <section className={`${styles.Section}`}>

                <div className={styles['image-grid']} >

                    <div className={styles['grid-item']}>
                        <img src={NewsImage} alt="" />
                    </div>
                    <div className={styles['grid-item']}>
                    <img src={NewsImage} alt="" />
                </div>
                <div className={styles['grid-item']}>
                    <img src={NewsImage} alt="" />
                </div>
                <div className={styles['grid-item']}>
                    <img src={NewsImage} alt="" />
                </div>
                <div className={styles['grid-item']}>
                    <img src={NewsImage} alt="" />
                </div>
                <div className={styles['grid-item']}>
                    <img src={NewsImage} alt="" />
                </div>

           

            
                </div>
            </section>


        </Fragment>
    )
}

export default Homepage