import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import DeckList from '../DeckList'
import Deck from '../Deck'
import Quiz from '../Quiz'
import CreateDeck from '../CreateDeck'
import CreateCard from '../CreateCard'

import Tabs from './Tabs'

const Stack = StackNavigator({
  Home: { screen: Tabs },
  Deck: { screen: Deck },
  Quiz: { screen: Quiz },
  CreateDeck: { screen: CreateDeck },
  CreateCard: { screen: CreateCard }
})

export default Stack
