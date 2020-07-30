import React from 'react'

const flagsPath = process.env.PUBLIC_URL + '/assets/flags/';

export default function Answer({ flag, language }) {
  console.log(flag)
  return (
    <div>
      <img style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={flagsPath + flag + '.svg'} alt="flag"></img> {language}
    </div>
  )
}
