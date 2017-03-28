import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

//load foundation
import 'style!css!foundation-sites/dist/foundation.min.css';
import 'style!css!sass!aplicationStyles';
jQuery(document).foundation();

ReactDOM.render(//se não encontrar about e nem examples então ele carrega weather que é o index
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    	<Route path="about" component={About}/>
    	<Route path="examples" component={Examples}/>
    	<IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
