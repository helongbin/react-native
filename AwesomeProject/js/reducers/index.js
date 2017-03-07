/**
 * Created by robin on 3/6/17.
 */

import { combineReducers } from 'redux';
import userReducer from './user';

export default combineReducers({
    userStore: userReducer,
});
