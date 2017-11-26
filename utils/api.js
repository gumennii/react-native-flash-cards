import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'FlashCards:decks'

export function fetchData() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then((results) => JSON.parse(results))
}

export function apiAddDeck({ key, entry }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function apiAddCard({ key, questions }) {
  return AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
    let currentQuestions = JSON.parse(result)[key].questions
    let updatedQuestion = [...currentQuestions, ...questions]
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [key]: {
        questions: updatedQuestion
      }
    }))
  })
}
