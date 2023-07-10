import React from "react";
import classes from './all-posts.module.css';
import PostsGrid from "./posts-grid";

//this should be responsible for fetching and preparing the data
function AllPosts(props) {
    return (
        <>
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <PostsGrid posts={props.posts} />
        </section>
        </>
    );
}

export default AllPosts;