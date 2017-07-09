import { combineReducers } from 'redux';
import { REQUEST_CHANNELS, RECEIVE_CHANNELS, SELECT_CHANNEL } from '../../actions/ChannelActions/index';

function selectedChannel(state = 'all', action) {
  switch (action.type) {
    case SELECT_CHANNEL:
      return action.id
    default:
      return state
  }
}
function channels(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_CHANNELS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_CHANNELS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.channels,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}
function schedulesByChannel(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CHANNELS:
    case REQUEST_CHANNELS:
        console.log(' ----- ');
        console.log(state);
      return Object.assign({}, state, {
        channels: channels(state[action.channel], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  schedulesByChannel,
  selectedChannel
})

export default rootReducer
