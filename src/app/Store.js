// REDUX STORE.
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
import { combineReducers } from "@reduxjs/toolkit";
import isCreateReducer from "../slices/createSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
};

// Reducers are registered . 
const rootReducer = combineReducers({
  todos: todoReducer,
  isCreate: isCreateReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// store is made to be a persistent one.
export const store = configureStore({
  reducer: persistedReducer,
});
