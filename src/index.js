import React from 'react';
import ReactDOM from 'react-dom';

// - - > Router Components
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './index.scss';

ReactDOM.render(
    <Router>
        <div>
            <Routes />
        </div>
    </Router>,
    document.getElementById('root')
);
