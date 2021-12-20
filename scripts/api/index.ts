import ServiceCall from '@smartface/extension-utils/lib/service-call';

const RANDOM_USER_BASEURL = 'https://randomuser.me/api';
const REQRES_BASEURL = 'https://reqres.in/api';

export const randomUserService = new ServiceCall({
    baseUrl: RANDOM_USER_BASEURL,
    headers: {
        "Content-Type": "application/json"
    },
    logEnabled: true
});

export const reqresService = new ServiceCall({
    baseUrl: REQRES_BASEURL,
    headers: {
        "Content-Type": 'application/json'
    },
    logEnabled: true
});

