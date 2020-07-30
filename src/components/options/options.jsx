import React from 'react'
import Answer from '../answer/answer'

export default function Options({ currentArray, answerIndex }) {

  return (
    <div>
      {currentArray.map(item => {
        return <Answer key={item.id} language={item.language} />
      })}
    </div>
  )
}
