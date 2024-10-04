enum RESPONSE_CODES {
  // HTTP status code
  SUCCESS = 200,
  CREATE = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  TIME_OUT = 408,
  TOKEN_EXPIRED = 419,
  SERVER_ERROR = 500,
}

export default RESPONSE_CODES;
