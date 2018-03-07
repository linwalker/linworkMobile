import { handleActions } from 'redux-actions';
import actions from '../actions';

const initialState = {
  username: {
    value: 'beidou',
  },
  password: {
    value: 'admin',
  },
  message: {
    error: false,
    text: '',
  },
  loading: false,
  logined: false,
  number: 1,
  tabname: 'main'
};
export default handleActions({
  [actions.fieldChange]: (state, { payload: { fields } }) => ({
    ...state,
    ...fields,
  }),
  [actions.rejected]: (state, { payload: { message } }) => ({
    ...state,
    password: {
      value: '',
    },
    message: {
      error: true,
      text: message,
    },
    loading: false,
  }),
  [actions.loading]: state => ({
    ...state,
    loading: true,
  }),
  [actions.logined]: state => ({
    ...state,
    message: {
      error: false,
      text: 'Login Successfully',
    },
    loading: false,
    logined: true,
  }),
  [actions.increase]: state => ({
    ...state,
    number: state.number + 1
  }),
  [actions.tabselect]: (state, { payload: { tabname }}) => ({
    ...state,
    tabname: tabname
  })
}, initialState);
