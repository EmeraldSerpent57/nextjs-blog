// our-domain.com/posts/
import React from "react";
import AllPosts from "../../components/posts/all-posts";


//initially a dummy array 
const DUMMY_POSTS = [
  //every post object should contain a title, image, excerpt, date, and slug property
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is the React framework for production! Here is an insight in to my journey with learning and building apps with NextJS.",
    date: "2023-06-20",
  },
  {
    slug: "getting-started-with-React",
    title: "Getting started with React",
    image: "getting-started-nextjs.png",
    excerpt:
      "React lets you build user interfaces out of individual pieces called components. Here is my journey with learning React!",
    date: "2022-08-12",
  },
  {
    slug: "building-nextjs-apps",
    title: "Building a NextJS App",
    image: "getting-started-nextjs.png",
    excerpt: "This is a short tutorial on how I build my first NextJS app!",
    date: "2022-12-03",
  },
  {
    slug: "deploying-next-apps",
    title: "Deploying NextJS Apps with Vercel",
    image: "getting-started-nextjs.png",
    excerpt: "Vercel's frontend cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web. Here is a short tutorial on how to use it!",
    date: '2023-02-23',
  },
];

//this page will output all our posts
function AllPostsPage() {
    return (
        <>
        {/*Will need to prepare the posts that should be used */}
        <AllPosts posts={DUMMY_POSTS} />
        </>
    );
}

export default AllPostsPage;
