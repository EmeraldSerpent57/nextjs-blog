// our-domain.com/
import React from "react";
import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

function HomePage() {
    return (
        <>
        <Hero />
        <FeaturedPosts />
        </>
    );
}

export default HomePage;

/* What should be rendered on this page?
1. Hero Section => About Me
2. Featured Posts
*/