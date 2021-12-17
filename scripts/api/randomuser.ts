import { randomUserService } from ".";

interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    registered: {
        date: string;
        age: number;
    }

}

interface UserRequest {
    results: User[],
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    }
}

export async function getUsers(count: number): Promise<UserRequest> {
    return await randomUserService.request(`/?results=${count}`, {
        method: 'GET'
    });
}