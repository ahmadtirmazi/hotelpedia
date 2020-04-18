import React, { useState, useEffect } from "react";

import { getAllUsers, searchUsersByName } from "../services/userService";

import { makeStyles } from "@material-ui/core/styles";
import SearchForm from "./components/searchForm";
import UsersList from "./components/usersList";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Home() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllUsers();
      setUsers(data.records);
      setTotalRecords(data.totalRecords);
    };
    fetchData();
  }, []);

  const onQuerySubmit = (query) => {
    console.log("onQuerySubmit", query);
    const getResults = async () => {
      const { data } = await searchUsersByName(query);
      setUsers(data.records);
      setTotalRecords(data.totalRecords);
    };
    getResults();
  };

  const onChangePage = function (page) {
    console.log("index", page);
  };

  return (
    <div>
      <SearchForm onQuerySubmit={onQuerySubmit}></SearchForm>
      <UsersList
        users={users}
        totalRecords={totalRecords}
        onChangePage={onChangePage}
      ></UsersList>
    </div>
  );
}

export default Home;
