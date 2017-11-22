import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { card } = navigation.state.params

    return {
      title: card.title
    }
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props, null, '')}</Text>
        <Text>Individual Deck</Text>
      </View>
    )
  }
}

export default Deck
