import Data from "@smartface/native/global/data";

const TOKEN_KEYWORD = 'reqresToken';

export function getToken(): string {
    return Data.getStringVariable(TOKEN_KEYWORD) || '';
}

export function setToken(token: string){
    Data.setStringVariable(TOKEN_KEYWORD,token);
}