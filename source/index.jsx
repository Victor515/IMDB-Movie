import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

import App from './components/App.jsx';



// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
    ( 
    	<Router>
			<App />
  		</Router>
    ),
    document.getElementById('app')
);
