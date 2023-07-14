/* eslint-disable no-undef */
//this is a file that has extra utility functionality for fetching the post data and extracting metadata from the md files
//will be working with the file system
import fs from 'fs';
//path lets us build a path with the join method
import path from 'path';
//use gray matter
import matter from 'gray-matter';

//path we are passing so the directory can be read 
const postsDirectory = path.join(process.cwd(), 'posts');

//helper function to extract the metadata and slug returned in the filenames from readdirSync
function getPostData(fileName) {
    //file path
    const filePath = path.join(postsDirectory, fileName);

    //want to get the content of  file
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    //use gray matter to extract the metadata
    const { data, content } = matter(fileContent);

    //create post slug
    const postSlug = fileName.replace(/\.md$/, '')      //removes the file extension

    const postData = {
        //contains the data read from a single post in the md file
        slug: postSlug,
        ...data, 
        content: content,
    };

    //return the post data
    return postData;
}

//function to fetch all posts
export function getAllPosts() {
    //read all the content from a directory with the fs module
    const postFiles = fs.readdirSync(postsDirectory);       //this will parse all posts synchronously and read the entire content of the directory
    //this returns an array of strings (filenames), now extract the metadata

    //need to map the array of postFiles in to an object of postData
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    //now sort it to get the latest posts first
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

//function to fetch all features posts
export function getFeaturedPosts() {
    //get all posts
    const allPosts = getAllPosts();

    //filter the ones that should be featured
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}

//function to fetch a single post