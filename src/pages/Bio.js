import React from 'react'
import Button from '../components/UI/Button';
import styles from './Bio.module.css'
import {clientes} from '../data/CLIENTES'
import { motion } from 'framer-motion';

const Bio = props => {

    const container = {
        start: {
            opacity: 0,
            y: 100
        },
        end:{
            opacity: 1,
            y:0,
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

    return (
        <motion.div variants={container} initial="start" animate="end"  exit="exit">
            <section>

                <div className={styles['image-wrapper']} >
                    <img src="assets/img/portfolio/esculturas/27.jpg" alt="ricardo contramestre escultor" />
                </div>

            </section>

            <section>

                <div className={styles.row}>
                    <h5 className={styles.title}>sobre</h5>
                    <div className={styles['row-content']}>
                        <h5>Sou o Ricardo Contramestre, faço todo o tipo de trabalho artístico desde a Escultura lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida quam at posuere vestibulum.</h5>
                        <br />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <Button text="Contactar" openModal={true}/>
                    </div>
                </div>
                <br /><br />
                <div className={styles.line}></div>

                <div className={styles.row}>
                <h5 className={styles.title}>skills</h5>
                    <div className={styles['row-content']}>
                        <p>Escultura</p>
                        <p>Modelação e construção de adereços para cenografia</p>
                        <p>Mockups, maquetes e adereços fx</p>
                        <p>Corte 2D e 3D CNC em esferovite</p>
                        <p>Corte e gravação laser, corte e gravação CNC</p>
                        <p>Quinagem de acrílicos</p>
                        <p>Impressão digital</p>
                        <p>Corte e aplicação de vinil e estampagem</p>
                    </div>
                </div>
                <br /><br />
                <div className={styles.line}></div>

                <div className={`${styles.row} `} style={{display: 'block'}}>
                    <h5 className={styles.title}>clientes</h5>
                    <div className={styles.svgWrapper}>
                        {clientes.map((item, i) => {
                            return(
                                <div className={styles.imgBox} key={i}>
                                <img src={item.src} alt={item.name} />
                            </div>
                            )
                            
                        })}
                    </div>
                </div>

            </section>
        </motion.div>


    )
}

export default Bio