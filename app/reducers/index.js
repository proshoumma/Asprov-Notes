import { combineReducers } from 'redux'
import NotesReducer from './reducer_notes'
import CurrentNoteReducer from './reducer_current'

const rootReducer = combineReducers({
  allNotes: NotesReducer,
  currentNote: CurrentNoteReducer
})

export default rootReducer
