/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./post.module.css";

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
          <img src={props.thumbnailUrl} alt={props.title} loading="lazy" />
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
