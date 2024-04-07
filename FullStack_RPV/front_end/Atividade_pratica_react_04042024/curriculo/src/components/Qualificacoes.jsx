/* eslint-disable react/prop-types */
import styles from './Qualificacoes.module.css';

export function Qualificacoes() {
    return (
        <section className='qualificacoes'>
            <div className={styles.comments}>
                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS, FACULDADE DESCOMPLICA</h3>
                        <p>Cursando - 5º Período (2022-2024)</p>
                        <p><a href="https://descomplica.com.br/faculdade/"><img src="https://thiagoosg.github.io/curriculo/img/descomplica-logo.png" alt="" /></a> </p>
                    </div>
                </div>

                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>FULLSTACK, EDULIVRE / SENAI</h3>
                        <p>Cursando - Rio Pomba Valley (2023 - 2024)</p>
                        <p><a href="https://edulivre.org.br/rio-pomba-valley"><img src="https://thiagoosg.github.io/curriculo/img/rpv-.png" alt="" /></a> </p>
                    </div>
                </div>

                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>LICENÇAS E CERTIFICADOS</h3>
                        <p>Confira todas as licenças e certificações adquiridas.</p>
                        <p><a href="https://www.linkedin.com/in/thiago-sg"><img className='linkedin' src="./src/assets/LogosLinkedin.svg" alt="" /></a> </p>
                    </div>
                </div>
            </div>        
        </section>
    )
}
