import axios from "axios";

export const usersapi = axios.create({
    baseURL : "https://66a29560967c89168f2090ca.mockapi.io/users",
})