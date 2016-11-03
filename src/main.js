import React from 'react';
import App from 'App.jsx';
import ReactDOM from 'react-dom';

// initialise app
document.addEventListener("DOMContentLoaded", function(event) { 
    ReactDOM.render(<App />, document.getElementById('app'));
});