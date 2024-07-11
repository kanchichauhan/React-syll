import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    dataArray: [],
    loading: true,
    isDataRejected: false,
    filterType: undefined,
    currentDataId: undefined,
};

export const fetchPizza = createAsyncThunk('pizza/fetchpizza', async () => {
    const {data} = await axios.get('https://private-anon-5eb40d870a-pizzaapp.apiary-mock.com/restaurants/')
    console.log(data)
    return data;
});
const pizzaReducer = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder)  => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.dataArray = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchPizza.rejected, (state) => {
            state.isDataRejected = true;
        });
    }
})

export default pizzaReducer.reducer