import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, TouchableOpacity, FlatList} from 'react-native'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import styles from './styles'

const DeckCard = ({ card, navigation }) => {
  return (
    <View style={styles.deckListItem} key={card.title}>
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

  componentDidMount() {
    getDecks()
      .then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  render() {
    return (
      <View style={styles.deckList}>
        <FlatList
          data={Object.keys(this.props.decks)}
          keyExtractor={(card) => card}
          renderItem={(card) => <DeckCard card={this.props.decks[card.item]} navigation={this.props.navigation} />}
        />
      </View>
    )
  }
}

const mapStateToProps = (decks) => {
  return { decks }
}

export default connect(mapStateToProps)(DeckList)
