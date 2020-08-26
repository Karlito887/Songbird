import React from 'react';
import './App.css';
import Header from './components/Header';
import Questions from './components/Questions';
import MainContent from './components/MainContent';
import { Switch, Route } from 'react-router-dom';
import Resault from './components/Resault';


function App() {
  return (
    <div className="app">
      <Header />
      <Questions />
      <Switch>
        <Route exact path='/' component={MainContent}/>
        <Route exact path='/resault' component={Resault}/>
      </Switch>
    </div>
  );
}

export default App;
