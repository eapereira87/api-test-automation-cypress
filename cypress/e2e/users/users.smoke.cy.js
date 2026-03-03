import { UsersService } from "../../support/api/users.service";
import { UserSchema } from "../../support/schemas/user.schema";

describe("Users | Smoke", () => {

  it("GET /users deve retornar 200 e validar contrato", () => {
    UsersService.list().then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
      expect(res.body.length).to.be.greaterThan(0);
      expect(res.body[0]).to.be.jsonSchema(UserSchema);
    });
  });

});
