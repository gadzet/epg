import React, { Component } from 'react';

export default class Channel extends Component {
	render() {
		return(
			<div className="channel__item">
		
				<img src={this.props.logo}/>
			</div>
			)
	}
	}

