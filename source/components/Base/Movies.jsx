import React, { Component } from 'react'
import {Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Movies extends Component{
	render(){

		return (<div>
			{this.props.movies[this.props.genre].map(function(movie){
				let data = {movieList:this.props.movies[this.props.genre], currMovie: movie};
				let path = {
					pathname : '/detail',
					state: data
				}
				return(<Link to = {path} key = {movie.id}><Image inline centered bordered src = {"https://image.tmdb.org/t/p/w500/" + movie.poster_path} 
					size = 'small' /></Link>);
			},this)}
			</div>);
	}
}

Movies.propTypes = {
	movies: PropTypes.object.isRequired,
	genre: PropTypes.string.isRequired
}


export default Movies