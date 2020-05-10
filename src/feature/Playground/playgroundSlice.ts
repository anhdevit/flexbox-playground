import { createSlice } from '@reduxjs/toolkit';
import colors from '@common/theme/colors';

const styleNewElement = {
  width:100,
  borderWidth: 2,
  backgroundColor: 'red',
  aspectRatio: 1,
}

const playgroundSlice = createSlice({
  name: 'playground',
  initialState: {
    dataChildren: [['0.0'], ['1.0']],
    stylesChildren: {
      '0': {
        borderWidth: 2,
        backgroundColor: colors.background,
        width: '100%',
        aspectRatio: 1,
      },
      '0.0': styleNewElement,
      '1.0': styleNewElement
    },
    elementIsSelect: '0',
  },
  reducers: {
    setChildren(state, action) {
      state.children = action.payload
    },
    removeNode(state, action) {
      state.children = action.payload
    },
    addNode(state, action) {
      state.children = action.payload
      const level = state.elementIsSelect.split('.')
      console.log('addNode',state.dataChildren.toString() );
      // state.dataChildren[]
    },
    setStyleChildren: {
      reducer(state, action) {
        const { id, style } = action.payload;
        state.stylesChildren[id] = style
      },
      prepare(id, style) {
        return { payload: { id, style } }
      }
    },
    selectElement: {
      reducer(state, action) {
        const { id } = action.payload;
        state.elementIsSelect = id
      },
      prepare(id) {
        return {
          payload: { id }
        }
      }
    }
  }
})

export const { setStyleChildren, setChildren, selectElement, addNode, removeNode } = playgroundSlice.actions

export default playgroundSlice.reducer
