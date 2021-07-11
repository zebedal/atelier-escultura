import styles from "./GalleryFilter.module.css"


const GalleryFilter = ({filterImages, categoria, filtro, id, activeLink}) => {

    console.log('rendering filters')
    const handleClick = () => {
        filterImages(filtro, id);
    }
    return <span className={`${styles.filter} ${activeLink === id ? styles.active : ""}`} onClick={handleClick}>{categoria}</span>
}

export default GalleryFilter