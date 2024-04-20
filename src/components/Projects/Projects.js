import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import chatify from "../../Assets/Projects/chatify.png";
import weather from "../../Assets/Projects/Weather.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Developed a Python application that retrieves real-time weather information using the OpenWeatherMap API and displays it to the user. Used requests library to make API calls, JSON module to parse the response, and tkinter module to create a user-friendly GUI. Improved user experience by implementing error handling for invalid input and a dynamic background that changes based on the current weather conditions"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AWS Serverless Chat Application"
              description="I built a serverless chat application using various AWS services such as Lambda, DynamoDB, API Gateway, S3, Cognito, and CloudFront. The application allows users to communicate with each other in real-time without the need for any traditional servers. This reduces the cost and maintenance required to run the application. The chat data is stored in DynamoDB, which is a fully managed NoSQL database service provided by AWS"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Designed and developed a personal portfolio website using React.js, Tailwind, and CSS. The website showcases my skills, projects, and contact information. Implemented responsive design to ensure compatibility with various devices and screen sizes. Used React Router to create a multi-page application with smooth transitions between pages. Deployed the website on GitHub Pages for easy access and sharing"
              ghLink="https://github.com/nawalydv/Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
