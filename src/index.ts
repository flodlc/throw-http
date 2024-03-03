export class HttpThrow<
  Code extends number = number,
  Data = unknown
> extends Error {
  static isHttpThrow = (e: Error): e is HttpThrow => {
    return e instanceof HttpThrow;
  };

  static Unauthorized = <Data>(message?: string, data?: Data) =>
    new HttpThrow({ name: 'Unauthorized', code: 401, message, data });

  static Forbidden = <Data>(message?: string, data?: Data) =>
    new HttpThrow({ name: 'Forbidden', code: 403, message, data });

  static NotFound = <Data>(message?: string, data?: Data) =>
    new HttpThrow({ name: 'NotFound', code: 404, message, data });

  static BadRequest = <Data>(message?: string, data?: Data) =>
    new HttpThrow({ name: 'BadRequest', code: 400, message, data });

  static TooManyRequests = <Data>(message?: string, data?: Data) =>
    new HttpThrow({ name: 'TooManyRequests', code: 429, message, data });

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
