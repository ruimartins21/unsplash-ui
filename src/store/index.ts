import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import { IAction, Photo } from "../types";
import { CONSTANTS } from "../utils/constants";

const INITIAL_STATE: { favorites: Photo[] } = {
  favorites: [],
};

const persistConfig = {
  key: CONSTANTS.STORAGE,
  storage,
};

const favorites = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.photo] };
    case "DEL_FAV":
      return {
        ...state,
        favorites: state.favorites.filter((el) => el.id !== action.photo.id),
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, favorites);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
