import React from "react";
import Image from "next/image";

import styles from "./post.module.css";

import bg from "../../../public/assets/blog-images/altumcode-dMUt0X3f59Q-unsplash.jpg";

const Post = (): JSX.Element => {
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <Image
          src={bg}
          alt="só nos computer filhão"
          layout="responsive"
          placeholder="blur"
          quality={100}
          width={320}
          height={260}
          loading="lazy"
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
