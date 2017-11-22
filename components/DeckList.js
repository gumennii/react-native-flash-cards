import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const DeckList = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
        <Text>{JSON.stringify(props)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)
