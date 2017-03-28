import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends React.Component{
	
	static defaultProps ={
		title: "Error"
	};

	static propTypes = {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	};

	componentDidMount(){
		/*
		let {title, message} = this.props;
		let modalMarkup = (
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<p>
					<button className="button hollow" data-close="">Okay</button>
				</p>				
			</div>
		);

		let $modal = jQuery(ReactDOMServer.renderToString(modalMarkup));
		jQuery(ReactDOM.findDOMNode(this)).html($modal);
		*/
		let modal = new Foundation.Reveal(jQuery('#error-modal'));
		modal.open();
	}

	render(){
		let {title, message} = this.props;

		return(//div extra resolve o problema do modal sem precisar fazer as coisas extras (comentadas no componentDidMount)
			<div>
				<div id="error-modal" className="reveal tiny text-center" data-reveal="">
					<h4>{title}</h4>
					<p>{message}</p>
					<p>
						<button className="button hollow" data-close="">Okay</button>
					</p>				
				</div>
			</div>
		);
	}
};

/*
------- Recomendado pelo Facebook ----------
ErrorModal.defaultProps ={
	title: "Error"
};

ErrorModal.propTypes = {
	title: React.PropTypes.string,
	message: React.PropTypes.string.isRequired
};*/
export default ErrorModal