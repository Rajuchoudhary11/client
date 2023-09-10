
// for storing the access token in website  local storage 

export const KEY_ACCESS_TOKEN = "access_token";


export function getItem(key){
    return localStorage.getItem(key);

}

export function setItem(key , value){
    return localStorage.setItem(key ,value);

}
export function removeItem(key){
    return localStorage.removeItem(key);

}