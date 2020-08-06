import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import './answer.scss';

const flagsPath = `${process.env.PUBLIC_URL}/assets/flags/`;

export default function Answer({
  flag, language, checkAnswer, rightAnswer, answerIndex,
}) {
  const [isClicked, setIsClicked] = useState(false);

  let borders;
  if (!rightAnswer) borders = [{ border: '2px solid #63636367' }, { border: '2px solid tomato' }];
  else borders = [{ border: '2px solid #63636367' }, { border: '2px solid green' }];

  const handleClick = () => {
    setIsClicked(true);
    checkAnswer(answerIndex);
  };

  return (
    <ListGroup.Item
      style={!isClicked ? borders[0] : borders[1]}
      onClick={() => { handleClick(); }}
    >
      <div className="answer">
        <div className="answer-item">
          <img src={`${flagsPath + flag}.svg`} alt="flag" />
        </div>
        {language}
      </div>
    </ListGroup.Item>
  );
}

Answer.propTypes = {
  flag: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  checkAnswer: PropTypes.func.isRequired,
  answerIndex: PropTypes.number.isRequired,
  rightAnswer: PropTypes.bool.isRequired,
};
