import React from 'react';
import PropTypes from 'prop-types';
import './description.scss';
import Player from '../player/player';

const flagsPath = `${process.env.PUBLIC_URL}/assets/flags/`;
const audioPath = `${process.env.PUBLIC_URL}/assets/audio/`;

const Description = ({ currentArray }) => (
  <div className="description">
    {/* {console.log(currentArray[0])} */}
    <div className="overview">
      <img className="description-flag" src={`${flagsPath + currentArray[0].country}.svg`} alt="flag" />
      <p className="country">{currentArray[0].country}</p>
      <Player audio={`${audioPath + currentArray[0].language}.mp3`} />
      <p className="capital">
        capital:
        <span>{currentArray[0].capital}</span>
        {' '}
        population:
        <span>{currentArray[0].population}</span>
      </p>
    </div>
    <p className="desc">{currentArray[0].desc}</p>
  </div>
);
export default Description;

Description.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  currentArray: PropTypes.array.isRequired,
};
