import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Table from "../Table";
import SearchForm from "../SearchForm";
import API from "../utils/API";
import Container from "../Container/Container";
// import Container from "./components/Container";

export default function Home() {
  const [userList, setUserList] = useState([]);
  const [filteredUserlist, setfilteredUserlist] = useState(userList);
  const [sortedList, setsortedList] = useState([userList]);
  const [name, setName] = useState("");

  useEffect(() => {
    API.getFullList()
      .then((res) => {
        setUserList(res.data.results);
        setfilteredUserlist(res.data.results);
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


  const handleSort = (event) => { 
    event.preventDefault();
    let sortedData = [...sortedList].sort((a,b) => {
    if(a[name.first] > b[name.first]) return 1;
    if(a[name.first] < b[name.first]) return -1;
    return 0;
  });
  console.log(sortedList);
  console.log(sortedData);
  setsortedList(sortedData)
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
        
        <Table 
        rows={filteredUserlist} 
        handleSort={handleSort}
       
        />
      </Container>
    </div>
  );
}
