import { createSlice } from '@reduxjs/toolkit';

const dropoutStatusSlice = createSlice({
    name: 'dropoutStatus',
    initialState:{
        status: [false, false, false]
    },
    reducers:{
        statusChange(state, action){
            switch(action.payload){
                case 0:
                  state.status = [!state.status[0], false, false];
                  break;
                case 1:
                  state.status = [false, !state.status[1], false];
                  break;
                case 2:
                  state.status = [false, false, !state.status[2]];
                  break;
              }
        }
    }
});

export const {statusChange} = dropoutStatusSlice.actions;

export default dropoutStatusSlice.reducer;