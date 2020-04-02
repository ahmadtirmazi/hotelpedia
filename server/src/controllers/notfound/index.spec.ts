import httpMocks from "node-mocks-http";

import { notFoundController } from ".";

describe("notFoundController", () => {
  let req: httpMocks.MockRequest<any>;
  let res: httpMocks.MockResponse<any>;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

  it(`should return status code 404`, () => {
    notFoundController(req, res);

    expect(res.statusCode).toBe(404);
  });
});
