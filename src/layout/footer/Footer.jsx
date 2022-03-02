import Styles from '../../styles/footer.module.css'
export default function Footer() {
    return (
        <footer>
            <div className={Styles.author}>
                <p>Desarrollado por LGGM</p>
            </div>
            <div className={Styles.title__footer}>
                <p>React JS App 2022</p>
            </div>
        </footer>
    )
}
