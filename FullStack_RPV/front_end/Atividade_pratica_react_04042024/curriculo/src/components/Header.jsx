import styles from './Header.module.css'
import imgLogo from '../assets/LogosReact.svg'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.menu_links}>
                <div className={styles.curriculo_react}>
                    <img src={imgLogo} alt="React logo header" />
                    <strong>Currículo com React</strong>
                </div>
                <div>
                    <ul className={styles.links_menu}>
                        <li><Link to="/" className={styles.link_menu}>Home</Link></li>
                        <li><Link to="./Experiencia" className={styles.link_menu}>Experiência</Link></li>
                        <li><Link to="./Qualificacoes" className={styles.link_menu}>Qualificações</Link></li>
                        <li><Link to="./HardSkills" className={styles.link_menu}>Hard Skills</Link></li>
                    </ul>
                </div>

            </div>

        </header>
    )
}