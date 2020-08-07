/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Container, Navbar, Row,
} from 'react-bootstrap';
import ProgressBar from './progressBar';
import './header.scss';

export default function Header({ shuffledData, currentStage }) {
  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Container fluid="sm">
          <Navbar.Brand href="#">
            SongBird
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Score: 0
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid="xl">
        <Row>
          {shuffledData.map((item, i) => (
            <ProgressBar
              key={i}
              index={i}
              currentStage={currentStage}
            />
          ))}
        </Row>
      </Container>
    </header>
  );
}
