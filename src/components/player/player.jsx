import React from 'react';
import PropTypes from 'prop-types';
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

Player.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  audio: PropTypes.string.isRequired,
};
