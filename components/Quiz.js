import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications'
import styles from './styles'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  state = {
    current: 0,
    correctAnswers: 0,
    showQuestion: true,
    showResults: false
  }

  toggleView() {
    this.setState(previousState => ({ showQuestion: !previousState.showQuestion }))
  }

  submitAnswer(status) {
    if (status === 'correct') {
      this.setState((previousState) => ({ correctAnswers: previousState.correctAnswers + 1 }))
    }

    clearLocalNotification()
      .then(setLocalNotification)

    this.changeQuestion()
  }

  changeQuestion() {
    if (this.state.current === this.props.questions.length - 1) {
      this.setState((previousState) => ({ showResults: true }))
    } else {
      this.setState((previousState) => ({ current: previousState.current + 1 }))
    }
  }

  calculatePrecentage() {
    let value = (this.state.correctAnswers / this.props.questions.length) * 100
    return (
      parseFloat(value) + "%"
    )
  }

  render() {
    console.log(this.props.card)
    let question = this.props.questions[this.state.current].question
    let answer = this.props.questions[this.state.current].answer

    return (this.state.showResults === false) ? (
      <View style={styles.container}>
        <View>
          <Text style={styles.cardsLeft}>{`Card ${this.state.current + 1} of ${this.props.questions.length}`}</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>
              {this.state.showQuestion ? question : answer}
            </Text>
            <TouchableOpacity onPress={() => this.toggleView()}>
              <Text style={styles.toggle}>{this.state.showQuestion ? 'Show Answer' : 'Show Question'}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.buttonPlain, {backgroundColor:'#7AC74F', marginBottom: 10}]}
            onPress={() => this.submitAnswer('correct')}>
            <Text style={styles.buttonBlackText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonPlain, {backgroundColor:'#DB504A'}]}
            onPress={() => this.submitAnswer('incorrect')}>
            <Text style={styles.buttonBlackText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>
              Your Result is {this.calculatePrecentage()}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: 10}]}
            onPress={() => this.props.navigation.navigate('Quiz', { card: this.props.card })}>
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor:'#000'}]}
            onPress={() => this.props.navigation.navigate('Deck', { card: this.props.card })}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    card: props.navigation.state.params.card,
    questions: props.navigation.state.params.card.questions
  }
}

export default connect(mapStateToProps)(Quiz)
