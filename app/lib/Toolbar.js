//
// Toolbar Component
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Typo } from './Typography'
import { getColor } from './helpers'

export default class Toolbar extends Component {
  render() {
    const {
      color,
      title
    } = this.props

    return (
      <View style={[ styles.toolbar, { backgroundColor: getColor(color) } ]}>
        <Text style={[ styles.title, Typo.toolbarTitle ]}>
          {title.toUpperCase()}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    justifyContent: 'center'
  },
  title: {
    marginLeft: 16,
    color: 'white'
  }
})
