import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface basketSlice {
  items: string[];
}

// Define the initial state using that type
const initialState: basketSlice = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<string>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state: any, action: PayloadAction<any>) => {
      const index = state.items.findIndex(
        (basketItem: any) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        // remove item
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.payload.id})`);
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state: RootState) => state.basket.items;
export const selectTotal = (state: RootState) =>
  state.basket.items.reduce((total, item: any) => total + item.price, 0);

export default basketSlice.reducer;
