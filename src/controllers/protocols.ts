export interface HttpResponse<T> { //<T> Genérico
    statusCode: number,
    body: T | string
}