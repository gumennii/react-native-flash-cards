import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import CreateDeck from './components/CreateDeck'
import CreateQuestion from './components/CreateQuestion'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
        <Deck />
        <Quiz />
        <CreateDeck />
        <CreateQuestion />
      </View>
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
