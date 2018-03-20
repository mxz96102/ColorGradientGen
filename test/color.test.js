var Color = require("../src/color");
var assert = require('assert');

describe("Color", function () {
  describe("to string", function () {
    var c = new Color(12, 23, 34, 0.2);

    it("should return init rgba value in rgba string", function () {
      assert.equal(c.toRGBAString(), "rgba(12, 23, 34, 0.2)")
    });

    it("should return init rgba value in rgb string", function () {
      assert.equal(c.toRGBString(), "rgb(12, 23, 34)")
    });

    it("should return init rgb value in hex string", function () {
      assert.equal(c.toHexString(), "#0c1722")
    })

    it("should return init rgb value in HSL string", function () {
      assert.equal(c.toHSLString(), "hsl(210, 48%, 9%)")
    })

    it("should return init rgb value in HSLA string", function () {
      assert.equal(c.toHSLAString(), "hsla(210, 48%, 9%, 0.2)")
    })
  })

  describe("basic color branch", function () {
    it("default value", function () {
      var c = new Color();

      assert.equal(c.toRGBAString(), "rgba(0, 0, 0, 1)")
    })

    it("three same color should work", function () {
      var c = new Color(122, 122, 122);

      assert.equal(c.toRGBString(), "rgb(122, 122, 122)")
    })

    it("one color full should work r", function () {
      var c = new Color(255, 1, 1);

      assert.equal(c.toHSLString(), "hsl(0, 100%, 50%)")
    })

    it("one color full should work g", function () {
      var c = new Color(1, 255, 1);

      assert.equal(c.toHSLString(), "hsl(120, 100%, 50%)")
    })

    it("one color full should work b", function () {
      var c = new Color(1, 1, 255);

      assert.equal(c.toHSLString(), "hsl(240, 100%, 50%)")
    })
  })

  describe("set from other format", function () {
    it("should receive from hsl to rgb", function () {
      var c = new Color();

      assert.equal(c.setFromHSL({H: 210, S: 0.48, L: 0.09}).toRGBString(), "rgb(12, 23, 34)")
    })

    it("should set hsl black to rgb", function () {
      var c = new Color();

      assert.equal(c.setFromHSL({H: 0, S: 0, L: 0}).toRGBString(), "rgb(0, 0, 0)")
    })

    it("should set hsl nealy white to rgb", function () {
      var c = new Color();

      assert.equal(c.setFromHSL({H: 254, S: 0.99, L: 0.99}).toRGBString(), "rgb(251, 250, 255)")
    })

    it("should receive from hex to rgb", function () {
      var c = new Color();

      assert.equal(c.setFromHex("#0c1722").toRGBString(), "rgb(12, 23, 34)")
    })
  })
})