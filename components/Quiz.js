import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

const Quiz = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
}


export default Quiz
