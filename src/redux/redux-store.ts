import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogReducer,
    usersPage: usersReducer,
    authPage: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)


