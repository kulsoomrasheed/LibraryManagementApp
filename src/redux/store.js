import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import {thunk} from "redux-thunk"
import {reducer as authReducer} from "./authReducer/reducer"

export const store = legacy_createStore(authReducer,applyMiddleware(thunk))