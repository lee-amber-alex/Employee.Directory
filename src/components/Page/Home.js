import React from "react";
import Header from "../Header/Header";
import Table from "../Table";
import SearchForm from "../SearchForm";
import Container from "../Container/Container";
import logic from "./useHomepageHooks";

export default function Home() {
  const {
    name,
    setName,
    handleFormSubmit,
    handleSort,
    userList,
    filteredUserlist,
    onChange,
  } = logic();
  return (
    <div>
      <Header>
        <h1>Employee Directory</h1>
      </Header>
      <Container>
        <SearchForm
          name={name}
          onChange={onChange}
          setName={setName}
          handleFormSubmit={handleFormSubmit}
        />
        {userList ? (
          <Table rows={filteredUserlist} handleSort={handleSort} />
        ) : (
          <p></p>
        )}
      </Container>
    </div>
  );
}
