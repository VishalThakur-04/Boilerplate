import storage from 'redux-persist/es/storage'
import {persistStore, persistReducer} from 'redux-persist'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from './src/reducers/reducers'
import {createStore} from 'redux'
import {AsyncStorage} from '@react-native-community/async-storage'

export default () => {
  const persistConfig = {
    key: 'root',
    AsyncStorage,
  }
  const persistedReducer = persistReducer(persistConfig, reducers)
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  const persistor = persistStore(store)

  return {store, persistor}
}

