import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../api";

const initialState = {};

// Create async thunk fn
export const getAllProductsAsync = createAsyncThunk(
  "products/getALL",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;
