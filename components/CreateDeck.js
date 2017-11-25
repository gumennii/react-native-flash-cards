import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { apiAddDeck } from '../utils/api'

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
    apiAddDeck({ key, entry })
    
    this.setState({ title: '' })
    this.props.navigation.navigate('DeckList')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={styles.title}>What is the title of your deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(title) => this.setState({ title })}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleSubmit()}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#000'
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF'
  },
  input: {
    height: 40,
    width: 300,
    marginBottom: 15,
    paddingLeft: 10,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5
  }
})

export default connect()(CreateDeck)
