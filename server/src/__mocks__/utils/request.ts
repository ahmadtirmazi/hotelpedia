module.exports.request = function (data: IRequestData) {
  return new Promise((resolve, reject) => {
    process.nextTick(
      () =>
        data
          ? resolve({ data: [] })
          : reject({
            error: 'not found.',
          })
    );
  })
}

export interface IRequestData {
  method: HTTPMethod;
  url: string;
}

export enum HTTPMethod {
  GET = "get",
  POST = "post",
}