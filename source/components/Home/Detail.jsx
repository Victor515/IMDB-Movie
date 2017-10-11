import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import findIndex from 'lodash'

class Detail extends Component{
	constructor(props){
		super(props);
		this.state = this.props.location.state;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, val){

		let movie = this.state.currMovie;
		let movieList = this.state.movieList;
		let index = _.findIndex(movieList, movie);
		if(val.className === 'left'){
			if(index === 0){
				movie = movieList[movieList.length - 1];
			}

			else{
				movie = movieList[index - 1];
			}
		}

		else if(val.className === 'right'){
			if(index === movieList.length - 1){
				movie = movieList[0];
			}

			else{
				movie = movieList[index + 1];
			}

		}

		this.setState({currMovie:movie});

	}

	render(){
		return(
				
				<Segment>
				<Button floated = 'left' onClick = {this.handleClick} className = 'left'>&#10094;</Button>
				<Button floated = 'right' onClick = {this.handleClick} className = 'right'>&#10095;</Button>
				<Header as = "h1" textAlign = 'center' color = 'orange'>{this.state.currMovie.title}</Header>
				<Image src = {"https://image.tmdb.org/t/p/w500"+this.state.currMovie.poster_path} size = 'medium' inline/>
				<Container text>
					<p>{'Release date: '+this.state.currMovie.release_date}</p>
					<p>{'Rating: ' + this.state.currMovie.vote_average}</p>
					<Header as = 'h2' textAlign = 'center' color = 'orange'>Overview</Header>
					<p>{this.state.currMovie.overview}</p>
				</Container>
				</Segment>
			);
	}
}

export default Detail;