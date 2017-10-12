import React, { Component } from 'react'
import { Button, Container, Header, Input, Segment, Dropdown, Checkbox, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import orderBy from "lodash"

import List_ from './List_.jsx'


class Search extends Component{
	constructor(){
		super();
		this.state = { api_key: "24e272310ea465a7a1ba7b64ddfcbe5c",
					   sort_By : 'Title',
					   data : null,
					   order : 'ascending'
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSortby = this.handleSortby.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
	}

	filter(results){
		const order = this.state.order;
		let sortby = this.state.sort_By;
		//let results = this.state.data;
		
		if(!results){
			return;
		}

		if(sortby === 'Rating'){
			sortby = 'vote_average';
		}

		if(sortby === 'Title'){
			sortby = 'title'
		}

		// sort in ascending order
		if(order === 'ascending'){
			results = _.orderBy(results, sortby, 'asc');
		}

		// sort in descending order
		if(order === 'descending'){
			results = _.orderBy(results, sortby, 'desc');
		}

		return results;


	}

	handleSearch(e){
		// take the value in the input field
		const value = e.target.value;

		// if search field is empty
		if(!value){
			this.setState({data : null}, function(){
				//console.log(this.state.data);
			});
		}

		else{
		axios.get('https://api.themoviedb.org/3/search/movie?api_key='+this.state.api_key+'&query='+value)
			 .then((response) => {
			 	// filter the results here before setting it in this.state
			 	console.log(response.data);
			 	let results = this.filter(response.data.results);
			 	console.log(results);
				return this.setState({data: results});
		})
			.catch(function (error) {
			console.log(error);
		});
		}

	}

	handleSortby(e, val){
		this.setState({sort_By : val.value}, function(){ // use callback function to immediately change the results list
			if(this.state.data){
				let results = this.filter(this.state.data);
				this.setState({data:results});
			}
		});
	}

	handleCheckbox(e, val){
		this.setState({order: val.value}, function(){ // use callback function to immediately change the results list
			if(this.state.data){
				let results = this.filter(this.state.data);
				this.setState({data:results});
			}

		});
	}





	render() {

		return(
			<Container textAlign = 'center'>
			<Segment  inverted color = 'grey' size = 'large'>
    				<Input size = 'large' fluid focus placeholder = 'Search for movies' onChange = {this.handleSearch}/>
    					<Dropdown  placeholder = "Title" search selection onChange = {this.handleSortby} 
    							   options={[{text:'Title', value : 'Title'}, 
    						                 {text:'Rating',  value : 'Rating'}]} />
    					<Checkbox  radio label='ascending' value='ascending' checked = {this.state.order === 'ascending'} 
    							   onChange = {this.handleCheckbox} />
    					<Checkbox  radio label='descending' value='descending' checked = {this.state.order === 'descending'} 
    							   onChange = {this.handleCheckbox} />
    		</Segment>
    		<List_ data = {this.state.data} />
    		</Container>
		)
	}
}

export default Search
