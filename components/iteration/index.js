import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import Power from '../power'

import styles from './styles'
import commonStyles from '../common/styles'

export default class Iteration extends Component {
  constructor (props) {
    super(props)
    this._navigateToPower = this._navigateToPower.bind(this)
  }
  _navigateToPower () {
    const { playerId, timelineName } = this.props.power
    this.props.navigator.push({
      screenName: 'Bidding',
      playerId,
      timelineName
    })
  }
  render () {
    const { power } = this.props
    const { playerId, timelineName } = power
    return (
      <TouchableHighlight
        underlayColor={commonStyles.backGround}
        onPress={this._navigateToPower}
      >
        <View style={styles.iterationItem}>
          <Text style={styles.timelineName}>{timelineName}</Text>
          <Power style={{flex: 1}} playerId={playerId} timelineName={timelineName} />
        </View>
      </TouchableHighlight>
    )
  }
}
