export interface HttpResponse<T> { //<T> Genérico
    statusCode: number,
    body: T | string
}

export interface HttpRequest<B> {
    params?: B;
    header?: B;
    body?: B;
}