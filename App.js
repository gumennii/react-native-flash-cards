import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import CreateDeck from './components/CreateDeck'
import CreateQuestion from './components/CreateQuestion'

import reducer from './reducers'
const store = createStore(reducer)

const Stack = StackNavigator({
  DeckList: { screen: DeckList },
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  CreateDeck: { screen: CreateDeck },
  CreateQuestion: { screen: CreateQuestion }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    )
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
