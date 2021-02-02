import React, { useState, useEffect } from "react";
// import axios from "axios";
import Header from "../Header/Header";
// import API from "../utils/API";
// import Container from "./components/Container";
// import SearchForm from "./components/SortSearch";
// import SearchResults from "./components/SearchResults";

export default function Home() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    displayFullList();
  }, []);

  useEffect(() => {}, [userList]);

  // const URL =
  //   "https://cors-anywhere.herokuapp.com/randomuser.me/api/?inc=name,nat";

  const URL = "https://cors-anywhere.herokuapp.com/randomuser.me/api/?results=5&inc=name,nat";

  const displayFullList = async () => {
    const res= await fetch(URL);
    const userAll = await res.json();
    console.log(userAll);
    setUserList(userAll).catch((err) => console.log({ error: err.message }));
  };

  return (
    <div>
      <Header>
        <h1>Employee Directory</h1>
      </Header>
      <ul>
        {userList.map((userLists) => (
          <li className="list-group-item">{userLists.name}</li>
        ))}
      </ul>
    </div>
  );
}
