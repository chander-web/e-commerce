import { combineReducers } from 'redux';
import loaderReducer from './spinner/spinnerReducer';

const rootReducer = combineReducers({
  loader: loaderReducer
});

export default rootReducer;




