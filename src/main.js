import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import Store from 'Store';

// Pages
import Homepage from 'Homepage/Controller.jsx';
import About from 'About/Controller.jsx';
import Calculator from 'Calculator/Controller.jsx';

class App extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Homepage}/>
                    <Route path="/about" component={About}/>
                    <Route path="/calculator" component={Calculator}/>
                </Router>
            </Provider>
        );
    }
}

// initialise app
document.addEventListener('DOMContentLoaded', function(event) { 
    ReactDOM.render(<App />, document.getElementById('app'));
});