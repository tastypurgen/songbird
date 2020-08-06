import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import Answer from '../answer/answer';

import './options.scss';

export default function Options({ currentArray, answerIndex, checkAnswer }) {
  return (
    <ListGroup>
      {currentArray.map((item, index) => {
        const newStr = item.language[0].toUpperCase() + item.language.slice(1);
        return (
          <Answer
            key={item.id}
            answerIndex={index}
            checkAnswer={checkAnswer}
            rightAnswer={index === answerIndex}
            flag={item.country}
            language={newStr}
          />
        );
      })}
    </ListGroup>
  );
}

Options.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentArray: PropTypes.array.isRequired,
  answerIndex: PropTypes.number.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};
