import React from 'react';
import './Projects.css';
import Card from 'react-bootstrap/Card';

function Projects() {
  return (
    <div>
      <h3 className="projectTitle">
        <strong>Projects</strong>
      </h3>
      <div className="container text-center p-5 mt-5">
        <div className="row row-cols-4">
          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A Progressive Web App</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Another Text Editor
                </Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/Progressive-Web-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A Full Stack Music Social Network</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Music Friends
                </Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/MusicFwends"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A JavaScript Coding Quiz</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/week-4-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A JavaScript Password Generator</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/week-3-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="container text-center p-5">
        <div className="row row-cols-4">
          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>An E-Commerce Backend</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/E-Commerce-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A SQL Employee Tracking CLI</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/week-12-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A Python/Selenium Web-bot</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/E-Profiling-Bot---py-Selenium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card style={{ width: '18rem' }}>
              <Card.Body className="project">
                <Card.Title>
                  <strong>A Markdown Generator</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                <Card.Text>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Card.Text>
                <Card.Link
                  href="https://github.com/AlexMastroianni/week-9-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
