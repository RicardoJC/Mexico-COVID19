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
          <Route exact path='/Mexico-COVID19' component={Home}/>
          <Route path='/Mexico-COVID19/sentimientos' component={SentimentAnalysis}/>
          <Route path='/Mexico-COVID19/sintomas' component={SymptomsMonitor}/>
          <Route path='/Mexico-COVID19/about' component={About}/>

      </Switch>
      <Footer/>
      </div>

    );
  }
}

export default App;
