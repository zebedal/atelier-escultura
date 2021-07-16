import React, { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import styles from './Portfolio.module.css'
import PortfolioBox from '../components/Portfolio/PortfolioBox'
import { SRLWrapper } from "simple-react-lightbox";
import { IMAGES } from '../data/IMAGES';
import { CATEGORIAS } from '../data/CATEGORIAS';
import Spinner from '../components/UI/Spinner';
import GalleryFilter from '../components/Portfolio/GalleryFilter';



const Portfolio = props => {

    const loc = useLocation();
    let counter = useRef(0);
    let previousFilter = useRef('esculturas')

    
    const [galleryImages, setGalleryImages] = useState(loc.state ? IMAGES[loc.state] : IMAGES[previousFilter.current]);
    const [galleryLoaded, setGalleryLoaded] = useState(false);
    const [activeLink, setActiveLink] = useState(loc.id ? loc.id : 1);

    const filterGallery = (filter, id) => {
        if (previousFilter.current === filter) return;
        if (!IMAGES[filter]) {
            setGalleryImages(null);
            setActiveLink(id);
            previousFilter.current = filter;
        } else {
            setGalleryImages(IMAGES[filter]);
            setGalleryLoaded(false);
            setActiveLink(id);
            previousFilter.current = filter;
        }
    }

    const countImages = () => {
        counter.current++;
        if (counter.current === galleryImages.length) {
            counter.current = 0;
            setGalleryLoaded(true);
        }
    }

    

    return (
        <section className={styles.Section}>
            <h2>Portfolio</h2>
            <div className={styles['portfolio-filters']}>
                {CATEGORIAS.categorias.map((item, index) => <GalleryFilter filterImages={filterGallery} {...item} key={index} id={index + 1} activeLink={activeLink} />)}
            </div>
            {!galleryLoaded && <Spinner size="80" />}
            <SRLWrapper>
                {<div className={`${styles['image-gallery']}  ${galleryLoaded ? styles.loaded : ""} `} >
                    {galleryImages ? galleryImages.map((img, index) => <PortfolioBox {...img} key={index} count={countImages} />) : "Não existem imagens para mostrar nesta categoria"}
                </div>}
            </SRLWrapper>
        </section>
    )
}

export default Portfolio