const INITIAL_STATE = {
  name: 'snackbar',
  message: 'demo',
  restaccount: [],
  prodcuts:[]

}

// 
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "getData":
      state.restaccount.push(action.payload)
      return { ...state, restaccount: state.restaccount.concat() }

      case "getproduct":
      state.prodcuts.push(action.payload)
      return { ...state, prodcuts: state.prodcuts.concat() }


    case 'login': state.activeUser = action.payload
      return { ...state, activeUser: state.activeUser }

    case 'addresturant':
      return { ...state, name: state.name.concat() }
    case 'adduser':
      return { ...state, name: state.name.concat() }

    case "uncorrect_password": state.message = 'password is not match'
      state.name = 'show'
      return { ...state, message: state.message, name: state.name.concat() }

    case " emailerror": state.message = 'correct your email address'
      state.name = 'show'
      return { ...state, message: state.message, name: state.name.concat() }

    case "logout":
      localStorage.removeItem('currentuser')
      return state
    default: return { ...state }
  }


}

export default reducer










