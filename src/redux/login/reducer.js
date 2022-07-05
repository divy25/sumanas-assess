

const initState = {
    error : null,
  isAuthenticated : false,
  isLoading : false,
  user: "",
}

 export const rootred = (state = initState , action) => {
     
    return {
         ...state,
         isAuthenticated: true,
         isLoading: false,
         user: action.user
    }
 }
