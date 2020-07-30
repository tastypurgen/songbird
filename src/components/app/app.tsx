import React from 'react';
import './app.scss';
import Header from '../header/header';
import Jumbotron from '../jumbotron/jumbotron';
import Options from '../options/options';
import Description from '../description/description';
import Footer from '../footer/footer';

import data from '../../data.json'

const DataContext = React.createContext(data)

function App() {
  return (
    <div className="songbird">
      <DataContext.Provider value={data}>
        <Header />
        <Jumbotron data={data} />
        <Options />
        <Description />
        <Footer />
      </DataContext.Provider>
    </div>
  );
}

export default App;
