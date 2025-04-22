import Api from './Api'
import axios from "axios";

type AuthForm = { email: string; password: string }
type AuthResponse = { token: string }

class Auth extends Api {

    key = 'auth';

    async login(incomeData: AuthForm): Promise<axios.AxiosResponse<AuthResponse>> {
        return this.http.post(this.getCustomPath('login'), incomeData)
    }

    async register(incomeData: AuthForm): Promise<axios.AxiosResponse<AuthResponse>> {
        return this.http.post(this.getCustomPath('register'), incomeData)
    }
}

export default new Auth()
