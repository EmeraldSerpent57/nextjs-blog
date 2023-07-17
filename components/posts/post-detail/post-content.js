/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
//this will be a complex file
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";

/*
const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2023-06-20",
  content: '# This is a first post'
  //will need to translate this string from md to JSX
};
*/

function PostContent(props) {
  //extract our posts from the props
  const { post } = props;
  //create the imagePath
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    /*
    img(image) {
      return (
        //render the image you want
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
        //we can use this code, and it works. But you will get alot of errors if you look at the source code because this image will be wrapped in some divs and then all of that will be wrapped in a paragraph tag
      );
    },
    */
    //instead of just overriding the image tag, we can dive in to all the paragraphs that are rendered. Not only each paragraph, but also the images
    p(paragraph) {
      //only want to override if we find an image that is rendered inside of the paragraph
      const { node } = paragraph; //extracting the actual node that will be rendered from reactmd from paragraph

      //check if the first child of that paragraph node is an image
      if (node.children[0].tagName === "img") {
        //access your image through node children
        const image = node.children[0];
        //then override what react md wants to render, and return our own JSX element
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      //if we dont make it in to this if check then return a regular paragraph, which is what react md would have rendered otherwise
      return <p>{paragraph.children}</p>;
    },
    //override how the code snippets are rendered
    code(code) {
      //use object destructuring to get the language and the complete child value from the code
      const { className, children } = code;
      //set the language
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      //return our own JSX element
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    //the post content will eventually be in markdown translated to ReactJSX elements
    <>
      <article className={classes.content}>
        {/*Need to set th title and image props because thats what we extract in PostHeader */}
        <PostHeader title={post.title} image={imagePath} />
        {/*Need to override how react md treats md content like images*/}
        <ReactMarkdown components={customComponents}>
          {post.content}
        </ReactMarkdown>
      </article>
    </>
  );
}

export default PostContent;
