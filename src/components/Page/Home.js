import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Table from "../Table";
import SearchForm from "../SearchForm";
import API from "../utils/API";
import Container from "../Container/Container";

export default function Home() {
  const [userList, setUserList] = useState([]);
  const [filteredUserlist, setfilteredUserlist] = useState(userList);
  const [name, setName] = useState("");
  const [sortedList, setsortedList] = useState();

  useEffect(() => {
    API.getFullList()
      .then((res) => {
        setUserList(res.data.results);
        setfilteredUserlist(res.data.results);
        setsortedList(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [setUserList]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newfilteredUserlist = userList.filter((user) => {
      if (user.name.first.includes(name) || user.name.last.includes(name)) {
        return user;
      }
    });
    console.log(newfilteredUserlist);
    setfilteredUserlist(newfilteredUserlist);
  };

    const handleSort = () => {
      let sortedData = userList.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    console.log(sortedData);
    setsortedList(sortedData);
  }


  return (
    <div>
      <Header>
        <h1>Employee Directory</h1>
      </Header>
      <Container>
        <SearchForm
          name={name}
          setName={setName}
          handleFormSubmit={handleFormSubmit}
        />

        <Table rows={userList ? filteredUserlist : sortedList} handleSort={handleSort} />
      </Container>
    </div>
  );
}
