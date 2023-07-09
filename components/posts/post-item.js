/* eslint-disable react/prop-types */
import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/legacy/image";

//this function outputs an individual post item in that grid
function PostItem(props) {
    //need to extract the post data we need to render through props.post
    const { image, title, excerpt, date, slug } = props.post;
  //define the structure of a single post item
  
  //make the date more readable/formatted
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',  //spelled out month, not number
        year: 'numeric'
    });

    //need to construct an image path, because the image we receive is just the file name
    //should access each slug in the posts folder in the images folder in public because thats where the posts specific images will be held
    const imagePath = `/images/posts/${slug}/${image}`;

    //The link should be the individual page for this selected post
    const linkPath = `/posts/${slug}`;
    
  
  return (
    //should be a list item, since it will appear in an unordered list item
    <li className={classes.post}>
      <Link href={linkPath}>    
        <div className={classes.image}>
            {/*Will hold post image, need to put default values for the width and height, and then the css code will scale according to whats in that code. Need to set a layout prop to responsive to make sure it fills the container*/}
            <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
        </div>
        <div className={classes.content}>
            {/*Will hold post content*/}
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
