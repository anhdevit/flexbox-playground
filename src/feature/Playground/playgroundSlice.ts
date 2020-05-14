import { createSlice } from '@reduxjs/toolkit';
import colors from '@common/theme/colors';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  styleNewElement: {
    maxWidth:100,
    maxHeight:100,
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row'
  }, 
  secondStyleNewElement: {
    maxWidth:50,
    maxHeight:50,
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row'
  }, 
  root: {
      borderWidth: 1,
      backgroundColor: colors.background,
      width: '100%',
      aspectRatio: 1,
      flexDirection: 'row'
  }
})

const playgroundSlice = createSlice({
  name: 'playground',
  initialState: {
    dataChildren: {
      root: ['1','2', '3'],
      '1': ['1.1'],
      '2': [],
      '3': [],
      '1.1': []
    },
    stylesChildren: {
      'root': styles.root,
      '1': styles.styleNewElement,
      '2': styles.styleNewElement,
      '3': styles.styleNewElement,
      '1.1': styles.secondStyleNewElement,
    },
    elementIsSelect: 'root',
  },
  reducers: {
    setChildren(state, action) {
      state.children = action.payload
    },
    removeNode(state, action) {
      const lastItem = state.dataChildren[state.dataChildren.length - 1]
      state.dataChildren.pop()
      delete state.stylesChildren[lastItem]
    },
    addNode(state, action) {
      const lastItem = state.dataChildren[state.dataChildren.length - 1]
      state.dataChildren.push(lastItem + 1)
      state.stylesChildren[lastItem + 1] = styles.styleNewElement
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


