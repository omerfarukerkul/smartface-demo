import { reqresService } from "api";

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

export async function login(params:Login) {
    return await reqresService.request('/login', {
        method: 'POST',
        body: params
    });
}