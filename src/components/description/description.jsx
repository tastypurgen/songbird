import React from 'react';
import PropTypes from 'prop-types';
import './description.scss';
import Player from '../player/player';

const flagsPath = `${process.env.PUBLIC_URL}/assets/flags/`;
const audioPath = `${process.env.PUBLIC_URL}/assets/audio/`;

export default function Description({ currentArray, currentItem }) {
  if (currentItem >= 0) {
    return (
      <div className="description">
        <div className="overview">
          <img className="description-flag" src={`${flagsPath + currentArray[currentItem].country}.svg`} alt="flag" />
          <p className="country">{currentArray[currentItem].country}</p>
          <Player audio={`${audioPath + currentArray[currentItem].language}.mp3`} />
          <p className="capital">
            capital:
            <span>
              {' '}
              {currentArray[currentItem].capital}
            </span>
            {' '}
            population:
            <span>
              {' '}
              {currentArray[currentItem].population}
            </span>
          </p>
        </div>
        <p className="desc">{currentArray[currentItem].desc}</p>
      </div>
    );
  }
  return (
    <div className="description" style={{ height: '100%' }}>
      <h3>Choose your variant!</h3>
    </div>
  );
}

Description.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentArray: PropTypes.array.isRequired,
  currentItem: PropTypes.number.isRequired,
};
