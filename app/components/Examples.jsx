import React from 'react';
import {Link} from 'react-router';

let Examples = (props)=>{
	return (
      <div>
      	<h1 className="text-center page-title">Examples</h1>
      	<p>Aqui estão alguns exemplos de localizações</p>
      	<ol>
      		<li>
      			<Link to="/?location=são paulo">São Paulo, SP</Link>
      		</li>
      		<li>
      			<Link to="/?location=rio">Rio, Brasil</Link>
      		</li>
      	</ol>
      </div>
    );
};
export default Examples;