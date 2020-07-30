import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './player.scss'

export default function player({ audio }) {

  return (
    <div>
      <ReactAudioPlayer className="player"
        src={audio}
        preload="auto"
        controls
      />
    </div>
  )
}

