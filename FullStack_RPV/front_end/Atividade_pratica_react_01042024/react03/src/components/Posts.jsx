import { Comments } from './Comments'
import styles from './Posts.module.css'
export function Posts() {
    return (
        <article className={styles.posts}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png" alt="Imagem profile" />
                    <div className={styles.authorInfo}>
                        <strong>Técnico do Projeto</strong>
                        <span>Web Developer</span>
                    </div>

                </div>

                <time title='01/04/2024' dateTime='01/04/2024'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala Galera</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p><a href="">Web.design/projeto</a></p>
                <p><a href="">#novoprojeto</a></p>
            </div>

            <form className={styles.commentsForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário' />
                <div>
                    <button type='submit'>Comentar</button>
                </div>
            </form>

            <div className={styles.commentsList}>
                <Comments />
                <Comments />
                <Comments />

            </div>
            
        </article>



    )

}