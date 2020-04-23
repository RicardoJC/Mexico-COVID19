import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import StatesVisualization from './StatesVisualization';

const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={Home}/>
            <Route path='/estados' component={StatesVisualization}/>
        </Switch>
    );
}

export default Routes;