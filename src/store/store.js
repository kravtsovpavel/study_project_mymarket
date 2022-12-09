import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "./cartSlice";
import favSlice from "./favSlice";
import { logger } from "./logger";

export const store = configureStore( {
    reducer: {
        cartSlice,
        favSlice,
    },
    middleware: [logger],
})