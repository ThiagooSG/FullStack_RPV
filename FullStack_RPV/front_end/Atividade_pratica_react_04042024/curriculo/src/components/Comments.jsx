/* eslint-disable react/prop-types */

import styles from './Comments.module.css'
export function Comments(props) {
    return (
        <div className={styles.comments}>
        
            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <header>
                        

                    </header>
                    <h3>{props.titulo}</h3>
                    
                    <p>{props.descricao}</p>

                    <p>{props.linkImg}</p>
                    <p>{props.periodo}</p>
                </div>

                <footer>

                </footer>

            </div>
        </div>
    )
}