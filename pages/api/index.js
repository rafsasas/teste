import axios from "axios";

export const api = axios.get({
  baseURL: "https://doar-computador-api.herokuapp.com/", 
}).then(() =>{
  console.log("conectou na api")
})

.catch(() =>{
  console.log("nao conectou na api")
})


