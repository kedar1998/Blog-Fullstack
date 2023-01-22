
const reducer = (state, action) => {
    if(action.type === 'add'){
        return {...state, count: state.count + 1}
    }
  return state
}

export default reducer