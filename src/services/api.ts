import api from "./axiosInterceptor";

export const register = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await api.post("/users/register", {
    username,
    email,
    password,
  });
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await api.post("/users/login", { email, password });
  return response;
};

export const logout = async () => {
  const response = await api.post("/users/logout");
  return response;
};

export const refresh = async (refreshToken: string) => {
  const response = await api.post("/users/refresh", { refreshToken });
  return response;
};
