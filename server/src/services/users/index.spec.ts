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
    it(`should return an array for list of users`, () => {
      expect(getAllUsers()).resolves.toEqual([]);
    });
  });
});
