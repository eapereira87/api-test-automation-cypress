import { PostsService } from "../../support/api/posts.service";
import { PostSchema } from "../../support/schemas/post.schema";

describe("Posts | Smoke", () => {

  it("GET /posts deve retornar 200 e validar contrato", () => {
    PostsService.list().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.greaterThan(0);
      expect(res.body[0]).to.be.jsonSchema(PostSchema);
    });
  });

});
