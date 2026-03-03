import { apiRequest } from "./client";

export const UsersService = {
  list() {
    return apiRequest("GET", "/users");
  },

  getById(id) {
    return apiRequest("GET", `/users/${id}`);
  }
};
