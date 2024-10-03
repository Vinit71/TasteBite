import { createSlice } from "@reduxjs/toolkit";

const cartFromLocalStorage = () => {
    try {
        const localCart = localStorage.getItem('TasteBiteCart');
        return localCart ? JSON.parse(localCart) : [];
    } catch (e) {
        console.warn("Error loading cart from localStorage:", e);
        return [];
    }
};

// Function to save cart items to localStorage
const saveCartToLocalStorage = (state) => {
    try {
        const localCart = JSON.stringify(state);
        localStorage.setItem('TasteBiteCart', localCart);
    } catch (e) {
        console.warn("Error saving cart to localStorage:", e);
    }
};

const cartSlice = createSlice({
    name: "Cart",
    //initial State
    initialState: {
        items: cartFromLocalStorage()
    },
    reducers: {
        //action 1
        addItem: (state, action)=>{
            state.items.push(action.payload);
            saveCartToLocalStorage(state.items);
        },
        //action 2
        removeItem: (state)=>{
            state.items.pop();
            saveCartToLocalStorage(state.items);
        },
        //action 3
        clearItems: (state)=>{
            state.items.length = 0;
            saveCartToLocalStorage(state.items);
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