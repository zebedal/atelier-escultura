import React from 'react'
import Button from '../components/UI/Button';
import styles from './Bio.module.css'
import { clientes } from '../data/CLIENTES'
import { motion } from 'framer-motion';

const Bio = props => {

    const container = {
        start: {
            opacity: 0,
            y: 100
        },
        end: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5
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
        <motion.div variants={container} initial="start" animate="end" exit="exit">
            <section>

                <div className={styles['image-wrapper']} >
                    <img src="assets/img/portfolio/esculturas/27.jpg" alt="ricardo contramestre escultor" />
                </div>

            </section>

            <section>

                <div className={styles.row}>
                    <h5 className={styles.title}>sobre</h5>
                    <div className={styles['row-content']}>
                        <h5>Criamos e produzimos sem limites! Qualquer adereço, peça ou escultura. Desde a criação à montagem.</h5>
                        <br />
                        <p>A R. Contramestre, é uma empresa jovem, mas com profissionais com muita experiências e anos no mercado, formamos equipa conforme o projecto.
                            Executamos projectos para exposições temáticas, escultura e cenografia.
                            Produzimos adereços e bonecos em esferovite, Mockups, adereços para efeitos especiais, desenho e impressão 3D, reprodução de
                            peças através de moldes, pintura artística, decorações publicítárias, corte por CNC por fresa, CNC esferovite,
                            corte de letras em esferovite, corte e quinagem de acrílicos, Estampagem, etc.</p>
                        <Button text="Contactar" openModal={true} />
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

                <div className={`${styles.row} `} style={{ display: 'block' }}>
                    <h5 className={styles.title}>clientes</h5>
                    <div className={styles.svgWrapper}>
                        {clientes.map((item, i) => {
                            return (
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