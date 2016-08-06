import _ from 'lodash'
import { ADD_NOTES, UPDATE_NOTE, DELETE_NOTE } from '../actions'

const initialState = [
]

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_NOTES:
      const newNote = Object.assign({}, { id: state.length }, action.payload)
      const newState = [newNote, ...state]
      return newState

    case UPDATE_NOTE:
      const newArray = _.remove(state, (data) => {
        return data.id != action.payload.id
      })
      const updatedNote = Object.assign({}, { id: newArray.length }, action.payload)
      const updatedState = [updatedNote, ...newArray]
      return updatedState

    case DELETE_NOTE:
      console.log('get request')
      console.log(action.payload)
      const deletedNewArray = _.remove(state, (data) => {
        return data.id != action.payload
      })
      return deletedNewArray

    default:
      return state
  }
}
