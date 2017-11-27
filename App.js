import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { setLocalNotification } from './utils/notifications'
import Stack from './components/navigation/Stack'

import reducer from './reducers'
const store = createStore(reducer)

export default class App extends Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    )
  }
}
