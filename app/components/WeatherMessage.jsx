import React from 'react';

let WeatherMessage = ({temp, location})=>{ //es6 destructuring, variável props em {temp, location}
	//let {temp, location} = props;
    return (
      <h3>A temperatura é de is {temp}{String.fromCharCode(176)}C em {location}</h3>
    );
}
export default WeatherMessage;