const { expect } = require("chai");
const TotallyRandom = require("./index.js");

const random = new TotallyRandom();

describe("TotallyRandom", () => {
  describe("#array", () => {
    it("should throw an error when Array length is less than count with unique=true", () => {
      expect(() =>
        random.array([1, 2, 3], (count = 4), (unique = true))
      ).to.throw("Array length must be larger than count if unique = true");
    });
  });
  describe("#between", () => {
    it("should throw an error if num1 === num2", () => {
      expect(() => random.between(2, 2)).to.throw("num1 cannot equal num2");
    });
    it("should throw an error if count < 1", () => {
      expect(() => random.between(2, 3, (count = 0.5))).to.throw(
        "count must be greater than 1"
      );
    });
  });
  describe("#boolean", () => {
    it("should throw an error if count < 1", () => {
      expect(() => random.boolean((count = 0.5))).to.throw(
        "count must be greater than 1"
      );
    });
    it("should return either true or false", () => {
      expect(random.boolean()).to.be.oneOf([true, false]);
    });
  });
  describe("#chance", () => {
    it("should throw an error if count < 1", () => {
      expect(() =>
        random.chance(
          [
            ["A", 30],
            ["B", 70],
          ],
          (count = 0.5)
        )
      ).to.throw("count must be greater than 1");
    });
    it("should throw an error when percentages do not add up to 100", () => {
      expect(() =>
        random.chance([
          ["A", 30],
          ["B", 30],
        ])
      ).to.throw("sum of percentages must equal 100");
    });
  });
  describe("#percent", () => {
    it("should throw an error when count < 1", () => {
      expect(() => random.percent((count = 0.5))).to.throw(
        "count must be greater than 1"
      );
    });
    it("should return a number below 101", () => {
      expect(random.percent()).to.be.below(101);
    });
    it("should return a number above 0", () => {
      expect(random.percent()).to.be.above(0);
    });
  });
  describe("#shuffle", () => {
    it("should throw an error when Array.length < 2", () => {
      expect(() => random.shuffle([1])).to.throw(
        "arr must contain at least two elements"
      );
    });
  });
  describe("#string", () => {
    it("should throw an error when length < 1", () => {
      expect(() => random.string((length = 0.5))).to.throw(
        "length must be at least 1"
      );
    });
  });
  describe("#to", () => {
    it("should throw an error when count < 1", () => {
      expect(() => random.to(3, (count = 0))).to.throw(
        "count must be greater than 1"
      );
    });
    it("should throw an error when num < 1", () => {
      expect(() => random.to(-1)).to.throw("num must be a positive integer");
    });
  });
});
