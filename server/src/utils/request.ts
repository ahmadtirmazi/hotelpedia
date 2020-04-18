const axios = require("axios");

export enum HTTPMethod {
  GET = "get",
  POST = "post",
}

export interface IRequestData {
  method: HTTPMethod;
  url: string;
}

export const request = function (data: IRequestData) {
  return axios({
    url: data.url,
    method: data.method,
  });
};

export default {
  request,
};
