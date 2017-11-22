import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'

const DeckCard = ({ card, navigation }) => {
  return (
    <View style={styles.deck}>
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
        <Text style={styles.title}>{card.title}</Text>
        <Text style={styles.amount}>{card.questions.length}</Text>
      </TouchableOpacity>
    </View>
  )
}

const DeckList = ({ decks, navigation }) => {
  return (
    <View style={styles.list}>
      <FlatList
          data={Object.keys(decks)}
          renderItem={(card) => <DeckCard card={decks[card.item]} navigation={navigation}/>}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
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
