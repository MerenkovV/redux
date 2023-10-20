const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"

const defaultState = {
    users: [{name: "testUser", id: 1}]
}

export const addUserAC = name => ({type: ADD_USER, payload:{name, id: Date.now()}})
export const removeUserAC = payload => ({type: REMOVE_USER, payload})
  
const usersReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_USER: return {...state, users: [...state.users, action.payload]}
        case REMOVE_USER: return {...state, users: state.users.filter(user=>user.id !== action.payload)}
        default: return state
    }
  }

export default usersReducer