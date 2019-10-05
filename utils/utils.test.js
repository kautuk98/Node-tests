const expect = require("expect");
const utils = require("./utils");

describe("utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      var res = utils.add(20, 10);

      expect(res)
        .toBe(30)
        .toBeA("number");
      // if (res !== 30) {
      //   throw new Error(`Expected 44 but got only ${res}.`);
      // }
    });

    // Aysnchronous callback testing
    it("should add numbers async", done => {
      utils.aysncAdd(2, 3, sum => {
        expect(sum)
          .toBe(5)
          .toBeA("number");
        done();
      });
    });
  });
  describe("#square", () => {
    it("should give square of the no.", () => {
      var rep = utils.square(5);

      expect(rep)
        .toNotBe(20)
        .toBeA("number");
      // if (rep !== 25) {
      //   throw new Error(`Expected 25 but got ${rep}.`);
      // }
    });

    it("should square a no. async", done2 => {
      utils.asyncSquare(6, sqr => {
        expect(sqr)
          .toNotBe(35)
          .toBeA("number");
        done2();
      });
    });
  });
  it("should set firstName and lastName", () => {
    var user = { location: "India", age: 20 };
    var res = utils.setName(user, "Kumar Kautuk");

    expect(res).toInclude({
      firstName: "Kumar",
      lastName: "Kautuk"
    });
  });
});
