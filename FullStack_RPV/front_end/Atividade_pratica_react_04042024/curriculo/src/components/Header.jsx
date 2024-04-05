import styles from './Header.module.css'
import imgLogo from '../assets/LogosReact.svg'

export function Header () {
    return (
        <header className={styles.header}>
            <img src={imgLogo} alt="React logo header" />
            <strong>Currículo com React</strong>
        </header>
    )
}