import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src="/images/site/IMG_1210.JPG"
            alt="Alaina Harrison"
            width={300}
            height={300}
          />
        </div>
        <h1>Hello there, I'm Alaina!</h1>
        <p>
          I blog about web development! Especially frontend frameworks like
          React and Angular!
        </p>
      </section>
    </>
  );
}

export default Hero;
