import React from 'react'
import { Container, Navbar, Row, Col } from 'react-bootstrap'
import './header.scss'

const Header = () => {
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
          <Col className="active">Warm-Up</Col>
          <Col>Stage 1</Col>
          <Col>Stage 2</Col>
          <Col>Stage 3</Col>
          <Col>Stage 4</Col>
          <Col>Stage 5</Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header