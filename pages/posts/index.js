//our-domain.com/posts/
import React from "react";
import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Blog Posts</title>
        <meta
          name="description"
          content="A list of all programming related posts and tutorials."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    //could revalidate if needed
  };
}

export default AllPostsPage;
