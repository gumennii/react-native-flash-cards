import React, {PropTypes} from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

export const Test = (props) => {
  return (
    <View>
      <Text style={{fontSize: 10}}>{JSON.stringify(props, null, '\t')}</Text>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(Test)
