const { dataEndpoints } = require("config").default;
const { request, HTTPMethod } = require("utils/request");
import { User } from "models/user";

export const getAllUsers = function (): Promise<User[]> {
  return request({
    method: HTTPMethod.GET,
    url: dataEndpoints.getAllUsers,
  }).then((res: any) => {
    return res.data;
  })
};
