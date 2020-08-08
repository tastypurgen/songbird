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

let shuffledData = [];
const soundPath = `${process.env.PUBLIC_URL}/assets/`;

const shuffleData = () => {
  shuffledData = [];
  for (let i = 0; i < data.length; i += 5) {
    shuffledData.push(data.slice(i, i + 5));
  }
};

shuffleData();

function App() {
  const [isStageCompleted, setIsStageCompleted] = useState(false);
  const [currentStage, setStage] = useState(0);
  const [currentItem, setCurrentItem] = useState(-1);
  const [answerIndex, setAnswerIndex] = useState(getRandomNumber(0, 4));
  const [totalPoints, setTotalPoints] = useState(0);
  const [answerPoints, setAnswerPoints] = useState(5);

  const rightSound = new Audio(`${soundPath}/right.mp3`);
  const wrongSound = new Audio(`${soundPath}/wrong.mp3`);
  const winSound = new Audio(`${soundPath}/win.mp3`);

  const checkAnswer = (id) => {
    setCurrentItem(id);
    if (id === answerIndex) {
      setIsStageCompleted(true);
      setTotalPoints((prev) => prev + answerPoints);
      setAnswerPoints(5);
      if (!isStageCompleted) rightSound.play();
    } else if (answerPoints !== 0) {
      if (!isStageCompleted) wrongSound.play();
      setAnswerPoints((prev) => prev - 1);
    }
  };

  const startNextStage = () => {
    if (currentStage !== 5) {
      setIsStageCompleted(false);
      setAnswerIndex(getRandomNumber(0, 4));
    }
    setStage((prev) => prev + 1);
    setCurrentItem(-1);
  };

  const restartGame = () => {
    shuffleData();

    setStage(0);
    setIsStageCompleted(false);
    setTotalPoints(0);
    setAnswerPoints(5);
  };

  if (currentStage === 6) {
    if (totalPoints === 30) winSound.play();
    return (
      <Container fluid="xl">
        <Header
          shuffledData={shuffledData}
          currentStage={currentStage - 1}
          totalPoints={totalPoints}
        />
        <div className="game-over">
          <h2>Game Over!</h2>
          <h3>Your score:</h3>
          <h3>{totalPoints} of 30</h3>
          <button className="btn secondary" onClick={restartGame} type="button">Play Again</button>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid="xl">
      <div className="songbird">
        <Header
          shuffledData={shuffledData}
          currentStage={currentStage}
          totalPoints={totalPoints}
        />
        <div className="content">
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
                isStageCompleted={isStageCompleted}
              />
            </Col>
            <Col sm={8}>
              <Description
                currentItem={currentItem}
                currentArray={shuffledData[currentStage]}
              />
            </Col>
          </Row>
        </div>
        <Footer
          startNextStage={startNextStage}
          isStageCompleted={isStageCompleted}
          currentStage={currentStage}
        />
      </div>
    </Container>
  );
}

export default App;
