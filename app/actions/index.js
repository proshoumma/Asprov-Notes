export const ADD_NOTES = 'ADD_NOTES'
export const FETCH_SINGLE = 'FETCH_SINGLE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const LOAD_STORED = 'LOAD_STORED'
export const DELETE_NOTE = 'DELETE_NOTE'

export function addNote(newNote) {
  return {
    type: ADD_NOTES,
    payload: newNote
  }
}

export function updateNote(updatedNote) {
  return {
    type: UPDATE_NOTE,
    payload: updatedNote
  }
}

export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    payload: noteId
  }
}
