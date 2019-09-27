const utils = require("./utils");

it("should add two numbers", () => {
  var res = utils.add(20, 10);

  if (res !== 30) {
    throw new Error(`Expected 44 but got only ${res}.`);
  }
});

it("should give square of the no.", () => {
  var rep = utils.square(5);

  if (rep !== 25) {
    throw new Error(`Expected 25 but got ${rep}.`);
  }
});
