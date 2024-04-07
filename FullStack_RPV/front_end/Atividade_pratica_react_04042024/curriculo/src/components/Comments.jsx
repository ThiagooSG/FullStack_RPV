/* eslint-disable react/prop-types */

import styles from './Comments.module.css'

export function Comments(props) {
    return (
        <div className={styles.comments}>

            <div className={styles.commentsBox}>
                <div className={styles.commentsContent}>
                    <h3>{props.titulo}</h3>

                    <p></p>

                    <p></p>
                    <p></p>
                </div>

            </div>
        </div>
    )
}