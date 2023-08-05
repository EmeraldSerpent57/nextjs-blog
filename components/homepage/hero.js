import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/blogging.jpeg"
            alt="Alaina Harrison"
            width={300}
            height={300}
          />
        </div>
        <h1>Welcome to My Blog!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id
          neque aliquam vestibulum morbi blandit cursus risus.
        </p>
      </section>
    </>
  );
}

export default Hero;
