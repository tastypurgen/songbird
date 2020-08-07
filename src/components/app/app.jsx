import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './app.scss';
import Header from '../header/header';
import Jumbotron from '../jumbotron/jumbotron';
import Options from '../options/options';
import Description from '../description/description';
import Footer from '../footer/footer';
import getRandomNumber from '../../utils/getRandomNumber';

import data from '../../data.json';

data.sort(() => Math.random() - 0.5);

const shuffledData = [];

for (let i = 0; i < data.length; i += 5) {
  shuffledData.push(data.slice(i, i + 5));
}

function App() {
  const [isStageCompleted, setIsStageCompleted] = useState(false);
  const [currentStage, setStage] = useState(0);
  const [currentItem, setCurrentItem] = useState(-1);
  const [answerIndex, setAnswerIndex] = useState(getRandomNumber(0, 4));

  const checkAnswer = (id) => {
    setCurrentItem(id);
    if (id === answerIndex) {
      setIsStageCompleted(true);
    } else {
      // console.log('wrong!');
    }
  };

  const startNextStage = () => {
    setIsStageCompleted(false);
    setStage((prev) => prev + 1);
    setAnswerIndex(getRandomNumber(0, 4));
  };

  return (
    <Container fluid="xl">
      <div className="songbird">
        <Header
          shuffledData={shuffledData}
          currentStage={currentStage}
        />
        <Jumbotron
          isStageCompleted={isStageCompleted}
          currentArray={shuffledData[currentStage]}
          answerIndex={answerIndex}
        />
        <Row>
          <Col sm={4}>
            <Options
              currentArray={shuffledData[currentStage]}
              answerIndex={answerIndex}
              checkAnswer={checkAnswer}
            />
          </Col>
          <Col sm={8} style={{ backgroundColor: '#63636367' }}>
            <Description
              currentItem={currentItem}
              currentArray={shuffledData[currentStage]}
            />
          </Col>
        </Row>
        <Footer
          startNextStage={startNextStage}
          isStageCompleted={isStageCompleted}
        />
      </div>
    </Container>
  );
}

export default App;
