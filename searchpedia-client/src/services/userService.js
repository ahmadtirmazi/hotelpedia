import axios from "axios";
import config from "../config/";

const { apiBaseUrl, endpoints } = config;

export const getAllUsers = function () {
  return axios(`${apiBaseUrl}${endpoints.getAllUsers}`);
};

export const searchUsersByName = function (query) {
  return axios(`${apiBaseUrl}${endpoints.searchUsers}?name=${query}`);
};
