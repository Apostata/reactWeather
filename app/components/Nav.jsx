import React from 'react';
import {Link, IndexLink} from 'react-router';

export default class Nav extends React.Component{
	onSearch = (e) => {
		e.preventDefault();
		let location = this.refs.location.value;
		let encodedeLocation = encodeURIComponent(location);
		
		if(location.length > 0){
			this.refs.location.value = "";
			window.location.hash = '#/?location='+ encodedeLocation;	
		}		
	}

	render(){
		return (
		    <div className="top-bar">
		    	<div className="top-bar-left">
		    		<ul className="menu">
		    			<li className="menu-text">React Weather app</li>
		    			<li>
		    				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
		    			</li>
		    			<li>
		    				<Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
		    			</li>
		    			<li>
		    				<Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
		    			</li>
		    		</ul>
		    	</div>

		    	<div className="top-bar-right">
		    		<form onSubmit={this.onSearch}>
		    			<ul className="menu">
		    				<li>
		    					<input type="search" placeholder="Buscar temperatura por cidade" ref="location"/>
		    				</li>
		    				<li>
		    					<input type="submit" className="button" value="Buscar temperatura"/>
		    				</li>
		    			</ul>
		    		</form>
		    	</div>
		    </div>
		);
	}
}