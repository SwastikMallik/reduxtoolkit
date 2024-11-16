import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async ()=>{
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        console.log('sdsd')
        return response.json();
    } catch(err){
        throw err
    }
    
})
console.dir(fetchProducts)

const initialState = {
    loading : false,
    list : [],
    error : ''
};

const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        // getProducts(state, action){

        // }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            //state.list = action.payload.product
            console.log('sdsd')
            state.list = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message || 'Error'
        })
    }
})

// export const 
export default productSlice.reducer