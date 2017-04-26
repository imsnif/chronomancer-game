import React, { Component } from 'react'
import { observer } from 'mobx-react/native'
import { View, Image, TouchableHighlight } from 'react-native'
import InfoBox from '../info-box'
import styles from './styles'

import steal from '../../assets/items/steal-green.png'
import assistPrevent from '../../assets/items/assist-prevent-green.png'
import reset from '../../assets/items/reset-green.png'

@observer
export default class TimelineSummary extends Component {
  constructor (props) {
    super(props)
    this.navigate = this.navigate.bind(this)
  }
  navigate () {
    this.props.navigator.push({
      screenName: 'Timeline',
      timelineName: this.props.name
    })
  }
  render () {
    const images = {steal, assistPrevent, reset}
    const timelineStore = this.props.timelineStore
    const playersStore = this.props.playersStore
    const timeline = timelineStore.getTimeline(this.props.name)
    const imageToRender = images[timeline.type]
    return (
      <TouchableHighlight onPress={this.navigate}>
        <InfoBox title={this.props.name} image={imageToRender}>
          <View style={styles.wrapper}>
            {
            timeline.players.map(pId => {
              const player = playersStore.players.find(p => p.id === pId)
              return <Image key={player.name} style={styles.image} source={player.image} />
            })
          }
          </View>
        </InfoBox>
      </TouchableHighlight>
    )
  }
}