export function apiRequest(method, url, body) {
  const options = {
    method,
    url,
    failOnStatusCode: false
  };

  if (body) options.body = body;

  return cy.request(options);
}
