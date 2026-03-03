import { PostsService } from "../../support/api/posts.service";
import { PostSchema } from "../../support/schemas/post.schema";

describe("Posts | Regression", () => {

  it("GET /posts/1 deve retornar 200, id=1 e validar contrato", () => {
    PostsService.getById(1).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(1);
      expect(res.body).to.be.jsonSchema(PostSchema);
    });
  });

  it("POST /posts deve retornar 201 (simulado)", () => {
    const payload = { userId: 10, title: "Teste Automatizado", body: "Criado via Cypress" };

    PostsService.create(payload).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("id");
      expect(res.body.userId).to.eq(10);
    });
  });

});
