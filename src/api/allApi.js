
import api from './api';
import axios from 'axios';

export const createTemple = (params) => {
    console.log('params',params);
    return api.post(`/temples`,params)
}
export const signInUser = (params) => {
    return  axios.create({
    baseURL: "http://localhost:3001/",
    responseType: 'json',
   // headers: headers
  }).post(`/users/sign_in`, params)
  }
export const getTempleInfo = (id) => {
    return api.get(`/temples`)
}
export const updateTempleInfo = (id,params) => {
    return api.patch(`/temples/`+id ,params)
}
export const deleteTemple = (id) => {
    return api.delete(`/temples/`+id)
}
export const signOut = () => {
    console.log('signOut');
    return api.delete(`/users/sign_out`)
}
export const createTempleHistory = (params,temple_id) => {
    return api.post(`/temple_history_details`, params,temple_id)
  }
