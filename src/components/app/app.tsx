import React, { useState } from 'react';
import './app.scss';
import Header from '../header/header';
import Jumbotron from '../jumbotron/jumbotron';
import Options from '../options/options';
import Description from '../description/description';
import Footer from '../footer/footer';

import data from '../../data.json'

data.sort(() => Math.random() - 0.5)

const shuffledData: any[] = []

for (let i = 0; i < data.length; i += 5) {
  shuffledData.push(data.slice(i, i + 5))
}
console.log('shuffle: ', shuffledData);

function App() {
  const [currentStage, setStage] = useState(0)

  return (
    <div className="songbird">
      <Header />
      <Jumbotron data={data} />
      <div className="panel">
        <Options options={shuffledData[currentStage]} />
        <Description />
      </div>
      <Footer />
    </div>
  );
}

export default App;
