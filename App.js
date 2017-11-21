import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import CreateDeck from './components/CreateDeck'
import CreateQuestion from './components/CreateQuestion'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DeckList />
          <Deck />
          <Quiz />
          <CreateDeck />
          <CreateQuestion />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
