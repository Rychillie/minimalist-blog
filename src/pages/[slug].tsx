import React from "react";
import PostLayout from "../layouts/PostLayout";
import { getPostBySlug, getAllPosts } from "./api/posts";
import { GetStaticPropsContext } from "next";

interface PostProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  content: string;
}

export default function Post(props: PostProps) {
  return (
    <PostLayout
      title={props.title}
      description={props.description}
      thumbnailUrl={props.thumbnailUrl}
      content={props.content}
    />
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();

  paths = paths.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
