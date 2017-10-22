import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class Heading  extends Component{
	render() {
		return(
            <Container>
			<Header as = "h1" textAlign = 'center' color = 'blue'>TMDB Movie</Header>
                        <Button><Link to="/">search</Link></Button>
                        <Button><Link to="/gallery">gallery</Link></Button>
            </Container>
		);
	}
}

export default Heading