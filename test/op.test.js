var Color = require("../src/color");
var op = require("../src/op");
var assert = require('assert');

describe("Operation", function () {
  describe("basic test", function () {
    it("should be lighter", function () {
      var c = new Color(66, 104, 179)

      assert(op.lighter(c, 50).toRGBString(), "rgb(158, 180, 219)")
    })

    it("should be darker", function () {
      var c = new Color(66, 104, 179)

      assert(op.darker(c, 50).toRGBString(), "rgb(33, 52, 89)")
    })

    it("should be colorful", function () {
      var c = new Color(66, 104, 179)

      assert(op.colorful(c, 50).toRGBString(), "rgb(33, 93, 212)")
    })

    it("should be fade", function () {
      var c = new Color(66, 104, 179)

      assert(op.fade(c, 50).toRGBString(), "rgb(94, 113, 151)")
    })
  })
})
