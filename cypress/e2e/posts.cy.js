describe("Validação da API de Posts", () => {

  it("GET /posts deve retornar lista", () => {
    cy.request("GET", "/posts").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });

  it("GET /posts/1 deve retornar post específico", () => {
    cy.request("GET", "/posts/1").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
    });
  });

});
