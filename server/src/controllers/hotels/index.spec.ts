import httpMocks from "node-mocks-http";
import { list } from ".";

const hotelService = require("services/hotels");
jest.mock("services/hotels");

describe("hotelsController", () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;
  let hotelServiceMock: any;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    hotelServiceMock = hotelService;
  });

  describe("list()", () => {
    it(`should return status code 200`, () => {
      hotelServiceMock.getAllHotels.mockResolvedValue({ data: [] });

      list(req, res);

      expect(res.statusCode).toBe(200);
    });
  });
});
