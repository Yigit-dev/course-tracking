// State
const courseState = []

// REDUCERS
const courseReducer = (state = courseState, action) => {
  switch (action.type) {
    case 'FAVOURITE_COURSE' : return [...state,action.course]
    case 'DELETE_FAVOURITE_COURSE': return state.filter(course => course.id !== action.course.id)
    default: return state
  }
}

export default courseReducer