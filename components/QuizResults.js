import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Results'
  }

  goToDeckList() {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    }))
  }

  calculatePrecentage() {
    let value = (this.props.quiz.correctAnswers / this.props.quiz.totalQuestions) * 100
    return (
      parseFloat(value) + "%"
    )
  }

  render() {
    return (
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
            style={[styles.button, {backgroundColor:'#000'}]}
            onPress={() => this.goToDeckList()}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>Go Home</Text>
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
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

const mapStateToProps = (state, props) => {
  return {
    quiz: props.navigation.state.params
  }
}

export default connect(mapStateToProps)(Quiz)
