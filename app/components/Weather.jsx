import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';


export default class Weather extends React.Component{
	constructor(){
		super(); // herda as propriedades da classe React.Component
		this.state ={
			isLoading: false
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

		},(errMessage)=>{
			this.setState({isLoading:false});
			alert(errMessage);
		});
	}

	render() {
		let {temp, location, isLoading} = this.state;

		function renderMessage(){
			if(isLoading){
				return <h3 className="text-center">Fetching Weather...</h3>
			}
			else if(temp && location){
				return <WeatherMessage temp={temp} location={location}/>;
			}
		}

	    return (
	      <div>
	      	<h1 className="text-center">Get Weather</h1>
	      	<WeatherForm onSearch={this.handleSearch}/>
	      	{renderMessage()}
	      </div>
	    );
  	}
};