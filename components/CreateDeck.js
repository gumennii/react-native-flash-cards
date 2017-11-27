import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import styles from './styles'

class CreateDeck extends Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  state = { title: '' }

  handleSubmit() {
    let key = this.state.title
    let entry = {
      title: key,
      questions: []
    }

    this.props.dispatch(addDeck({
      [key]: entry
    }))

    saveDeckTitle({ key, entry })

    this.setState({ title: '' })
    this.props.navigation.navigate('DeckList')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={[styles.title, {marginBottom: 10}]}>What is the title of your deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => this.setState({ title })}
            value={this.state.text}
          />
          <TouchableOpacity
            style={[styles.button, styles.buttonBlack]}
            onPress={() => this.handleSubmit()}>
            <Text style={[styles.buttonText, styles.buttonBlackText]}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(CreateDeck)
