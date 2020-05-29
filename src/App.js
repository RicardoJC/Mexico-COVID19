import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './content/Home';
import SentimentAnalysis from './emotions/SentimentAnalysis';
import SymptomsMonitor from './symptoms/SymptomsMonitor'
import About from './about/About';
import Footer from './Footer';
import NavBar from './NavBar';

class App extends React.PureComponent {

  render(){

    return (
      <div>
      <NavBar/>
      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path='/emociones' component={SentimentAnalysis}/>
          <Route path='/sintomas' component={SymptomsMonitor}/>
          <Route path='/about' component={About}/>
      </Switch>
      <Footer/>
      </div>

    );
  }
}

export default App;
