import fetch from 'isomorphic-fetch'
import { BASE_URL } from '../../utils/env';

export const SELECT_CHANNEL = 'SELECT_CHANNEL'

export function selectChannel(id) {
  return {
    type: SELECT_CHANNEL,
    id
  }
}

export const REQUEST_CHANNELS = 'REQUEST_CHANNELS'

function requestChannels(channel) {
  return {
    type: REQUEST_CHANNELS,
    channel
  }
}

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'

function receiveChannels(channel, json) {
  return {
    type: RECEIVE_CHANNELS,
    channel,
    channels: json.find(chan => chan.id === channel) || json,
    receivedAt: Date.now()
  }
}


export function fetchChannels(channel) {
  const URL = `${BASE_URL}/epg`;
  return function (dispatch) {
    dispatch(requestChannels(channel))
    return fetch(URL)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        dispatch(receiveChannels(channel, json))
      )
  }
}
