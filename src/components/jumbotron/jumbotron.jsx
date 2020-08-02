import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/player';
import './jumbotron.scss';

const flagsPath = `${process.env.PUBLIC_URL}/assets/flags/`;
const audioPath = `${process.env.PUBLIC_URL}/assets/audio/`;

const Jumbotron = ({ currentArray, answerIndex }) => {
  const { language } = currentArray[answerIndex];
  // console.log('language: ', language);

  return (
    <div className="jumbotron">
      <div className="flag">
        <img src={`${flagsPath}Unknown.svg`} alt="flag" />
      </div>
      <div className="info">
        <p className="language">Guess the language...</p>
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
};
