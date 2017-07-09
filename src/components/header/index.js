import React, { Component } from 'react';

export class Header extends Component {
	constructor(props){
		super(props);
		this.state = {inputValue: 1};
	}
	componentDidMount() {
    	this.props.sendData(this.state);

	}
	updateInputValue(e) {
	    this.setState({
	      inputValue: e.target.value
	    });
	    this.props.sendData(this.state);
  	}
	render(){
		return(
		   	<div className="header" style={{width: 8640 * this.props.zoom}}>
		       	<div className="container">
		           <h3 className="pull-left">EPG - screen</h3>
		            <ul className="header__navigation pull-left">
		                <li className="header__navigation--item">
		                <input 
		                	type="range" 
		                	min="1" 
		                	max="5"
		                	step="1" 
		                	value={this.state.inputValue}  
		                	onChange={this.updateInputValue.bind(this)}/>
		                </li>

		            </ul>
		        </div>
		   	</div>
		);
	}
}