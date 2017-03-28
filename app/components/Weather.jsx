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
			errorMessage: undefined,
		}
	}
	

	handleSearch = (location)=>{
		//debugger;
		this.setState({
			isLoading:true,
			errorMessage:undefined,
			location: undefined,
			temp:undefined
		});

		openWeatherMap.getTemp(location).then((temp)=>{

			this.setState({
				location,
				temp,
				isLoading: false
			});

		},(err)=>{
			this.setState({
				isLoading:false,
				errorMessage:err.message
			});
		});
	}

	componentDidMount(){
		var location = this.props.location.query.location; //pega da barra de endereços a variavel location

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/'; //reseta a url da barra de endereço, tirando a variavel location
		}
	}

	componentWillReceiveProps(newProps){
		var location = newProps.location.query.location; //pega da barra de endereços a variavel location

		if(location && location.length > 0){
			this.handleSearch(location);
			window.location.hash = '#/'; //reseta a url da barra de endereço, tirando a variavel location
		}
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
	      	<h1 className="text-center page-title">Get Weather</h1>
	      	<WeatherForm onSearch={this.handleSearch}/>
	      	{renderMessage()}
	      	{renderError()}
	      </div>
	    );
  	}
};