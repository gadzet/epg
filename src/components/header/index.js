import React, { Component } from 'react';

export class Header extends Component {
	constructor(){
		super();
		this.state = {inputValue: 1};
	}
	componentDidMount() {
    	this.props.sendData(this.state);
    	

	}
	updateInputValue(e) {
	    this.setState({
	      inputValue: e.target.value
	    });
	    this.props.sendData(this.state.inputValue);

  	}
	render(){
		return(

   <div className="header">
       <div className="container">
           <h3 className="pull-left">Title</h3>
            <ul className="header__navigation pull-right">
                <li className="header__navigation--item">
                <input type="range" min="1" max="10"step="1" value={this.state.inputValue}  onChange={this.updateInputValue.bind(this)}/>

                </li>

            </ul>
        </div>
   </div>
);
}
}