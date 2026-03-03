describe("Posts | Regression", () => {

  it("GET /posts/1 deve retornar 200 e id=1", () => {
    cy.request("GET", "/posts/1").then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.id).to.eq(1);
    });
  });

});
