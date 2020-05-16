import { combineReducers } from 'redux';
import playgroundSlice from '../feature/Playground/playgroundSlice';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  playground: playgroundSlice,
  form: formReducer,
})

export type RootState = ReturnType<typeof rootReducer>