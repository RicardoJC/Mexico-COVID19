import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import SentimentAnalysis from './SentimentAnalysis';
import SymptomsMonitor from './SymptomsMonitor'
import About from './About';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sentimientos' component={SentimentAnalysis}/>
            <Route path='/sintomas' component={SymptomsMonitor}/>
            <Route path='/about' component={About}/>
        </Switch>
    );
}

export default Routes;