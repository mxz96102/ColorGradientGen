var Color = require("../src/color");
var op = require("../src/op");
var assert = require('assert');

describe("Operation", function () {
  describe("basic test", function () {
    var c = new Color(66, 104, 179)

    it("should be lighter", function () {
      assert(op.lighter(c, 50).toRGBString(), "rgb(158, 180, 219)")
    })

    it("should be darker", function () {
      assert(op.darker(c, 50).toRGBString(), "rgb(33, 52, 89)")
    })

    it("should be colorful", function () {
      assert(op.colorful(c, 50).toRGBString(), "rgb(33, 93, 212)")
    })

    it("should be fade", function () {
      assert(op.fade(c, 50).toRGBString(), "rgb(94, 113, 151)")
    })

    it("should fill optional percentage", function () {
      assert(op.fade(c).toRGBString(), "rgb(94, 113, 151)")
    })

    it("should get complementary color", function () {
      assert(op.complementary(c).toRGBString(), "rgb(158, 240, 222)")
    })

    it("should get a 120 deg ahead color", function () {
      assert(op.nearByA(c).toRGBString(), "rgb(174, 240, 158)")
    })

    it("should get a 240 deg ahead color", function () {
      assert(op.nearByB(c).toRGBString(), "rgb(158, 174, 240)")
    })
  })

  describe("multi operation", function () {
    var c = new Color(66, 104, 179)

    it("shuold do the same thing", function () {
      assert(op.nearByA(op.darker(op.fade(c))).toRGBString(), op.multiOperation(c, [op.fade, op.darker, op.nearByA]).toRGBString())
    })

    it("shuold do the same thing with num", function () {
      assert(op.nearByA(op.darker(op.fade(c, 10), 20), 30).toRGBString(), op.multiOperation(c, [[op.fade, 10], [op.darker, 20], [op.nearByA, 30]]).toRGBString())
    })

    it("shuold do the same thing with num or not", function () {
      assert(op.nearByA(op.darker(op.fade(c, 10), 20), 30).toRGBString(), op.multiOperation(c, [[op.fade, 10], op.darker, [op.nearByA, 30]]).toRGBString())
    })
  })
})
