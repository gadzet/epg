import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Programme extends Component {
	constructor(){
		super();
	    this.handleScroll = this.handleScroll.bind(this); 
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(event) {
	  	for (let ref in this.refs) {
			let offsetLength = this.refs[ref].offsetLeft + this.refs[ref].offsetWidth;
			let offsetRange = [this.refs[ref].offsetLeft, offsetLength];
			for(let i = offsetRange[0]; i < offsetRange[1]; i++) {
	  			if(this.props.offset == i -  window.scrollX) {
					ReactDOM.findDOMNode(this.refs[ref]).style.background = "#3C3C3C";
					ReactDOM.findDOMNode(this.refs[ref]).style.borderColor = "#494949";
					break;
	  			} else  {
	  				ReactDOM.findDOMNode(this.refs[ref]).style.background = "#000000";
	  				ReactDOM.findDOMNode(this.refs[ref]).style.borderColor = "#252525";

	  			}
			}
  		}		  			
    }

   	programmeLength(start, end) {
		let result = end-start;
		return Math.round(result / 60000);
	}

	getTimeFormat(timestamp) {
		const time = new Date(timestamp );
		const hours = ("0" + time.getHours()).slice(-2);;
		const mins = ("0" + time.getMinutes()).slice(-2);;
		const formatedTime = hours + ":" + mins;

		return formatedTime;
	}

	render() {
		return(
			<div className="programme__container" onScroll={this.handleScroll} ref="el"
				data-start={this.props.schedule.start}
				data-end={this.props.schedule.end}
				data-length={this.programmeLength(this.props.schedule.start,this.props.schedule.end)}
				style={{width : this.programmeLength(this.props.schedule.start,this.props.schedule.end)*6*this.props.zoom}}
				>
				<div className="programme__container__inner">
					{this.props.schedule.title}
					<div className="programme__container__inner--sub">
						<span>
							{this.getTimeFormat(this.props.schedule.start)}
						</span> -
						<span>
							{this.getTimeFormat(this.props.schedule.end)}
						</span>
					</div>
				</div>
			</div>
		)
	}
}