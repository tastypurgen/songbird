import React from 'react'
import Answer from '../answer/answer'

const Options = ({ options }) => {

  console.log(options)
  return (
    <div>
      <Answer language={options[0].language} />
    </div>
  )
}

export default Options