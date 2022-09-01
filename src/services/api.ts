import { instance } from "./settings/settings"
import {IAuthForm} from "../pages/auth/login/Login";


export const auth = {
    login(data: IAuthForm){
        return instance.post('')
    },
    register(){

    }
}