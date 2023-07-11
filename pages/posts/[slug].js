// our-domain.com/posts/[slug]
import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";

//this page will output the content of a selected post
function PostDetailPage() {
    return (
        //this component will take care of outputting that post content
        <PostContent />
    );
}

export default PostDetailPage;
