import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import companiesReducer from './companies/reducer';

const rootReducer = combineReducers({
  clickCounter,
  companiesReducer
});
export default rootReducer;