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
    return 'rgb(' + _this.r + ', ' + _this.g + ', ' + _this.b + ', ' + _this.a + ')';
  };
  this.toHexString = function () {
    return '#' + num2Hex(_this.r) + num2Hex(_this.g) + num2Hex(_this.b);
  };
  this.toHSL = function () {
    var max = Math.max(_this.r, _this.g, _this.b);
    var min = Math.min(_this.r, _this.g, _this.b);
    var h, s, l;

    if (max === min) {
      h = 0;
    } else if (max === _this.r) {
      h = 60 * ((_this.g - _this.b) / (max - min)) + (_this.g < _this.b ? 0 : 360);
    } else if (max === _this.g) {
      h = 60 * ((_this.b - _this.r) / (max - min)) + 120;
    } else if (max === b) {
      h = 60 * ((_this.r - _this.g) / (max - min)) + 240;
    }

    l = 0.5 * (max + min);

    if (l === 0 || max === min) {
      s = 0;
    } else if (0 < l && l <= 0.5) {
      s = (max - min) / (max + min);
    } else if (l > 0.5) {
      s = (max - min) / (2 - (max - min));
    }

    h = Math.round(h);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { H: h, S: s, L: l };
  };

  this.setFromHex = function (s) {
    _this.r = +(s[1]+s[2]);
    _this.g = +(s[3]+s[4]);
    _this.b = +(s[5]+s[6]);
  };

  this.setFromHSL = function(hsl) {
    var h = hsl.h, s = hsl.s, l = hsl.l;

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

      return Math.floor( color * 255 )
    }

    if ( s === 0 ) {
      _this.r = _this.g = _this.b = l;
    }else {
      var q = l < 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
      var p = 2 * l - q;
      _this.r = fixRGB(h + 1 / 3, p, q);
      _this.g = fixRGB(h, p, q);
      _this.b = fixRGB( h - 1 / 3, p, q);
    }
  }
}

exports = module.exports = Color;

var color = new Color(66, 133, 244, 1);

console.log(color.toHSL())
