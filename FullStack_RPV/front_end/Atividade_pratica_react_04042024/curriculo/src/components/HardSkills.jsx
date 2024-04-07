/* eslint-disable react/prop-types */
import styles from './HardSkills.module.css';

export function HardSkills() {
    return (
        <section className='hardSkills'>
            <div className={styles.comments}>
                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>NODE.JS DO ZERO A MAESTRIA, UDEMY</h3>
                        <p>Aprender Node do básico ao avançado
                            Criar projetos completos com Express
                            Aprender o padrão MVC com Node
                            Criação de API com Node e Express
                            Operações e integração de Node.JS com MySQL
                            Operações e integração de Node.JS com Sequelize
                            Operações e integração de Node.JS com MongoDB
                            Operações e integração de Node.JS com Mongoose</p>
                        <p><a href="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos/"><img src="https://thiagoosg.github.io/curriculo/img/udemy.png" alt="" /></a> </p>
                    </div>
                </div>

                <div className={styles.commentsBox}>
                    <div className={styles.commentsContent}>
                        <h3>FORMAÇÃO FRONT-END - HTML, CSS, JAVASCRIPT, REACT E +</h3>
                        <p>HTML e CSS do básico ao avançado
                            JavaScript do básico ao avançado
                            React JS do básico ao avançado
                            Criar projetos com técnicas modernas de front-end
                            Utilizar TypeScript com React</p>
                        <p><a href="https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/"><img src="https://thiagoosg.github.io/curriculo/img/udemy.png" alt="" /></a> </p>
                    </div>
                </div>

            </div>
        </section>

    )
}
