export class ThrowHttp<
  Code extends number = number,
  Data = unknown
> extends Error {
  static isThrowHttp = (e: Error): e is ThrowHttp => {
    return e instanceof ThrowHttp;
  };

  static Unauthorized = <Data>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Unauthorized', code: 401, message, data });

  static Forbidden = <Data>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Forbidden', code: 403, message, data });

  static NotFound = <Data>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'NotFound', code: 404, message, data });

  static BadRequest = <Data>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'BadRequest', code: 400, message, data });

  static TooManyRequests = <Data>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'TooManyRequests', code: 429, message, data });

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
    this.name = name ?? 'HttpError';
    this.code = code;
    this.data = data;
  }
}
