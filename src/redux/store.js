import { applyMiddleware, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import {reducer as bookReducer} from "./bookReducer/reducer"
export const store = legacy_createStore(bookReducer,applyMiddleware(thunk))