import React, { useState, useEffect } from "react";

import { getAllUsers, searchUsersByName } from "../services/userService";

import SearchForm from "./components/searchForm";
import UsersList from "./components/usersList";

function Home() {
  const PAGE_SIZE = 5;

  const [totalRecords, setTotalRecords] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [sortOptions, setSortOptions] = useState({
    sortBy: null,
    sortOrder: null,
  });

  useEffect(() => {
    const getUsers = async () => {
      const { data } = searchKeyword.length
        ? await searchUsersByName(
            searchKeyword,
            currentPage,
            PAGE_SIZE,
            sortOptions.sortBy,
            sortOptions.sortOrder
          )
        : await getAllUsers(
            currentPage,
            PAGE_SIZE,
            sortOptions.sortBy,
            sortOptions.sortOrder
          );
      setUsers(data.records);
      setTotalRecords(data.totalRecords);
    };

    getUsers();
  }, [searchKeyword, currentPage, sortOptions]);

  const onQuerySubmit = (query) => {
    setSearchKeyword(query);
  };

  const onChangePage = function (event, newPage) {
    setCurrentPage(newPage);
  };

  const onSort = function (sortBy) {
    var _sortOptions = { ...sortOptions };
    if (sortOptions.sortBy === sortBy) {
      if (sortOptions.sortOrder) {
        _sortOptions.sortOrder =
          sortOptions.sortOrder === "asc" ? "desc" : "asc";
      } else {
        _sortOptions.sortOrder = "asc";
      }
    } else {
      _sortOptions.sortBy = sortBy;
      _sortOptions.sortOrder = "asc";
    }

    setSortOptions(_sortOptions);
  };

  return (
    <div>
      <SearchForm onQuerySubmit={onQuerySubmit}></SearchForm>
      <UsersList
        users={users}
        totalRecords={totalRecords}
        currentPage={currentPage}
        onChangePage={onChangePage}
        onSort={onSort}
      ></UsersList>
    </div>
  );
}

export default Home;
