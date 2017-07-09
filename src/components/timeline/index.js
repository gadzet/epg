import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimelineElement from '../timeline-element/index';
import DAY  from '../../utils/defaults';

export default class Timeline extends Component {
	constructor(props) {
 		super(props); 
   		this.arr = this.generateTimelineArray();
 	}

	componentDidMount() {
   	this.props.sendData(this.refs.el.offsetLeft);
	}

  generateTimelineArray() {
    let arr =[];

    for(let i = DAY.start; i <= DAY.end;i+=DAY.step) {
      const date = new Date(i);
  		const hours = ("0" + date.getHours()).slice(-2);
  		const mins = ("0" + date.getMinutes()).slice(-2);
     
      arr.push({
        date: date.toString(),
        timestamp: i,
        time: hours + ":" + mins,
        hour: date.getHours(),
        minutes: date.getMinutes(),
        display: mins === "00"
      });
    }
      return arr;
  }


  render() {
  	const timeList = this.arr.map((element) =>
		  <TimelineElement zoom={this.props.zoom} element={element}/>
		);
    
    return (
      <div 
        className="timeline__container" 
        style={{width:8640 * this.props.zoom}}
      >
        <div 
          className="timeline__container--line" 
          ref="el" 
        >
          <span className="fatso"></span>
			  </div>
      	{timeList}
      </div>
    ); 
  }
}

