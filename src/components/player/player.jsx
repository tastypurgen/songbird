import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './player.scss';

export default function Player({ audio }) {
  return (
    <div>
      <ReactAudioPlayer
        className="player"
        src={audio}
        preload="auto"
        controls
        controlsList="nodownload"
        title=" "
      />
    </div>
  );
}
