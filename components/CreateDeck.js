import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class CreateDeck extends Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  render() {
    return (
      <View>
        <Text>Create Deck</Text>
      </View>
    )
  }
}

export default CreateDeck
