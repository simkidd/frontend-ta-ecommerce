import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/product/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PERSIST_STORE_NAME } from "@/constants/app.constant";

// Configuration for persisting state
const persistConfig = {
  key: PERSIST_STORE_NAME,
  storage,
  whitelist: ["cart", "product"], // Only persist these slices
};

// Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

// Wrap reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(store);

// Export store
export default store;

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
