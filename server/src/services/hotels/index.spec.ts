import { getAllHotels } from ".";
import { HTTPMethod } from "utils/request";
import config from "config";

const request = require("utils/request");
jest.mock("utils/request");

describe("hotelsService", () => {
  let requestMock: any;

  beforeEach(() => {
    requestMock = request;
  });

  describe("getAllHotels()", () => {
    it(`should return a promise for list of hotels`, () => {
      requestMock.request.mockReturnValue(Promise);
      expect(getAllHotels()).toBe(Promise);
    });

    it(`should make a get request with correct endpoint`, () => {
      getAllHotels();
      expect(requestMock.request).toHaveBeenCalledWith({
        method: HTTPMethod.GET,
        url: config.dataEndpoints.getAllHotels,
      });
    });
  });
});
