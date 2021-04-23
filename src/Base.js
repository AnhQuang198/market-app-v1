// export const SERVER_URL = "http://192.168.1.17:8888"; //local
export const SERVER_URL = "https://authen-service-app.herokuapp.com"; //prod

const axios = require('axios');
const TOKEN_KEY = 'token';
const REFRESH_TOKEN_KEY = 'refresh';

export async function nonAuthorizedPOST(url, data) {
  return await axios({
    method: "POST",
    url: SERVER_URL + url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json"
    },
    data: JSON.stringify(data)
  }).catch(e => {
    if (e.response) {
      return e.response.data;
    }
  });
}

export async function authorizedGET(url) {
  let token = localStorage.getItem(TOKEN_KEY);
  return await axios({
    method: "GET",
    url: SERVER_URL + url,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
      "x-demo-user-id": 2,
      "x-demo-token": token
    }
  }).catch(e => {
    if(e.response) {
      return e.response.data;
    }
  });
}

export async function saveTokenAuth(token, refreshToken) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

export function isLogout() {
  localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
      return true;
  }
  return false;
}