import { HttpResponse } from "./protocols";

export const badRequest = (message: string): HttpResponse<string> => {
    return {
        statusCode: 400,
        body: message
    };
};

export const ok = <T>(body: any): HttpResponse<T> => {
    return {
        statusCode: 200,
        body,
    };
};

export const created = <T>(body: any): HttpResponse<T> => {
    return {
        statusCode: 201,
        body,
    };
};

export const serverError = (): HttpResponse<string> => {
    return {
        statusCode: 500,
        body: "Something went wrong",
    };
};
