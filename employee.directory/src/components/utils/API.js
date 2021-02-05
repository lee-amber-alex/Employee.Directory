import axios from "axios";

// const URL =
//   "https://cors-anywhere.herokuapp.com/randomuser.me/api/?results=5&inc=picture,name,phone,email,dob,nat=us";

const URL = "https://randomuser.me/api/?results=5&inc=picture,name,phone,email,dob,nat=us"



const API = {
  getFullList: () => {
    return axios.get(URL);
  },
};
export default API;
