import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import uniqBy from 'lodash'

import Movies from './Movies.jsx'

class Gallery extends Component{
	constructor(){
		super();
		this.state = {
					   api_key: "24e272310ea465a7a1ba7b64ddfcbe5c",
					   genres: null,
					   movies: {'All':[]},
					   selected_genre : 'All'
					   
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+this.state.api_key+'&language=en-US')
			 .then((response) => {
			 	// get all genres
			 	console.log(response.data.genres);
			 	this.setState({genres:response.data.genres});
				return response.data.genres;
		})
			 .then((genres) => {
			 	for(let i = 0; i < genres.length; i++){
			 		this.getMovie(genres[i]);
			 	}

			 	return;


			 })
			.catch(function (error) {
			console.log(error);
		});


	}

	getMovie(genre){
		let id = genre.id;
		axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+this.state.api_key+'&language=en-US&sort_by=vote_average.desc&vote_count.gte=100&with_genres='+id)
			 .then((response) => {
			 	let movie = this.state.movies;
			 	movie[genre.name] = response.data.results;
			 	
			 	movie['All'] = movie['All'].concat(response.data.results);
			 	movie['All'] = _.uniqBy(movie['All'], 'id');
			 	this.setState({movies:movie}, function(){
			 	});
		})
			.catch(function (error) {
			console.log(error);
		});
	}

	handleClick(e, val){
		//handle clicks on buttons
		this.setState({selected_genre:val.children}, function(){
		});

	}
/*
	getALL(){
		let movie = this.state.movies;
		let all_movie = [];
		console.log(movie);
		for(let key in movie){
			all_movie = all_movie.concact(movie[key]);
		}
		console.log(all_movie);
		movie['All'] = all_movie;
		this.setState({movies:movie});

	}
*/
	render(){
		if(this.state.genres === null){
			return(
				<div>Gallery</div>
			);
		}

		return(
				<Segment>
					<Button onClick = {this.handleClick}>All</Button>
					{this.state.genres.map(function(genre){
						return(<Button key = {genre.id} onClick = {this.handleClick}>{genre.name}</Button>);
					}, this)}
				<Movies movies = {this.state.movies} genre = {this.state.selected_genre}/>
				</Segment>
			);
	}
}

export default Gallery