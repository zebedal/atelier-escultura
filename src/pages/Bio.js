import React from 'react'
import Button from '../components/UI/Button';
import styles from './Bio.module.css'
import clientes from '../assets/img/clientes.svg'

const Bio = props => {

    return (
        <React.Fragment>
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
                        <Button text="Entrar em contacto" />
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

                <div className={`${styles.row} ${styles.column}`}>
                    <h5 className={styles.title}>clientes</h5>
                    <div className={styles.svgWrapper}><img src={clientes} alt=""/></div>
                </div>

            </section>
        </React.Fragment>


    )
}

export default Bio