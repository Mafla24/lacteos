import axios from "axios";
import { authHeaders } from "./AuthService";

const usersUrl = "https://frozen-earth-23023.herokuapp.com/usuarios";
//const usersUrl = "http://localhost:4000/usuarios";

export const getUser = async (id) => {
    return await axios.get(`${usersUrl}/${id}`, { headers: authHeaders });
}

export const getUsers = async () => {
    return await axios.get(`${usersUrl}`, { headers: authHeaders })
}

export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}

export const editUser = async (user) => {
    return await axios.put(`${usersUrl}/${user._id}`, user, { headers: authHeaders });
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`, { headers: authHeaders });
}