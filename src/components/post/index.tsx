import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./post.module.css";

import bg from "../../../public/assets/blog-images/altumcode-dMUt0X3f59Q-unsplash.jpg";

interface LinkProps {
  postLink: string;
  title: string;
}
const Post = (props: LinkProps): JSX.Element => {
  return (
    <Link href={props.postLink}>
      <a className={styles.post}>
        <div className={styles.image}>
          <Image
            src={bg}
            alt="só nos computer filhão"
            layout="responsive"
            placeholder="blur"
            quality={100}
            width={400}
            height={320}
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <h2>{props.title}</h2>
          <p>
            Texto referente ao conteúdo da publicação do blog em si, ou seja
            isto é uma breve descrição.
          </p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
