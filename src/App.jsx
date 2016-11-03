import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router';

import Store from 'Store';

// Pages
import Homepage from 'Routes/Homepage/Controller.jsx';
import About from 'Routes/About/Controller.jsx';

class App extends React.Component {

    render() {
        return (
            <Provider store={Store}>
                <Router history={browserHistory}>
                    <Route path="/" component={Homepage}/>
                    <Route path="/about" component={About}/>
                </Router>
            </Provider>
        );
    }
}


export default App;