import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    //initial State
    initialState: {
        items: [],
    },
    reducers: {
        //action 1
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        //action 2
        removeItem: (state)=>{
            state.items.pop();
        },
        //action 3
        clearItems: (state)=>{
            state.items.length = 0;
        } 
    }
})

/*
    Behind the scene the slice object is something like this:
        {
            actions: {
                addItem...
                removeItem..
                clearItems..
                etc
            },

            reducer...
        }

        Hence we are exporting like this below 
*/

export const {addItem, removeItem, clearItems} = cartSlice.actions;

export default cartSlice.reducer;