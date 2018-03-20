function Color(r, g, b, a) {
  var _this = this;

  this.r = r % 256 || 0;
  this.g = g % 256 || 0;
  this.b = b % 256 || 0;
  this.a = a % 256 || 0;

  var num2Hex = function num2Hex(e) {
    return (e > 15 ? '' : '0') + e.toString(16);
  };

  this.toRGBString = function () {
    return 'rgb(' + _this.r + ', ' + _this.g + ', ' + _this.b + ')';
  };
  this.toRGBAString = function () {
    return 'rgba(' + _this.r + ', ' + _this.g + ', ' + _this.b + ', ' + _this.a + ')';
  };
  this.toHexString = function () {
    return '#' + num2Hex(_this.r) + num2Hex(_this.g) + num2Hex(_this.b);
  };
  this.toHSL = function () {
    var max = Math.max(_this.r, _this.g, _this.b) / 255;
    var min = Math.min(_this.r, _this.g, _this.b) / 255;
    var h, s, l;

    if (max === min) {
      h = 0;
    } else if (max * 255 === _this.r) {
      h = 60 * ((_this.g - _this.b) / 255 / (max - min)) + (_this.g < _this.b ? 0 : 360);
    } else if (max * 255 === _this.g) {
      h = 60 * ((_this.b - _this.r) / 255 / (max - min)) + 120;
    } else if (max * 255 === b) {
      h = 60 * ((_this.r - _this.g) / 255 / (max - min)) + 240;
    }

    l = 0.5 * (max + min);

    if (l === 0 || max === min) {
      s = 0;
    } else if (0 < l && l <= 0.5) {
      s = (max - min) / (max + min);
    } else if (l > 0.5) {
      s = (max - min) / (2 - (max + min));
    }

    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { H: h, S: s, L: l };
  };

  this.toHSLString = function () {
    var hsl = _this.toHSL();
    return 'hsl(' + hsl.H + ', ' + hsl.S + '%, ' + hsl.L + '%)';
  }

  this.toHSLAString = function () {
    var hsl = _this.toHSL();
    return 'hsla(' + hsl.H + ', ' + hsl.S + '%, ' + hsl.L + '%, ' + _this.a + ')';
  }

  this.setFromHex = function (s) {
    _this.r = parseInt((s[1]+s[2]), 16);
    _this.g = parseInt((s[3]+s[4]), 16);
    _this.b = parseInt((s[5]+s[6]), 16);
    return _this;
  };

  this.setFromHSL = function(hsl) {
    var h = hsl.H, s = hsl.S, l = hsl.L;

    function fixRGB(n, p ,q) {
      var color;

      if ( n < 0 )
        n += 1
      if ( n > 1 )
        n -= 1
      if ( n < 1 / 6 )
        color = p + ( ( q - p ) * 6 * n );
      else if ( n >= 1 / 6 && n < 0.5 )
        color = q;
      else if ( n >= 0.5 && n < 2 / 3 )
        color = p + ( ( q - p ) * 6 * ( 2 / 3 - n ) );
      else
        color = p;

      return Math.round( color * 255 )
    }

    if ( s === 0 ) {
      _this.r = _this.g = _this.b = l;
    } else {
      var q = l < 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
      var p = 2 * l - q;
      h = h / 360;
      _this.r = fixRGB(h + (1 / 3), p, q);
      _this.g = fixRGB(h, p, q);
      _this.b = fixRGB(h - (1 / 3), p, q);
    }

    return _this
  }
}

exports = module.exports = Color;
