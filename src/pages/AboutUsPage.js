import React from "react";
import styled from "styled-components";
import img from "../Gallery/images/team/t1.jpeg";
import NavBar from "../frontend components/Navbar";
import Footer from "../frontend components/Footer";
const About = () => {
  return (
    <>
      <NavBar/>
      <AboutContainer id="2" >
        
        <AboutInnerContainer style={{marginTop:"100px"}}>
            
          <AboutContent
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="1500"
          >
            <h2>ABOUT US</h2>
            <p>
             Welcome to the EA HAM Club – the Electronics and Advanced Hardware & Automation Makers Club of our college!  We are a vibrant community of tech enthusiasts, innovators, and problem-solvers passionate about exploring the frontiers of electronics, embedded systems, automation, and emerging technologies.
            </p>
          
          </AboutContent>
          <img
            src={img}
            alt="HAM PIC"
          />
        </AboutInnerContainer>
      </AboutContainer>
      <Footer></Footer>
    </>
  );
};

export default About;

const AboutContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: black;
  background-size: cover, cover;
  padding: 100px 0;
  height: 100vh;
  color: white;
`;

const AboutInnerContainer = styled.div`
  padding: 0 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  overflow-y: hidden;
  @media (max-width: 750px) {
    padding: 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
  img {
    width: 35%;
    height: auto;
    @media (max-width: 500px) {
      margin-top: 1rem;
      width: 70%;
    }
  }
`;

const AboutContent = styled.div`
  color: white;
  /* font-family: "Source Sans Pro", sans-serif; */
    font-family: "Poppins";
  /* font-weight: 800; */
  font-size: larger;
  max-width: 50ch;
  position: relative;
  z-index: 100;
  > h2 {
    font-size: 5rem;
    @media (max-width: 950px) {
      font-size: 3em;
    }
  }

  > p {
    font-size: 1.5rem;

    @media (max-width: 950px) {
      font-size: 15px;
    }
  }
`;
