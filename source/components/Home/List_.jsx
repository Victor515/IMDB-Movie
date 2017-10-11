import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox, Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class List_ extends Component{


	render(){

		if(!this.props.data){
			return <div></div>;
		}

		// render the result list
		else{
		return(
		<div>
			{this.props.data.map(function(result){
				let data = {movieList:this.props.data, currMovie:result};
				let path = {
					pathname:'/detail',
					state:data
				}
				return(
					<Segment centered>
						<p>{"Title: " + result.title}</p>
						<p>{"Rating: "+ result.vote_average}</p>
						<Link to = {path}><Image centered src = {"https://image.tmdb.org/t/p/w500/" + result.poster_path} size = 'small' /></Link>
					</Segment>

					);

			},this)}
		</div>
		);
		}
		
	}
}

export default List_