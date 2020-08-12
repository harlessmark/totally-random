/* eslint-disable no-undef */
const { expect } = require("chai");
const TotallyRandom = require("../dist/index.js");

const random = new TotallyRandom();

describe("TotallyRandom", () => {
  describe("#boolean", () => {
    it("should return either true or false", () => {
      expect(random.boolean()).to.be.oneOf([true, false]);
    });
  });
  describe("#percent", () => {
    it("should return a number above 0", () => {
      expect(random.percent()).to.be.above(0);
    });
    it("should return a number below 101", () => {
      expect(random.percent()).to.be.below(101);
    });
  });
  describe("#to", () => {
    it("should return a number below 20 when num=20", () => {
      expect(random.to(20)).to.be.below(20);
    });
    it("should return a number above 0 when num=20", () => {
      expect(random.to(20)).to.be.above(0);
    });
  });
});
