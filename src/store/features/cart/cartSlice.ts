import { ICartItem } from "@/interfaces/cart.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  cartItems: ICartItem[];
  loading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  loading: false,
};

export const SLICE_NAME = "cart";

const cartSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item: ICartItem) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { setLoading, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
