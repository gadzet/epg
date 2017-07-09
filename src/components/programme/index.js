import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Programme extends Component {
	constructor(){
		super();
	    this.handleScroll = this.handleScroll.bind(this); 
	    this.state = {render: ''};

	}

	  componentDidMount() {
	    window.addEventListener('scroll', this.handleScroll);
	  }
	  componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	  }
	  handleScroll(event) {

	  		let scroll =  window.scrollX;
	  		// not the best way to do it 
		  	for (let ref in this.refs) {
  			let lineOffset = this.props.offset + this.refs[ref].offsetLeft;
  			let offsetLength = this.refs[ref].offsetLeft + this.refs[ref].offsetWidth;
  			let offsetRange = [this.refs[ref].offsetLeft, offsetLength];
  			for(let i = offsetRange[0]; i < offsetRange[1]; i++) {
	  			if(this.props.offset == i - scroll) {
					ReactDOM.findDOMNode(this.refs[ref]).style.background = "red";
					break;
	  			} else  {
	  				ReactDOM.findDOMNode(this.refs[ref]).style.background = "grey";

	  			}
  			}
	  	}		  			

    }

	render() {
		function programmeLength(start, end) {
			let result = end-start;
			return Math.round(result / 60000);
		}

		function getTimeFormat(timestamp) {
			const time = new Date(timestamp );
			const hours = ("0" + time.getHours()).slice(-2);;
			const mins = ("0" + time.getMinutes()).slice(-2);;
			const formatedTime = hours + ":" + mins;
			return formatedTime;


		}

		return(
		
			<div  className="programme__container" onScroll={this.handleScroll} ref="el"
				data-start={this.props.schedule.start}
				data-end={this.props.schedule.end}
				data-length={programmeLength(this.props.schedule.start,this.props.schedule.end)}
				style={{width : programmeLength(this.props.schedule.start,this.props.schedule.end)*6*this.props.zoom}}
				>
					<div className="line"></div>
				{this.props.schedule.title}
			<div>
			<span>{getTimeFormat(this.props.schedule.start)}</span> -
			<span>{getTimeFormat(this.props.schedule.end)}</span>
			</div>
			</div>
			)
	}

	}