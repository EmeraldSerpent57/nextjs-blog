/* eslint-disable react/prop-types */
import React from "react";
import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

//this should always receive its data through props instead of context because this component is reused in different places
function PostsGrid(props) {
  //need to extract posts from props, will be an array full of objects that describe a post
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {/*Data for these posts should be received from outside this function */}
      {/*Output all of your posts here and map them in to the PostItem */}
      {posts.map((post) => (
        //an individual post in this list should hold all of the data that post item needs
        //key prop is required when you use map in JSX to render and update the list, uses the unique slug identifier
        //we can place a posts prop and pass post (that we receive from map) to it which exposes that data to post item
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
