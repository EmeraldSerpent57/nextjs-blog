/*
this file allows us to define the general structure of our page
and set and attribute on the HTML element
or add extra entry points/elements which we can use with React Portal
- adding Head content to your individual pages along with a _document.js file will make sure you 
prepare your page not just visually for your users, but also with the correct metadata
*/

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
//will be a class based component

class MyDocument extends Document {
  //class based components always need render methods
  render() {
    return (
      //structure is specific!!!
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications">
            {/*will use this div to portal our notification component in to this place when its being rendered*/}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
