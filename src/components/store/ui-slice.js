import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {showCartContent: false},
    reducers: {
        toggle(state){
            state.showCartContent = !state.showCartContent
        }
    }
}
)

export const uiActions = uiSlice.actions

export default uiSlice.reducer