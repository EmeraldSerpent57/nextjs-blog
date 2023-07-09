import React from "react";
import classes from './featured-posts.module.css';

function FeaturedPosts() {
    //will output blog posts we would like featured
    return (
        <>
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
        </section>
        </>
    );
}

export default FeaturedPosts;