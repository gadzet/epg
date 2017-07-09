import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from '../channel/index';
import Programme from '../programme/index';

@connect((store)=> {
	return {
		channel: store,
		channels: store.schedulesByChannel.channels.items
	}
})
// later define function here which will implement selected channel logic

export default class ProgrammeList extends Component {
	constructor(){
		super();
	}
	componentDidMount() {

	}
	render() {
		const items = this.props;
		const offset = this.props.offset;
		const channelList = items.channels.map((channel) =>
    		<Channel 
    			title={channel.title} 
    			logo={channel.images.LOGO}/>
  		);

		const programmeList = items.channels.map(channel => {
		    channel.schedules.sort((a,b)=>a.start - b.start)
		     	return <div className="programme__row" >
		            		{channel.schedules.map(schedule => 
		               		<Programme zoom={this.props.zoom} offset={offset} schedule={schedule}/>)}
	            		</div>
		});	

		return <div className="timeline__list" style={{width:8640 * this.props.zoom}}>    	
					<div className="channel__container">
					{channelList}</div>{programmeList}
				</div>;
	}
	aa
	}