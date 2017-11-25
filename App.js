import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import CreateDeck from './components/CreateDeck'
import CreateCard from './components/CreateCard'
import QuizResults from './components/QuizResults'
import Test from './components/Test'

import reducer from './reducers'
const store = createStore(reducer)

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
    }
  }
})

const Stack = StackNavigator({
  Home: { screen: Tabs },
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  CreateDeck: { screen: CreateDeck },
  CreateCard: { screen: CreateCard },
  QuizResults: { screen: QuizResults },
  Test: { screen: Test }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    )
  }
}
