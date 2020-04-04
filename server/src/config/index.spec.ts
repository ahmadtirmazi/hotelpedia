describe("config", () => {
  it("should export object with correct keys", () => {
    const config = require("./").default;

    expect(config).toMatchObject({
      port: expect.any(Number),
      baseApiUrl: expect.any(String),
      dataEndpoints: {
        getAllHotels: expect.any(String),
      },
    });
  });
});
