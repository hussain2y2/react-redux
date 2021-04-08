import {ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE} from '../actions'

const initialState = {
  articles: []
}

function rootReducer(state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case ADD_ARTICLE:
      state = {...state, articles: [...state.articles, payload]}
      break
    case EDIT_ARTICLE:
      break
    case DELETE_ARTICLE:
      break
    default:
      break
  }
  return state
}

export default rootReducer
