import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import './app.scss';
import Header from '../header/header';
import Jumbotron from '../jumbotron/jumbotron';
import Options from '../options/options';
import Description from '../description/description';
import Footer from '../footer/footer';
import getRandomNumber from '../../utils/getRandomNumber'

import data from '../../data.json'

data.sort(() => Math.random() - 0.5)

const shuffledData = []

for (let i = 0; i < data.length; i += 5) {
  shuffledData.push(data.slice(i, i + 5))
}
console.log(shuffledData);

function App() {
  const [currentStage, setStage] = useState(0)
  const [answerIndex, setLanguage] = useState(getRandomNumber(0, 4))

  return (
    <div className="songbird">
      <Header />
      <Jumbotron
        currentArray={shuffledData[currentStage]}
        answerIndex={answerIndex} />
      <div className="panel">
        <Container>
          <Row>
            <Col>
              <Options
                currentArray={shuffledData[currentStage]}
                answerIndex={answerIndex} />
            </Col>
            <Col>
              <Description />
            </Col>

          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;