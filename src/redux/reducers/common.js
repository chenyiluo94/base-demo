import { handleActions } from 'redux-actions'

const login = () => ({})
export const gLogin = handleActions({
  'change login'(state, action) {
    console.log('gLogide dispatch')
    console.log(state)
    console.log(action)
    return { ...state, loading: true }
  }
}, login())

const list = () => ([])
export const gList = handleActions({
  'change list'(state, action) {
    console.log('gList dispatch')
    console.log(state)
    console.log(action)
   return { ...state, list: true }
  }
}, list())






