import {
   
    SET_USER,

  } from '../../constants/actionTypes'
  
  const auth = (state = {}, action) => {
    switch (action.type) {
      /*****************
       * START
       * Description: Call action for setting user data
       * Dependencies: None
       * @returns {Promise<void>}
       */
      case SET_USER:
        return {
          ...state,
          user: action.user,
        }
      /********************* END ********************/
  
      /*****************
       * START
       * Description: Call action for setting user data
       * Dependencies: None
       * @returns {Promise<void>}
       */
     
      /********************* END ********************/
  
      /*****************
       * START
       * Description: Call action for setting user type
       * Dependencies: None
       * @returns {Promise<void>}
       */
     
  
      default:
        return state
    }
    /********************* END ********************/
  }
  export default auth
