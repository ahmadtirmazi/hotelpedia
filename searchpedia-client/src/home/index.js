import React, { useState, useEffect } from "react";

import { getAllUsers, searchUsersByName } from "../services/userService";

import SearchForm from "./components/searchForm";
import UsersList from "./components/usersList";

function Home() {
  const PAGE_SIZE = 5;

  const [totalRecords, setTotalRecords] = useState(0);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllUsers();
      setUsers(data.records);
      setTotalRecords(data.totalRecords);
    };
    fetchData();
  }, []);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const getSearchResults = async () => {
      if (searchKeyword.length) {
        const { data } = await searchUsersByName(
          searchKeyword,
          currentPage,
          PAGE_SIZE
        );
        console.log(data.records);
        setUsers(data.records);
        setTotalRecords(data.totalRecords);
      }
    };
    getSearchResults();
  }, [searchKeyword, currentPage]);

  const onQuerySubmit = (query) => {
    setSearchKeyword(query);
  };

  const onChangePage = function (event, newPage) {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <SearchForm onQuerySubmit={onQuerySubmit}></SearchForm>
      <UsersList
        users={users}
        totalRecords={totalRecords}
        currentPage={currentPage}
        onChangePage={onChangePage}
      ></UsersList>
    </div>
  );
}

export default Home;
