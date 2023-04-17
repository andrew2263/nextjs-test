import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { postType } from "../../types";
import PostInfo from "../../components/PostInfo";

type postTypeProps = {
  post: postType
};

export const getStaticPaths:GetStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps:GetStaticProps = async (context) => {
  console.log(context);
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  //const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
};

const Post:FC<postTypeProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;
