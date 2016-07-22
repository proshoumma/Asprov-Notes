import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  BackAndroid,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'

import Toolbar from '../lib/Toolbar'
import TickBtn from '../lib/TickBtn'
import BackBtn from '../lib/BackBtn'
import { styles } from './styles'
import { getColor } from '../lib/helpers'
import { Typo } from '../lib/Typography'
import { addNote } from '../actions'

class NewNote extends Component {
  constructor(props) {
    super(props);

    this._handleBackButton = this._handleBackButton.bind(this)

    this.state = {
      title: '',
      desc: ''
    }
  }

  componentDidMount() {
    BackAndroid.addEventListener('backPressed', this._handleBackButton)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('backPressed', this._handleBackButton)
  }

  _handleBackButton() {
    if (this.state.title == '') {
      this.goBack()
    } else {
      this.addNote()
    }
    this.goBack()
    return true
  }

  render() {
    return (
      <View style={ styles.addNotesContainer }>
        <StatusBar
          backgroundColor={getColor('paperTeal700')}
          barStyle="light-content"
          animated={true}
        />
        <Toolbar title="Add New Note" color={getColor('paperTeal')}/>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.inputTitleStyle}
            autoFocus={true}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            selectionColor={getColor('paperTeal')}
            onChangeText={(text) => this.setState({ title: text })}
            value={this.state.title}
          />

          <TextInput
            style={styles.inputDescriptionStyle}
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            selectionColor={getColor('paperTeal')}
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.desc}
          />
        </View>

        <View style={styles.inputScreenBtnContainer}>
          <TickBtn onBtnPress={this.addNote.bind(this)} />
          <BackBtn onBtnPress={this.goBack.bind(this)} />
        </View>

      </View>
    )
  }

  goBack(event) {
    this.props.navigator.pop()
  }

  addNote() {
    this.props.addNote({
      title: this.state.title,
      description: this.state.desc
    })
    this.goBack()
  }
}

export default connect(null, { addNote })(NewNote)
