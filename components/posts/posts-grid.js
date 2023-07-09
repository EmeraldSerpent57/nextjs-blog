/* eslint-disable react/prop-types */
import React from "react";
import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  //need to extract posts from props, will be an array full of objects that describe a post
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {/*Data for these posts should be received from outside this function */}
      {/*Output all of your posts here and map them in to the PostItem */}
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
