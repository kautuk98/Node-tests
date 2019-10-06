const request = require("supertest");
const expect = require("expect");
// Execute
var app = require("./server").app;

describe("Server", () => {
  describe("GET /", () => {
    it("should give hello exp response", done => {
      request(app)
        .get("/")
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            error: "Page not found."
          });
        })
        .end(done);
    });
  });

  describe("GET /users", () => {
    it("should give 3 users as response", done => {
      request(app)
        .get("/user")
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({
            name: "Kautuk",
            age: 20,
            name: "Saurabh",
            age: 21
          });
        })
        .end(done);
    });
  });
});
