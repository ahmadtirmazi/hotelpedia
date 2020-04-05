import { getAllUsers } from ".";
import { HTTPMethod } from "utils/request";
import config from "config";

const request = require("utils/request");
jest.mock("utils/request");

describe("usersService", () => {
  let requestMock: any;

  beforeEach(() => {
    requestMock = request;
  });

  describe("getAllUsers()", () => {
    it(`should return a promise for list of users`, () => {
      requestMock.request.mockReturnValue(Promise);
      expect(getAllUsers()).toBe(Promise);
    });

    it(`should make a get request with correct endpoint`, () => {
      getAllUsers();
      expect(requestMock.request).toHaveBeenCalledWith({
        method: HTTPMethod.GET,
        url: config.dataEndpoints.getAllUsers,
      });
    });
  });
});
