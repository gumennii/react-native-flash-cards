import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  render() {
    return (
      <View>
        <Text>{JSON.stringify(props)}</Text>
      </View>
    )
  }
}

export default Quiz
