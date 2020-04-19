import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    // remember => a component(function) can only return ONE thing!!

    <>
      <Row>
        <Col xs={12} md={12}>
          <h2>About Me</h2>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image id="melPhoto" src="../images/Me.jpg" rounded></Image>
          <p class="wrap-text">
            I'm originally from Austin, Texas but now call Denver, Colorado
            home. I've been living out here for two years now and absolutely
            love it! Being able to live in a city but still have the mountains
            so close is my favorite thing about Denver. In my free time I enjoy
            exploring new parts of town or heading out to the mountains to go
            hiking, snowshoeing or snowboarding.
            <br />
          </p>
          <p class="wrap-text">
            I currently work for Gusto on their Full-stack Customer Care team. I
            assist our customers who use both our payroll and benefit features.
            Most of my previous work experience is on customer service support
            teams and I'm currently looking to make a career change into Web
            Development!
          </p>
        </Col>
      </Row>
    </>
  );
};

export default About;
