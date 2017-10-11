import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, IndexRoute, hashHistory} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox, Divider } from 'semantic-ui-react'

// Include your new Components here
import Home from './components/Home/Home.jsx';
import Gallery from './components/Home/Gallery.jsx';
import Detail from './components/Home/Detail.jsx';
import Heading from './components/Home/Heading.jsx';

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
    ( 
    	<Router>
    		<div>
    		<Container>
    			<Heading />
       			<Route exact path ="/" component={Home}/>
      			<Route path="/gallery" component={Gallery} />
      			<Route path="/detail" component={Detail} />
      		</Container>
      		</div>
  		</Router>
    ),
    // Define your router and replace <Home /> with it!
    document.getElementById('app')
);
