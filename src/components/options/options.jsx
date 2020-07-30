import React from 'react'
import Answer from '../answer/answer'
import { ListGroup } from 'react-bootstrap'

import './options.scss'

export default function Options({ currentArray, answerIndex }) {


  return (
    <ListGroup>
      {currentArray.map(item => {
        let newStr = item.language[0].toUpperCase() + item.language.slice(1);
        return (
          <ListGroup.Item key={item.id}>
            <Answer flag={item.country} language={newStr} />
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
