import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history';

// - - > REACT PAGES
import HomePage from './Home';

export default class Routes extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </Router>
        );
    }
}