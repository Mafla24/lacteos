import axios from "axios";
import { authHeaders } from "./AuthService";

const salesUrl = " https://frozen-earth-23023.herokuapp.com/ventas";
//const salesUrl = " http://localhost:4000/ventas";

export const getSale = async (id) => {
    return await axios.get(`${salesUrl}/${id}`, { headers: authHeaders });
}

export const getSales = async () => {
    return await axios.get(`${salesUrl}/`, { headers: authHeaders });
}

export const addSale = async (sale) => {
    return await axios.post(`${salesUrl}/`, sale, { headers: authHeaders });
}

export const deleteSale = async (id) => {
    return await axios.delete(`${salesUrl}/${id}`, { headers: authHeaders });
}

export const editSale = async (sale) => {
    return await axios.put(`${salesUrl}/${sale._id}`, sale, { headers: authHeaders });
}