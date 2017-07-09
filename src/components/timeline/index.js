import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimelineElement from '../timeline-element/index';

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
      const start = 1499119200000;
      const end = 1499205300000;
      const step = 60000;
      for(let i = start; i <= end;i+=step) {
        const date = new Date(i);
		const hours = ("0" + date.getHours()).slice(-2);
		const mins = ("0" + date.getMinutes()).slice(-2);
   		const obj = {
   			date: date.toString(),
   			timestamp: i,
   	        time: hours + ":" + mins,
          	hour: date.getHours(),
          	minutes: date.getMinutes(),
          	display: mins === "00"
   		};

       arr.push(obj);

      }
      return arr;
    }


  render() {

  	const list = this.arr;
	const timeList = list.map((element) =>
		<TimelineElement zoom={this.props.zoom} element={element}/>
		);
    return (
      <div  className="timeline__container" style={{width:8640 * this.props.zoom}}>
      <div  className="timeline__container--line" ref="el" >
			      </div>
      	{timeList}
      </div>
    ); 
  }
}

