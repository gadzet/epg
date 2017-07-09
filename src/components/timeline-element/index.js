import React, { Component } from 'react';

export default class TimelineElement extends Component {
	constructor(props) {
		super(props);
	}

    render() {


        if(this.props.element.display) {
        return(        
                <span style={{width: 6 * this.props.zoom}}  className="timeline__element">
                	<span className="timeline__element--hour">
                		{this.props.element.time}
                	</span>
                </span>
            )
        } else {
        return(        
                <span style={{width: 6 * this.props.zoom}}  className="timeline__element"></span>
            )
        }
    }	
}

