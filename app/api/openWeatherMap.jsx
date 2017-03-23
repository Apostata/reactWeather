import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?&units=metric&appid=038d889f3e3a61330a569a10e6297813';
// 038d889f3e3a61330a569a10e6297813
 
export default {
	getTemp: function(location){
		let encodedLocation = encodeURIComponent(location)
		let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			//debugger
			if(res.data.cod && res.data.message && res.data.list.length > 0){
				return parseFloat(res.data.list[0].main.temp).toFixed(0);
			}
			else{
				throw new Error('Cidade não encontrada!');
			}

		}, function(res){
			throw new Error('Cidade não encontrada!');
		});
	}
}