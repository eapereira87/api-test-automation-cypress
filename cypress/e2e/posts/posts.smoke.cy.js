describe("Posts | Smoke", () => {

  it("GET /posts deve retornar 200", () => {
    cy.request("GET", "/posts").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an("array");
    });
  });

});
