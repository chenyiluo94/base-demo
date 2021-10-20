import { handleActions } from 'redux-actions'
const tabList = [];
const initialState = {
  list: tabList ? tabList.list : [],
  activeKey: tabList ? tabList.activeKey : '',
}
export const tabListResult = handleActions({
  'request tab list' (state, action) {
    return { ...state, loading: false }
  },
  'update tab list' (state, action) {
    const data = action.payload
    const findList = state.list.find(tab => tab.key === data.key)
    const list = findList === undefined ? [...state.list, data] : state.list
    sessionStorage.setItem('tabList', JSON.stringify({ list, activeKey: data.key, loading: false }))
    return { list: [], activeKey: data.key, loading: false }
  },
  'update tab checked' (state, action) {
    const { activeKey } = action.payload;
    sessionStorage.setItem('tabList', JSON.stringify({ ...state, activeKey, loading: false }))
    return { ...state, activeKey, loading: false }
  },
  'delete tab from list' (state, action) {
    return { list: ['aaa'], activeKey: 'hhh', loading: false }
  },
}, initialState)