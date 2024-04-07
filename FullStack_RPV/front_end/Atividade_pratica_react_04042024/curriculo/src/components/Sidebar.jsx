import styles from './Sidebar.module.css'
export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://thiagoosg.github.io/curriculo/img/foto.jpg" alt="Imagem profile" />
            
            <strong>Thiago Siqueira Gonçalves</strong>
            <span>Cataguases - MG</span>
            </div>

            <footer>
                <a href="mailto:thiagosg.ti@gmail.com"><img src="https://api.iconify.design/logos:google-gmail.svg" alt="" /></a>
                <a href="https://www.linkedin.com/in/thiago-sg/" target="blank"><img src="https://api.iconify.design/logos:linkedin-icon.svg" alt="" /></a>
                <a href="https://wa.me/5532984582324" target="blank"><img src="https://api.iconify.design/logos:whatsapp-icon.svg" alt="" /></a>
            </footer>

        </aside>
    )
}