import styles from "./GalleryFilter.module.css"
import Chevron from '../UI/Chevron'

const GalleryFilter = ({filterImages, categoria, filtro, id, activeLink, subCategorias}) => {

    const handleClick = (filtro, id) => {
        filterImages(filtro, id);
    }

    console.log(subCategorias)

    return (
    <div className={styles.wrapper}>
        <span className={`${styles.filter} ${activeLink === id ? styles.active : ""}`} onClick={() => handleClick(filtro, id)}>{categoria} {subCategorias ? <Chevron down={true} /> : null} </span>
        {subCategorias ? <div className={styles['submenu-wrapper']}>
             {subCategorias.map(item => <span className={`${styles.filter} ${styles.filterSub} ${activeLink === item.id ? styles.active : ""}`} onClick={() => handleClick(subCategorias.filtro, subCategorias.id)} key={item.id}>{item.categoria}</span>)}
        </div> : ""}
    </div>
    )
}

export default GalleryFilter