import {combineReducers} from 'redux'
import auth from './auth/authReducer'

/*****************
 * START
 * Description: Combine all the provider to make centralised persistence provider
 * Dependencies: None
 * @returns {Promise<void>}
 */
export default combineReducers({
  auth,
  
})
/******************** END *****************/
