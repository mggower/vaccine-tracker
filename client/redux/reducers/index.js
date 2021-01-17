import { combineReducers } from 'redux';

import chartReducer from './chartReducer';
import dataReducer from './dataReducer';
import userReducer from './userReducer';

export default reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  chart: chartReducer,
});