import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import SentimentAnalysis from './SentimentAnalysis';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sentimientos' component={SentimentAnalysis}/>
        </Switch>
    );
}

export default Routes;