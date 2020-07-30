import React from 'react';
import './app.scss';
import Header from '../header/header';
import Jumbotron from '../jumbotron/jumbotron';
import Options from '../options/options';
import Description from '../description/description';
import Footer from '../footer/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Jumbotron />
      <Options />
      <Description />
      <Footer />
    </React.Fragment>
  );
}

export default App;
