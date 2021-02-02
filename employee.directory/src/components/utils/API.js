import axios from "axios";

// const URL = "https://cors-anywhere.herokuapp.com/randomuser.me/api/?inc=gender,name,nat"

const URL = "https://cors-anywhere.herokuapp.com/randomuser.me/api/?results=5&inc=name,nat"

const API = {
  getFullList: ()=> {
    return axios.get(URL);
  }
};
export default API;

