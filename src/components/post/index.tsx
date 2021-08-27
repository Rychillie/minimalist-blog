import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./post.module.css";

import bg from "../../../public/assets/blog-images/altumcode-dMUt0X3f59Q-unsplash.jpg";

interface LinkProps {
  description: string;
  thumbnailUrl: string;
  postLink: string;
  title: string;
}

const Post = (props: LinkProps): JSX.Element => {
  return (
    <Link href={props.postLink}>
      <a className={styles.post}>
        <div className={styles.image}>
          <Image
            src={props.thumbnailUrl}
            blurDataURL={props.thumbnailUrl}
            alt={props.title}
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
          <p>{props.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
