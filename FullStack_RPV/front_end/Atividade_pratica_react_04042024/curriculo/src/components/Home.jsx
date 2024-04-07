import styles from './Home.module.css';

export function Home() {

    return (
        <article className={styles.posts}>
            <header className={styles.header}>

                <div className={styles.author}>
                    <img className={styles.avatar} src="./src/assets/info.png" alt="Imagem profile" />
                    <div className={styles.authorInfo}>

                        <h2><strong>Sobre Mim</strong></h2>

                    </div>

                </div>
            </header>

            <div className={styles.comments}>
                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <p>Com uma sólida carreira desenvolvida ao longo de vários anos como analista de suporte, tenho experiência trabalhando com sistemas ERP e automação comercial e industrial. Minha atuação tem sido crucial, posicionando-me na linha de frente como um elo vital entre o cliente e a empresa desenvolvedora de software. Minhas responsabilidades vão além do suporte técnico em TI e consultoria. Desempenho um papel importante na administração e orientação estratégica, auxiliando na tomada de decisões informadas. Sempre me esforcei para entender completamente as necessidades do cliente, buscando soluções que atendam às suas demandas de maneira eficaz e eficiente.
                            Atualmente, estou expandindo meus horizontes e dedicando meu tempo ao estudo do Desenvolvimento WEB. Meu objetivo é adquirir habilidades e conhecimentos que me permitam me tornar um desenvolvedor no futuro. Estou entusiasmado com as possibilidades que essa nova direção pode trazer e estou comprometido em me aprofundar nessa área para alcançar meu objetivo. Acredito que a combinação de minha experiência em suporte e minha paixão pelo aprendizado contínuo me posiciona de maneira única para fazer uma transição bem-sucedida para o desenvolvimento web e continuar a fornecer valor excepcional no campo da tecnologia da informação.</p>

                    </div>
                </div>

                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>Habilidades</h3>
                        <p>Atendimento ao cliente,
                            Trabalhar em equipe,
                            Capacidade analítica na resolução de problemas,
                            Autodidata e resiliente,
                            Cordialidade, paciência e empatia,
                            Organizado e metódico,
                            Vontade de sempre aprender e evoluir</p>
                    </div>
                </div>

                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>Atividades Extras</h3>
                        <p>Nas horas vagas, eu valorizo muito o tempo que passo com a minha família. Também sou um grande apreciador de filmes, séries e animes, que me proporcionam momentos de lazer e descontração. Além disso, utilizo meu conhecimento técnico para realizar trabalhos autônomos, prestando suporte de Tecnologia da Informação (T.I) e administração de redes. Essas atividades não apenas complementam minha renda, mas também me permitem manter minhas habilidades atualizadas e em constante aprimoramento.</p>
                    </div>
                </div>

            </div>

        </article>

    )

}