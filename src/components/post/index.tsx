import React from "react";

import styles from "./post.module.css";

const Post = (): JSX.Element => {
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img
          src="/assets/blog-images/altumcode-dMUt0X3f59Q-unsplash.jpg"
          alt="só nos computer filhão"
        />
      </div>

      <div className={styles.content}>
        <h2>Titulo do nosso post que de preferencia seja bem grande</h2>
        <p>
          Texto referente ao conteúdo da publicação do blog em si, ou seja isto
          é uma breve descrição.
        </p>
      </div>
    </div>
  );
};

export default Post;
