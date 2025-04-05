import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  goal: { name: 'Nowy cel', amount: 1000 },
  total: 0,
  entries: []
}

const savingsSlice = createSlice({
  name: 'savings',
  initialState,
  reducers: {
    setGoal(state, action) {
      state.goal = action.payload
    },
    addEntry(state, action) {
      const amount = action.payload
      state.total += amount
      state.entries.push({
        date: new Date().toLocaleDateString(),
        amount
      })
    }
  }
})

export const { setGoal, addEntry } = savingsSlice.actions
export default savingsSlice.reducer
