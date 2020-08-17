/* eslint-disable no-undef */
const { expect } = require("chai");
const TotallyRandom = require("../src/index.js");

const random = new TotallyRandom();

describe("TotallyRandom", () => {
  describe("#boolean", () => {
    it("should return either true or false", () => {
      expect(random.boolean()).to.be.satisfy((e) => typeof e === "boolean");
    });
  });
  describe("#percent", () => {
    it("should return a number", () => {
      expect(random.percent()).to.be.satisfy((e) => typeof e === "number");
    });
    it("should return a number above 0", () => {
      expect(random.percent()).to.be.above(0);
    });
    it("should return a number below 101", () => {
      expect(random.percent()).to.be.below(101);
    });
  });
  describe("#to", () => {
    it("should return a number", () => {
      expect(random.to(20)).to.be.satisfy((e) => typeof e === "number");
    });
    it("should return a number below 21 when num=20", () => {
      expect(random.to(20)).to.be.below(21);
    });
    it("should return a number above -1 when num=20", () => {
      expect(random.to(20)).to.be.above(-1);
    });
  });
  describe("#string", () => {
    it("should return a string", () => {
      expect(random.string()).to.be.satisfy((e) => typeof e === "string");
    });
  });
});
