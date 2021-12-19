import { randomUserService } from ".";

export interface User {
    gender: string;
    email: string;
    /**
     * country alpha 2
     */
    dob: {
        date: Date;
        age: number;
    };
    phone: string;
    cell: string;
    nat: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        }  
        city: string;
        state: string;
        country: string;
        postcode: string;
        coordinates: {
            latitude: string;
            longitude: string;
        }
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

export interface UserRequest {
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