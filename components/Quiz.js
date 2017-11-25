import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  state = {
    current: 0,
    showQuestion: true,
    correctAnswers: 0
  }

  toggleView() {
    this.setState(previousState => ({ showQuestion: !previousState.showQuestion }))
  }

  submitAnswer(status) {
    if (status === 'correct') {
      this.setState((previousState) => ({ correctAnswers: previousState.correctAnswers + 1 }))
    }
    this.changeQuestion()
  }

  changeQuestion() {
    if (this.state.current === this.props.questions.length - 1) {
      this.props.navigation.navigate('QuizResults', {
        correctAnswers: this.state.correctAnswers,
        totalQuestions: this.props.questions.length
      })
    } else {
      this.setState((previousState) => ({ current: previousState.current + 1 }))
    }
  }

  render() {
    let question = this.props.questions[this.state.current].question
    let answer = this.props.questions[this.state.current].answer

    return (
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
            style={[styles.button, {backgroundColor:'#7AC74F', marginBottom: 10}]}
            onPress={() => this.submitAnswer('correct')}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor:'#DB504A'}]}
            onPress={() => this.submitAnswer('incorrect')}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  footer: {
    padding: 45
  },
  deck: {
    padding: 15,
    marginBottom: 15
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    padding: 15,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  toggle: {
    padding: 5,
    color: '#999',
    textAlign: 'center'
  },
  cardsLeft: {
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state, props) => {
  return {
    questions: props.navigation.state.params.card.questions
  }
}

export default connect(mapStateToProps)(Quiz)
