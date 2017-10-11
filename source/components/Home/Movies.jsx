import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Movies extends Component{
	render(){

		return (<div>
			{this.props.movies[this.props.genre].map(function(movie){
				let data = {movieList:this.props.movies[this.props.genre], currMovie: movie};
				let path = {
					pathname : '/detail',
					state: data
				}
				return(<Link to = {path}><Image inline centered bordered src = {"https://image.tmdb.org/t/p/w500/" + movie.poster_path} 
					size = 'small' /></Link>);
			},this)}
			</div>);
	}
}


export default Movies