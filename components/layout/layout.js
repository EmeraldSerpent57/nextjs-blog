import React from "react";
import MainNavigation from "./main-navigation";

function Layout(props) {
    return (
        <>
        <MainNavigation />
        {/*Need to have props.children accessed so that we can wrap the component around the main _app.js component*/}
        <main>{props.children}</main>
        </>
    );
}

export default Layout;