import React from 'react';
// react router imports
import {Route, Switch} from 'react-router-dom';

// Include your new Components here
import Home from './Home/Home.jsx';
import Gallery from './Gallery/Gallery.jsx';
import Detail from './Detail/Detail.jsx';
import Heading from './Base/Heading.jsx';

// Semantic Components
import {Container} from 'semantic-ui-react'

const App = () => (
    <div>
        <Heading />
        <Switch>
            <Route exact path ="/" component={Home}/>
            <Route path="/gallery" component={Gallery} />
            <Route path="/detail" component={Detail} />
        </Switch>
    </div>
)

export default App;