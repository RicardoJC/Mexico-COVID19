import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import SentimentAnalysis from './SentimentAnalysis';
import SymptomsMonitor from './SymptomsMonitor'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sentimientos' component={SentimentAnalysis}/>
            <Route path='/sintomas' component={SymptomsMonitor}/>
        </Switch>
    );
}

export default Routes;