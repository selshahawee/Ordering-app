import { combineReducers } from 'redux';
import appReducer from './appReducer';
import orderedItems from "./adminPageReducer"
export default combineReducers({
    app: appReducer,
    ordered: orderedItems,
});