import React from 'react'
import Answer from '../answer/answer'
import { ListGroup } from 'react-bootstrap'

import './options.scss'

export default function Options({ currentArray, answerIndex, checkAnswer }) {


  return (
    <ListGroup>
      {currentArray.map((item, index) => {
        let newStr = item.language[0].toUpperCase() + item.language.slice(1);
        return (
          <ListGroup.Item
            key={item.id}
            onClick={() => checkAnswer(index)} >
            <Answer
              flag={item.country}
              language={newStr} />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
