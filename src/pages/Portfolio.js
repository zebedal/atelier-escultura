import React, {useState} from 'react'
import styles from './Portfolio.module.css'
import PortfolioBox from '../components/PortfolioBox'
import { SRLWrapper } from "simple-react-lightbox";
import { IMAGES } from '../data/IMAGES';
import {useRef} from 'react'
import Spinner from '../components/UI/Spinner';


const Portfolio = props => {

const [galleryImages, setGalleryImages] = useState(IMAGES['esculturas']);
const [galleryLoaded, setGalleryLoaded] = useState(false);

let counter = useRef(0);

const filterGallery = filter => {
    setGalleryImages(IMAGES[filter]);
    setGalleryLoaded(false)
}

const countImages = () => {
    counter.current++;
    
    if(counter.current == galleryImages.length) {
        counter.current = 0;
        setGalleryLoaded(true)
    }
}



    return (
        <section className={styles.Section}>
            <h2>Portfolio</h2>
            <div className={styles['portfolio-filters']}>
                <span onClick={() => filterGallery('todos')}>Todos</span>
                <span onClick={() => filterGallery('esculturas')}>Escultura</span>
                <span onClick={() => filterGallery('pinturas')}>Pintura</span>
                <span onClick={() => filterGallery('cenografia')}>Cenografia</span>
                <span>Corte 2D e 3D</span>
                <span>Impressão Digital</span>
                <span>Últimos Trabalhos</span>
            </div>
            {!galleryLoaded && <Spinner size="80"/>}
            <SRLWrapper>
               {<div className={`${styles['image-gallery']}  ${galleryLoaded ? styles.loaded: ""} ` } >
                    {galleryImages.map((img, index) => <PortfolioBox {...img} key={index} count={countImages} />)}
                </div>}
            </SRLWrapper>
        </section>
    )
}

export default Portfolio