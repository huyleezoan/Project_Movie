import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";
const rootReducer = combineReducers({
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
