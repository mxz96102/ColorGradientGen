var Color = require("./color");

function minus(e, p) {
  return e * (1 - p);
}

function plus(e, p) {
  return (100 - e) * p + e
}

function hslChange(color, percentage, key, cal) {
  var hsl = color.toHSL();
  var p = Math.abs(percentage) || 0.5;
  hsl[key] = cal(hsl[key], p);
  var c = new Color();

  return c.setFromHSL(hsl);
}

function hslMinus(color, percentage, key) {
  return hslChange(color, percentage, key, minus)
}

function hslPlus(color, percentage, key) {
  return hslChange(color, percentage, key, plus)
}

function lighter(color, percentage) {
  return hslPlus(color, percentage, "L")
}

function darker(color, percentage) {
  return hslMinus(color, percentage, "L")
}

function colorful(color, percentage) {
  return hslPlus(color, percentage, "S")
}

function fade(color, percentage) {
  return hslMinus(color, percentage, "S")
}

function angleAhead(color, delta) {
  var hsl = color.toHSL();
  hsl.H = (hsl.H + delta) % 360 ;
  var c = new Color();

  return c.setFromHSL(hsl);
}

function complementary(color) {
  return angleAhead(color, 180)
}

function nearByA(color) {
  return angleAhead(color, 120)
}

function nearByB(color) {
  return angleAhead(color, 240)
}

module.exports = {
  lighter: lighter,
  darker: darker,
  colorful: colorful,
  fade: fade,
  nearByA: nearByA,
  nearByB: nearByB,
  complementary: complementary,
  angleAhead: angleAhead
}

exports = module.exports