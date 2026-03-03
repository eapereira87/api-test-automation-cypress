import { apiRequest } from "./client";

export const PostsService = {
  list() {
    return apiRequest("GET", "/posts");
  },

  getById(id) {
    return apiRequest("GET", `/posts/${id}`);
  },

  create(payload) {
    return apiRequest("POST", "/posts", payload);
  }
};
