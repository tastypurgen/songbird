import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Answer from '../answer/answer';

import './options.scss';

export default function Options({
  currentArray, answerIndex, checkAnswer, isStageCompleted,
}) {
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
            isStageCompleted={isStageCompleted}
          />
        );
      })}
    </ListGroup>
  );
}
