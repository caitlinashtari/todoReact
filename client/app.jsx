import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx';
//entry point for app when we go to localhost, makes request to server, serves up index.html with div 'app' = what we want to attach application to

//reactDOM gives you easier access for dom manipulation outside of react; works with react render, findDOMNode--> grab random pieces of html and return them like getElementById
ReactDOM.render(<Routes />, document.getElementById('App'));
