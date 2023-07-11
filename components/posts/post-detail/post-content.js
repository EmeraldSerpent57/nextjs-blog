//this will be a complex file
import React from "react";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2023-06-20",
  content: '# This is a first post'
  //will need to translate this string from md to JSX
};

function PostContent() {
    //create the imagePath
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;


  return (
    //the post content will eventually be in markdown translated to ReactJSX elements
    <>
      <article className={classes.content}>
        {/*Need to set th title and image props because thats what we extract in PostHeader */}
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
      </article>
    </>
  );
}

export default PostContent;
