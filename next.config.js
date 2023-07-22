/* eslint-disable no-undef */
/*
putting in this file in order to swap out some 
of the values from the connection string in our
API route for dynamic values which will then 
differ between development and production. 
So that we can have a development database 
connection and a production database connection. 
And so we dont delete or manipulate production 
data with our development tests. 
*/

//we can define different values for the environment variables for the different phases we might be in
//need to use the default node.js import syntax
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

//now that we've imported that requirement we can change this to a function that returns the config object
module.exports = (phase) => {
  //check the phase we are in
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    //return a different config object than we do otherwise
    return {
      env: {
        mongodb_username: "amvoce1221",
        mongodb_password: "dcFBMkO9qHQfYagk",
        mongodb_cluster: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
    //if we make it past the previous if check, we are not in the dev phase
  }
  return {
    //set environment variables
    env: {
      //the custom keys you set will be able to be used in the code, in API routes and all other components
      mongodb_username: "amvoce1221",
      mongodb_password: "dcFBMkO9qHQfYagk",
      mongodb_cluster: "cluster0",
      mongodb_database: "my-blog",
      //now we can tap in to these values and when we deploy our application we can override them
    },
  };
};
