import { configureStore } from "@reduxjs/toolkit";
import pizzaSliceReducer from './pizzaSlice';

export const store = configureStore({
    reducer: {
        pizza: pizzaSliceReducer
    }
});