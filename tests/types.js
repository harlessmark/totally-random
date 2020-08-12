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
});
