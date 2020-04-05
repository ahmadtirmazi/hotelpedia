import httpMocks from "node-mocks-http";
import { list } from ".";

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
      userServiceMock.getAllUsers.mockResolvedValue({ data: [] });

      list(req, res);

      expect(res.statusCode).toBe(200);
    });
  });
});
