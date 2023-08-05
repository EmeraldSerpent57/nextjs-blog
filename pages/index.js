// our-domain.com/
import React from "react";
import Head from "next/head";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome To My Blog!</title>
        <meta
          name="description"
          content="My personal blog for programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />{" "}
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //can revalidate if necessary
  };
}

export default HomePage;
