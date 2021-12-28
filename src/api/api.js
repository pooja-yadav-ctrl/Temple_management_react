import axios from 'axios'
// const review_var = localStorage.getItem('authentication_token');
console.log('review at')
const headers = {
//   'Authorization': review_var ,
  "Access-Control-Allow-Origin": "*",
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=UTF-8'
}
const api = axios.create({
  baseURL: "http://localhost:3001/",
  responseType: 'json',
  headers: headers
})
export default api