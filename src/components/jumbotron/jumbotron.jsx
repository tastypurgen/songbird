import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';
import Player from '../player/player';
import './jumbotron.scss';

const flagsPath = `${process.env.PUBLIC_URL}/assets/flags/`;
const audioPath = `${process.env.PUBLIC_URL}/assets/audio/`;

export default class Jumbotron extends PureComponent {
  render() {
    const { currentArray, answerIndex, isStageCompleted } = this.props;

    let flag;
    const newStr = currentArray[answerIndex].language[0].toUpperCase()
      + currentArray[answerIndex].language.slice(1);

    if (isStageCompleted) flag = currentArray[answerIndex].country;
    else flag = 'Unknown';
    const { language } = currentArray[answerIndex];
    return (
      <Row className="jumbo">
        <Col sm={4} className="flag">
          <img src={`${flagsPath}${flag}.svg`} alt="flag" />
        </Col>
        <Col sm={8} className="info">
          <p className="language">{isStageCompleted ? newStr : '*****'}</p>
          <Player audio={`${audioPath + language}.mp3`} />
        </Col>
      </Row>
    );
  }
}
