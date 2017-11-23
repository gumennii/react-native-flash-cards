import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'

const DeckCard = ({ card, navigation }) => {
  return (
    <View style={styles.deck} key={card.title}>
      <TouchableOpacity onPress={() => navigation.navigate('Deck', { card })}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.amount}>{card.questions.length}</Text>
      </TouchableOpacity>
    </View>
  )
}

class DeckList extends Component {
  static navigationOptions = {
    title: 'Decks'
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.keys(this.props.decks)}
          keyExtractor={(card) => card}
          renderItem={(card) => <DeckCard card={this.props.decks[card.item]} navigation={this.props.navigation} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF'
  },
  deck: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  amount: {
    textAlign: 'center'
  }
})

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)
