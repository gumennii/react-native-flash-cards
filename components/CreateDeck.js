import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'

class CreateDeck extends Component {
  static navigationOptions = {
    title: 'New Deck'
  }

  state = { text: '' }

  handleSubmit() {
    this.setState(() => ({ text: '' }))
    this.props.navigation.navigate('DeckList')
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.content}>
          <Text style={styles.title}>What is the title of your deck?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
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

const mapStateToProps = (state, props) => {
  return {
    //card: props.navigation.state.params.card
  }
}

export default connect(mapStateToProps)(CreateDeck)
