import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Suhail Sama</span>
                 and I'm from <span className="yellow"> Fazilka, Punjab.</span>
                <br />
                <br />
                I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Chandigarh University.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                  I am passionate about solving problems and creating scalable solutions.
                  <br />
                  <br />I have expertise in
                    <b className="yellow"> React.js, </b>
                    along with knowledge of programming languages such as C++, SQL, and JavaScript.
                  <br />
                  <br />
                  I enjoy working with
                  <b className="yellow"> Node.js, MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern UI frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> Tailwind CSS.</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in competitive programming, having solved
                  <b className="yellow"> 400+ problems on LeetCode,</b>
                  and actively participate in
                  <b className="yellow"> hackathons and coding contests.</b>
                  <br />
                  <br />
                  Apart from coding, I enjoy 
                  <b className="yellow"> stand-up comedy, traveling, and reading.</b>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/suhailsama"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/suhailsama"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/suhail-sama-25a0a7264/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/suhailsama/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="leetcode"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
}

export default About;
