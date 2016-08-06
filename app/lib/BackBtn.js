//
// Add New Note Button
//
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { Typo } from './Typography'
import { getColor } from './helpers'
import Icon from './Icon'

export default class BackBtn extends Component {
  render() {
    return (

        <View style={styles.container}>
          <TouchableOpacity onPress={this.handlePress.bind(this)}>
            <Icon name="close" size={36} color={getColor('#ffffff')} />
          </TouchableOpacity>
        </View>
    )
  }

  handlePress() {
    this.props.onBtnPress()
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    padding: 5,
    bottom: 15,
    left: 15,
    backgroundColor: getColor('paperPink'),
    borderRadius: 50
  }
})
