import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player';
import './jumbotron.scss';

const flagsPath = `${process.env.PUBLIC_URL}/assets/flags/`;
const audioPath = `${process.env.PUBLIC_URL}/assets/audio/`;

const Jumbotron = ({ currentArray, answerIndex, isStageCompleted }) => {
  const { language } = currentArray[answerIndex];
  let flag;
  const newStr = currentArray[answerIndex].language[0].toUpperCase()
    + currentArray[answerIndex].language.slice(1);

  if (isStageCompleted) flag = currentArray[answerIndex].country;
  else flag = 'Unknown';

  return (
    <div className="jumbotron">
      <div className="flag">
        <img src={`${flagsPath}${flag}.svg`} alt="flag" />
      </div>
      <div className="info">
        <p className="language">{isStageCompleted ? newStr : 'Guess the language...'}</p>
        <Player audio={`${audioPath + language}.mp3`} />
      </div>
    </div>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentArray: PropTypes.array.isRequired,
  answerIndex: PropTypes.number.isRequired,
  isStageCompleted: PropTypes.bool.isRequired,
};
