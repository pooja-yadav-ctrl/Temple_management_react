import axios from 'axios'
const headers = {
  "Access-Control-Allow-Origin": "*",
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=UTF-8'
}
const api = axios.create({
  baseURL: "http://localhost:3000/",
  responseType: 'json',
  headers: headers
})
export default api