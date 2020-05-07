import { createSlice } from '@reduxjs/toolkit';

const playgroundSlice = createSlice({
  name: 'auth',
  initialState: {
    children: [],
    stylesChildren: {},
    elementIsSelect: null
  },
  reducers: {
    setStyleChildren: {
      reducer(state, action) {
        const { id, style } = action.payload;
        state.stylesChildren[id] = style
      },
      prepare(id, style) {
        return { payload: { id, style } }
      }
    },
  }
})

export const { setStyleChildren } = playgroundSlice.actions

export default playgroundSlice.reducer
