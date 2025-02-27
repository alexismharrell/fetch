import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  email: string
  name: string
  isLoggedIn: boolean
}

const initialUserState: UserState = {
  email: '',
  name: '',
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
  },
})

export const { updateEmail, updateIsLoggedIn, updateName } = userSlice.actions

export default userSlice.reducer
