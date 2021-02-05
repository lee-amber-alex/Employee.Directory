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

  const [name, setName] = useState("");

  useEffect(() => {
    API.getFullList()
      .then((res) => {
        console.log(res);
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

  //  onclick the table should sort by name
  // const handleSort = () => {
  //   const sortedUserlist = userList.sort((a, b) => {
  //     if (a.row.name.last < b.row.name.last) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
  //   console.log(sortedUserlist);
  //   setfilteredUserlist(sortedUserlist);
  // };

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
{/* handleSort={handleSort} */}
      <Table rows={filteredUserlist}  />
      </Container>
    </div>
  );
}
