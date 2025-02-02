import { IProduct } from "@/interfaces/product.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Views = "grid" | "list";

interface ProductState {
  loading: boolean;
  products: IProduct[];
  view: Views;
  currentPage: number;
  itemsPerPage: number;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  currentPage: 1,
  itemsPerPage: 12,
  view: "grid",
};

export const SLICE_NAME = "product";

const productSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    toggleView(state, action: PayloadAction<Views>) {
      state.view = action.payload;
    },
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
      state.loading = false; 
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
});

export const {
  toggleView,
  setCurrentPage,
  setItemsPerPage,
  setProducts,
  setLoading,
} = productSlice.actions;

export default productSlice.reducer;
