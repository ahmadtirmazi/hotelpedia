import axios from "axios";
import config from "../config/";

const { apiBaseUrl, endpoints } = config;

export const getAllUsers = function (
  currentPage,
  pageSize,
  sortBy,
  sortOrder = "asc"
) {
  return axios(`${apiBaseUrl}${endpoints.getAllUsers}`, {
    params: {
      currentPage,
      pageSize,
      sortBy,
      sortOrder,
    },
  });
};

export const searchUsersByName = function (
  searchKeyword,
  currentPage = 1,
  pageSize = 5,
  sortBy,
  sortOrder = "asc"
) {
  return axios(`${apiBaseUrl}${endpoints.searchUsers}`, {
    params: {
      searchBy: "name",
      searchKeyword,
      currentPage,
      pageSize,
      sortBy,
      sortOrder,
    },
  });
};
