import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'FlashCards:decks'

export function fetchData() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function apiAddDeck ({ entry, key }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}
