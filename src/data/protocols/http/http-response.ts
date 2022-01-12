export enum HttpStatusCode {
  noContent = 204,
  unathorized = 401,
  badRequest = 400,
  ok = 200,
  notFound = 404,
  serverError = 500,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
