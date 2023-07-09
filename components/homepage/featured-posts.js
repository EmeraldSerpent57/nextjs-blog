import React from "react";
import classes from './featured-posts.module.css';
import PostsGrid from "../posts/posts-grid";

//we could consider using context or redux to avoid the prop drilling we are doing, but this chain makes alot of sense
function FeaturedPosts(props) {
    //will output blog posts we would like featured
    return (
        <>
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
            {/*Need to set the posts prop because thats what were extracting from props in post-grid */}
        </section>
        </>
    );
}

export default FeaturedPosts;