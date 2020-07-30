import React from 'react'
import Player from '../player/player'
import './jumbotron.scss'

const flagsPath = process.env.PUBLIC_URL + '/assets/flags/';
const audioPath = process.env.PUBLIC_URL + '/assets/audio/';

const Jumbotron = (props: any) => {
  console.log(props.data)
  return (
    <div className="jumbotron">
      <div className="flag">
        <img src={flagsPath + 'Unknown.svg'} alt="flag" />
      </div>
      <div className="info">
        <p className="language">Guess the language...</p>
        <Player audio={audioPath + 'belarusian.mp3'} />
      </div>
    </div>
  )
}

export default Jumbotron