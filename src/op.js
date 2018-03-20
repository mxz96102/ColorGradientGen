function minus(e, p) {
  return e - e * p;
}

function plus(e, p) {
  return (100 - e) * p + e
}

function hslChange(color, percentage, key, cal) {
  var hsl = color.toHSL();
  var p = Math.abs(percentage) || 0.5;
  hsl[key] = cal(hsl[key], p);

  color.setFromHSL(hsl);
  return color;
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

module.exports = {
  lighter: lighter,
  darker: darker,
  colorful: colorful,
  fade: fade
}
exports = module.exports