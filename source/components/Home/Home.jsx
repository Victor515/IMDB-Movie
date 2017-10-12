import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//import styles from './Home.scss'
import Search from './Search.jsx'

class Home extends Component {
	/*
	constructor(props){
		super(props);
		this.state = { url : "https://api.themoviedb.org/3/search/movie?",
					   api_key: "24e272310ea465a7a1ba7b64ddfcbe5c",
					   requestFailed: false
		};
	}
	*/


/*
	componentDidMount(){
		axios.get('https://api.themoviedb.org/3/search/movie?api_key='+this.state.api_key+'&query=Jack+Reacher')
		.then((response) => {
			console.log(response.data.results);
			return this.setState({data: response.data.results});
		})
		.catch(function (error) {
			console.log(error);
		});

	}
	*/

	

    render() {
    	return(
    			<Container>
    					<Search />
    			</Container>

        )
    }
}

export default Home
