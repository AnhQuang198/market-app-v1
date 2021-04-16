export const SERVER_URL = "http://192.168.1.18:8888";

const axios = require('axios');

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

export async function saveTokenAuth(token, refreshToken) {
  localStorage.setItem("token", token);
  localStorage.setItem("refreshToken", refreshToken);
}

export async function getTokenAuth(key) {
  return localStorage.getItem(key);
}