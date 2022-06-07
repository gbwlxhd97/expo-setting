import axios, { AxiosError, AxiosResponse } from 'axios';

enum methodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const axiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    accept: 'application/json',
  },
});

export const requestAPI = () => {
  const request = (method: methodType) => {
    return (url: string, bodyJson?: any) => {
      return axiosInstance({
        url,
        method: method,
        data: bodyJson,
      });
    };
  };

  return {
    get: request(methodType.GET),
    post: request(methodType.POST),
    put: request(methodType.PUT),
    delete: request(methodType.DELETE),
    patch: request(methodType.PATCH),
  };
};
