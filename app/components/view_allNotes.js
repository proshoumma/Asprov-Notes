import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Alert,
  BackAndroid,
  ListView
} from 'react-native'
import { connect } from 'react-redux'

import NewNote from './view_newNote'
import SingleNote from './view_singleNote'
import Toolbar from '../lib/Toolbar'
import NotesViewCard from '../lib/NotesViewCard'
import AddNoteButton from '../lib/AddNoteButton'
import { deleteNote } from '../actions'
import { styles } from './styles'
import { getColor } from '../lib/helpers'
import { Typo } from '../lib/Typography'

class AllNotes extends Component {
  constructor(props) {
    super(props)

    this._handleBackButton = this._handleBackButton.bind(this)
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton)
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackButton)
  }

  _handleBackButton() {
    if (this.props.navigator.getCurrentRoutes().length == 1) {
      return false
    }
    return true
  }

  render() {
    return (
      <View style={ styles.allNotesContainer }>
        <StatusBar
          backgroundColor={getColor('paperBlue700')}
          barStyle="light-content"
          animated={true}
        />
        <Toolbar title="Asprov Notes" color={getColor('paperBlue')}/>
        { this.renderList() }

        <AddNoteButton onBtnPress={this.addNewNote.bind(this)}/>
      </View>
    )
  }

  addNewNote() {
    this.props.navigator.push({component: NewNote, type: 'addingNote'})
  }

  goToNote(noteId, title, description) {
    this.props.navigator.push({ component: SingleNote, type: 'editingNote', passProps: { noteId, title, description } })
  }

  longPressNote(noteId) {
    Alert.alert(
      'Delete Note',
      'Do you want to delete this note?',
      [
        { text: 'YES', onPress: () => this.deleteNote(noteId) },
        { text: 'No' }
      ]
    )
  }

  deleteNote(noteId) {
    this.props.deleteNote(noteId)
  }

  renderList() {
    if (this.props.notes.length <= 0) {
      return (
        <View style={styles.emptyListContainer}>
          <Text style={styles.emptyList}>Add some notes...</Text>
        </View>
      )
    } else {
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      var dataSource = ds.cloneWithRows(this.props.notes) || []

      return (
        <ListView
          dataSource={dataSource}
          renderRow={(note, sectionID, rowID) => {
            return (
              <NotesViewCard
                title={note.title}
                description={note.description}
                id={note.id}
                keys={rowID}
                onPressBtn={this.goToNote.bind(this)}
                onLongPressBtn={this.longPressNote.bind(this)}
              />
            )
          }}
        />
      )
    }
  }
}

function mapStateToProps(state) {
  return { notes: state.allNotes }
}

export default connect(mapStateToProps, { deleteNote })(AllNotes)
