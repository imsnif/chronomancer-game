import { StyleSheet } from 'react-native'

import common from '../common/styles'

module.exports = StyleSheet.create({
  imageOverlay: common.imageOverlay,
  outerBox: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    borderColor: common.foreGround,
    backgroundColor: common.foreGround,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: common.borderRadius
  },
  titleBar: {
    minHeight: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBox: {
    width: 26,
    height: 26,
    marginLeft: 3,
    flex: 0,
    backgroundColor: common.backGround,
    resizeMode: 'stretch'
  },
  titleTextWithSubtitle: {
    paddingLeft: 5,
    fontFamily: 'telegrama_raw',
    color: common.altText,
    flex: 7,
    textAlign: 'left'
  },
  titleText: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    flex: 7,
    textAlign: 'center'
  },
  subtitleText: {
    fontFamily: 'telegrama_raw',
    color: common.altText,
    flex: 3,
    textAlign: 'center'
  },
  contentBox: {
    margin: 1,
    flex: 13,
    flexDirection: 'column',
    backgroundColor: common.backGround,
    borderColor: common.backGround,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: common.borderRadius
  }
})
