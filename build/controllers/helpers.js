"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.created = exports.ok = exports.badRequest = void 0;
const protocols_1 = require("./protocols");
const badRequest = (message) => {
    return {
        statusCode: protocols_1.HttpStatusCode.BAD_REQUEST,
        body: message
    };
};
exports.badRequest = badRequest;
const ok = (body) => {
    return {
        statusCode: protocols_1.HttpStatusCode.OK,
        body,
    };
};
exports.ok = ok;
const created = (body) => {
    return {
        statusCode: protocols_1.HttpStatusCode.CREATED,
        body,
    };
};
exports.created = created;
const serverError = () => {
    return {
        statusCode: protocols_1.HttpStatusCode.SERVER_ERROR,
        body: "Something went wrong",
    };
};
exports.serverError = serverError;
