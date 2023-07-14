// our-domain.com/posts/[slug]
import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helpers/posts-util";

//this page will output the content of a selected post
function PostDetailPage(props) {
  return (
    //this component will take care of outputting that post content
    <PostContent post={props.post}/>
  );
}

//get post data
export function getStaticProps(context) {
  //need the params from context
  const { params } = context; //params are the concrete values of all of the dynamic segments that might lead to this file
  //get the slug from params
  const { slug } = params;

  //use the slug to get the data for a single post
  const postData = getPostData(slug);

  //return your object with the props key
  return {
    props: {
      post: postData,
    },
    revalidate: 600, //ensures that if we update a file, we will get the latest data every 10 min
  };
}

//need to pair getStaticProps with getStaticPaths to let next know which concrete slug values it should regenerate
export function getStaticPaths() {
  //get all the paths to post files
  const postFilenames = getPostFiles();

  //but only interested in the slugs of those files so we can remove the extension
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  //returns an object with all the paths that should be prepared
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug },
    })),
    fallback: false,
  };
}

export default PostDetailPage;
