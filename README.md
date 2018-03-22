# Gradient Color Tool
[![Build Status](https://travis-ci.org/mxz96102/ColorGradientGen.svg?branch=master)](https://travis-ci.org/mxz96102/color_gradient_gen)
[![Coverage Status](https://coveralls.io/repos/github/mxz96102/color_gradient_gen/badge.svg?branch=master)](https://coveralls.io/github/mxz96102/color_gradient_gen?branch=master)

> It's a js color to make gradient color.
> version 0.1.0

simple is in [color.hustfe.com](http://color.hustfe.com)

## How to Use

(Need to be done)

## API (continuing updating)

### Color

Color is a object represent RGBA color.

#### Props

| name | type | usage |
|------|------|-------|
|r| number| represent red value|
|g| number| represent green value|
|b| number| represent blue value|
|a| number| represent alpha value|

#### Methods

|name|args|return|usage|
|----|----|------|-----|
|toRGBString||String like rgb(r, g, b)|convert color into rgb string|
|toRGBAString||String like rgba(r, g, b, a)|convert color into rgba string|
|toHexString||String like #rrggbb|convert color into hex string|
|toHSL||Object like {H:h, S:s, L:l}|convert color into HSL object|
|toHSLString||String like hsl(r, g, b)|convert color into HSL string|
|toHSLAString||String like hsl(r, g, b, a)|convert color into HSL string|
|setFromHex|(s : String like "#rrggbb")||set color from a hex string|
|setFromHSL|(o : Object like {H:h, S:s, L:l})||convert HSL value into color|
|setRandomColor|||Set color into random rgb value|

### op

op is a tool set to change color by exact way

#### function

> percentage is depend on color itself, not by 100%

|name|args|return|usage|
|----|----|------|-----|
|lighter|(color: Color, (optional)percentage: 1 > number > 0)| Color(different) | make color lighter |
|darker|(color: Color, (optional)percentage: 1 > number > 0)| Color(different) | make color darker |
|colorful|(color: Color, (optional)percentage: 1 > number > 0)| Color(different) | make color more colorful|
|fade|(color: Color, (optional)percentage: 1 > number > 0)| Color(different) | fade color |
|angleAhead|(color: Color, angle: 360 > number > 0)| Color(different) | make color into different H field|
|nearByA|(color: Color)| Color(different) | make color to next field|
|nearByB|(color: Color)| Color(different) | make color to last field|
|complementary|(color: Color)| Color(different) | make color into complementary color|

## TODO List
- gradient function module
- transfer gradient into image
- packup this lib

