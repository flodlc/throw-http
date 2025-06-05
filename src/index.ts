type DefaultData = { human?: string; [key: string]: any } | undefined;

export class ThrowHttp<
  Code extends number = number,
  Data extends DefaultData = DefaultData
> extends Error {
  static isThrowHttp = (e: Error): e is ThrowHttp => {
    return e instanceof ThrowHttp;
  };

  static BadRequest = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Bad Request', code: 400, message, data });

  static Unauthorized = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Unauthorized', code: 401, message, data });

  static PaymentRequired = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Payment Required', code: 402, message, data });

  static Forbidden = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Forbidden', code: 403, message, data });

  static NotFound = <Data extends DefaultData>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Not Found', code: 404, message, data });

  static MethodNotAllowed = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Method Not Allowed', code: 405, message, data });

  static NotAcceptable = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Not Acceptable', code: 406, message, data });

  static ProxyAuthenticationRequired = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({
      name: 'Proxy Authentication Required',
      code: 407,
      message,
      data,
    });

  static RequestTimeout = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Request Timeout', code: 408, message, data });

  static Conflict = <Data extends DefaultData>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Conflict', code: 409, message, data });

  static Gone = <Data extends DefaultData>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Gone', code: 410, message, data });

  static LengthRequired = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Length Required', code: 411, message, data });

  static PreconditionFailed = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Precondition Failed', code: 412, message, data });

  static RequestEntityTooLarge = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({
      name: 'Request Entity Too Large',
      code: 413,
      message,
      data,
    });

  static RequestURITooLarge = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({ name: 'Request URI Too Large', code: 414, message, data });

  static UnsupportedMediaType = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({ name: 'Unsupported Media Type', code: 415, message, data });

  static RequestedRangeNotSatisfiable = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({
      name: 'Requested Range Not Satisfiable',
      code: 416,
      message,
      data,
    });

  static ExpectationFailed = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Expectation Failed', code: 417, message, data });

  static ImATeapot = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: `I'm a Teapot`, code: 418, message, data });

  static UnprocessableEntity = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({ name: 'Unprocessable Entity', code: 422, message, data });

  static Locked = <Data extends DefaultData>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Locked', code: 423, message, data });

  static FailedDependency = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Failed Dependency', code: 424, message, data });

  static TooEarly = <Data extends DefaultData>(message?: string, data?: Data) =>
    new ThrowHttp({ name: 'Too Early', code: 425, message, data });

  static UpgradeRequired = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Upgrade Required', code: 426, message, data });

  static PreconditionRequired = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({ name: 'Precondition Required', code: 428, message, data });

  static RequestHeaderFieldsTooLarge = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({
      name: 'Request Header Fields Too Large',
      code: 431,
      message,
      data,
    });

  static TooManyRequests = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Too Many Requests', code: 429, message, data });

  static UnavailableForLegalReasons = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) =>
    new ThrowHttp({
      name: 'Unavailable For Legal Reasons',
      code: 451,
      message,
      data,
    });

  static ServerError = <Data extends DefaultData>(
    message?: string,
    data?: Data
  ) => new ThrowHttp({ name: 'Server Error', code: 500, message, data });

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
    this.name = name ?? 'Http Error';
    this.code = code;
    this.data = data;
  }
}
