import httpMocks from "node-mocks-http";
import { list, search } from ".";

const userService = require("services/users");
jest.mock("services/users");

describe("usersController", () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;
  let userServiceMock: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    userServiceMock = userService;
  });

  describe("list()", () => {
    it(`should return status code 200`, () => {
      userServiceMock.getAllUsers.mockResolvedValue([]);

      list(req, res);

      expect(res.statusCode).toBe(200);
    });

    it(`should return status code 400 if currentPage is less than zero`, () => {
      req.query = {
        currentPage: -1
      }

      list(req, res);

      expect(res.statusCode).toBe(400);
    });
  });

  describe("search()", () => {
    beforeEach(() => {
      req.query = {
        searchBy: "name",
        searchKeyword: "John",
        sortBy: "name",
        sortOrder: "asc"
      }
    })

    it(`should return status code 200`, () => {
      userServiceMock.getAllUsers.mockResolvedValue([{
        id: 1,
        name: "John Smith"
      }]);

      search(req, res);

      expect(res.statusCode).toBe(200);
    });

    it(`should return status code 400 if searchKeyword is not provided`, () => {
      delete req.query.searchKeyword;

      search(req, res);

      expect(res.statusCode).toBe(400);
    });
  });
});
