import { UsersService } from "../../support/api/users.service";
import { UserSchema } from "../../support/schemas/user.schema";

describe("Users | Regression", () => {

  it("GET /users/1 deve retornar 200, id=1 e validar contrato", () => {
    UsersService.getById(1).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(1);
      expect(res.body).to.be.jsonSchema(UserSchema);
    });
  });

});
