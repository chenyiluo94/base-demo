
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '@reducers'
// import { logger, /* router, */ reduxRouterMiddleware } from './index'
// import { logger} from './index'
const nextReducer = require('../redux/reducers')

export default function configure(initialState) {
  // console.log('initialState', initialState)
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    // reduxRouterMiddleware,
    thunkMiddleware,
    // logger,
    // router,
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../redux/reducers', () => {
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
