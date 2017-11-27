import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'
import styles from './styles'

class CreateCard extends Component {
  static navigationOptions = {
    title: 'Add Card'
  }

  state = {
    question: '',
    answer: ''
  }

  handleSubmit() {
    let key = this.props.card.title
    let question = this.state.question
    let answer =  this.state.answer
    let questions = [ { question, answer }]

    addCardToDeck({ key, questions })

    this.props.addCard(key, questions)

    this.setState(() => ({ question: '', answer: '' }))
    this.props.navigation.goBack()
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={styles.title}>Add new Card</Text>
          <Text style={styles.label}>Question</Text>
          <TextInput
            style={styles.input}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.text}
          />
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleSubmit()}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    card: props.navigation.state.params.card,
    decks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (key, questions) => dispatch(addCard({title: key, questions})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard)
