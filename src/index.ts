export class HttpError<
  Code extends number = number,
  Data = unknown
> extends Error {
  static isHttp = (e: Error): e is HttpError => {
    return e instanceof HttpError;
  };

  static Unauthorized = <Data>(message?: string, data?: Data) =>
    new HttpError({ name: "Unauthorized", code: 401, message, data });

  static Forbidden = <Data>(message?: string, data?: Data) =>
    new HttpError({ name: "Forbidden", code: 403, message, data });

  static NotFound = <Data>(message?: string, data?: Data) =>
    new HttpError({ name: "NotFound", code: 404, message, data });

  static BadRequest = <Data>(message?: string, data?: Data) =>
    new HttpError({ name: "BadRequest", code: 400, message, data });

  static TooManyRequests = <Data>(message?: string, data?: Data) =>
    new HttpError({ name: "TooManyRequests", code: 429, message, data });

  code?: Code;
  data?: Data;

  constructor({
    name,
    code,
    message,
    data,
  }: {
    name?: string;
    code: Code;
    message?: string;
    data?: Data;
  }) {
    super(message);
    this.name = name ?? "HttpError";
    this.code = code;
    this.data = data;
  }
}
