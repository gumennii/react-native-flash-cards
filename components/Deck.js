import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { card } = navigation.state.params
    return {
      title: card.title
    }
  }

  render() {

    let { card, navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.deck}>
            <Text style={styles.title}>{card.title}</Text>
            <Text style={styles.amount}>{card.questions.length}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, {marginBottom: 10}]}
            onPress={() => navigation.navigate('CreateQuestion')}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor:'#000'}]}
            onPress={() => navigation.navigate('Quiz', { card: card })}>
            <Text style={[styles.buttonText, {color: '#FFF'}]}>Start Quiz</Text>
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
  amount: {
    textAlign: 'center',
    fontSize: 16
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
    card: props.navigation.state.params.card
  }
}

export default connect(mapStateToProps)(Deck)
