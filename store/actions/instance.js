import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.53:8000", //Walaa :)
});

export default instance;
