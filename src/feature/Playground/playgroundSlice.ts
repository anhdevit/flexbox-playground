import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';
import colors from '@common/theme/colors';
import { StyleSheet } from 'react-native'

interface ElementSelected {
  parent: string,
  index: any,
  currentKey: string,
}

export const styles = StyleSheet.create({
  styleNewElement: {
    maxWidth: 100,
    maxHeight: 100,
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
      'root': ['0,1', '0,2', '0,3'],
      '0,1': ['1,1', '1,2'],
      '0,2': [],
      '0,3': [],
      '1,1': [],
      '1,2': []
    },
    stylesChildren: {
      'root': styles.root,
      '0,1': styles.styleNewElement,
      '0,2': styles.styleNewElement,
      '0,3': styles.styleNewElement,
      '1,1': styles.styleNewElement,
      '1,2': styles.styleNewElement,
    },
    elementIsSelect: {
      parent: 'root',
      index: null,
      currentKey: 'root'
    },
  },
  reducers: {
    removeNode(state, action) {
      console.log("removeNode -> action", action.payload)
      const { parent, index, currentKey } = state.elementIsSelect;
      console.log("removeNode -> index", index)

      //Remove key in parent with index
      state.dataChildren[parent].splice(index, 1)

      //Remove key in datachildren
      delete state.dataChildren[currentKey]

      //Remove style
      delete state.stylesChildren[currentKey]


      const { dataChildren } = state
    },
    addNode(state, action) {
      const { parent, index, currentKey } = state.elementIsSelect;

      //Add new item in array selected
      // if ()
      // state.dataChildren[currentKey].push()

      //Add new item to array
      const dataParent = state.dataChildren[parent]
      const lastItem = dataParent[dataParent.length - 1]
      const arrayWithLastItem = lastItem.split(',')
      arrayWithLastItem.splice(arrayWithLastItem.length - 1, 1, parseInt(arrayWithLastItem[arrayWithLastItem.length - 1]) + 1)
      state.dataChildren[parent].push(arrayWithLastItem)

      //Add new style
      state.stylesChildren[arrayWithLastItem] = styles.styleNewElement

      //Set array with new children 
      state.dataChildren[arrayWithLastItem] = []
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
      reducer(state, action: PayloadAction<ElementSelected>) {
        const { parent, index, currentKey } = action.payload;
        state.elementIsSelect = { parent, index, currentKey }
      },
      prepare(parent, index, currentKey) {
        return {
          payload: { parent, index, currentKey }
        }
      }
    }
  }
})

export const { setStyleChildren, selectElement, addNode, removeNode } = playgroundSlice.actions

export default playgroundSlice.reducer


