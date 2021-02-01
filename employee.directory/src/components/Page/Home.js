import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import Container from "./components/Container";
// import SearchForm from "./components/SortSearch";
// import SearchResults from "./components/SearchResults";

export default function Home() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    displayFullList();
  }, []);

  useEffect(() => {}, [userList]);

  const displayFullList = () => {
    API.getFullList().then((res) => {
      const allPeople = res.data;
      setUserList(allPeople).catch((err) =>
        console.log({ error: err.message })
      );
    });
  };

  return (
    <div>
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

// When the component mounts, get a list of all available base breeds and update this.state.breeds
