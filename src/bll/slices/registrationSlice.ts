import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IAuthForm} from "../../pages/auth/login/Login";
import { setIsLoading } from "./appSlice";


export const setRegistration = createAsyncThunk('registration/setIsRegistered',
    async (data: IAuthForm, {dispatch}) => {
        try {
            dispatch(setIsLoading({loading: true}));
        } catch (e) {

        } finally {
            dispatch(setIsLoading({loading: false}));
        }
    })

const slice = createSlice({
    name: 'registration',
    initialState: {
        isRegistered: false,
    } as IStateType,
    reducers: {}
})

export const registrationSlice = slice.reducer;

interface IStateType {
    isRegistered: boolean
}