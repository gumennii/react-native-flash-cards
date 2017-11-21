import React, { PropTypes } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export const DeckList = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
        <Text>Show a single Deck</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeckList
