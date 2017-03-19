import React from 'react';

export default class WeatherForm extends React.Component{
 	onFormSubmit = (e)=>{
		//console.log(this);
	  	e.preventDefault();

	  	var location = this.refs.location.value;

	  	if(location.length > 0){
	  		this.refs.location.value = '';
	  		this.props.onSearch(location);//referenciando uma função definida no componente pai (Weather)
	  	}
	}

	render() {
	    return (
	      <form onSubmit={this.onFormSubmit/*.bind(this)*/}>
	      	<input type="text" ref="location" />
	      	<button>Get Weather</button>
	      </form>
	    );
	}
};

//no form onSubmit quando tenta passar this sem usar .bind(this), ele busca primeiramente por .refs em this dentro da função onFormSubmit, que não exite.
//Portanto é necessário usar o bind this passe o WeatherForm como this da função onFormSubmit, assim possibilitando o acesso a propriedade .refs que é herdade da classe React.Componet


//Para evitar o uso do .bind(this), utilizar a arrow function na função, assim o prorama irá passar como this, a classe WeatherForm

//Isso é necessário pois o javascrip define o escope na hora da execução e não da definição