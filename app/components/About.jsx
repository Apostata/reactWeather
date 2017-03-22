import React from 'react';

/*
export default class About extends React.Component{
  render() {
    return (
      <h3>About Component</h3>
    );
  }
};
*/
let About = (props)=>{
	 return (
      <div>
      	<h1 className="text-center">About</h1>
      	<p>Esta é uma aplicação feita em react para o curso completo de React</p>
        <p>
          Aqui são algumas das ferramentas usadas:
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - Javascript Framework
          </li>
           <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - Usado para buscar a temperatura por cidade.
            </li>
        </ul>
      </div>
    );
};
export default About

