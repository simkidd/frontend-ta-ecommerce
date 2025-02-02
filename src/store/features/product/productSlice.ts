import { IProduct } from "@/interfaces/product.interface";
import { config } from "@/utils/config";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Views = "grid" | "list";

interface ProductState {
  loading: boolean;
  products: IProduct[];
  view: Views;
  currentPage: number;
  itemsPerPage: number;
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  currentPage: 1,
  itemsPerPage: 12,
  view: "grid",
  error: null,
};

export const SLICE_NAME = "products";

export const fetchProducts = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>(SLICE_NAME + "/fetchProducts", async (_, thunkAPI) => {
  try {
    const response = await fetch(config.BASE_URL);
    if (!response.ok) {
      return thunkAPI.rejectWithValue("Failed to fetch products.");
    }
    const data: IProduct[] = await response.json();
    return data;
  } catch (error: unknown) {
    let errorMsg = "Failed to fetch products.";
    if (error instanceof Error) {
      errorMsg = error.message;
    }
    return thunkAPI.rejectWithValue(errorMsg);
  }
});

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
  extraReducers: (builder) => {
    // When the fetchProducts action is dispatched:
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.loading = false;
        state.products = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload
        ? action.payload
        : "Failed to fetch products.";
    });
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
