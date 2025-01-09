export interface HttpResponse<T> { //<T> Genérico
    statusCode: number,
    body: T;
}

export interface HttpRequest<B> {
    params?: any;
    header?: any;
    body?: B;
}

export interface IController {
    handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>
}