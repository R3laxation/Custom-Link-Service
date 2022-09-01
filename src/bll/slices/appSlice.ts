import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {IAuthForm} from "../../pages/auth/login/Login";
import {auth} from "../../services/api";

export const setIsLoginTC = createAsyncThunk('app/setIsLogin',
    async (data: IAuthForm, {dispatch}) => {
        try {
            dispatch(setIsLoading({loading: true}));
            const res = await auth.login(data)
        } catch (err) {
            if (err instanceof AxiosError) {
                const error = err.response
                    ? err.response.data.error
                    : `${err.message}, more details in the console`;
                dispatch(setError({error}));
            }
        } finally {
            dispatch(setIsLoading({loading: false}));
        }
    })

const slice = createSlice({
    name: 'app',
    initialState: {
        isLoading: false,
        isLogin: false,
        error: '',
    } as IStateType,
    reducers: {
        setIsLoading(state, action: PayloadAction<{ loading: boolean }>) {
            state.isLoading = action.payload.loading;
        },
        setError(state, action: PayloadAction<{ error: string }>) {
            state.error = action.payload.error;
        }
    }
})


export const appSlice = slice.reducer;
export const {setIsLoading, setError} = slice.actions;


interface IStateType {
    isLoading: boolean
    isLogin: boolean
    error: string
}