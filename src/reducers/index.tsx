import { combineReducers } from 'redux';
import playgroundSlice from '../feature/Playground/playgroundSlice';
export default combineReducers({
  playground: playgroundSlice,
})
