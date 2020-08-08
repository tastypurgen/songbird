import React from 'react';
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
          <div style={{ width: '100%' }}>
            <p className="country">{currentArray[currentItem].country}</p>
            <Player audio={`${audioPath + currentArray[currentItem].language}.mp3`} />
            <p className="capital">
              capital:
              <span>
                {' '}
                {currentArray[currentItem].capital}
              </span>
              {' '}
              <br />
              population:
              <span>
                {' '}
                {currentArray[currentItem].population}
              </span>
            </p>
          </div>
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
