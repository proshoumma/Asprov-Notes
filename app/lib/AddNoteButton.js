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

export default class AddNoteButton extends Component {
  render() {
    return (

        <View style={styles.container}>
          <TouchableOpacity onPress={this.handlePress.bind(this)}>
            <Icon name="add-circle" size={56} color={getColor('paperBlue')} />
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
    bottom: 15,
    right: 15,
    backgroundColor: 'white',
    borderRadius: 50
  }
})
