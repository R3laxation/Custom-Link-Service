import {instance} from "./settings/settings"
import {IAuthForm} from "../pages/auth/login/Login";


export const auth = {
    login({login, password}: IAuthForm) {
        let params = new FormData();
        params.append('username', `${login}`);
        params.append('password', `${password}`);
        console.log(params)
        return instance.post(`/login`, {params})
    },
    register({login, password}: IAuthForm) {
        return instance.post(`/register?username=${login}&password=${password}`)
    }
}