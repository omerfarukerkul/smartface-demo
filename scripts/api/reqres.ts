import { reqresService } from "api";
import { setToken } from "lib/token";

type User = {
    data: {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    };
}

type Users = {
    page: number;
    per_page: number;
    total: number;
    total_page: number;
    data: User[];
}

type Login = {
    email: string;
    password: string;
}

type LoginResponse = {
    token: string;
}

export async function login(params:Login) {
    const result: LoginResponse = await reqresService.request('/login', {
        method: 'POST',
        body: params
    });
    setToken(result.token);
    return result;
}