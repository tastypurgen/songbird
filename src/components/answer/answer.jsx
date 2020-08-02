import React from 'react'

const flagsPath = process.env.PUBLIC_URL + '/assets/flags/';

export default function Answer({ flag, language }) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{
        width: '30px',
        height: '30px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        marginRight: '10px',
        border: '1px solid grey'
      }}>
        <img style={{
          display: 'inline',
          margin: '0 auto',
          marginLeft: '-25%',
          marginTop: '-2%',
          height: '100%',
          width: 'auto'
        }} src={flagsPath + flag + '.svg'} alt="flag"></img>
      </div>{language}
    </div>
  )
}
