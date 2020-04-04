const { dataEndpoints } = require("config").default;
const { request, HTTPMethod } = require("utils/request");

export const getAllHotels = function () {
  return request({
    method: HTTPMethod.GET,
    url: dataEndpoints.getAllHotels,
  });
};
