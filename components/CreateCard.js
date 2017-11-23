import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

class CreateCard extends Component {
  static navigationOptions = {
    title: 'Add Card'
  }

  render() {
    return (
      <View>
        <Text>Create Question</Text>
      </View>
    )
  }
}

export default CreateCard
