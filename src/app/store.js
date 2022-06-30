import { configureStore, combineReducers } from '@reduxjs/toolkit';
import product from './reducers/product';

const rootReducer = combineReducers({ product });

export const store = configureStore({ reducer: rootReducer });
