const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app");

describe("App", () => {
  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__("db", db);

  it("should call the spy correctly", () => {
    var spy = expect.createSpy();
    spy("Kautuk", 25);
    expect(spy).toHaveBeenCalledWith("Kautuk", 25);
  });

  it("should call user with user object", () => {
    var email = "kautuk@gmail.com";
    var password = "123abc";

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email: email,
      password: password
    });
  });
});
