import React, { useState, useEffect } from "react";
import axios from "axios";
// import API from "../utils/API";
// import Container from "./components/Container";
// import SearchForm from "./components/SortSearch";
// import SearchResults from "./components/SearchResults";

export default function Home() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    displayFullList();
  }, []);

  useEffect(() => {}, [userList]);

  const URL = "https://randomuser.me/api/?inc=gender,name";

  const displayFullList = async () => {
    const allPeople = await axios(URL);
    console.log(allPeople);
    setUserList(allPeople).catch((err) =>
    console.log({ error: err.message })
  );
  };


  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
        </div>
      </div>
      {userList.map((userList) => {
        return (
          <ul key={userList.id} className="list-group ">
            <li className="list-group-item">{userList.name}</li>
          </ul>
        );
      })}
    </div>
  );
}


