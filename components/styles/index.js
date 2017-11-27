import { StyleSheet } from 'react-native'

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
  deckList: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFF'
  },
  deckListItem: {
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
  },
  buttonBlack: {
    backgroundColor: '#000'
  },
  buttonBlackText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  buttonPlain: {
    padding: 15,
    borderRadius: 5
  },
  input: {
    height: 40,
    width: 300,
    marginBottom: 15,
    paddingLeft: 10,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: '#666'
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

export default styles
