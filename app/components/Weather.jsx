import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';


export default class Weather extends React.Component{
	constructor(){
		super(); // herda as propriedades da classe React.Component
		this.state ={
			isLoading: false,
			errorMessage: undefined
		}
	}
	

	handleSearch = (location)=>{
		//debugger;
		this.setState({isLoading:true});
		openWeatherMap.getTemp(location).then((temp)=>{

			this.setState({
				location,
				temp,
				isLoading: false
			});

		},(e)=>{
			this.setState({
				isLoading:false,
				errorMessage:e.message
			});
		});
	}

	render() {
		let {temp, location, isLoading, errorMessage} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>
			}
			else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

		function renderError(){
			if(typeof errorMessage ==="string"){
				return(
					<ErrorModal message={errorMessage}/>
				)
			}
		}

	    return (
	      <div>
	      	<h1 className="text-center">Get Weather</h1>
	      	<WeatherForm onSearch={this.handleSearch}/>
	      	{renderMessage()}
	      	{renderError()}
	      </div>
	    );
  	}
};