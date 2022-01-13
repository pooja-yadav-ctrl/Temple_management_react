
import api from './api';
import axios from 'axios';

export const createTemple = (params) => {
    return api.post(`/temples`,params)
}
export const signInUser = (params) => {
    return  axios.create({
    baseURL: "http://localhost:3001/",
    responseType: 'json',
  }).post(`/users/sign_in`, params)
  }
export const getTempleInfo = (id) => {
    return api.get(`/temples`)
}
export const getTemple = (params) => {
    console.log('name',params);
    return api.get(`/single_temple_detail.json?temple_name=${params}`)
}
export const updateTempleInfo = (id,params) => {
    return api.patch(`/temples/`+id ,params)
}   
export const deleteTemple = (id) => {
    return api.delete(`/temples/`+id)
}
export const signOut = () => {
    return api.delete(`/users/sign_out`)
}
export const createTempleHistory = (params,temple_id) => {
    return api.post(`/temple_history_details`, params,temple_id)
}
export const updateTempleHistory = (params,temple_id) => {
    console.log('params',params,temple_id);
    return api.put(`/temple_history_details/`+temple_id, params)
}
export const createEvents = (params) => {
    console.log('params',params);
    return api.post(`/events`, params)
}
export const updateEvents = (id,params) => {
    console.log('id',id);
    return api.put(`/events/`+id, params)
}
export const getEvents = (id) => {
    return api.get(`/events`)
}
export const getTempleHistory = (id) => {
    return api.get(`/temple_history_details/`+id)
}
export const createTemplePooja = (params) => {
    return api.post(`/worships`, params)
}
export const getTemplePoojaList = (id) => {
    return api.get(`/worships`)
}
export const deleteEvent = (id) => {
    return api.delete(`/events/`+id)
}
export const addImage = (params) => {
    return api.post(`/photo_video_galleries`, params)
}
export const addVedio = (params) => {
    return api.post(`/photo_video_galleries`, params)
}
export const getTempleImage = () => {
    return api.get(`/photo_video_galleries`)
}