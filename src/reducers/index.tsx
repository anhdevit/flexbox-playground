import { combineReducers } from 'redux';
import playgroundSlice from '../feature/Playground/playgroundSlice';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  playground: playgroundSlice,
  form: formReducer,
})
