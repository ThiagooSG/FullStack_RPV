import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import styles from './Comments.module.css'
export function Comments() {
    return (
        <div className={styles.comments}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="Imagem profile" />
            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Técnico do Projeto</strong>
                            <time title='02/04/2024' dateTime='2024/04/02'>Cerca de há 1 hora atrás</time>

                        </div>
                        <button title='Excluir Comentário'>
                            <Trash />

                        </button>
                    </header>
                    <p>Muito bom, parabéns pelo curso</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>• 20</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}