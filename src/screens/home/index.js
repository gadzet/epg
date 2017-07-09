import React, { Component } from 'react';
import { Header } from '../../components/header/index'
import Footer from '../../components/footer/index'
import ProgrammeList from '../../components/programme-list/index'
import Timeline from '../../components/timeline/index'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectChannel, fetchChannels } from '../../actions/ChannelActions/index'
import rootReducer from '../../reducers/ChannelReducers/index'

const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, 
    loggerMiddleware
  )
)

store
  .dispatch(fetchChannels())
 
class Home extends Component {
  constructor(props) {
    super(props);
    this.getLineOffset = this.getLineOffset.bind(this);
    this.getZoom = this.getZoom.bind(this);
    this.state = { offset: '', zoom: 1 };
  }

  getLineOffset(val) {
    this.setState({ offset: val});
  }

  getZoom(val) {
    this.setState({ zoom: val.inputValue});
  }

  render() {
    return (
      <div className="App" >
        <Header zoom={this.state.zoom} sendData={this.getZoom}/>
        <Timeline zoom={this.state.zoom} sendData={this.getLineOffset} onDataLoaded={this.getLineOffset}/>
        <ProgrammeList zoom={this.state.zoom} offset={this.state.offset}  store={store}/>
      </div>
    );
  }
}

export default Home;
