import React from "react";

const About = () => {
  return (
    // remember => a component(function) can only return ONE thing!!

    <div id="aboutContainer">
      <h2>About Me</h2>
      <p class="wrap-text">
        I'm originally from Austin, Texas but now call Denver, Colorado home.
        I've been living out here for two years now and absolutely love it!
        Being able to live in a city but still have the mountains so close is my
        favorite thing about Denver. In my free time I enjoy exploring new parts
        of town or heading out to the mountains to go hiking, snowshoeing or
        snowboarding.
        <br />
      </p>
      <p class="wrap-text">
        I currently work for Gusto on their Full-stack Customer Care team. I
        assist our customers who use both our payroll and benefit features. Most
        of my previous work experience is on customer service support teams and
        I'm currently looking to make a career change into Web Development!
      </p>
    </div>
  );
};

export default About;
