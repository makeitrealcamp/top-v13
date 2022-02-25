import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, createProduct, deleteProduct } from "../api";

const initialState = {};

// Create async thunk fn
export const getAllProductsAsync = createAsyncThunk(
  "products/getAll",
  async () => {
    const response = await getAllProducts();
    return response.data;
  }
);

export const createProductAsync = createAsyncThunk(
  "products/create",
  async (product) => {
    const response = await createProduct(product);
    return response;
  }
);

export const deleteProductAsync = createAsyncThunk(
  "products/delete",
  async (id) => {
    const response = await deleteProduct(id);
    return response;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productToEdit: (state, action) => {
      state.productToEdit = action.payload;
      state.showModalToEdit = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.created = action.payload;
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.deleted = action.payload;
      });
  },
});

export const { productToEdit } = productSlice.actions;

export const selectShowModalToEdit = (state) => state.products.showModalToEdit;
export const selectProducts = (state) => state.products.products;
export const selectProductToEdit = (state) => state.products.productToEdit;

export default productSlice.reducer;
