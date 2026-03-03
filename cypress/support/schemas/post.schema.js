export const PostSchema = {
  title: "Post",
  type: "object",
  required: ["userId", "id", "title", "body"],
  additionalProperties: true,
  properties: {
    userId: { type: "number" },
    id: { type: "number" },
    title: { type: "string" },
    body: { type: "string" }
  }
};
