/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@uiw/color-convert/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@uiw/color-convert/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   color: () => (/* binding */ color),
/* harmony export */   equalColorObjects: () => (/* binding */ equalColorObjects),
/* harmony export */   equalColorString: () => (/* binding */ equalColorString),
/* harmony export */   equalHex: () => (/* binding */ equalHex),
/* harmony export */   getContrastingColor: () => (/* binding */ getContrastingColor),
/* harmony export */   hexToHsva: () => (/* binding */ hexToHsva),
/* harmony export */   hexToRgba: () => (/* binding */ hexToRgba),
/* harmony export */   hexToXY: () => (/* binding */ hexToXY),
/* harmony export */   hslStringToHsla: () => (/* binding */ hslStringToHsla),
/* harmony export */   hslStringToHsva: () => (/* binding */ hslStringToHsva),
/* harmony export */   hslaStringToHsva: () => (/* binding */ hslaStringToHsva),
/* harmony export */   hslaToHsl: () => (/* binding */ hslaToHsl),
/* harmony export */   hslaToHsva: () => (/* binding */ hslaToHsva),
/* harmony export */   hsvStringToHsva: () => (/* binding */ hsvStringToHsva),
/* harmony export */   hsvaStringToHsva: () => (/* binding */ hsvaStringToHsva),
/* harmony export */   hsvaToHex: () => (/* binding */ hsvaToHex),
/* harmony export */   hsvaToHexa: () => (/* binding */ hsvaToHexa),
/* harmony export */   hsvaToHslString: () => (/* binding */ hsvaToHslString),
/* harmony export */   hsvaToHsla: () => (/* binding */ hsvaToHsla),
/* harmony export */   hsvaToHslaString: () => (/* binding */ hsvaToHslaString),
/* harmony export */   hsvaToHsv: () => (/* binding */ hsvaToHsv),
/* harmony export */   hsvaToHsvString: () => (/* binding */ hsvaToHsvString),
/* harmony export */   hsvaToHsvaString: () => (/* binding */ hsvaToHsvaString),
/* harmony export */   hsvaToRgbString: () => (/* binding */ hsvaToRgbString),
/* harmony export */   hsvaToRgba: () => (/* binding */ hsvaToRgba),
/* harmony export */   hsvaToRgbaString: () => (/* binding */ hsvaToRgbaString),
/* harmony export */   parseHue: () => (/* binding */ parseHue),
/* harmony export */   rgbStringToHsva: () => (/* binding */ rgbStringToHsva),
/* harmony export */   rgbToXY: () => (/* binding */ rgbToXY),
/* harmony export */   rgbaStringToHsva: () => (/* binding */ rgbaStringToHsva),
/* harmony export */   rgbaToHex: () => (/* binding */ rgbaToHex),
/* harmony export */   rgbaToHexa: () => (/* binding */ rgbaToHexa),
/* harmony export */   rgbaToHsva: () => (/* binding */ rgbaToHsva),
/* harmony export */   rgbaToRgb: () => (/* binding */ rgbaToRgb),
/* harmony export */   validHex: () => (/* binding */ validHex),
/* harmony export */   xyToHex: () => (/* binding */ xyToHex),
/* harmony export */   xyToRgb: () => (/* binding */ xyToRgb)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");

var RGB_MAX = 255;
var HUE_MAX = 360;
var SV_MAX = 100;
/**
 * ```js
 * rgbaToHsva({ r: 255, g: 255, b: 255, a: 1 }) //=> { h: 0, s: 0, v: 100, a: 1 }
 * ```
 */
var rgbaToHsva = _ref => {
  var {
    r,
    g,
    b,
    a
  } = _ref;
  var max = Math.max(r, g, b);
  var delta = max - Math.min(r, g, b);

  // prettier-ignore
  var hh = delta ? max === r ? (g - b) / delta : max === g ? 2 + (b - r) / delta : 4 + (r - g) / delta : 0;
  return {
    h: 60 * (hh < 0 ? hh + 6 : hh),
    s: max ? delta / max * SV_MAX : 0,
    v: max / RGB_MAX * SV_MAX,
    a
  };
};
var hsvaToHslString = hsva => {
  var {
    h,
    s,
    l
  } = hsvaToHsla(hsva);
  // return `hsl(${h}, ${s}%, ${l}%)`;
  return "hsl(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%)";
};
var hsvaToHsvString = _ref2 => {
  var {
    h,
    s,
    v
  } = _ref2;
  return "hsv(" + h + ", " + s + "%, " + v + "%)";
};
var hsvaToHsvaString = _ref3 => {
  var {
    h,
    s,
    v,
    a
  } = _ref3;
  return "hsva(" + h + ", " + s + "%, " + v + "%, " + a + ")";
};
var hsvaToHslaString = hsva => {
  var {
    h,
    s,
    l,
    a
  } = hsvaToHsla(hsva);
  return "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
};
var hslStringToHsla = str => {
  var [h, s, l, a] = (str.match(/\d+/g) || []).map(Number);
  return {
    h,
    s,
    l,
    a
  };
};
var hslaStringToHsva = hslString => {
  var matcher = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  var match = matcher.exec(hslString);
  if (!match) return {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
  return hslaToHsva({
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    l: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? 100 : 1)
  });
};
var hslStringToHsva = hslaStringToHsva;
var hslaToHsva = _ref4 => {
  var {
    h,
    s,
    l,
    a
  } = _ref4;
  s *= (l < 50 ? l : SV_MAX - l) / SV_MAX;
  return {
    h: h,
    s: s > 0 ? 2 * s / (l + s) * SV_MAX : 0,
    v: l + s,
    a
  };
};
var hsvaToHsla = _ref5 => {
  var {
    h,
    s,
    v,
    a
  } = _ref5;
  var hh = (200 - s) * v / SV_MAX;
  return {
    h,
    s: hh > 0 && hh < 200 ? s * v / SV_MAX / (hh <= SV_MAX ? hh : 200 - hh) * SV_MAX : 0,
    l: hh / 2,
    a
  };
};
var hsvaStringToHsva = hsvString => {
  var matcher = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  var match = matcher.exec(hsvString);
  if (!match) return {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
  return {
    h: parseHue(match[1], match[2]),
    s: Number(match[3]),
    v: Number(match[4]),
    a: match[5] === undefined ? 1 : Number(match[5]) / (match[6] ? SV_MAX : 1)
  };
};

/**
 * Valid CSS <angle> units.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/angle
 */
var angleUnits = {
  grad: HUE_MAX / 400,
  turn: HUE_MAX,
  rad: HUE_MAX / (Math.PI * 2)
};
var parseHue = function parseHue(value, unit) {
  if (unit === void 0) {
    unit = 'deg';
  }
  return Number(value) * (angleUnits[unit] || 1);
};
var hsvStringToHsva = hsvaStringToHsva;
var rgbaStringToHsva = rgbaString => {
  var matcher = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;
  var match = matcher.exec(rgbaString);
  if (!match) return {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
  return rgbaToHsva({
    r: Number(match[1]) / (match[2] ? SV_MAX / RGB_MAX : 1),
    g: Number(match[3]) / (match[4] ? SV_MAX / RGB_MAX : 1),
    b: Number(match[5]) / (match[6] ? SV_MAX / RGB_MAX : 1),
    a: match[7] === undefined ? 1 : Number(match[7]) / (match[8] ? SV_MAX : 1)
  });
};
var rgbStringToHsva = rgbaStringToHsva;

/** Converts an RGBA color plus alpha transparency to hex */
var rgbaToHex = _ref6 => {
  var {
    r,
    g,
    b
  } = _ref6;
  var bin = r << 16 | g << 8 | b;
  return "#" + (h => new Array(7 - h.length).join('0') + h)(bin.toString(16));
};
var rgbaToHexa = _ref7 => {
  var {
    r,
    g,
    b,
    a
  } = _ref7;
  var alpha = typeof a === 'number' && (a * 255 | 1 << 8).toString(16).slice(1);
  return "" + rgbaToHex({
    r,
    g,
    b,
    a
  }) + (alpha ? alpha : '');
};
var hexToHsva = hex => rgbaToHsva(hexToRgba(hex));
var hexToRgba = hex => {
  var htemp = hex.replace('#', '');
  if (/^#?/.test(hex) && htemp.length === 3) {
    hex = "#" + htemp.charAt(0) + htemp.charAt(0) + htemp.charAt(1) + htemp.charAt(1) + htemp.charAt(2) + htemp.charAt(2);
  }
  var reg = new RegExp("[A-Za-z0-9]{2}", 'g');
  var [r, g, b = 0, a] = hex.match(reg).map(v => parseInt(v, 16));
  return {
    r,
    g,
    b,
    a: (a != null ? a : 255) / RGB_MAX
  };
};

/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */
var hsvaToRgba = _ref8 => {
  var {
    h,
    s,
    v,
    a
  } = _ref8;
  var _h = h / 60,
    _s = s / SV_MAX,
    _v = v / SV_MAX,
    hi = Math.floor(_h) % 6;
  var f = _h - Math.floor(_h),
    _p = RGB_MAX * _v * (1 - _s),
    _q = RGB_MAX * _v * (1 - _s * f),
    _t = RGB_MAX * _v * (1 - _s * (1 - f));
  _v *= RGB_MAX;
  var rgba = {};
  switch (hi) {
    case 0:
      rgba.r = _v;
      rgba.g = _t;
      rgba.b = _p;
      break;
    case 1:
      rgba.r = _q;
      rgba.g = _v;
      rgba.b = _p;
      break;
    case 2:
      rgba.r = _p;
      rgba.g = _v;
      rgba.b = _t;
      break;
    case 3:
      rgba.r = _p;
      rgba.g = _q;
      rgba.b = _v;
      break;
    case 4:
      rgba.r = _t;
      rgba.g = _p;
      rgba.b = _v;
      break;
    case 5:
      rgba.r = _v;
      rgba.g = _p;
      rgba.b = _q;
      break;
  }
  rgba.r = Math.round(rgba.r);
  rgba.g = Math.round(rgba.g);
  rgba.b = Math.round(rgba.b);
  return (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rgba, {
    a
  });
};
var hsvaToRgbString = hsva => {
  var {
    r,
    g,
    b
  } = hsvaToRgba(hsva);
  return "rgb(" + r + ", " + g + ", " + b + ")";
};
var hsvaToRgbaString = hsva => {
  var {
    r,
    g,
    b,
    a
  } = hsvaToRgba(hsva);
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
};
var rgbaToRgb = _ref9 => {
  var {
    r,
    g,
    b
  } = _ref9;
  return {
    r,
    g,
    b
  };
};
var hslaToHsl = _ref10 => {
  var {
    h,
    s,
    l
  } = _ref10;
  return {
    h,
    s,
    l
  };
};
var hsvaToHex = hsva => rgbaToHex(hsvaToRgba(hsva));
var hsvaToHexa = hsva => rgbaToHexa(hsvaToRgba(hsva));
var hsvaToHsv = _ref11 => {
  var {
    h,
    s,
    v
  } = _ref11;
  return {
    h,
    s,
    v
  };
};
var hexToXY = hex => rgbToXY(rgbaToRgb(hexToRgba(hex)));
var xyToHex = xy => rgbaToHex((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, xyToRgb(xy), {
  a: 255
}));

/**
 * Converts XY to RGB. Based on formula from https://developers.meethue.com/develop/application-design-guidance/color-conversion-formulas-rgb-to-xy-and-back/
 * @param color XY color and brightness as an array [0-1, 0-1, 0-1]
 */
var xyToRgb = _ref12 => {
  var {
    x,
    y,
    bri = 255
  } = _ref12;
  var red = x * 3.2406255 + y * -1.537208 + bri * -0.4986286;
  var green = x * -0.9689307 + y * 1.8757561 + bri * 0.0415175;
  var blue = x * 0.0557101 + y * -0.2040211 + bri * 1.0569959;
  var translate = function translate(color) {
    return color <= 0.0031308 ? 12.92 * color : 1.055 * Math.pow(color, 1 / 2.4) - 0.055;
  };
  return {
    r: Math.round(255 * translate(red)),
    g: Math.round(255 * translate(green)),
    b: Math.round(255 * translate(blue))
  };
};

/**
 * Converts RGB to XY. Based on formula from https://developers.meethue.com/develop/application-design-guidance/color-conversion-formulas-rgb-to-xy-and-back/
 * @param color RGB color as an array [0-255, 0-255, 0-255]
 */
var rgbToXY = _ref13 => {
  var {
    r,
    g,
    b
  } = _ref13;
  var translateColor = function translateColor(color) {
    return color <= 0.04045 ? color / 12.92 : Math.pow((color + 0.055) / 1.055, 2.4);
  };
  var red = translateColor(r / 255);
  var green = translateColor(g / 255);
  var blue = translateColor(b / 255);
  var xyz = {};
  xyz.x = red * 0.4124 + green * 0.3576 + blue * 0.1805;
  xyz.y = red * 0.2126 + green * 0.7152 + blue * 0.0722;
  xyz.bri = red * 0.0193 + green * 0.1192 + blue * 0.9505;
  return xyz;
};
var color = str => {
  var rgb;
  var hsl;
  var hsv;
  var rgba;
  var hsla;
  var hsva;
  var xy;
  var hex;
  var hexa;
  if (typeof str === 'string' && validHex(str)) {
    hsva = hexToHsva(str);
    hex = str;
  } else if (typeof str !== 'string') {
    hsva = str;
  }
  if (hsva) {
    hsv = hsvaToHsv(hsva);
    hsla = hsvaToHsla(hsva);
    rgba = hsvaToRgba(hsva);
    hexa = rgbaToHexa(rgba);
    hex = hsvaToHex(hsva);
    hsl = hslaToHsl(hsla);
    rgb = rgbaToRgb(rgba);
    xy = rgbToXY(rgb);
  }
  return {
    rgb,
    hsl,
    hsv,
    rgba,
    hsla,
    hsva,
    hex,
    hexa,
    xy
  };
};
var getContrastingColor = str => {
  if (!str) {
    return '#ffffff';
  }
  var col = color(str);
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
};
var equalColorObjects = (first, second) => {
  if (first === second) return true;
  for (var prop in first) {
    // The following allows for a type-safe calling of this function (first & second have to be HSL, HSV, or RGB)
    // with type-unsafe iterating over object keys. TS does not allow this without an index (`[key: string]: number`)
    // on an object to define how iteration is normally done. To ensure extra keys are not allowed on our types,
    // we must cast our object to unknown (as RGB demands `r` be a key, while `Record<string, x>` does not care if
    // there is or not), and then as a type TS can iterate over.
    if (first[prop] !== second[prop]) return false;
  }
  return true;
};
var equalColorString = (first, second) => {
  return first.replace(/\s/g, '') === second.replace(/\s/g, '');
};
var equalHex = (first, second) => {
  if (first.toLowerCase() === second.toLowerCase()) return true;

  // To compare colors like `#FFF` and `ffffff` we convert them into RGB objects
  return equalColorObjects(hexToRgba(first), hexToRgba(second));
};
var validHex = hex => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);

/***/ }),

/***/ "./node_modules/@uiw/react-color-alpha/esm/Pointer.js":
/*!************************************************************!*\
  !*** ./node_modules/@uiw/react-color-alpha/esm/Pointer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pointer: () => (/* binding */ Pointer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["className", "prefixCls", "left", "top", "style", "fillProps"];


var Pointer = _ref => {
  var {
      className,
      prefixCls,
      left,
      top,
      style,
      fillProps
    } = _ref,
    reset = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);
  var styleWrapper = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {
    position: 'absolute',
    left,
    top
  });
  var stylePointer = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: 18,
    height: 18,
    boxShadow: 'var(--alpha-pointer-box-shadow)',
    borderRadius: '50%',
    backgroundColor: 'var(--alpha-pointer-background-color)'
  }, fillProps == null ? void 0 : fillProps.style, {
    transform: left ? 'translate(-9px, -1px)' : 'translate(-1px, -9px)'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: prefixCls + "-pointer " + (className || ''),
    style: styleWrapper
  }, reset, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: prefixCls + "-fill"
    }, fillProps, {
      style: stylePointer
    }))
  }));
};

/***/ }),

/***/ "./node_modules/@uiw/react-color-alpha/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@uiw/react-color-alpha/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BACKGROUND_IMG: () => (/* binding */ BACKGROUND_IMG),
/* harmony export */   Pointer: () => (/* reexport safe */ _Pointer__WEBPACK_IMPORTED_MODULE_4__.Pointer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var _uiw_react_drag_event_interactive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uiw/react-drag-event-interactive */ "./node_modules/@uiw/react-drag-event-interactive/esm/index.js");
/* harmony import */ var _Pointer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pointer */ "./node_modules/@uiw/react-color-alpha/esm/Pointer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "className", "hsva", "background", "bgProps", "innerProps", "pointerProps", "radius", "width", "height", "direction", "style", "onChange", "pointer"];






var BACKGROUND_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==';
var Alpha = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-alpha',
      className,
      hsva,
      background,
      bgProps = {},
      innerProps = {},
      pointerProps = {},
      radius = 0,
      width,
      height = 16,
      direction = 'horizontal',
      style,
      onChange,
      pointer
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var handleChange = offset => {
    onChange && onChange((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hsva, {
      a: direction === 'horizontal' ? offset.left : offset.top
    }), offset);
  };
  var colorTo = (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_5__.hsvaToHslaString)(Object.assign({}, hsva, {
    a: 1
  }));
  var innerBackground = "linear-gradient(to " + (direction === 'horizontal' ? 'right' : 'bottom') + ", rgba(244, 67, 54, 0) 0%, " + colorTo + " 100%)";
  var comProps = {};
  if (direction === 'horizontal') {
    comProps.left = hsva.a * 100 + "%";
  } else {
    comProps.top = hsva.a * 100 + "%";
  }
  var styleWrapper = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    '--alpha-background-color': '#fff',
    '--alpha-pointer-background-color': 'rgb(248, 248, 248)',
    '--alpha-pointer-box-shadow': 'rgb(0 0 0 / 37%) 0px 1px 4px 0px',
    borderRadius: radius,
    background: "url(" + BACKGROUND_IMG + ") left center",
    backgroundColor: 'var(--alpha-background-color)'
  }, {
    width,
    height
  }, style, {
    position: 'relative'
  });
  var pointerElement = pointer && typeof pointer === 'function' ? pointer((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    prefixCls
  }, pointerProps, comProps)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Pointer__WEBPACK_IMPORTED_MODULE_4__.Pointer, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pointerProps, {
    prefixCls: prefixCls
  }, comProps));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    className: [prefixCls, prefixCls + "-" + direction, className || ''].filter(Boolean).join(' '),
    style: styleWrapper,
    ref: ref,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, bgProps, {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        inset: 0,
        position: 'absolute',
        background: background || innerBackground,
        borderRadius: radius
      }, bgProps.style)
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_drag_event_interactive__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps, {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps.style, {
        inset: 0,
        zIndex: 1,
        position: 'absolute'
      }),
      onMove: handleChange,
      onDown: handleChange,
      children: pointerElement
    }))]
  }));
});
Alpha.displayName = 'Alpha';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alpha);

/***/ }),

/***/ "./node_modules/@uiw/react-color-editable-input-rgba/esm/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@uiw/react-color-editable-input-rgba/esm/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/react-color-editable-input */ "./node_modules/@uiw/react-color-editable-input/esm/index.js");
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "hsva", "placement", "rProps", "gProps", "bProps", "aProps", "className", "style", "onChange"];




var EditableInputRGBA = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-editable-input-rgba',
      hsva,
      placement = 'bottom',
      rProps = {},
      gProps = {},
      bProps = {},
      aProps = {},
      className,
      style,
      onChange
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var rgba = hsva ? (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hsvaToRgba)(hsva) : {};
  function handleBlur(evn) {
    var value = Number(evn.target.value);
    if (value && value > 255) {
      evn.target.value = '255';
    }
    if (value && value < 0) {
      evn.target.value = '0';
    }
  }
  var handleChange = (value, type, evn) => {
    if (typeof value === 'number') {
      if (type === 'a') {
        if (value < 0) value = 0;
        if (value > 100) value = 100;
        onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.rgbaToHsva)((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rgba, {
          a: value / 100
        }))));
      }
      if (value > 255) {
        value = 255;
        evn.target.value = '255';
      }
      if (value < 0) {
        value = 0;
        evn.target.value = '0';
      }
      if (type === 'r') {
        onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.rgbaToHsva)((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rgba, {
          r: value
        }))));
      }
      if (type === 'g') {
        onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.rgbaToHsva)((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rgba, {
          g: value
        }))));
      }
      if (type === 'b') {
        onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.rgbaToHsva)((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rgba, {
          b: value
        }))));
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: [prefixCls, className || ''].filter(Boolean).join(' ')
  }, other, {
    style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: 11,
      display: 'flex'
    }, style),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: "R",
      value: rgba.r || 0,
      onBlur: handleBlur,
      placement: placement,
      onChange: (evn, val) => handleChange(val, 'r', evn)
    }, rProps, {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rProps.style)
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: "G",
      value: rgba.g || 0,
      onBlur: handleBlur,
      placement: placement,
      onChange: (evn, val) => handleChange(val, 'g', evn)
    }, gProps, {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        marginLeft: 5
      }, rProps.style)
    })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: "B",
      value: rgba.b || 0,
      onBlur: handleBlur,
      placement: placement,
      onChange: (evn, val) => handleChange(val, 'b', evn)
    }, bProps, {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        marginLeft: 5
      }, bProps.style)
    })), aProps && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      label: "A",
      value: rgba.a ? parseInt(String(rgba.a * 100), 10) : 0,
      onBlur: handleBlur,
      placement: placement,
      onChange: (evn, val) => handleChange(val, 'a', evn)
    }, aProps, {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        marginLeft: 5
      }, aProps.style)
    }))]
  }));
});
EditableInputRGBA.displayName = 'EditableInputRGBA';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableInputRGBA);

/***/ }),

/***/ "./node_modules/@uiw/react-color-editable-input/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@uiw/react-color-editable-input/esm/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "placement", "label", "value", "className", "style", "labelStyle", "inputStyle", "onChange", "onBlur", "renderInput"];



var validHex = hex => /^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(hex);
var getNumberValue = value => Number(String(value).replace(/%/g, ''));
var EditableInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-editable-input',
      placement = 'bottom',
      label,
      value: initValue,
      className,
      style,
      labelStyle,
      inputStyle,
      onChange,
      onBlur,
      renderInput
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initValue);
  var isFocus = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props.value !== value) {
      if (!isFocus.current) {
        setValue(props.value);
      }
    }
  }, [props.value]);
  function handleChange(evn, valInit) {
    var value = (valInit || evn.target.value).trim().replace(/^#/, '');
    if (validHex(value)) {
      onChange && onChange(evn, value);
    }
    var val = getNumberValue(value);
    if (!isNaN(val)) {
      onChange && onChange(evn, val);
    }
    setValue(value);
  }
  function handleBlur(evn) {
    isFocus.current = false;
    setValue(props.value);
    onBlur && onBlur(evn);
  }
  var placementStyle = {};
  if (placement === 'bottom') {
    placementStyle['flexDirection'] = 'column';
  }
  if (placement === 'top') {
    placementStyle['flexDirection'] = 'column-reverse';
  }
  if (placement === 'left') {
    placementStyle['flexDirection'] = 'row-reverse';
  }
  var wrapperStyle = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    '--editable-input-label-color': 'rgb(153, 153, 153)',
    '--editable-input-box-shadow': 'rgb(204 204 204) 0px 0px 0px 1px inset',
    '--editable-input-color': '#666',
    position: 'relative',
    alignItems: 'center',
    display: 'flex',
    fontSize: 11
  }, placementStyle, style);
  var editableStyle = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: '100%',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 3,
    paddingRight: 3,
    fontSize: 11,
    background: 'transparent',
    boxSizing: 'border-box',
    border: 'none',
    color: 'var(--editable-input-color)',
    boxShadow: 'var(--editable-input-box-shadow)'
  }, inputStyle);
  var inputProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    autoComplete: 'off',
    onFocus: () => isFocus.current = true
  }, other, {
    style: editableStyle
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: [prefixCls, className || ''].filter(Boolean).join(' '),
    style: wrapperStyle,
    children: [renderInput ? renderInput(inputProps, ref) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, inputProps)), label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        color: 'var(--editable-input-label-color)',
        textTransform: 'capitalize'
      }, labelStyle),
      children: label
    })]
  });
});
EditableInput.displayName = 'EditableInput';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableInput);

/***/ }),

/***/ "./node_modules/@uiw/react-color-hue/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@uiw/react-color-hue/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_react_color_alpha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/react-color-alpha */ "./node_modules/@uiw/react-color-alpha/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "className", "hue", "onChange", "direction"];



var Hue = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-hue',
      className,
      hue = 0,
      onChange: _onChange,
      direction = 'horizontal'
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_alpha__WEBPACK_IMPORTED_MODULE_4__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    className: prefixCls + " " + (className || '')
  }, other, {
    direction: direction,
    background: "linear-gradient(to " + (direction === 'horizontal' ? 'right' : 'bottom') + ", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",
    hsva: {
      h: hue,
      s: 100,
      v: 100,
      a: hue / 360
    },
    onChange: (_, interaction) => {
      _onChange && _onChange({
        h: direction === 'horizontal' ? 360 * interaction.left : 360 * interaction.top
      });
    }
  }));
});
Hue.displayName = 'Hue';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hue);

/***/ }),

/***/ "./node_modules/@uiw/react-color-saturation/esm/Pointer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@uiw/react-color-saturation/esm/Pointer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pointer: () => (/* binding */ Pointer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Pointer = _ref => {
  var {
    className,
    color,
    left,
    top,
    prefixCls
  } = _ref;
  var style = {
    position: 'absolute',
    top,
    left
  };
  var stylePointer = {
    '--saturation-pointer-box-shadow': 'rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px',
    width: 6,
    height: 6,
    transform: 'translate(-3px, -3px)',
    boxShadow: 'var(--saturation-pointer-box-shadow)',
    borderRadius: '50%',
    backgroundColor: color
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: prefixCls + "-pointer " + (className || ''),
    style: style,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: prefixCls + "-fill",
      style: stylePointer
    })
  }), [top, left, color, className, prefixCls]);
};

/***/ }),

/***/ "./node_modules/@uiw/react-color-saturation/esm/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@uiw/react-color-saturation/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var _uiw_react_drag_event_interactive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uiw/react-drag-event-interactive */ "./node_modules/@uiw/react-drag-event-interactive/esm/index.js");
/* harmony import */ var _Pointer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pointer */ "./node_modules/@uiw/react-color-saturation/esm/Pointer.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "radius", "pointer", "className", "hue", "style", "hsva", "onChange"];





var Saturation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var _hsva$h;
  var {
      prefixCls = 'w-color-saturation',
      radius = 0,
      pointer,
      className,
      hue = 0,
      style,
      hsva,
      onChange
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var containerStyle = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: 200,
    height: 200,
    borderRadius: radius
  }, style, {
    position: 'relative'
  });
  var handleChange = (interaction, event) => {
    onChange && hsva && onChange({
      h: hsva.h,
      s: interaction.left * 100,
      v: (1 - interaction.top) * 100,
      a: hsva.a
      // source: 'hsv',
    });
  };
  var pointerElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!hsva) return null;
    var comProps = {
      top: 100 - hsva.v + "%",
      left: hsva.s + "%",
      color: (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hsvaToHslaString)(hsva)
    };
    if (pointer && typeof pointer === 'function') {
      return pointer((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        prefixCls
      }, comProps));
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Pointer__WEBPACK_IMPORTED_MODULE_5__.Pointer, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      prefixCls: prefixCls
    }, comProps));
  }, [hsva, pointer, prefixCls]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_drag_event_interactive__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: [prefixCls, className || ''].filter(Boolean).join(' ')
  }, other, {
    style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'absolute',
      inset: 0,
      cursor: 'crosshair',
      backgroundImage: "linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl(" + ((_hsva$h = hsva == null ? void 0 : hsva.h) != null ? _hsva$h : hue) + ", 100%, 50%))"
    }, containerStyle),
    ref: ref,
    onMove: handleChange,
    onDown: handleChange,
    children: pointerElement
  }));
});
Saturation.displayName = 'Saturation';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Saturation);

/***/ }),

/***/ "./node_modules/@uiw/react-color-sketch/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uiw/react-color-sketch/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_react_color_saturation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @uiw/react-color-saturation */ "./node_modules/@uiw/react-color-saturation/esm/index.js");
/* harmony import */ var _uiw_react_color_alpha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @uiw/react-color-alpha */ "./node_modules/@uiw/react-color-alpha/esm/index.js");
/* harmony import */ var _uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @uiw/react-color-editable-input */ "./node_modules/@uiw/react-color-editable-input/esm/index.js");
/* harmony import */ var _uiw_react_color_editable_input_rgba__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @uiw/react-color-editable-input-rgba */ "./node_modules/@uiw/react-color-editable-input-rgba/esm/index.js");
/* harmony import */ var _uiw_react_color_hue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @uiw/react-color-hue */ "./node_modules/@uiw/react-color-hue/esm/index.js");
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var _uiw_react_color_swatch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @uiw/react-color-swatch */ "./node_modules/@uiw/react-color-swatch/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "className", "onChange", "width", "presetColors", "color", "editableDisable", "disableAlpha", "style"];










var PRESET_COLORS = ['#D0021B', '#F5A623', '#f8e61b', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF'];
var Bar = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
  style: {
    boxShadow: 'rgb(0 0 0 / 60%) 0px 0px 2px',
    width: 4,
    top: 1,
    bottom: 1,
    left: props.left,
    borderRadius: 1,
    position: 'absolute',
    backgroundColor: '#fff'
  }
});
var Sketch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-sketch',
      className,
      onChange,
      width = 218,
      presetColors = PRESET_COLORS,
      color,
      editableDisable = true,
      disableAlpha = false,
      style
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var [hsva, setHsva] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    h: 209,
    s: 36,
    v: 90,
    a: 1
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (typeof color === 'string' && (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.validHex)(color)) {
      setHsva((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hexToHsva)(color));
    }
    if (typeof color === 'object') {
      setHsva(color);
    }
  }, [color]);
  var handleChange = hsv => {
    setHsva(hsv);
    onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)(hsv));
  };
  var handleHex = (value, evn) => {
    if (typeof value === 'string' && (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.validHex)(value) && /(3|6)/.test(String(value.length))) {
      handleChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hexToHsva)(value));
    }
  };
  var handleAlphaChange = newAlpha => handleChange((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hsva, {
    a: newAlpha.a
  }));
  var handleSaturationChange = newColor => handleChange((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hsva, newColor, {
    a: hsva.a
  }));
  var styleMain = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    '--sketch-background': 'rgb(255, 255, 255)',
    '--sketch-box-shadow': 'rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px',
    '--sketch-swatch-box-shadow': 'rgb(0 0 0 / 15%) 0px 0px 0px 1px inset',
    '--sketch-alpha-box-shadow': 'rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset',
    '--sketch-swatch-border-top': '1px solid rgb(238, 238, 238)',
    background: 'var(--sketch-background)',
    borderRadius: 4,
    boxShadow: 'var(--sketch-box-shadow)',
    width
  }, style);
  var styleAlpha = {
    borderRadius: 2,
    background: (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hsvaToRgbaString)(hsva),
    boxShadow: 'var(--sketch-alpha-box-shadow)'
  };
  var styleSwatch = {
    borderTop: 'var(--sketch-swatch-border-top)',
    paddingTop: 10,
    paddingLeft: 10
  };
  var styleSwatchRect = {
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 3,
    boxShadow: 'var(--sketch-swatch-box-shadow)'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    className: prefixCls + " " + (className || ''),
    ref: ref,
    style: styleMain,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        padding: '10px 10px 8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_saturation__WEBPACK_IMPORTED_MODULE_5__["default"], {
        hsva: hsva,
        style: {
          width: 'auto',
          height: 150
        },
        onChange: handleSaturationChange
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          display: 'flex',
          marginTop: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          style: {
            flex: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_hue__WEBPACK_IMPORTED_MODULE_6__["default"], {
            width: "auto",
            height: 10,
            hue: hsva.h,
            pointer: Bar,
            innerProps: {
              style: {
                marginLeft: 1,
                marginRight: 5
              }
            },
            onChange: newHue => handleChange((0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hsva, newHue))
          }), !disableAlpha && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_alpha__WEBPACK_IMPORTED_MODULE_7__["default"], {
            width: "auto",
            height: 10,
            hsva: hsva,
            pointer: Bar,
            style: {
              marginTop: 4
            },
            innerProps: {
              style: {
                marginLeft: 1,
                marginRight: 5
              }
            },
            onChange: handleAlphaChange
          })]
        }), !disableAlpha && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_alpha__WEBPACK_IMPORTED_MODULE_7__["default"], {
          width: 24,
          height: 24,
          hsva: hsva,
          radius: 2,
          style: {
            marginLeft: 4
          },
          bgProps: {
            style: {
              background: 'transparent'
            }
          },
          innerProps: {
            style: styleAlpha
          },
          pointer: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {})
        })]
      })]
    }), editableDisable && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      style: {
        display: 'flex',
        margin: '0 10px 3px 10px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_editable_input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        label: "Hex",
        value: (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hsvaToHex)(hsva).replace(/^#/, '').toLocaleUpperCase(),
        onChange: (evn, val) => handleHex(val, evn),
        style: {
          minWidth: 58
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_editable_input_rgba__WEBPACK_IMPORTED_MODULE_9__["default"], {
        hsva: hsva,
        style: {
          marginLeft: 6
        },
        aProps: !disableAlpha ? {} : false,
        onChange: result => handleChange(result.hsva)
      })]
    }), presetColors && presetColors.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_uiw_react_color_swatch__WEBPACK_IMPORTED_MODULE_10__["default"], {
      style: styleSwatch,
      colors: presetColors,
      color: (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hsvaToHex)(hsva),
      onChange: hsvColor => handleChange(hsvColor),
      rectProps: {
        style: styleSwatchRect
      }
    })]
  }));
});
Sketch.displayName = 'Sketch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sketch);

/***/ }),

/***/ "./node_modules/@uiw/react-color-swatch/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@uiw/react-color-swatch/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uiw/color-convert */ "./node_modules/@uiw/color-convert/esm/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "className", "color", "colors", "style", "rectProps", "onChange", "addonAfter", "addonBefore", "rectRender"];



var Swatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-swatch',
      className,
      color,
      colors = [],
      style,
      rectProps = {},
      onChange,
      addonAfter,
      addonBefore,
      rectRender
    } = props,
    other = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var rectStyle = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    '--swatch-background-color': 'rgb(144, 19, 254)',
    background: 'var(--swatch-background-color)',
    height: 15,
    width: 15,
    marginRight: 5,
    marginBottom: 5,
    cursor: 'pointer',
    position: 'relative',
    outline: 'none',
    borderRadius: 2
  }, rectProps.style);
  var handleClick = (hex, evn) => {
    onChange && onChange((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hexToHsva)(hex), (0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.color)((0,_uiw_color_convert__WEBPACK_IMPORTED_MODULE_4__.hexToHsva)(hex)), evn);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, other, {
    className: [prefixCls, className || ''].filter(Boolean).join(' '),
    style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative'
    }, style),
    children: [addonBefore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(addonBefore) && addonBefore, colors && Array.isArray(colors) && colors.map((item, idx) => {
      var title = '';
      var background = '';
      if (typeof item === 'string') {
        title = item;
        background = item;
      }
      if (typeof item === 'object' && item.color) {
        title = item.title || item.color;
        background = item.color;
      }
      var checked = color && color.toLocaleLowerCase() === background.toLocaleLowerCase();
      var render = rectRender && rectRender({
        title,
        color: background,
        checked: !!checked,
        style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rectStyle, {
          background
        }),
        onClick: evn => handleClick(background, evn)
      });
      if (render) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: render
        }, idx);
      }
      var child = rectProps.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(rectProps.children) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(rectProps.children, {
        color: background,
        checked
      }) : null;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tabIndex: 0,
        title: title,
        onClick: evn => handleClick(background, evn)
      }, rectProps, {
        children: child,
        style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rectStyle, {
          background
        })
      }), idx);
    }), addonAfter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().isValidElement(addonAfter) && addonAfter]
  }));
});
Swatch.displayName = 'Swatch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Swatch);

/***/ }),

/***/ "./node_modules/@uiw/react-drag-event-interactive/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@uiw/react-drag-event-interactive/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.clamp),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getRelativePosition: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getRelativePosition),
/* harmony export */   isTouch: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isTouch),
/* harmony export */   preventDefaultMove: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.preventDefaultMove),
/* harmony export */   useEventCallback: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.useEventCallback)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@uiw/react-drag-event-interactive/esm/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var _excluded = ["prefixCls", "className", "onMove", "onDown"];




var Interactive = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  var {
      prefixCls = 'w-color-interactive',
      className,
      onMove,
      onDown
    } = props,
    reset = (0,_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);
  var container = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var hasTouched = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  var [isDragging, setDragging] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var onMoveCallback = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.useEventCallback)(onMove);
  var onKeyCallback = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.useEventCallback)(onDown);

  // Prevent mobile browsers from handling mouse events (conflicting with touch ones).
  // If we detected a touch interaction before, we prefer reacting to touch events only.
  var isValid = event => {
    if (hasTouched.current && !(0,_utils__WEBPACK_IMPORTED_MODULE_4__.isTouch)(event)) return false;
    hasTouched.current = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isTouch)(event);
    return true;
  };
  var handleMove = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.preventDefaultMove)(event);
    // If user moves the pointer outside of the window or iframe bounds and release it there,
    // `mouseup`/`touchend` won't be fired. In order to stop the picker from following the cursor
    // after the user has moved the mouse/finger back to the document, we check `event.buttons`
    // and `event.touches`. It allows us to detect that the user is just moving his pointer
    // without pressing it down
    var isDown = (0,_utils__WEBPACK_IMPORTED_MODULE_4__.isTouch)(event) ? event.touches.length > 0 : event.buttons > 0;
    if (isDown && container.current) {
      onMoveCallback && onMoveCallback((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getRelativePosition)(container.current, event), event);
    } else {
      setDragging(false);
    }
  }, [onMoveCallback]);
  var handleMoveEnd = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => setDragging(false), []);
  var toggleDocumentEvents = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(state => {
    var toggleEvent = state ? window.addEventListener : window.removeEventListener;
    toggleEvent(hasTouched.current ? 'touchmove' : 'mousemove', handleMove);
    toggleEvent(hasTouched.current ? 'touchend' : 'mouseup', handleMoveEnd);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    toggleDocumentEvents(isDragging);
    return () => {
      isDragging && toggleDocumentEvents(false);
    };
  }, [isDragging, toggleDocumentEvents]);
  var handleMoveStart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(event => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_4__.preventDefaultMove)(event.nativeEvent);
    if (!isValid(event.nativeEvent)) return;
    onKeyCallback && onKeyCallback((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getRelativePosition)(container.current, event.nativeEvent), event.nativeEvent);
    setDragging(true);
  }, [onKeyCallback]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reset, {
    className: [prefixCls, className || ''].filter(Boolean).join(' '),
    style: (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reset.style, {
      touchAction: 'none'
    }),
    ref: container,
    tabIndex: 0,
    onMouseDown: handleMoveStart,
    onTouchStart: handleMoveStart
  }));
});
Interactive.displayName = 'Interactive';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Interactive);

/***/ }),

/***/ "./node_modules/@uiw/react-drag-event-interactive/esm/utils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@uiw/react-drag-event-interactive/esm/utils.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   getRelativePosition: () => (/* binding */ getRelativePosition),
/* harmony export */   isTouch: () => (/* binding */ isTouch),
/* harmony export */   preventDefaultMove: () => (/* binding */ preventDefaultMove),
/* harmony export */   useEventCallback: () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Saves incoming handler to the ref in order to avoid "useCallback hell"
function useEventCallback(handler) {
  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    callbackRef.current = handler;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, event) => callbackRef.current && callbackRef.current(value, event), []);
}

// Check if an event was triggered by touch
var isTouch = event => 'touches' in event;

// Browsers introduced an intervention, making touch events passive by default.
// This workaround removes `preventDefault` call from the touch handlers.
// https://github.com/facebook/react/issues/19651
var preventDefaultMove = event => {
  !isTouch(event) && event.preventDefault && event.preventDefault();
};
// Clamps a value between an upper and lower bound.
// We use ternary operators because it makes the minified code
// 2 times shorter then `Math.min(Math.max(a,b),c)`
var clamp = function clamp(number, min, max) {
  if (min === void 0) {
    min = 0;
  }
  if (max === void 0) {
    max = 1;
  }
  return number > max ? max : number < min ? min : number;
};
// Returns a relative position of the pointer inside the node's bounding box
var getRelativePosition = (node, event) => {
  var rect = node.getBoundingClientRect();

  // Get user's pointer position from `touches` array if it's a `TouchEvent`
  var pointer = isTouch(event) ? event.touches[0] : event;
  return {
    left: clamp((pointer.pageX - (rect.left + window.pageXOffset)) / rect.width),
    top: clamp((pointer.pageY - (rect.top + window.pageYOffset)) / rect.height),
    width: rect.width,
    height: rect.height,
    x: pointer.pageX - (rect.left + window.pageXOffset),
    y: pointer.pageY - (rect.top + window.pageYOffset)
  };
};

/***/ }),

/***/ "./src/scripts/Canvas2Component.js":
/*!*****************************************!*\
  !*** ./src/scripts/Canvas2Component.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


//import PropTypes from 'prop-types';

const Canvas = ({
  canvasRef,
  handleCanvasClick,
  aspectRatio,
  handleCanvasDimensions,
  height,
  width
}) => {
  // CHANGED
  //const canvasRef = useRef(null);
  function myFunc(element) {
    return element.getBoundingClientRect();
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const elementDimensions = myFunc(canvasRef.current);
    handleCanvasDimensions(() => elementDimensions);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("canvas", {
    id: "canvas-2",
    className: `h-full w-full relative`,
    ref: canvasRef,
    width: width // CHANGED
    ,
    height: height // CHANGED
    //style={{height: `${100*aspectRatio}%`, 
    //width: `100%`}}
    ,
    onClick: e => handleCanvasClick(e)
  });
};

// ADDED
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
//   height: PropTypes.number.isRequired, // ADDED
//   width: PropTypes.number.isRequired, // ADDED
// };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_best_gradient_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-best-gradient-color-picker */ "./node_modules/react-best-gradient-color-picker/dist/esm/hooks/useColorPicker.js");
/* harmony import */ var _Canvas2Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas2Component */ "./src/scripts/Canvas2Component.js");
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _gradientBuilder_GradientBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gradientBuilder/GradientBuilder */ "./src/scripts/gradientBuilder/GradientBuilder.js");








// Access the post ID variable passed from PHP
if (typeof post_id_object !== 'undefined') {
  var post_id = post_id_object.post_id;
  //console.log(post_id); // Output the post ID to the browser console
}
const image = acf_vars.my_localized_var.url;
function convertHexToRgbA(hexVal) {
  let ret;

  // If the hex value is valid.
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {
    // Getting the content after '#',
    // eg. 'ffffff' in case of '#ffffff'
    ret = hexVal.slice(1);

    // Splitting each character
    ret = ret.split('');

    // Checking if the length is 3
    // then make that 6
    if (ret.length == 3) {
      let ar = [];
      ar.push(ret[0]);
      ar.push(ret[0]);
      ar.push(ret[1]);
      ar.push(ret[1]);
      ar.push(ret[2]);
      ar.push(ret[2]);
      ret = ar;
    }

    // Starts with '0x'(in hexadecimal)
    ret = '0x' + ret.join('');

    // Converting the first 2 characters
    // from hexadecimal to r value
    let r = ret >> 16 & 255;

    // Converting the second 2 characters
    // to hexadecimal to g value
    let g = ret >> 8 & 255;

    // Converting the last 2 characters
    // to hexadecimal to b value
    let b = ret & 255;

    // Appending all of them to make
    // the RGBA value
    return 'rgba(' + [r, g, b].join(',') + ',1)';
  }
}
// Function to convert RGBA to Hex
const rgbaToHex = rgba => {
  const parts = rgba.match(/(\d+), (\d+), (\d+), (\d?\.?\d+)/);
  const r = parseInt(parts[1]).toString(16).padStart(2, '0');
  const g = parseInt(parts[2]).toString(16).padStart(2, '0');
  const b = parseInt(parts[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
};
const getXCoord = (i, xSplit, Xsegment) => {
  //const currentRow = Math.floor(i / xSplit);
  const currentCol = i % xSplit;
  //console.log(i)
  return currentCol * Xsegment;
};
const getYCoord = (i, xSplit, Ysegment) => {
  //const currentCol = (i % xSplit);
  const currentRow = Math.floor(i / xSplit);
  return currentRow * Ysegment;
};
const getSubXCoord = (index, i, xSplit, Xsegment, subSplitX, subsegmentSizeX) => {
  const currentCol = index % xSplit;
  const parnetXCoord = currentCol * Xsegment;
  const childCol = i % subSplitX;
  //console.log(i)
  //return parnetXCoord + (childCol * subsegmentSize)
  return childCol * subsegmentSizeX;
};
const getSubYCoord = (index, i, xSplit, Ysegment, subSplitX, subsegmentSizeY) => {
  const currentRow = Math.floor(index / xSplit);
  const parentYCoord = currentRow * Ysegment;
  const childRow = Math.floor(i / subSplitX);
  //return parentYCoord + (childRow * subsegmentSize)
  return childRow * subsegmentSizeY;
};
const getTileX = (i, horizontalSplit, verticalSplit) => {
  const currentRow = Math.floor(i / horizontalSplit) + 1;
  const tileHeight = 100 / verticalSplit;
  return tileHeight * currentRow - tileHeight;
};
const getSubTileX = (i, subIndex, horizontalSplit, verticalSplit, subSplitX, subSplitY) => {
  const currentRow = Math.floor(i / horizontalSplit) + 1;
  const currentSubRow = Math.floor(subIndex / subSplitX) + 1;
  const tileHeight = 100 / verticalSplit;
  const tileSubHeight = 100 / verticalSplit / subSplitY;
  const tileReturn = tileHeight * currentRow - tileHeight;
  var obj = {
    subIndex: subIndex,
    currentRow: currentRow,
    currentSubRow: currentSubRow,
    tileHeight: tileHeight,
    tileReturn: tileReturn,
    subSplitX: subSplitX,
    subSplitY: subSplitY,
    horizontalSplit: horizontalSplit,
    verticalSplit: verticalSplit
  };
  //console.log(obj)
  return tileReturn + (tileSubHeight * currentSubRow - tileSubHeight);
};
const getTileY = (i, horizontalSplit) => {
  const currentCol = i % horizontalSplit + 1;
  const tileWidth = 100 / horizontalSplit;
  return 100 / horizontalSplit * currentCol - tileWidth;
};
const getSubTileY = (i, subIndex, horizontalSplit, subSplitX) => {
  const currentCol = i % horizontalSplit + 1;
  const tileWidth = 100 / horizontalSplit;
  const currentSubCol = subIndex % subSplitX + 1;
  const tileSubWidth = 100 / horizontalSplit / subSplitX;
  const tileReturn = 100 / horizontalSplit * currentCol - tileWidth;
  return tileReturn + (100 / horizontalSplit / subSplitX * currentSubCol - tileSubWidth);
};
const getSubTileX2 = (index, subIndex, xSplit, subSplitX) => {
  //const currentParentRow = Math.floor(index / xSplit) + 1;
  const currentParentCol = index % xSplit + 1;
  //const currentSubRow = Math.floor(subIndex / subSplitX) + 1;
  const currentSubParentCol = subIndex % subSplitX + 1;
  const parentTileWidth = 100 / xSplit;
  const subTileWidth = parentTileWidth / subSplitX;
  //console.log(subTileHeight)
  //console.log(currentSubRow)
  const parentXTile = parentTileWidth * currentParentCol - parentTileWidth;
  //console.log(parentXTile + (subTileHeight * currentSubRow - subTileHeight))
  var obj = {
    function: 'getSubTileX',
    index: index,
    subIndex: subIndex,
    xSplit: xSplit,
    subSplitX: subSplitX,
    currentParentCol: currentParentCol,
    parentTileWidth: parentTileWidth,
    subTileWidth: subTileWidth,
    parentXTile: parentXTile,
    return: parentXTile + (subTileWidth * currentSubParentCol - subTileWidth)
  };
  //console.log(obj)
  //console.log(currentSubParentCol)
  return parentXTile + (subTileWidth * currentSubParentCol - subTileWidth);
};
const getSubTileY2 = (index, subIndex, ySplit, subSplitY) => {
  //const currentParentCol = (index % xSplit) + 1;
  //const currentSubParentCol = (subIndex % subSplitY) + 1;
  const currentParentRow = Math.floor(index / ySplit) + 1;
  const currentSubParentRow = Math.floor(subIndex / subSplitY) + 1;
  const parentTileHeight = 100 / ySplit;
  const subTileHeight = 100 / subSplitY;
  const parentYTile = 100 / ySplit * currentParentRow - parentTileHeight;
  var obj = {
    function: 'getSubTileY',
    //index: index,
    subIndex: subIndex,
    currentSubParentRow: currentSubParentRow,
    //ySplit: ySplit,
    subSplitY: subSplitY,
    //parentTileHeight: parentTileHeight,
    subTileHeight: subTileHeight,
    //parentYTile: parentYTile,
    return: currentSubParentRow * subTileHeight - subTileHeight
  };
  //console.log(obj)
  return currentSubParentRow * subTileHeight - subTileHeight;
};
const Tiles = ({
  idsuffix,
  refContainer,
  tiles,
  handleTileClick,
  handleSubTileClick,
  xSplit,
  ySplit,
  xSegmentSize,
  ySegmentSize,
  selectedX,
  selectedY,
  clicked,
  clickedValue,
  clickedObject,
  clickedObjectValue,
  subSplitX,
  subSplitY,
  subsegmentSizeX,
  subsegmentSizeY,
  canvasRef,
  zoomCanvasSize,
  selectedTilesArray,
  selectedSubTilesArray
}) => {
  //console.log(tiles)
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Object.entries(tiles).map((v, i) => tiles[i].subTiles.length === 0 || typeof tiles[i] === 'string' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: refContainer,
    key: i,
    id: `${idsuffix}-${i}`,
    "dataset-index": i,
    className: `absolute -top-[1px] -right-[1px] border-[#f3f3f39c] bottom-0 left-0 border-l border-b ${Math.floor(i / xSplit) === 0 ? 'border-t' : 'border-t-0'} `
    //className={Math.floor(i / xSplit) === 0 ? 'border-t':'border-t-0'}
    ,
    style: {
      width: `${100 / xSplit}%`,
      height: `${100 / ySplit}%`,
      top: `${getTileX(i, xSplit, ySplit)}%`,
      left: `${getTileY(i, xSplit)}%`,
      background: selectedTilesArray.includes(i) ? 'rgba(0, 0, 0, 0.4)' : 'none'
    },
    onClick: e => handleTileClick(e)
  }) : tiles[i].subTiles.map((c, x) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `${idsuffix}-${i}-${x}`,
    "dataset-parent": i,
    key: x,
    className: `absolute top-0 right-0 bottom-0 left-0 border-[#f3f3f39c] border-l border-b`,
    style: {
      width: `${100 / xSplit / subSplitX}%`,
      height: `${100 / ySplit / subSplitY}%`,
      top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
      left: `${getSubTileY(i, x, xSplit, subSplitX)}%`,
      background: selectedTilesArray.includes(i) && selectedSubTilesArray.includes(x) ? 'rgba(0, 0, 0, 0.4)' : 'none'
    },
    onClick: e => handleSubTileClick(e)
  }))));
};
const Controls = () => {
  const {
    zoomIn,
    zoomOut,
    resetTransform
  } = (0,react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__.useControls)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tools"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "inline-flex justify-center items-center xaspect-square whitespace-nowrap rounded-full border border-primary bg-primary p-2 text-sm font-medium tracking-wide text-on-primary transition hover:opacity-75 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:border-primary-dark dark:bg-primary-dark dark:text-on-primary-dark dark:focus-visible:outline-primary-dark",
    onClick: () => zoomIn()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    class: "size-5 fill-on-primary dark:fill-on-primary-dark",
    fill: "currentColor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    d: "M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z",
    "clip-rule": "evenodd"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "inline-flex justify-center items-center xaspect-square whitespace-nowrap rounded-full border border-primary bg-primary p-2 text-sm font-medium tracking-wide text-on-primary transition hover:opacity-75 text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 disabled:opacity-75 disabled:cursor-not-allowed dark:border-primary-dark dark:bg-primary-dark dark:text-on-primary-dark dark:focus-visible:outline-primary-dark",
    onClick: () => zoomOut()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-2xl"
  }, "\u2212")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => resetTransform()
  }, "x"));
};
function App() {
  const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [selectedTilesArray, setSelectedTilesArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [selectedSubTilesArray, setSelectedSubTilesArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [gradients, setGradients] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [backgrounds, setBackgrounds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [activeGradient, setActiveGradient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [activeStop, setActiveStop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}); // State for the active stop
  const [selectedTiles, setSelectedTiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // Updated to handle multiple selections
  const [tileHeight, setTileHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [tileWidth, setTileWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [img, setImg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageHeight, setImageHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(100);
  const [imageWidth, setImageWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(100);
  const [xSplit, setxSplit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [ySplit, setySplit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [stops, setStops] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    color: 'rgba(255, 255, 255, 1)',
    position_from: 0,
    position_to: null
  }, {
    color: 'rgba(0, 0, 0, 1)',
    position_from: 100,
    position_to: null
  }]);
  const [zoom, setZoom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10);
  const [clicked, setClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [divClicked, setDivClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [xSegmentSize, setXSegmentSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imageWidth / xSplit);
  const [ySegmentSize, setYSegmentSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(imageHeight / ySplit);
  const [subSplitX, setSubSplitX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);
  const [subSplitY, setSubSplitY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5);
  const [subsegmentSizeX, setSubSegmentSizeX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(xSegmentSize / subSplitX);
  const [subsegmentSizeY, setSubSegmentSizeY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(ySegmentSize / subSplitY);
  // const [horizontalSubSplit, setHorizontalSubSplit] = useState(10);
  // const [verticalSubSplit, setVerticalSubSplit] = useState(10);
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [background, setBackground] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  //const degrees = 90//color ? parseInt(color?.split(',')[0]?.split('(')[1]) : 90
  // const [degrees, setDegrees] = useState(180);

  const [customPresets, setCustomPresets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let initalDataArray = Array.from({
    length: xSplit * ySplit
  });
  const [dataArray, setDataArray] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initalDataArray);
  const {
    gradientType,
    setLinear,
    setRadial,
    addPoint,
    deletePoint,
    degrees,
    setPointLeft,
    currentLeft,
    selectedPoint,
    setSelectedPoint,
    handleChange
  } = (0,react_best_gradient_color_picker__WEBPACK_IMPORTED_MODULE_4__.useColorPicker)(color, setColor);
  const [selectedX, setSelectedX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [selectedY, setSelectedY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [selectedSubY, setSelectedSubY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [selectedSubX, setSelectedSubX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  //const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [imageBuffer, setImageBuffer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [split, setSplit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [splitParents, setSplitParents] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [canvasElement, setCanvasElement] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(document.getElementById('canvas-2'));
  const [expandBuilder, setExpandBuilder] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  //const element = document.getElementById('canvas-2');
  //if (element!=null) {
  //   console.log(element.getBoundingClientRect())
  //}

  const [zoomCanvasSize, setZoomCanvasSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    width: 0,
    height: 0
  });
  const [clickedObject, setClickedObject] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [zoomImage, setZoomImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  //const [segmentSize, setSegmentSize] = useState(5);
  //const [imageColumns, setImageColumns] = useState(0)
  const aspectRatio = ySegmentSize / xSegmentSize;
  function initalTilesArray() {
    let array = Array.from({
      length: xSplit * ySplit
    });
    for (let index = 0; index < array.length; index++) {
      var element = array[index];
      element = {
        gradients: [],
        subTiles: []
      };
      array[index] = element;
    }
    return array;
  }
  const [tiles, setTiles] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initalTilesArray());
  //const tiles = Array.from({ length: xSplit * ySplit });
  function initalSubTilesArray() {
    let array = Array.from({
      length: subSplitX * subSplitY
    });
    for (let index = 0; index < array.length; index++) {
      var element = array[index];
      element = {
        gradients: []
      };
      array[index] = element;
    }
    return array;
  }
  7;
  const subTiles = Array.from(initalSubTilesArray());
  const zoomImg = newImage => {
    //console.log(newImage)
    setZoomImage(newImage);
  };
  function handleBackgroundChange(val) {
    setBackground(val);
  }
  function handleSelectedX(val) {
    setSelectedX(val);
  }
  function handleSelectedY(val) {
    setSelectedY(val);
  }
  function handleClicked(val) {
    setClicked(val);
  }
  function handleClickedObject(val) {
    setClickedObject(val);
  }
  function handleActiveStop(gradientIndex, stopIndex) {
    //console.log('handleActiveStop')
    setActiveStop({
      gradientIndex: gradientIndex,
      stopIndex: stopIndex
    });
  }
  function handleGradientsChange(index, key, val) {
    const newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[index][key] = val;
    } else if (selectedTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].gradients[index][key] = val;
    }
    //const newGradients = [...tiles[selectedTilesArray].gradients]
    //newGradients[index][key] = val
    //newTiles[selectedTilesArray[0]].gradients = newGradients
    //console.log(newGradients)
    //setGradients(newGradients)
    setTiles(() => newTiles);
  }
  function handleGradientsStopChange(gradientindex, index, key, value) {
    const newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[index][key] = value;
    } else if (selectedTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[index][key] = value;
      //console.log(value)
    }
    //const newGradients = [...tiles[selectedTilesArray].gradients]
    //console.log(gradients[gradientindex].stops)

    //newGradients[gradientindex].stops[index][key] = value;
    //setGradients(newGradients);
    //newTiles[selectedTilesArray[0]].gradients = newGradients
    setTiles(() => newTiles);
  }
  ;
  function handleColorSwitch(gradientindex) {
    const newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      let numStops = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops.length;
      switch (numStops) {
        case 2:
          newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[0].color = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[1].color;
          newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[1].color = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops[0].color;
          break;
      }
    } else if (selectedTilesArray[0] != undefined) {
      let numStops = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops.length;
      switch (numStops) {
        case 2:
          let stop0Color = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[0].color;
          let stop1Color = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[1].color;
          newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[0].color = stop1Color;
          newTiles[selectedTilesArray[0]].gradients[gradientindex].stops[1].color = stop0Color;
          console.log(newTiles);
          break;
      }
    }
    //const newGradients = [...tiles[selectedTilesArray].gradients]
    //console.log(gradients[gradientindex].stops)

    //newGradients[gradientindex].stops[index][key] = value;
    //setGradients(newGradients);
    //newTiles[selectedTilesArray[0]].gradients = newGradients
    setTiles(() => newTiles);
  }
  ;
  function handleAddStop(gradientindex, position) {
    const newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      const newGradients = [...newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients];
      const newStops = [...newGradients[gradientindex].stops, {
        color: 'rgba(255, 255, 255, 1)',
        position_from: position,
        position_to: null
      }];
      newGradients[gradientindex].stops = newStops.sort((a, b) => a.position_from - b.position_from);
      newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients = newGradients;
    } else if (selectedTilesArray[0] != undefined) {
      const newGradients = [...newTiles[selectedTilesArray[0]].gradients];
      const newStops = [...newGradients[gradientindex].stops, {
        color: 'rgba(255, 255, 255, 1)',
        position_from: position,
        position_to: null
      }];
      newGradients[gradientindex].stops = newStops.sort((a, b) => a.position_from - b.position_from);
      newTiles[selectedTilesArray[0]].gradients = newGradients;
    }
    //setStops(newStops.sort((a, b) => a.position_from - b.position_from)); // Sort stops by position
    //setGradients(newGradients)

    setTiles(() => newTiles);
  }
  ;
  function handleRemoveStop(gradientindex, index) {
    const newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      var newStops = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops.filter((_, i) => i !== index);
      newStops = newStops.sort(function (a, b) {
        if (a.position_from < b.position_from) return -1;
        if (a.position_from > b.position_from) return 1;
        if (a.position_to < b.position_to) return -1;
        if (a.position_to > b.position_to) return 1;
      }); // Sort stops by position
      newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops = newStops;
    } else if (selectedTilesArray[0] != undefined) {
      var newStops = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops.filter((_, i) => i !== index);
      newStops = newStops.sort(function (a, b) {
        if (a.position_from < b.position_from) return -1;
        if (a.position_from > b.position_from) return 1;
        if (a.position_to < b.position_to) return -1;
        if (a.position_to > b.position_to) return 1;
      }); // Sort stops by position
      newTiles[selectedTilesArray[0]].gradients[gradientindex].stops = newStops;
    }
    setTiles(() => newTiles);
  }
  ;
  function handleStopBlur(gradientindex) {
    //console.log('blur')
    const newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      var newStops = newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops;
      newStops = newStops.sort(function (a, b) {
        if (a.position_from < b.position_from) return -1;
        if (a.position_from > b.position_from) return 1;
        if (a.position_to < b.position_to) return -1;
        if (a.position_to > b.position_to) return 1;
      });
      newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients[gradientindex].stops = newStops;
    } else if (selectedTilesArray[0] != undefined) {
      var newStops = newTiles[selectedTilesArray[0]].gradients[gradientindex].stops;
      newStops = newStops.sort(function (a, b) {
        if (a.position_from < b.position_from) return -1;
        if (a.position_from > b.position_from) return 1;
        if (a.position_to < b.position_to) return -1;
        if (a.position_to > b.position_to) return 1;
      });
      //console.log(newStops)
      newTiles[selectedTilesArray[0]].gradients[gradientindex].stops = newStops;
    }
    setTiles(() => newTiles);
  }
  ;
  function handleAddGradient() {
    var newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients.push({
        visible: true,
        gradientType: 'linear',
        radialShape: '',
        angle: 90,
        xposition: 50,
        yposition: 50,
        stops: [{
          color: 'rgba(255, 255, 255, 1)',
          position_from: 0,
          position_to: null
        }, {
          color: 'rgba(0, 0, 0, 1)',
          position_from: 100,
          position_to: null
        }]
      });
      setActiveGradient(newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients.length - 1);
      //console.log(newTiles)
    } else if (selectedTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].gradients.push({
        visible: true,
        gradientType: 'linear',
        radialShape: '',
        angle: 90,
        xposition: 50,
        yposition: 50,
        stops: [{
          color: 'rgba(255, 255, 255, 1)',
          position_from: 0,
          position_to: null
        }, {
          color: 'rgba(0, 0, 0, 1)',
          position_from: 100,
          position_to: null
        }]
      });
      setActiveGradient(newTiles[selectedTilesArray[0]].gradients.length - 1);
    }
    //console.log(newTiles)
    setTiles(() => newTiles);
  }
  function handleCanvasDimensions(dimensions) {
    //console.log('handleCanvasDimensions: ' + JSON.stringify(dimensions))
    let width = dimensions.width;
    let height = imageHeight / imageWidth * width;
    setZoomCanvasSize({
      width: width,
      height: height
    });
    //console.log('handleCanvasDimensions: ' + JSON.stringify(zoomCanvasSize))
  }
  function UpdateDataArray() {
    // var newDataArray = []
    // for (let index = 0; index < dataArray.length; index++) {
    //     let countDash = index.toString().split('-').length-1
    // }
    // const newDataArray = dataArray.map((c, i) => {
    //     let countDash = i.toString().split('-').length-1
    //     if (countDash===0) {
    //         if (i === selectedTilesArray[0] && selectedSubTilesArray.length === 0) {
    //             return color;

    //         } else if (i === selectedTilesArray[0] && selectedSubTilesArray.length === 1) {

    //         }
    //     } else if (countDash===1) {
    //     }
    const newDataArray = dataArray.map((c, i) => {
      if (i === selectedTilesArray[0]) {
        //console.log('here')
        // Increment the clicked counter
        return background;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    //console.log(newDataArray)

    var newTiles = [...tiles];
    if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined) {
      newTiles[selectedTilesArray[0]].subTiles = subTiles;
      //newTiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]] = visibleBackgrounds()
      //console.log('[0][0]' + newTiles[selectedTilesArray[0]][0])

      //console.log('UpdateDataArray:' + newTiles[selectedTilesArray[0][selectedSubTilesArray[0]]])
    } else if (selectedTilesArray[0] != undefined && selectedSubTilesArray[0] === undefined) {

      //newTiles[selectedTilesArray[0]] = visibleBackgrounds()
    }
    setTiles(newTiles);
    //console.log(newTiles)
    //setDataArray(newDataArray)
  }
  async function getToken(password, username) {
    return (0,axios__WEBPACK_IMPORTED_MODULE_5__["default"])({
      method: "post",
      url: "http://react-example.local/wp-json/jwt-auth/v1/token",
      data: {
        username: username,
        password: password
      }
    }).then(res => res.data.token);
  }
  async function doSomething(body, token) {
    return (0,axios__WEBPACK_IMPORTED_MODULE_5__["default"])({
      method: "post",
      url: 'http://react-example.local/wp-json/wp/v2/css-image/' + post_id,
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer  ${token}`
      },
      data: body
    });
  }
  const UpdateDBTable = async (req, res) => {
    setSaving(() => true);
    var arrayObj = [];
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].subTiles.length > 0) {
        for (let x = 0; x < tiles[i].subTiles.length; x++) {
          if (tiles[i].subTiles[x].gradients[0] != undefined) {
            //let obj = {index: i, color: visibleBackgrounds('Update DB',tiles[i].subTiles[x].gradients, false), sub_index: x}
            let obj = {
              index: i,
              color: JSON.stringify(tiles[i].subTiles[x].gradients),
              sub_index: x
            };
            arrayObj.push(obj);
          }
        }
      } else if (tiles[i].gradients[0] != undefined) {
        //let obj = {index: i, color: visibleBackgrounds('Update DB',tiles[i].gradients, true), sub_index: null}
        let obj = {
          index: i,
          color: JSON.stringify(tiles[i].gradients),
          sub_index: null
        };
        //console.log(obj)
        arrayObj.push(obj);
      }
    }
    // POST
    var postBody = {
      "acf": {
        "css_coordinates": arrayObj
      }
    };
    const token = await getToken("admin", "admin");
    const responseClear = await doSomething({
      "acf": {
        "css_coordinates": []
      }
    }, token);
    const response = await doSomething(postBody, token);
    //res.json({ objectVariableRetrievedFromAxiosRequests: token });
    if (response.status === 200) {
      setSaving(() => false);
    }
    //console.log(response)
  };
  const handleSubTileClick = e => {
    if (!e.shiftKey) {
      let parentIndex = Number(e.currentTarget.getAttribute('dataset-parent'));
      if (parentIndex != selectedTilesArray[0]) {
        setSelectedSubTilesArray(() => []);
        setSelectedTilesArray(() => [parentIndex]);
        setSplit(true);
      }
    }
  };
  const handleTileClick = e => {
    // if (copyFrom === true) {
    //     let currentIndex = Number(e.currentTarget.getAttribute('dataset-index'))
    //     const defaultGradient = { angle: 0, stops: [{ color: '#ffffff', position: 0 }, { color: '#000000', position: 100 }] };
    //     const gradient = gradients[currentIndex] || defaultGradient;

    //     //console.log('handleTick-CopyFrom: ' + gradient)
    //     //setGradients([selectedTiles[0]): gradient;
    //     if (!selectedTiles[0].index) {
    //         setAddColorStop(null);
    //     }
    // } else 
    if (!e.shiftKey) {
      let currentIndex = Number(e.currentTarget.getAttribute('dataset-index'));
      if (currentIndex != selectedTilesArray[0]) {
        setSelectedSubTilesArray(() => []);
        setSelectedTilesArray(() => [currentIndex]);
        setSplit(false);
        //console.log(selectedTilesArray[0])
        //console.log(selectedSubTilesArray[0])
        //console.log(tiles)
      }

      // if (currentIndex!=index) {
      //     //setSplit(false)
      //     setIndex(currentIndex)
      // } else {
      //     return
      // }
      // var x = Number(e.currentTarget.getAttribute('dataset-xval'))
      // var y = Number(e.currentTarget.getAttribute('dataset-yval'))
      // setSelectedX(x)
      // setSelectedY(y)

      // setSelectedTiles([{index: currentIndex, col: Number(e.currentTarget.getAttribute('dataset-col')), row: Number(e.currentTarget.getAttribute('dataset-row')) }]);

      // drawImageSegment([{index: currentIndex, col: Number(e.currentTarget.getAttribute('dataset-col')), row: Number(e.currentTarget.getAttribute('dataset-row')) }]);
      // const defaultGradient = { angle: 0, stops: [{ color: '#ffffff', position: 0 }, { color: '#000000', position: 100 }] };
      // const gradient = gradients[currentIndex] || defaultGradient;
      // // console.log('handleTick-Defult Gradient: ' + JSON.stringify(defaultGradient))
      // // console.log('handleTick-Gradient: ' + JSON.stringify(gradient))
      // // console.log('handleTick-Gradients: ' + JSON.stringify(gradients))

      // setGradients((prevGradients) => ({
      //     ...prevGradients,
      //     [currentIndex]: gradient,
      // }));
      //console.log(gradient)
      // if (!gradients[currentIndex]) {
      //     //setAddColorStop(null);
      // }
      //handleGradientChange(gradient);
    } else if (e.shiftKey) {
      // let currentIndex = Number(e.currentTarget.getAttribute('dataset-index'))
      // if (!checkTile(currentIndex)) {
      //     let valid = false
      //     let rowcol = ''
      //     //check new tile is in same Row or Col
      //        if (selectedTiles.length === 1 && (selectedTiles[0].col === Number(e.currentTarget.getAttribute('dataset-col')) || selectedTiles[0].row === Number(e.currentTarget.getAttribute('dataset-row')))) {
      //         valid = true
      //     } else if (selectedTiles.length > 1) {

      //         //check if row or col are equal for first two elements
      //         if (selectedTiles[0].col === selectedTiles[1].col) 
      //         {
      //             rowcol = 'col'
      //             if (selectedTiles[0].col === Number(e.currentTarget.getAttribute('dataset-col'))) {
      //                 valid 7= true
      //             }
      //         } else if (selectedTiles[0].row === selectedTiles[1].row) {
      //             rowcol = 'row'
      //             if (selectedTiles[0].row === Number(e.currentTarget.getAttribute('dataset-row'))) {
      //                 valid = true
      //             }
      //         }
      //     }
      //     if (valid) {
      //         var newArray = selectedTiles.slice();
      //         var newArray2 = selectedTilesArray.slice();
      //         newArray.push({index: currentIndex, col: Number(e.currentTarget.getAttribute('dataset-col')), row: Number(e.currentTarget.getAttribute('dataset-row')) });
      //         setSelectedTiles(newArray);
      //         newArray2.push(currentIndex);
      //         setSelectedTilesArray(newArray2);
      //         //console.log(newArray)
      //         drawImageSegment(newArray);
      //     } else {
      //         alert('Please select tiles in same row or column')
      //     }
      // }
    }
  };
  const drawSubImageSegment = () => {
    console.log(canvasRef.current);
    if (canvasRef.current && image && selectedSubTilesArray.length === 1) {
      const canvas = canvasRef.current;
      const canvasWidth = canvas.offsetWidth;
      console.log(canvasWidth);
      const ctx = canvas.getContext('2d', {
        willReadFrequently: true
      });
      const img = new Image();
      img.src = image;
      img.onload = () => {
        let xcoord = getXCoord(selectedTilesArray[0], xSplit, xSegmentSize);
        let ycoord = getYCoord(selectedTilesArray[0], xSplit, ySegmentSize);
        let xsubcoord = getSubXCoord(selectedTilesArray[0], selectedSubTilesArray[0], xSplit, xSegmentSize, subSplitX, subsegmentSizeX);
        let ysubcoord = getSubYCoord(selectedTilesArray[0], selectedSubTilesArray[0], xSplit, ySegmentSize, subSplitX, subsegmentSizeY);
        let obj = {
          xcoord: xcoord,
          ycoord: ycoord,
          subxcoord: xsubcoord,
          subycoord: ysubcoord,
          subsegmentSizeX: subsegmentSizeX,
          subsegmentSizeY: subsegmentSizeY,
          subSplitX: subSplitX,
          subSplitY: subSplitY
        };
        //console.log(obj)
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, xcoord + xsubcoord, ycoord + ysubcoord, subsegmentSizeX, subsegmentSizeY, 0, 0, canvas.width, canvas.height);
      };
    }
  };
  const drawImageSegment = indices => {
    //console.log(canvasRef.current)
    if (canvasRef.current && image) {
      var destX = 0;
      var destY = 0;
      var col = 0;
      var row = 0;
      var i = 0;
      const canvas = canvasRef.current;
      let width = canvas.offsetWidth;
      let height = imageHeight / imageWidth * width;
      setZoomCanvasSize({
        width: width,
        height: height
      });
      //console.log(zoomCanvasSize)

      const ctx = canvas.getContext('2d', {
        willReadFrequently: true
      });
      const img = new Image();
      img.src = image;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //let canvasMultiplierX = (zoomCanvasSize*aspectRatio) / xSegmentSize
        //let canvasMultiplierY = zoomCanvasSize / ySegmentSize
        var obj = {
          //canvasMultiplierX: canvasMultiplierX,
          //canvasMultiplierY: canvasMultiplierY,
          xSegmentSize: xSegmentSize,
          ySegmentSize: ySegmentSize,
          canvasHeight: canvas.height,
          canvasWidth: canvas.width,
          tileX: getXCoord(indices[0], xSplit, xSegmentSize),
          tileY: getYCoord(indices[0], xSplit, ySegmentSize),
          xSplit: xSplit,
          ySplit: ySplit
        };
        //console.log(obj);
        ctx.drawImage(img, getXCoord(indices[0], xSplit, xSegmentSize), getYCoord(indices[0], xSplit, ySegmentSize), xSegmentSize, ySegmentSize, 0, 0, canvas.width, canvas.height);
        if (indices.length === 1) {
          // if (subIndex != undefined && split) {
          //     console.log('Split')
          //     ctx.drawImage(img, selectedX + selectedSubX, selectedY+selectedSubY, subsegmentSizeX, subsegmentSizeY, 0, 0, canvas.width, canvas.height);
          // } else {

          // }
        } else if (indices.length > 1) {
          indices.forEach(item => {
            // const x = (item.index % xSplit) * xSegmentSize;
            // const y = Math.floor(item.index / xSplit) * ySegmentSize;
            // if (i>0) {
            //     //col = index % xSplit > col ? col++ : col
            //     if (item.index % xSplit > col) {
            //         col++
            //     }
            //     if (Math.floor(item.index / xSplit) > row) {
            //         row++
            //     }
            //     //const col = Math.floor(x / tileWidth);
            //     //const row = Math.floor(y / tileHeight);
            //     destX = col * xSegmentSize * zoom
            //     destY = row * ySegmentSize * zoom
            //     var obj = {index: item.index, x: x, y: y, destX: destX, destY: destY, row: item.row, col: item.col}
            //     console.log(obj)
            //     ctx.drawImage(img, x, y, xSegmentSize, ySegmentSize, destX, destY, xSegmentSize * zoom, ySegmentSize * zoom);

            // } else {

            // ctx.drawImage(img, x, y, xSegmentSize, ySegmentSize, destX, destY, xSegmentSize * zoom, ySegmentSize * zoom);
            // }
            i++;
          });
        }
      };
    }
  };
  const handleCanvasClick = event => {
    //console.log(event)
    //console.log('Ref:' + canvasRef.current)
    if (event.target) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d', {
        willReadFrequently: true
      });
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      var obj = {
        //event: event,
        //rect: rect,
        canvasHeight: canvas.height,
        canvasWidth: canvas.width,
        x: x,
        y: y
        //rectLeft: rect.left,
        //clientX: event.clientX, 
        //rectTop: rect.top,
        //clientY: event.clientY,
      };
      //console.log(obj)

      const imageData = ctx.getImageData(x, y, 1, 1).data;
      const pickedColor = `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, ${imageData[3] / 255})`;
      //console.log(pickedColor)

      if (activeStop.gradientIndex != null && activeStop.stopIndex != null) {
        handleGradientsStopChange(activeStop.gradientIndex, activeStop.stopIndex, 'color', pickedColor);
      }
    }
  };
  function handleZoomClick(e) {
    //setClickedObject('zoom')
    var subidx = Number(Number(e.currentTarget.getAttribute('dataset-subindex')));
    setSelectedSubTilesArray([subidx]);
    //console.log(subidx)
    //setSubIndex(subidx)
    // var x = Number(e.currentTarget.getAttribute('dataset-xval'))
    // var y = Number(e.currentTarget.getAttribute('dataset-yval'))
    // setSelectedSubX(x)
    // setSelectedSubY(y)
    // drawImageSegment(selectedTiles)
    // //setClicked(!clicked)
  }
  function getCanvasContainerHeight() {
    let element = document.getElementById('canvas-container');
    if (element != null) {
      let rect = element.getBoundingClientRect();
      return Number.parseInt(rect.width * aspectRatio);

      //return 200
    }
  }
  function getCanvasContainerWidth() {
    let element = document.getElementById('canvas-container');
    if (element != null) {
      let rect = element.getBoundingClientRect();
      return Number.parseInt(rect.width);

      //return 200
    }
  }
  function handleClearSplit() {
    setSelectedSubTilesArray([]);
    if (selectedTilesArray[0] != undefined) {
      var newTiles = [...tiles];
      newTiles[selectedTilesArray[0]].subTiles = [];
      setTiles(newTiles);
      setSplit(false);
    }
  }
  function handleSplit(e) {
    if (e.target.checked) {
      if (selectedTilesArray[0] != undefined) {
        var newTiles = [...tiles];
        newTiles[selectedTilesArray[0]].subTiles = subTiles;
        setTiles(newTiles);
        setSplit(true);
      }
    } else {
      handleClearSplit();
    }
  }
  function handleActiveGradient(val) {
    setActiveGradient(val);
  }
  function visibleBackgrounds(from, item, all = false) {
    let visiblebackgrounds = [];
    //console.log(tiles)
    if (item == undefined) {
      //console.log(from)
      return 'none';
    }
    item.forEach(function (item) {
      if (item.visible || all) {
        let l_gradient = null;
        l_gradient = item.gradientType + '-gradient(';
        switch (item.gradientType) {
          case 'linear':
            l_gradient = l_gradient + item.angle + 'deg, ';
            break;
          case 'radial':
            l_gradient = l_gradient + item.radialShape + item.xposition + '% ' + item.yposition + '%,';
            break;
          case 'conic':
            l_gradient = l_gradient + 'from ' + item.angle + 'deg at ' + item.xposition + '% ' + item.yposition + '%,';
            break;
        }
        for (let index = 0; index < item.stops.length; index++) {
          //let rgbColor = convertHexToRgbA(item.stops[index].color)
          let rgbColor = item.stops[index].color;
          l_gradient = l_gradient + ' ' + rgbColor + ' ' + item.stops[index].position_from + '%';
          if (item.stops[index].position_to != null) {
            l_gradient = l_gradient + ' ' + item.stops[index].position_to + '%';
          }
          if (index < item.stops.length - 1) {
            l_gradient = l_gradient + ',';
          } else if (index === item.stops.length - 1) {
            l_gradient = l_gradient + ')';
          }
        }
        visiblebackgrounds.push(l_gradient);
      }
    });
    return visiblebackgrounds.toString();
  }
  const GetTilesFromDB = async (req, res) => {
    //const token = await getToken("admin", "admin");

    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_5__["default"])({
      method: "get",
      url: 'http://react-example.local/wp-json/wp/v2/css-image/' + post_id + '?_fields=acf'
      //headers: { 
      //    'Content-type': 'application/json'
      //'Authorization': `Bearer  ${token}`
      //}
    });
    //console.log(response.data.acf.css_coordinates)
    setTiles(() => initalTilesArray);
    if (response.data.acf.css_coordinates.length > 0) {
      var newTiles = [...tiles];
      response.data.acf.css_coordinates.forEach(item => {
        console.log(item);
        if (Number.parseInt(item.sub_index) >= 0) {
          newTiles[item.index].subTiles[item.sub_index].gradients = JSON.parse(item.color);
        } else {
          newTiles[item.index].gradients = JSON.parse(item.color);
        }
      });
      console.log(newTiles);
      setTiles(() => newTiles);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = image;
    img.onload = () => {
      setImageHeight(img.height);
      setImageWidth(img.width);
    };
    setImg(img);

    //console.log('postid' + post_id)
    if (post_id != undefined) {
      GetTilesFromDB();
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSplit(false);
    setSelectedTilesArray([]);
    setSelectedSubTilesArray([]);
    setXSegmentSize(imageWidth / xSplit);
    setYSegmentSize(imageHeight / ySplit);
    //UpdateDataArray()
    //setTiles(initalTilesArray)
  }, [xSplit, ySplit, imageHeight, imageWidth]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSubSegmentSizeX(xSegmentSize / subSplitX);
    setSubSegmentSizeY(ySegmentSize / subSplitY);
    if (split === true && selectedTilesArray[0] != undefined) {
      var newTiles = [...tiles];
      newTiles[selectedTilesArray[0]].subTiles = subTiles;
      setTiles(() => newTiles);
    }
  }, [split, subSplitX, subSplitY]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (refContainer.current) {
      //console.log(refContainer.current.getBoundingClientRect().width)
      setTileHeight(refContainer.current.offsetHeight); //*.83);
      setTileWidth(refContainer.current.offsetWidth); //.83);
    }
  }, [refContainer]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    //setSplit(false)
    //setSelectedSubTilesArray([])
    //console.log('Selected Tiles Array - draw Image Segment')
    drawImageSegment(selectedTilesArray);
    //UpdateDataArray()
    //setGradients(GradientFromBackgrounds)
  }, [selectedTilesArray]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selectedSubTilesArray.length === 1 && split === true && selectedTilesArray.length === 1) {
      drawSubImageSegment();
      setSplit(false);
    } else if (selectedSubTilesArray.length === 0 && split === false && selectedTilesArray.length === 1) {
      drawImageSegment(selectedTilesArray);
    }
  }, [selectedSubTilesArray]);
  //  useEffect(() => {
  //     if (canvasElement!=null) {
  //         let rect = canvasElement.getBoundingClientRect()
  //         let width = rect.width
  //         let height = (imageHeight / imageWidth)* width
  //         setZoomCanvasSize({
  //             width: width,
  //             height: height,
  //         })
  //         console.log(zoomCanvasSize)
  //     }

  //     // if (canvasRef.current) {
  //     //     let width = canvasRef.current.offsetWidth
  //     //     let height = (imageHeight / imageWidth)* width
  //     //     setZoomCanvasSize({
  //     //         width: width,
  //     //         height: height,
  //     //     })
  //     //     console.log(zoomCanvasSize)
  //     // }

  //  },[canvasElement])

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "App"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "xSplit"
  }, "X Split"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "xSplit",
    value: xSplit,
    onChange: e => setxSplit(Number(e.target.value))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "ySplit"
  }, "Y Split"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "ySplit",
    value: ySplit,
    onChange: e => setySplit(Number(e.target.value))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "subSplitX"
  }, "Sub Split X"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "subSplitX",
    value: subSplitX,
    onChange: e => setSubSplitX(Number(e.target.value))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "subSplitY"
  }, "Sub Split Y"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "subSplitY",
    value: subSplitY,
    onChange: e => setSubSplitY(Number(e.target.value))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "xSegmentSize"
  }, "X Segment Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "xSegmentSize",
    value: xSegmentSize
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "ySegmentSize"
  }, "Y Segment Size"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "ySegmentSize",
    value: ySegmentSize
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "imageWidth"
  }, "Image Width"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "imageWidth",
    value: imageWidth
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "imageHeight"
  }, "Image Height"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "imageHeight",
    value: imageHeight
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "zoom"
  }, "Zoom"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    id: "zoom",
    name: "zoom",
    value: zoom,
    onChange: e => setZoom(Number(e.target.value))
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "1"
  }, "1"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "5"
  }, "5"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "10"
  }, "10"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "imageBuffer"
  }, "ImageBuffer"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    id: "imageBuffer",
    value: imageBuffer,
    onChange: e => setImageBuffer(e.target.value)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "outline outline-blue-800 py-3 px-2",
    onClick: UpdateDBTable
  }, "Update DB Table"), saving ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Saving...") : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: selectedTilesArray.length === 1 ? 'red' : 'none'
    }
  }, "Index: ", selectedTilesArray[0]), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "split"
  }, "Split"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "split",
    type: "checkbox",
    checked: split,
    onChange: e => handleSplit(e),
    defaultChecked: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleClearSplit
  }, "Clear Split")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: selectedSubTilesArray.length === 1 ? 'red' : 'none'
    }
  }, "Sub Index: ", selectedSubTilesArray[0], (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setSelectedSubTilesArray([])
  }, "Clear"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => setExpandBuilder(!expandBuilder)
  }, !expandBuilder ? '>' : 'X'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-cols-5 grid-rows-5 gap-4 border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: expandBuilder ? 'flex gap-4 col-span-5 row-span-3 border' : 'col-span-2 row-span-3 border'
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "canvas-container",
    className: "relative"
    //className={`h-[${zoomCanvasSize.height}]px w-full relative`}
    ,
    style: {
      //height: `${zoomCanvasSize.height===0?100:Number.parseInt(zoomCanvasSize.height)}px`,
      //width: `${zoomCanvasSize.width===0?100:Number.parseInt(zoomCanvasSize.width)}px`,
      height: `${getCanvasContainerHeight()}px`,
      maxHeight: `${getCanvasContainerHeight()}px`,
      width: `100%`,
      maxWidth: '500px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Canvas2Component__WEBPACK_IMPORTED_MODULE_1__["default"]
  //className={`h-[${zoomCanvasSize.height}]px w-full`}
  , {
    canvasRef: canvasRef,
    handleCanvasDimensions: handleCanvasDimensions,
    aspectRatio: aspectRatio,
    height: getCanvasContainerHeight(),
    width: getCanvasContainerWidth()
    //imageWidth={imageWidth}
    //draw={draw} 
    //height={zoomCanvasSize} 
    //width={zoomCanvasSize*aspectRatio} 
    //clicked={clicked} 
    //stateChanger={zoomImg} 
    ,
    handleCanvasClick: handleCanvasClick
  }), selectedTilesArray.length > 0 ? tiles[selectedTilesArray[0]].subTiles.map((t, i) => selectedTilesArray[0] != undefined && split === true ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: "absolute inline-block ",
    style: {
      width: `${100 / subSplitX}%`,
      height: `${100 / subSplitY}%`,
      top: `${getTileX(i, subSplitX, subSplitY)}%`,
      left: `${getTileY(i, subSplitX)}%`
    }
  }) : null) : null, selectedTilesArray.length > 0 ? tiles[selectedTilesArray[0]].subTiles.map((t, i) => selectedTilesArray[0] != undefined && split === true ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    className: " absolute left-0 top-0",
    style: {
      width: `${100 / subSplitX}%`,
      height: `${100 / subSplitY}%`,
      top: `${getTileX(i, subSplitX, subSplitY)}%`,
      left: `${getTileY(i, subSplitX)}%`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tileBorderContentxx absolute -top-[1px] -right-[1px] border bottom-0 left-0 border-[#ffffff18]",
    "dataset-index": selectedTilesArray[0],
    "dataset-subindex": i,
    "dataset-xval": getSubXCoord(selectedTilesArray[0], i, xSplit, xSegmentSize, subSplitX, subsegmentSizeX),
    "dataset-yval": getSubYCoord(selectedTilesArray[0], i, ySplit, ySegmentSize, subSplitX, subsegmentSizeY),
    onClick: e => handleZoomClick(e)
  })) : null) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      background: selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined ? tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]] != undefined ? `${visibleBackgrounds('builderdisplay1', tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients)}` : null : selectedTilesArray[0] != undefined ? `${visibleBackgrounds('builderdisplay2', tiles[selectedTilesArray[0]].gradients)}` : null,
      //height: `${Number.parseInt(zoomCanvasSize.height)}px`,
      //width: `${Number.parseInt(zoomCanvasSize.width)}px`,
      height: `${getCanvasContainerHeight()}px`,
      maxHeight: `${getCanvasContainerHeight()}px`,
      width: `100%`,
      maxWidth: '500px'
    }
  }, selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined ? visibleBackgrounds('builderdisplay1', tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients) : selectedTilesArray[0] != undefined ? visibleBackgrounds('builderdisplay2', tiles[selectedTilesArray[0]].gradients) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gradientBuilder_GradientBuilder__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gradients: selectedTilesArray[0] != undefined && selectedSubTilesArray[0] != undefined ? tiles[selectedTilesArray[0]].subTiles[selectedSubTilesArray[0]].gradients : selectedTilesArray[0] != undefined ? tiles[selectedTilesArray[0]].gradients : [],
    handleGradientsChange: handleGradientsChange,
    handleAddGradient: handleAddGradient,
    handleGradientsStopChange: handleGradientsStopChange,
    handleAddStop: handleAddStop,
    handleRemoveStop: handleRemoveStop,
    handleStopBlur: handleStopBlur,
    activeStop: activeStop,
    handleActiveStop: handleActiveStop,
    activeGradient: activeGradient,
    handleActiveGradient: handleActiveGradient,
    height: zoomCanvasSize.height,
    width: zoomCanvasSize.width,
    handleColorSwitch: handleColorSwitch
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 row-span-3 col-start-3 border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "imageWrapperx w-full "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__.TransformWrapper, {
    initialScale: 1,
    initialPositionX: 200,
    initialPositionY: 100
  }, ({
    zoomIn,
    zoomOut,
    resetTransform,
    ...rest
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Controls, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__.TransformComponent, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "image",
    src: image,
    alt: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Tiles, {
    idsuffix: 't1',
    tiles: tiles,
    xSplit: xSplit,
    ySplit: ySplit,
    xSegmentSize: xSegmentSize,
    ySegmentSize: ySegmentSize,
    selectedX: handleSelectedX,
    selectedY: handleSelectedY,
    clicked: handleClicked,
    clickedValue: clicked,
    clickedObject: handleClickedObject,
    clickedObjectValue: 'canvas',
    subSplitX: subSplitX,
    subSplitY: subSplitY,
    subsegmentSizeX: subsegmentSizeX,
    subsegmentSizeY: subsegmentSizeY
    //canvasRef={canvasRef}
    //zoomCanvasSize={zoomCanvasSize}
    ,
    handleTileClick: handleTileClick,
    refContainer: refContainer,
    selectedTilesArray: selectedTilesArray,
    selectedSubTilesArray: selectedSubTilesArray,
    handleSubTileClick: handleSubTileClick
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "imageWrapper2XX inline-block overflow-hidden absolute"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__.TransformWrapper, {
    initialScale: 1,
    initialPositionX: 200,
    initialPositionY: 100
  }, ({
    zoomIn,
    zoomOut,
    resetTransform,
    ...rest
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Controls, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_2__.TransformComponent, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "inline-block placeholder",
    "dataset-xsplit": xSplit,
    style: {
      width: `${tileWidth * xSplit}px`,
      height: `${tileHeight * ySplit}px`
    }
  }), Object.entries(tiles).map((v, i) => tiles[i].subTiles.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: i,
    id: `id3-${i}`,
    "dataset-index": i,
    "dataset-background": v,
    className: `absolute inline-block -top-[1px] -right-[1px] border-[#1f1d1d] bottom-0 left-0 border-l border-b ${Math.floor(i / xSplit) === 0 ? 'border-t' : 'border-t-0'} `
    //className={Math.floor(i / xSplit) === 0 ? 'border-t':'border-t-0'}
    ,
    style: {
      width: `${100 / xSplit}%`,
      height: `${100 / ySplit}%`,
      top: `${getTileX(i, xSplit, ySplit)}%`,
      left: `${getTileY(i, xSplit)}%`,
      //background: selectedTilesArray.includes(i) ? 'rgba(0, 0, 0, 0.4)' : 'none',
      background: `${visibleBackgrounds('griddisplay1', tiles[i].gradients)}`,
      borderStyle: typeof v === 'string' ? `none` : 'solid',
      border: typeof v === 'string' ? `0px 0px 0px 0px` : '0px 0px 1px 1px'
    }
  }) : tiles[i].subTiles.map((c, x) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: `id3-${i}-${x}`,
    key: x,
    className: `absolute inline-block top-0 right-0 bottom-0 left-0 border-[#f3f3f39c] border-l border-b`,
    style: {
      width: `${100 / xSplit / subSplitX}%`,
      height: `${100 / ySplit / subSplitY}%`,
      top: `${getSubTileX(i, x, xSplit, ySplit, subSplitX, subSplitY)}%`,
      left: `${getSubTileY(i, x, xSplit, subSplitX)}%`,
      background: tiles[i].subTiles[x].gradients.length > 0 ? `${visibleBackgrounds('griddisplay2', tiles[i].subTiles[x].gradients)}` : 'none'
    }
  })))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 row-span-2 col-start-3 row-start-4 border"
  })));
}

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientAngle.js":
/*!******************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientAngle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const GradientAngle = ({
  gradientIndex,
  gradientType,
  angle,
  handleGradientsChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, gradientType === 'linear' || gradientType === 'conic' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Angle:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "border mt-2 p-2",
    type: "number",
    min: 0,
    max: 360,
    value: angle,
    onChange: e => handleGradientsChange(gradientIndex, 'angle', e.target.value)
  }))) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientAngle);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientBackground.js":
/*!***********************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientBackground.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toggle */ "./node_modules/react-toggle/dist/component/index.js");



const GradientBackground = ({
  gradientIndex
}) => {
  const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [widthUOM, setWidthUOM] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('auto');
  const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [heightUOM, setHeightUOM] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('auto');
  const [repeatX, setRepeatX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [repeatY, setRepeatY] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Background Size:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex gap-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Width:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: width,
    onChange: e => setWidth(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: widthUOM,
    onChange: e => setWidthUOM(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "auto"
  }, "auto"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "%"
  }, "%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "px"
  }, "px"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rem"
  }, "rem"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_toggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultChecked: false,
    checked: repeatX,
    onChange: () => setRepeatX(!repeatX)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Repeat"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Height:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: height,
    onChange: e => setHeight(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: heightUOM,
    onChange: e => setHeightUOM(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "%"
  }, "%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "px"
  }, "px"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rem"
  }, "rem")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientBackground);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientBuilder.js":
/*!********************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientBuilder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GradientDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientDisplay.js */ "./src/scripts/gradientBuilder/GradientDisplay.js");
/* harmony import */ var _GradientTools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientTools.js */ "./src/scripts/gradientBuilder/GradientTools.js");




function convertHexToRgbA(hexVal) {
  let ret;

  // If the hex value is valid.
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {
    // Getting the content after '#',
    // eg. 'ffffff' in case of '#ffffff'
    ret = hexVal.slice(1);

    // Splitting each character
    ret = ret.split('');

    // Checking if the length is 3
    // then make that 6
    if (ret.length == 3) {
      let ar = [];
      ar.push(ret[0]);
      ar.push(ret[0]);
      ar.push(ret[1]);
      ar.push(ret[1]);
      ar.push(ret[2]);
      ar.push(ret[2]);
      ret = ar;
    }

    // Starts with '0x'(in hexadecimal)
    ret = '0x' + ret.join('');

    // Converting the first 2 characters
    // from hexadecimal to r value
    let r = ret >> 16 & 255;

    // Converting the second 2 characters
    // to hexadecimal to g value
    let g = ret >> 8 & 255;

    // Converting the last 2 characters
    // to hexadecimal to b value
    let b = ret & 255;

    // Appending all of them to make
    // the RGBA value
    return 'rgba(' + [r, g, b].join(',') + ',1)';
  }
}
const GradientBuilder = ({
  gradients,
  activeGradient,
  handleActiveGradient,
  handleAddGradient,
  handleGradientsChange,
  height,
  width,
  activeStop,
  handleActiveStop,
  handleGradientsStopChange,
  handleAddStop,
  handleRemoveStop,
  handleStopBlur,
  handleColorSwitch
}) => {
  //const [gradients, setGradients] = useState([]);
  //console.log(gradients)
  function BackgroundFromGradients(item) {
    //console.log(item)
    let l_gradient = null;
    l_gradient = item.gradientType + '-gradient(';
    switch (item.gradientType) {
      case 'linear':
        l_gradient = l_gradient + item.angle + 'deg, ';
        break;
      case 'radial':
        l_gradient = l_gradient + item.radialShape + item.xposition + '% ' + item.yposition + '%,';
        break;
      case 'conic':
        l_gradient = l_gradient + 'from ' + item.angle + 'deg at ' + item.xposition + '% ' + item.yposition + '%,';
        break;
    }
    for (let index = 0; index < item.stops.length; index++) {
      //let rgbColor = convertHexToRgbA(item.stops[index].color)
      let rgbColor = item.stops[index].color;
      l_gradient = l_gradient + ' ' + rgbColor + ' ' + item.stops[index].position_from + '%';
      if (item.stops[index].position_to != null) {
        l_gradient = l_gradient + ' ' + item.stops[index].position_to + '%';
      }
      if (index < item.stops.length - 1) {
        l_gradient = l_gradient + ',';
      } else if (index === item.stops.length - 1) {
        l_gradient = l_gradient + ')';
      }
    }

    //console.log(l_gradient)
    return l_gradient;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => handleActiveGradient(-1)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "outline rounded-lg bg-blue-700 text-white text-center px-4 py-2",
    onClick: handleAddGradient
  }, "Add")), gradients.map((x, i) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: activeGradient === i ? `border-2 border-red-700` : null,
    onClick: () => handleActiveGradient(i)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientDisplay_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeGradient: activeGradient,
    gradientIndex: i,
    visible: x.visible,
    background: BackgroundFromGradients(gradients[i]),
    height: height,
    width: width,
    handleGradientsChange: handleGradientsChange
  }), x.visible && activeGradient === i ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientTools_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientIndex: i,
    handleGradientsChange: handleGradientsChange,
    gradient: x,
    handleGradientsStopChange: handleGradientsStopChange,
    handleAddStop: handleAddStop,
    handleAddGradient: handleAddGradient,
    activeStop: activeStop,
    handleActiveStop: handleActiveStop,
    handleRemoveStop: handleRemoveStop,
    handleStopBlur: handleStopBlur,
    handleColorSwitch: handleColorSwitch
  }) : null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientBuilder);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientDisplay.js":
/*!********************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientDisplay.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const GradientDisplay = ({
  gradientIndex,
  activeGradient,
  visible,
  handleGradientsChange,
  background,
  height,
  width
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `inline-block relative border border-black`,
    style: {
      background: background != undefined ? `${background}` : 'none',
      height: `${Number.parseInt(height / 2)}px`,
      width: `${Number.parseInt(width / 2)}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `absolute left-[${Number.parseInt(width / 5)}px] w-[30px] h-[30px] border border-black bg-white`,
    style: {
      left: `${Number.parseInt(width / 5)}px`,
      top: `${Number.parseInt(height / 3)}px`
    },
    onClick: () => handleGradientsChange(gradientIndex, 'visible', !visible)
  }, visible ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: __webpack_require__(/*! ../../images/visible.png */ "./src/images/visible.png")
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: __webpack_require__(/*! ../../images/hide.png */ "./src/images/hide.png")
  }))), activeGradient === gradientIndex ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, background) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientDisplay);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientPosition.js":
/*!*********************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientPosition.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const GradientPosition = ({
  gradientIndex,
  gradientType,
  xposition,
  yposition,
  handleGradientsChange
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, gradientType === 'radial' || gradientType === 'conic' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Position", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "X", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "border p-2",
    type: "number",
    min: -20,
    max: 200,
    value: xposition,
    onChange: e => handleGradientsChange(gradientIndex, 'xposition', e.target.value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Y", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "border p-2",
    type: "number",
    min: -20,
    max: 200,
    value: yposition,
    onChange: e => handleGradientsChange(gradientIndex, 'yposition', e.target.value)
  }))) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientPosition);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientRadialShape.js":
/*!************************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientRadialShape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const GradientRadialShape = ({
  gradientsIndex,
  radialShape,
  handleGradientsChange
}) => {
  const [shape, setShape] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('ellipse');
  const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('farthest-corner');
  //const [radialShapeCSS, setRadialShapeCSS] = useState()
  const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [widthUOM, setWidthUOM] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('%');
  const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [heightUOM, setHeightUOM] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('%');
  function initialShape() {
    let newShape = '';
    if (radialShape === '') {
      newShape = 'ellipse';
    }
    if (radialShape.search("circle") > -1) {
      newShape = 'circle';
    }
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let radialShapeCSS = '';
    if (shape === 'ellipse') {
      radialShapeCSS = position + ' at ';
    } else if (shape === 'circle') {
      radialShapeCSS = 'circle ' + position + ' at ';
    } else if (shape === 'custom') {
      radialShapeCSS = width + widthUOM + ' ' + height + heightUOM + ' at ';
    }
    //console.log(radialShapeCSS)
    handleGradientsChange(gradientsIndex, 'radialShape', radialShapeCSS);
  }, [shape, position, width, widthUOM, height, heightUOM]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Shape:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: shape,
    onChange: e => setShape(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ellipse"
  }, "Ellipse"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "circle"
  }, "Circle"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "custom"
  }, "Custom"))), shape === 'ellipse' || shape === 'circle' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Extend from its center to the:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: position,
    onChange: e => setPosition(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "farthest-corner"
  }, "farthest corner (default)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "farthest-side"
  }, "farthest side"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "closest-corner"
  }, "closest corner"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "closest-side"
  }, "closest side"))) : shape === 'custom' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Custom Size:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Width:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: width,
    onChange: e => setWidth(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: widthUOM,
    onChange: e => setWidthUOM(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "%"
  }, "%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "px"
  }, "px"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rem"
  }, "rem"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Height:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    value: height,
    onChange: e => setHeight(e.target.value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: heightUOM,
    onChange: e => setHeightUOM(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "%"
  }, "%"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "px"
  }, "px"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "rem"
  }, "rem")))) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientRadialShape);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientStops.js":
/*!******************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientStops.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _uiw_react_color_sketch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @uiw/react-color-sketch */ "./node_modules/@uiw/react-color-sketch/esm/index.js");


//import { SketchPicker } from 'react-color'

function convertHexToRgbA(hexVal) {
  let ret;

  // If the hex value is valid.
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hexVal)) {
    // Getting the content after '#',
    // eg. 'ffffff' in case of '#ffffff'
    ret = hexVal.slice(1);

    // Splitting each character
    ret = ret.split('');

    // Checking if the length is 3
    // then make that 6
    if (ret.length == 3) {
      let ar = [];
      ar.push(ret[0]);
      ar.push(ret[0]);
      ar.push(ret[1]);
      ar.push(ret[1]);
      ar.push(ret[2]);
      ar.push(ret[2]);
      ret = ar;
    }

    // Starts with '0x'(in hexadecimal)
    ret = '0x' + ret.join('');

    // Converting the first 2 characters
    // from hexadecimal to r value
    let r = ret >> 16 & 255;

    // Converting the second 2 characters
    // to hexadecimal to g value
    let g = ret >> 8 & 255;

    // Converting the last 2 characters
    // to hexadecimal to b value
    let b = ret & 255;

    // Appending all of them to make
    // the RGBA value
    return 'rgba(' + [r, g, b].join(',') + ',1)';
  }
}
// Function to convert RGBA to Hex
const rgbaToHex = rgba => {
  const parts = rgba.match(/(\d+), (\d+), (\d+), (\d?\.?\d+)/);
  const r = parseInt(parts[1]).toString(16).padStart(2, '0');
  const g = parseInt(parts[2]).toString(16).padStart(2, '0');
  const b = parseInt(parts[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
};
const GradientStops = ({
  gradientIndex,
  stops,
  handleGradientsStopChange,
  handleAddStop,
  activeStop,
  handleActiveStop,
  handleStopBlur,
  handleRemoveStop,
  handleColorSwitch
}) => {
  const initialDisplayColorPicker = () => {
    let array = [];
    if (stops != undefined) {
      for (let index = 0; index < stops.length; index++) {
        array.push([false]);
      }
    }
    return array;
  };
  const [displayColorPicker, setDisplayColorPicker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialDisplayColorPicker);
  const [newStopPosition, setNewStopPosition] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(50); // Default position for new stops
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const handleClick = index => {
    let newArray = [...displayColorPicker];
    newArray[index] = !newArray[index];
    setDisplayColorPicker(newArray);
  };
  const handleClose = index => {
    let newArray = [...displayColorPicker];
    newArray[index] = false;
    setDisplayColorPicker(newArray);
  };
  const handleNewStopPositionChange = event => {
    setNewStopPosition(event.target.value);
  };
  const styles = {
    'default': {
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
      },
      popover: {
        position: 'absolute',
        zIndex: '2'
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px'
      }
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, stops != undefined ? stops.map((stop, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex p-2",
    key: index,
    onClick: () => handleActiveStop(gradientIndex, index),
    style: {
      border: activeStop.stopIndex === index ? '2px solid blue' : 'none'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " pr-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: " border-4 border-slate-300",
    style: styles.swatch,
    onClick: () => handleClick(index)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "dataset-color": stop.color,
    style: {
      width: '36px',
      height: '14px',
      //borderRadius: '2px',
      background: stop.color
      //background: `rgba(${ stop.color.r }, ${ stop.color.g }, ${ stop.color.b }, ${ stop.color.a })`
    }
  })), !displayColorPicker[index] ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles.popover
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: styles.cover,
    onClick: () => handleClose(index)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_uiw_react_color_sketch__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: `sp-${index}`,
    color: rgbaToHex(stop.color),
    onChange: color => handleGradientsStopChange(gradientIndex, index, 'color', `rgba(${color.rgba.r}, ${color.rgba.g}, ${color.rgba.b}, ${color.rgba.a})`)
  })) : null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "border",
    type: "number",
    min: "0",
    max: "100",
    value: stop.position_from,
    onChange: e => handleGradientsStopChange(gradientIndex, index, 'position_from', e.target.value),
    onBlur: () => handleStopBlur(gradientIndex)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "border pr-2 pl-2",
    type: "number",
    min: "0",
    max: "100",
    value: stop.position_to,
    onChange: e => handleGradientsStopChange(gradientIndex, index, 'position_to', e.target.value),
    onBlur: () => handleStopBlur(gradientIndex)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10",
    onClick: () => handleRemoveStop(gradientIndex, index)
  }, "X"))) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "New Stop Position:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "border",
    type: "number",
    min: "0",
    max: "100",
    value: newStopPosition,
    onChange: handleNewStopPositionChange
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "whitespace-nowrap rounded-radius bg-blue-700 border border-blue-700 px-3 py-1 text-white text-sm font-medium tracking-wide ",
    onClick: () => handleAddStop(gradientIndex, newStopPosition)
  }, "Add Color Stop"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "whitespace-nowrap rounded-radius bg-blue-700 border border-blue-700 px-3 py-1 text-white text-sm font-medium tracking-wide",
    onClick: () => handleColorSwitch(gradientIndex)
  }, "Switch Colors"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientStops);

/***/ }),

/***/ "./src/scripts/gradientBuilder/GradientTools.js":
/*!******************************************************!*\
  !*** ./src/scripts/gradientBuilder/GradientTools.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GradientStops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GradientStops.js */ "./src/scripts/gradientBuilder/GradientStops.js");
/* harmony import */ var _GradientAngle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GradientAngle.js */ "./src/scripts/gradientBuilder/GradientAngle.js");
/* harmony import */ var _GradientPosition_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GradientPosition.js */ "./src/scripts/gradientBuilder/GradientPosition.js");
/* harmony import */ var _GradientRadialShape_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GradientRadialShape.js */ "./src/scripts/gradientBuilder/GradientRadialShape.js");
/* harmony import */ var _GradientBackground_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GradientBackground.js */ "./src/scripts/gradientBuilder/GradientBackground.js");







const GradientTools = ({
  gradientIndex,
  gradient,
  handleGradientsChange,
  handleGradientsStopChange,
  handleAngleChange,
  handleAddStop,
  activeStop,
  handleActiveStop,
  handleRemoveStop,
  handleStopBlur,
  handleColorSwitch
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "GRADIENT TYPE ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "isolate inline-flex rounded-md shadow-sm"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10",
    style: {
      background: gradient.gradientType === 'linear' ? 'rgb(74,69,178)' : 'none'
    },
    onClick: () => handleGradientsChange(gradientIndex, 'gradientType', 'linear')
  }, "LINEAR"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10",
    style: {
      background: gradient.gradientType === 'radial' ? 'rgb(74,69,178)' : 'none'
    },
    onClick: () => handleGradientsChange(gradientIndex, 'gradientType', 'radial')
  }, "RADIAL"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10",
    style: {
      background: gradient.gradientType === 'conic' ? 'rgb(74,69,178)' : 'none'
    },
    onClick: () => handleGradientsChange(gradientIndex, 'gradientType', 'conic')
  }, "CONIC")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientAngle_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gradientIndex: gradientIndex,
    gradientType: gradient.gradientType,
    angle: gradient.angle,
    handleGradientsChange: handleGradientsChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientStops_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    gradientIndex: gradientIndex,
    stops: gradient.stops,
    handleGradientsStopChange: handleGradientsStopChange,
    handleAddStop: handleAddStop,
    handleRemoveStop: handleRemoveStop,
    activeStop: activeStop,
    handleActiveStop: handleActiveStop,
    handleStopBlur: handleStopBlur,
    handleColorSwitch: handleColorSwitch
  }), gradient.gradientType === 'radial' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientRadialShape_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gradientsIndex: gradientIndex,
    radialShape: gradient.radialShape,
    handleGradientsChange: handleGradientsChange
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientPosition_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gradientIndex: gradientIndex,
    gradientType: gradient.gradientType,
    xposition: gradient.xposition,
    handleGradientsChange: handleGradientsChange,
    yposition: gradient.yposition
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GradientBackground_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    gradientIndex: gradientIndex
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientTools);

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-toggle/dist/component/check.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-toggle/dist/component/check.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function () {
  return _react2.default.createElement(
    'svg',
    { width: '14', height: '11', viewBox: '0 0 14 11' },
    _react2.default.createElement('path', { d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),

/***/ "./node_modules/react-toggle/dist/component/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-toggle/dist/component/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _check = __webpack_require__(/*! ./check */ "./node_modules/react-toggle/dist/component/check.js");

var _check2 = _interopRequireDefault(_check);

var _x = __webpack_require__(/*! ./x */ "./node_modules/react-toggle/dist/component/x.js");

var _x2 = _interopRequireDefault(_x);

var _util = __webpack_require__(/*! ./util */ "./node_modules/react-toggle/dist/component/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_PureComponent) {
  _inherits(Toggle, _PureComponent);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
    _this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.checked !== this.props.checked) {
        // Disable linting rule here since this usage of setState inside
        // componentDidUpdate is OK; see
        // https://reactjs.org/docs/react-component.html#componentdidupdate
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ checked: !!this.props.checked });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      if (this.props.disabled) {
        return;
      }
      var checkbox = this.input;
      if (event.target !== checkbox && !this.moved) {
        this.previouslyChecked = checkbox.checked;
        event.preventDefault();
        checkbox.focus();
        checkbox.click();
        return;
      }

      var checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked;

      this.setState({ checked: checked });
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      if (this.props.disabled) {
        return;
      }
      this.startX = (0, _util.pointerCoord)(event).x;
      this.activated = true;
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      if (!this.activated) return;
      this.moved = true;

      if (this.startX) {
        var currentX = (0, _util.pointerCoord)(event).x;
        if (this.state.checked && currentX + 15 < this.startX) {
          this.setState({ checked: false });
          this.startX = currentX;
          this.activated = true;
        } else if (currentX - 15 > this.startX) {
          this.setState({ checked: true });
          this.startX = currentX;
          this.activated = currentX < this.startX + 5;
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      if (!this.moved) return;
      var checkbox = this.input;
      event.preventDefault();

      if (this.startX) {
        var endX = (0, _util.pointerCoord)(event).x;
        if (this.previouslyChecked === true && this.startX + 4 > endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: false });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        } else if (this.startX - 4 < endX) {
          if (this.previouslyChecked !== this.state.checked) {
            this.setState({ checked: true });
            this.previouslyChecked = this.state.checked;
            checkbox.click();
          }
        }

        this.activated = false;
        this.startX = null;
        this.moved = false;
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      var onFocus = this.props.onFocus;


      if (onFocus) {
        onFocus(event);
      }

      this.setState({ hasFocus: true });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;


      if (onBlur) {
        onBlur(event);
      }

      this.setState({ hasFocus: false });
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icons = this.props.icons;

      if (!icons) {
        return null;
      }
      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          _icons = _props.icons,
          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);

      var classes = (0, _classnames2.default)('react-toggle', {
        'react-toggle--checked': this.state.checked,
        'react-toggle--focus': this.state.hasFocus,
        'react-toggle--disabled': this.props.disabled
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes,
          onClick: this.handleClick,
          onTouchStart: this.handleTouchStart,
          onTouchMove: this.handleTouchMove,
          onTouchEnd: this.handleTouchEnd },
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track' },
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-check' },
            this.getIcon('checked')
          ),
          _react2.default.createElement(
            'div',
            { className: 'react-toggle-track-x' },
            this.getIcon('unchecked')
          )
        ),
        _react2.default.createElement('div', { className: 'react-toggle-thumb' }),
        _react2.default.createElement('input', _extends({}, inputProps, {
          ref: function ref(_ref) {
            _this2.input = _ref;
          },
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          className: 'react-toggle-screenreader-only',
          type: 'checkbox' }))
      );
    }
  }]);

  return Toggle;
}(_react.PureComponent);

exports["default"] = Toggle;


Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
  icons: {
    checked: _react2.default.createElement(_check2.default, null),
    unchecked: _react2.default.createElement(_x2.default, null)
  }
};

Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  defaultChecked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  'aria-labelledby': _propTypes2.default.string,
  'aria-label': _propTypes2.default.string,
  icons: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    checked: _propTypes2.default.node,
    unchecked: _propTypes2.default.node
  })])
};

/***/ }),

/***/ "./node_modules/react-toggle/dist/component/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-toggle/dist/component/util.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pointerCoord = pointerCoord;
// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts

function pointerCoord(event) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    var changedTouches = event.changedTouches;
    if (changedTouches && changedTouches.length > 0) {
      var touch = changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    var pageX = event.pageX;
    if (pageX !== undefined) {
      return { x: pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

/***/ }),

/***/ "./node_modules/react-toggle/dist/component/x.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-toggle/dist/component/x.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function () {
  return _react2.default.createElement(
    'svg',
    { width: '10', height: '10', viewBox: '0 0 10 10' },
    _react2.default.createElement('path', { d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12', fill: '#fff', fillRule: 'evenodd' })
  );
};

/***/ }),

/***/ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-zoom-pan-pinch/dist/index.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   KeepScale: () => (/* binding */ KeepScale),
/* harmony export */   MiniMap: () => (/* binding */ MiniMap),
/* harmony export */   TransformComponent: () => (/* binding */ TransformComponent),
/* harmony export */   TransformWrapper: () => (/* binding */ TransformWrapper),
/* harmony export */   getCenterPosition: () => (/* binding */ getCenterPosition),
/* harmony export */   getMatrixTransformStyles: () => (/* binding */ getMatrixTransformStyles),
/* harmony export */   getTransformStyles: () => (/* binding */ getTransformStyles),
/* harmony export */   useControls: () => (/* binding */ useControls),
/* harmony export */   useTransformComponent: () => (/* binding */ useTransformComponent),
/* harmony export */   useTransformContext: () => (/* binding */ useTransformContext),
/* harmony export */   useTransformEffect: () => (/* binding */ useTransformEffect),
/* harmony export */   useTransformInit: () => (/* binding */ useTransformInit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Rounds number to given decimal
 * eg. roundNumber(2.34343, 1) => 2.3
 */
var roundNumber = function (num, decimal) {
    return Number(num.toFixed(decimal));
};
/**
 * Checks if value is number, if not it returns default value
 * 1# eg. checkIsNumber(2, 30) => 2
 * 2# eg. checkIsNumber(null, 30) => 30
 */
var checkIsNumber = function (num, defaultValue) {
    return typeof num === "number" ? num : defaultValue;
};

var handleCallback = function (context, event, callback) {
    if (callback && typeof callback === "function") {
        callback(context, event);
    }
};

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * Functions should return denominator of the target value, which is the next animation step.
 * t is a value from 0 to 1, reflecting the percentage of animation status.
 */
var easeOut = function (t) {
    return -Math.cos(t * Math.PI) / 2 + 0.5;
};
// linear
var linear = function (t) {
    return t;
};
// accelerating from zero velocity
var easeInQuad = function (t) {
    return t * t;
};
// decelerating to zero velocity
var easeOutQuad = function (t) {
    return t * (2 - t);
};
// acceleration until halfway, then deceleration
var easeInOutQuad = function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};
// accelerating from zero velocity
var easeInCubic = function (t) {
    return t * t * t;
};
// decelerating to zero velocity
var easeOutCubic = function (t) {
    return --t * t * t + 1;
};
// acceleration until halfway, then deceleration
var easeInOutCubic = function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};
// accelerating from zero velocity
var easeInQuart = function (t) {
    return t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuart = function (t) {
    return 1 - --t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuart = function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
};
// accelerating from zero velocity
var easeInQuint = function (t) {
    return t * t * t * t * t;
};
// decelerating to zero velocity
var easeOutQuint = function (t) {
    return 1 + --t * t * t * t * t;
};
// acceleration until halfway, then deceleration
var easeInOutQuint = function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
};
var animations = {
    easeOut: easeOut,
    linear: linear,
    easeInQuad: easeInQuad,
    easeOutQuad: easeOutQuad,
    easeInOutQuad: easeInOutQuad,
    easeInCubic: easeInCubic,
    easeOutCubic: easeOutCubic,
    easeInOutCubic: easeInOutCubic,
    easeInQuart: easeInQuart,
    easeOutQuart: easeOutQuart,
    easeInOutQuart: easeInOutQuart,
    easeInQuint: easeInQuint,
    easeOutQuint: easeOutQuint,
    easeInOutQuint: easeInOutQuint,
};

/* eslint-disable no-param-reassign */
var handleCancelAnimationFrame = function (animation) {
    if (typeof animation === "number") {
        cancelAnimationFrame(animation);
    }
};
var handleCancelAnimation = function (contextInstance) {
    if (!contextInstance.mounted)
        return;
    handleCancelAnimationFrame(contextInstance.animation);
    // Clear animation state
    contextInstance.animate = false;
    contextInstance.animation = null;
    contextInstance.velocity = null;
};
function handleSetupAnimation(contextInstance, animationName, animationTime, callback) {
    if (!contextInstance.mounted)
        return;
    var startTime = new Date().getTime();
    var lastStep = 1;
    // if another animation is active
    handleCancelAnimation(contextInstance);
    // new animation
    contextInstance.animation = function () {
        if (!contextInstance.mounted) {
            return handleCancelAnimationFrame(contextInstance.animation);
        }
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / animationTime;
        var animationType = animations[animationName];
        var step = animationType(animationProgress);
        if (frameTime >= animationTime) {
            callback(lastStep);
            contextInstance.animation = null;
        }
        else if (contextInstance.animation) {
            callback(step);
            requestAnimationFrame(contextInstance.animation);
        }
    };
    requestAnimationFrame(contextInstance.animation);
}
function isValidTargetState(targetState) {
    var scale = targetState.scale, positionX = targetState.positionX, positionY = targetState.positionY;
    if (Number.isNaN(scale) ||
        Number.isNaN(positionX) ||
        Number.isNaN(positionY)) {
        return false;
    }
    return true;
}
function animate(contextInstance, targetState, animationTime, animationName) {
    var isValid = isValidTargetState(targetState);
    if (!contextInstance.mounted || !isValid)
        return;
    var setTransformState = contextInstance.setTransformState;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    var scaleDiff = targetState.scale - scale;
    var positionXDiff = targetState.positionX - positionX;
    var positionYDiff = targetState.positionY - positionY;
    if (animationTime === 0) {
        setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
    }
    else {
        // animation start timestamp
        handleSetupAnimation(contextInstance, animationName, animationTime, function (step) {
            var newScale = scale + scaleDiff * step;
            var newPositionX = positionX + positionXDiff * step;
            var newPositionY = positionY + positionYDiff * step;
            setTransformState(newScale, newPositionX, newPositionY);
        });
    }
}

/* eslint-disable no-param-reassign */
function getComponentsSizes(wrapperComponent, contentComponent, newScale) {
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var contentWidth = contentComponent.offsetWidth;
    var contentHeight = contentComponent.offsetHeight;
    var newContentWidth = contentWidth * newScale;
    var newContentHeight = contentHeight * newScale;
    var newDiffWidth = wrapperWidth - newContentWidth;
    var newDiffHeight = wrapperHeight - newContentHeight;
    return {
        wrapperWidth: wrapperWidth,
        wrapperHeight: wrapperHeight,
        newContentWidth: newContentWidth,
        newDiffWidth: newDiffWidth,
        newContentHeight: newContentHeight,
        newDiffHeight: newDiffHeight,
    };
}
var getBounds = function (wrapperWidth, newContentWidth, diffWidth, wrapperHeight, newContentHeight, diffHeight, centerZoomedOut) {
    var scaleWidthFactor = wrapperWidth > newContentWidth
        ? diffWidth * (centerZoomedOut ? 1 : 0.5)
        : 0;
    var scaleHeightFactor = wrapperHeight > newContentHeight
        ? diffHeight * (centerZoomedOut ? 1 : 0.5)
        : 0;
    var minPositionX = wrapperWidth - newContentWidth - scaleWidthFactor;
    var maxPositionX = scaleWidthFactor;
    var minPositionY = wrapperHeight - newContentHeight - scaleHeightFactor;
    var maxPositionY = scaleHeightFactor;
    return { minPositionX: minPositionX, maxPositionX: maxPositionX, minPositionY: minPositionY, maxPositionY: maxPositionY };
};
var calculateBounds = function (contextInstance, newScale) {
    var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
    var centerZoomedOut = contextInstance.setup.centerZoomedOut;
    if (!wrapperComponent || !contentComponent) {
        throw new Error("Components are not mounted");
    }
    var _a = getComponentsSizes(wrapperComponent, contentComponent, newScale), wrapperWidth = _a.wrapperWidth, wrapperHeight = _a.wrapperHeight, newContentWidth = _a.newContentWidth, newDiffWidth = _a.newDiffWidth, newContentHeight = _a.newContentHeight, newDiffHeight = _a.newDiffHeight;
    var bounds = getBounds(wrapperWidth, newContentWidth, newDiffWidth, wrapperHeight, newContentHeight, newDiffHeight, Boolean(centerZoomedOut));
    return bounds;
};
/**
 * Keeps value between given bounds, used for limiting view to given boundaries
 * 1# eg. boundLimiter(2, 0, 3, true) => 2
 * 2# eg. boundLimiter(4, 0, 3, true) => 3
 * 3# eg. boundLimiter(-2, 0, 3, true) => 0
 * 4# eg. boundLimiter(10, 0, 3, false) => 10
 */
var boundLimiter = function (value, minBound, maxBound, isActive) {
    if (!isActive)
        return roundNumber(value, 2);
    if (value < minBound)
        return roundNumber(minBound, 2);
    if (value > maxBound)
        return roundNumber(maxBound, 2);
    return roundNumber(value, 2);
};
var handleCalculateBounds = function (contextInstance, newScale) {
    var bounds = calculateBounds(contextInstance, newScale);
    // Save bounds
    contextInstance.bounds = bounds;
    return bounds;
};
function getMouseBoundedPosition(positionX, positionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent) {
    var minPositionX = bounds.minPositionX, minPositionY = bounds.minPositionY, maxPositionX = bounds.maxPositionX, maxPositionY = bounds.maxPositionY;
    var paddingX = 0;
    var paddingY = 0;
    if (wrapperComponent) {
        paddingX = paddingValueX;
        paddingY = paddingValueY;
    }
    var x = boundLimiter(positionX, minPositionX - paddingX, maxPositionX + paddingX, limitToBounds);
    var y = boundLimiter(positionY, minPositionY - paddingY, maxPositionY + paddingY, limitToBounds);
    return { x: x, y: y };
}

function handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds) {
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    var scaleDifference = newScale - scale;
    if (typeof mouseX !== "number" || typeof mouseY !== "number") {
        console.error("Mouse X and Y position were not provided!");
        return { x: positionX, y: positionY };
    }
    var calculatedPositionX = positionX - mouseX * scaleDifference;
    var calculatedPositionY = positionY - mouseY * scaleDifference;
    // do not limit to bounds when there is padding animation,
    // it causes animation strange behaviour
    var newPositions = getMouseBoundedPosition(calculatedPositionX, calculatedPositionY, bounds, limitToBounds, 0, 0, null);
    return newPositions;
}
function checkZoomBounds(zoom, minScale, maxScale, zoomPadding, enablePadding) {
    var scalePadding = enablePadding ? zoomPadding : 0;
    var minScaleWithPadding = minScale - scalePadding;
    if (!Number.isNaN(maxScale) && zoom >= maxScale)
        return maxScale;
    if (!Number.isNaN(minScale) && zoom <= minScaleWithPadding)
        return minScaleWithPadding;
    return zoom;
}

var isPanningStartAllowed = function (contextInstance, event) {
    var excluded = contextInstance.setup.panning.excluded;
    var isInitialized = contextInstance.isInitialized, wrapperComponent = contextInstance.wrapperComponent;
    var target = event.target;
    var targetIsShadowDom = "shadowRoot" in target && "composedPath" in event;
    var isWrapperChild = targetIsShadowDom
        ? event.composedPath().some(function (el) {
            if (!(el instanceof Element)) {
                return false;
            }
            return wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(el);
        })
        : wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
    var isAllowed = isInitialized && target && isWrapperChild;
    if (!isAllowed)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};
var isPanningAllowed = function (contextInstance) {
    var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning, setup = contextInstance.setup;
    var disabled = setup.panning.disabled;
    var isAllowed = isInitialized && isPanning && !disabled;
    if (!isAllowed)
        return false;
    return true;
};
var handlePanningSetup = function (contextInstance, event) {
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY;
    contextInstance.isPanning = true;
    // Panning with mouse
    var x = event.clientX;
    var y = event.clientY;
    contextInstance.startCoords = { x: x - positionX, y: y - positionY };
};
var handleTouchPanningSetup = function (contextInstance, event) {
    var touches = event.touches;
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY;
    contextInstance.isPanning = true;
    // Panning with touch
    var oneFingerTouch = touches.length === 1;
    if (oneFingerTouch) {
        var x = touches[0].clientX;
        var y = touches[0].clientY;
        contextInstance.startCoords = { x: x - positionX, y: y - positionY };
    }
};
function handlePanToBounds(contextInstance) {
    var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
    var _b = contextInstance.setup, disabled = _b.disabled, limitToBounds = _b.limitToBounds, centerZoomedOut = _b.centerZoomedOut;
    var wrapperComponent = contextInstance.wrapperComponent;
    if (disabled || !wrapperComponent || !contextInstance.bounds)
        return;
    var _c = contextInstance.bounds, maxPositionX = _c.maxPositionX, minPositionX = _c.minPositionX, maxPositionY = _c.maxPositionY, minPositionY = _c.minPositionY;
    var xChanged = positionX > maxPositionX || positionX < minPositionX;
    var yChanged = positionY > maxPositionY || positionY < minPositionY;
    var mousePosX = positionX > maxPositionX
        ? wrapperComponent.offsetWidth
        : contextInstance.setup.minPositionX || 0;
    var mousePosY = positionY > maxPositionY
        ? wrapperComponent.offsetHeight
        : contextInstance.setup.minPositionY || 0;
    var _d = handleCalculateZoomPositions(contextInstance, mousePosX, mousePosY, scale, contextInstance.bounds, limitToBounds || centerZoomedOut), x = _d.x, y = _d.y;
    return {
        scale: scale,
        positionX: xChanged ? x : positionX,
        positionY: yChanged ? y : positionY,
    };
}
function handleNewPosition(contextInstance, newPositionX, newPositionY, paddingValueX, paddingValueY) {
    var limitToBounds = contextInstance.setup.limitToBounds;
    var wrapperComponent = contextInstance.wrapperComponent, bounds = contextInstance.bounds;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (wrapperComponent === null ||
        bounds === null ||
        (newPositionX === positionX && newPositionY === positionY)) {
        return;
    }
    var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent), x = _b.x, y = _b.y;
    contextInstance.setTransformState(scale, x, y);
}
var getPanningClientPosition = function (contextInstance, clientX, clientY) {
    var startCoords = contextInstance.startCoords, transformState = contextInstance.transformState;
    var panning = contextInstance.setup.panning;
    var lockAxisX = panning.lockAxisX, lockAxisY = panning.lockAxisY;
    var positionX = transformState.positionX, positionY = transformState.positionY;
    if (!startCoords) {
        return { x: positionX, y: positionY };
    }
    var mouseX = clientX - startCoords.x;
    var mouseY = clientY - startCoords.y;
    var newPositionX = lockAxisX ? positionX : mouseX;
    var newPositionY = lockAxisY ? positionY : mouseY;
    return { x: newPositionX, y: newPositionY };
};
var getPaddingValue = function (contextInstance, size) {
    var setup = contextInstance.setup, transformState = contextInstance.transformState;
    var scale = transformState.scale;
    var minScale = setup.minScale, disablePadding = setup.disablePadding;
    if (size > 0 && scale >= minScale && !disablePadding) {
        return size;
    }
    return 0;
};

var isVelocityCalculationAllowed = function (contextInstance) {
    var mounted = contextInstance.mounted;
    var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation;
    var scale = contextInstance.transformState.scale;
    var disabledVelocity = velocityAnimation.disabled;
    var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
    if (!isAllowed)
        return false;
    return true;
};
var isVelocityAllowed = function (contextInstance) {
    var mounted = contextInstance.mounted, velocity = contextInstance.velocity, bounds = contextInstance.bounds;
    var _a = contextInstance.setup, disabled = _a.disabled, velocityAnimation = _a.velocityAnimation;
    var scale = contextInstance.transformState.scale;
    var disabledVelocity = velocityAnimation.disabled;
    var isAllowed = !disabledVelocity || scale > 1 || !disabled || mounted;
    if (!isAllowed)
        return false;
    if (!velocity || !bounds)
        return false;
    return true;
};
function getVelocityMoveTime(contextInstance, velocity) {
    var velocityAnimation = contextInstance.setup.velocityAnimation;
    var equalToMove = velocityAnimation.equalToMove, animationTime = velocityAnimation.animationTime, sensitivity = velocityAnimation.sensitivity;
    if (equalToMove) {
        return animationTime * velocity * sensitivity;
    }
    return animationTime;
}
function getVelocityPosition(newPosition, startPosition, currentPosition, isLocked, limitToBounds, minPosition, maxPosition, minTarget, maxTarget, step) {
    if (limitToBounds) {
        if (startPosition > maxPosition && currentPosition > maxPosition) {
            var calculatedPosition = maxPosition + (newPosition - maxPosition) * step;
            if (calculatedPosition > maxTarget)
                return maxTarget;
            if (calculatedPosition < maxPosition)
                return maxPosition;
            return calculatedPosition;
        }
        if (startPosition < minPosition && currentPosition < minPosition) {
            var calculatedPosition = minPosition + (newPosition - minPosition) * step;
            if (calculatedPosition < minTarget)
                return minTarget;
            if (calculatedPosition > minPosition)
                return minPosition;
            return calculatedPosition;
        }
    }
    if (isLocked)
        return startPosition;
    return boundLimiter(newPosition, minPosition, maxPosition, limitToBounds);
}

function getSizeMultiplier(wrapperComponent, equalToMove) {
    var defaultMultiplier = 1;
    if (equalToMove) {
        return Math.min(defaultMultiplier, wrapperComponent.offsetWidth / window.innerWidth);
    }
    return defaultMultiplier;
}
function handleCalculateVelocity(contextInstance, position) {
    var isAllowed = isVelocityCalculationAllowed(contextInstance);
    if (!isAllowed) {
        return;
    }
    var lastMousePosition = contextInstance.lastMousePosition, velocityTime = contextInstance.velocityTime, setup = contextInstance.setup;
    var wrapperComponent = contextInstance.wrapperComponent;
    var equalToMove = setup.velocityAnimation.equalToMove;
    var now = Date.now();
    if (lastMousePosition && velocityTime && wrapperComponent) {
        var sizeMultiplier = getSizeMultiplier(wrapperComponent, equalToMove);
        var distanceX = position.x - lastMousePosition.x;
        var distanceY = position.y - lastMousePosition.y;
        var velocityX = distanceX / sizeMultiplier;
        var velocityY = distanceY / sizeMultiplier;
        var interval = now - velocityTime;
        var speed = distanceX * distanceX + distanceY * distanceY;
        var velocity = Math.sqrt(speed) / interval;
        contextInstance.velocity = { velocityX: velocityX, velocityY: velocityY, total: velocity };
    }
    contextInstance.lastMousePosition = position;
    contextInstance.velocityTime = now;
}
function handleVelocityPanning(contextInstance) {
    var velocity = contextInstance.velocity, bounds = contextInstance.bounds, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var isAllowed = isVelocityAllowed(contextInstance);
    if (!isAllowed || !velocity || !bounds || !wrapperComponent) {
        return;
    }
    var velocityX = velocity.velocityX, velocityY = velocity.velocityY, total = velocity.total;
    var maxPositionX = bounds.maxPositionX, minPositionX = bounds.minPositionX, maxPositionY = bounds.maxPositionY, minPositionY = bounds.minPositionY;
    var limitToBounds = setup.limitToBounds, alignmentAnimation = setup.alignmentAnimation;
    var zoomAnimation = setup.zoomAnimation, panning = setup.panning;
    var lockAxisY = panning.lockAxisY, lockAxisX = panning.lockAxisX;
    var animationType = zoomAnimation.animationType;
    var sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY, velocityAlignmentTime = alignmentAnimation.velocityAlignmentTime;
    var alignAnimationTime = velocityAlignmentTime;
    var moveAnimationTime = getVelocityMoveTime(contextInstance, total);
    var finalAnimationTime = Math.max(moveAnimationTime, alignAnimationTime);
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    var paddingX = (paddingValueX * wrapperComponent.offsetWidth) / 100;
    var paddingY = (paddingValueY * wrapperComponent.offsetHeight) / 100;
    var maxTargetX = maxPositionX + paddingX;
    var minTargetX = minPositionX - paddingX;
    var maxTargetY = maxPositionY + paddingY;
    var minTargetY = minPositionY - paddingY;
    var startState = contextInstance.transformState;
    var startTime = new Date().getTime();
    handleSetupAnimation(contextInstance, animationType, finalAnimationTime, function (step) {
        var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
        var frameTime = new Date().getTime() - startTime;
        var animationProgress = frameTime / alignAnimationTime;
        var alignAnimation = animations[alignmentAnimation.animationType];
        var alignStep = 1 - alignAnimation(Math.min(1, animationProgress));
        var customStep = 1 - step;
        var newPositionX = positionX + velocityX * customStep;
        var newPositionY = positionY + velocityY * customStep;
        var currentPositionX = getVelocityPosition(newPositionX, startState.positionX, positionX, lockAxisX, limitToBounds, minPositionX, maxPositionX, minTargetX, maxTargetX, alignStep);
        var currentPositionY = getVelocityPosition(newPositionY, startState.positionY, positionY, lockAxisY, limitToBounds, minPositionY, maxPositionY, minTargetY, maxTargetY, alignStep);
        if (positionX !== newPositionX || positionY !== newPositionY) {
            contextInstance.setTransformState(scale, currentPositionX, currentPositionY);
        }
    });
}

function handlePanningStart(contextInstance, event) {
    var scale = contextInstance.transformState.scale;
    handleCancelAnimation(contextInstance);
    handleCalculateBounds(contextInstance, scale);
    if (window.TouchEvent !== undefined && event instanceof TouchEvent) {
        handleTouchPanningSetup(contextInstance, event);
    }
    else {
        handlePanningSetup(contextInstance, event);
    }
}
function handleAlignToBounds(contextInstance, customAnimationTime) {
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, minScale = _a.minScale, alignmentAnimation = _a.alignmentAnimation;
    var disabled = alignmentAnimation.disabled, sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY, animationTime = alignmentAnimation.animationTime, animationType = alignmentAnimation.animationType;
    var isDisabled = disabled || scale < minScale || (!sizeX && !sizeY);
    if (isDisabled)
        return;
    var targetState = handlePanToBounds(contextInstance);
    if (targetState) {
        animate(contextInstance, targetState, customAnimationTime !== null && customAnimationTime !== void 0 ? customAnimationTime : animationTime, animationType);
    }
}
function handlePanning(contextInstance, clientX, clientY) {
    var startCoords = contextInstance.startCoords, setup = contextInstance.setup;
    var _a = setup.alignmentAnimation, sizeX = _a.sizeX, sizeY = _a.sizeY;
    if (!startCoords)
        return;
    var _b = getPanningClientPosition(contextInstance, clientX, clientY), x = _b.x, y = _b.y;
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    handleCalculateVelocity(contextInstance, { x: x, y: y });
    handleNewPosition(contextInstance, x, y, paddingValueX, paddingValueY);
}
function handlePanningEnd(contextInstance) {
    if (contextInstance.isPanning) {
        var velocityDisabled = contextInstance.setup.panning.velocityDisabled;
        var velocity = contextInstance.velocity, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        contextInstance.isPanning = false;
        contextInstance.animate = false;
        contextInstance.animation = null;
        var wrapperRect = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.getBoundingClientRect();
        var contentRect = contentComponent === null || contentComponent === void 0 ? void 0 : contentComponent.getBoundingClientRect();
        var wrapperWidth = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.width) || 0;
        var wrapperHeight = (wrapperRect === null || wrapperRect === void 0 ? void 0 : wrapperRect.height) || 0;
        var contentWidth = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.width) || 0;
        var contentHeight = (contentRect === null || contentRect === void 0 ? void 0 : contentRect.height) || 0;
        var isZoomed = wrapperWidth < contentWidth || wrapperHeight < contentHeight;
        var shouldAnimate = !velocityDisabled && velocity && (velocity === null || velocity === void 0 ? void 0 : velocity.total) > 0.1 && isZoomed;
        if (shouldAnimate) {
            handleVelocityPanning(contextInstance);
        }
        else {
            handleAlignToBounds(contextInstance);
        }
    }
}

function handleZoomToPoint(contextInstance, scale, mouseX, mouseY) {
    var _a = contextInstance.setup, minScale = _a.minScale, maxScale = _a.maxScale, limitToBounds = _a.limitToBounds;
    var newScale = checkZoomBounds(roundNumber(scale, 2), minScale, maxScale, 0, false);
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var _b = handleCalculateZoomPositions(contextInstance, mouseX, mouseY, newScale, bounds, limitToBounds), x = _b.x, y = _b.y;
    return { scale: newScale, positionX: x, positionY: y };
}
function handleAlignToScaleBounds(contextInstance, mousePositionX, mousePositionY) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent;
    var _a = contextInstance.setup, minScale = _a.minScale, limitToBounds = _a.limitToBounds, zoomAnimation = _a.zoomAnimation;
    var disabled = zoomAnimation.disabled, animationTime = zoomAnimation.animationTime, animationType = zoomAnimation.animationType;
    var isDisabled = disabled || scale >= minScale;
    if (scale >= 1 || limitToBounds) {
        // fire fit to bounds animation
        handleAlignToBounds(contextInstance);
    }
    if (isDisabled || !wrapperComponent || !contextInstance.mounted)
        return;
    var mouseX = mousePositionX || wrapperComponent.offsetWidth / 2;
    var mouseY = mousePositionY || wrapperComponent.offsetHeight / 2;
    var targetState = handleZoomToPoint(contextInstance, minScale, mouseX, mouseY);
    if (targetState) {
        animate(contextInstance, targetState, animationTime, animationType);
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var initialState = {
    previousScale: 1,
    scale: 1,
    positionX: 0,
    positionY: 0,
};
var initialSetup = {
    disabled: false,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: 1,
    maxScale: 8,
    limitToBounds: true,
    centerZoomedOut: false,
    centerOnInit: false,
    disablePadding: false,
    smooth: true,
    wheel: {
        step: 0.2,
        disabled: false,
        smoothStep: 0.001,
        wheelDisabled: false,
        touchPadDisabled: false,
        activationKeys: [],
        excluded: [],
    },
    panning: {
        disabled: false,
        velocityDisabled: false,
        lockAxisX: false,
        lockAxisY: false,
        allowLeftClickPan: true,
        allowMiddleClickPan: true,
        allowRightClickPan: true,
        wheelPanning: false,
        activationKeys: [],
        excluded: [],
    },
    pinch: {
        step: 5,
        disabled: false,
        excluded: [],
    },
    doubleClick: {
        disabled: false,
        step: 0.7,
        mode: "zoomIn",
        animationType: "easeOut",
        animationTime: 200,
        excluded: [],
    },
    zoomAnimation: {
        disabled: false,
        size: 0.4,
        animationTime: 200,
        animationType: "easeOut",
    },
    alignmentAnimation: {
        disabled: false,
        sizeX: 100,
        sizeY: 100,
        animationTime: 200,
        velocityAlignmentTime: 400,
        animationType: "easeOut",
    },
    velocityAnimation: {
        disabled: false,
        sensitivity: 1,
        animationTime: 400,
        animationType: "easeOut",
        equalToMove: true,
    },
};
var baseClasses = {
    wrapperClass: "react-transform-wrapper",
    contentClass: "react-transform-component",
};

var createState = function (props) {
    var _a, _b, _c, _d;
    return {
        previousScale: (_a = props.initialScale) !== null && _a !== void 0 ? _a : initialState.scale,
        scale: (_b = props.initialScale) !== null && _b !== void 0 ? _b : initialState.scale,
        positionX: (_c = props.initialPositionX) !== null && _c !== void 0 ? _c : initialState.positionX,
        positionY: (_d = props.initialPositionY) !== null && _d !== void 0 ? _d : initialState.positionY,
    };
};
var createSetup = function (props) {
    var newSetup = __assign({}, initialSetup);
    Object.keys(props).forEach(function (key) {
        var validValue = typeof props[key] !== "undefined";
        var validParameter = typeof initialSetup[key] !== "undefined";
        if (validParameter && validValue) {
            var dataType = Object.prototype.toString.call(initialSetup[key]);
            var isObject = dataType === "[object Object]";
            var isArray = dataType === "[object Array]";
            if (isObject) {
                newSetup[key] = __assign(__assign({}, initialSetup[key]), props[key]);
            }
            else if (isArray) {
                newSetup[key] = __spreadArray(__spreadArray([], initialSetup[key], true), props[key], true);
            }
            else {
                newSetup[key] = props[key];
            }
        }
    });
    return newSetup;
};

var handleCalculateButtonZoom = function (contextInstance, delta, step) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, smooth = setup.smooth;
    var size = zoomAnimation.size;
    if (!wrapperComponent) {
        throw new Error("Wrapper is not mounted");
    }
    var targetScale = smooth
        ? scale * Math.exp(delta * step)
        : scale + delta * step;
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, false);
    return newScale;
};
function handleZoomToViewCenter(contextInstance, delta, step, animationTime, animationType) {
    var wrapperComponent = contextInstance.wrapperComponent;
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (!wrapperComponent)
        return console.error("No WrapperComponent found");
    var wrapperWidth = wrapperComponent.offsetWidth;
    var wrapperHeight = wrapperComponent.offsetHeight;
    var mouseX = (wrapperWidth / 2 - positionX) / scale;
    var mouseY = (wrapperHeight / 2 - positionY) / scale;
    var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
    var targetState = handleZoomToPoint(contextInstance, newScale, mouseX, mouseY);
    if (!targetState) {
        return console.error("Error during zoom event. New transformation state was not calculated.");
    }
    animate(contextInstance, targetState, animationTime, animationType);
}
function resetTransformations(contextInstance, animationTime, animationType, onResetTransformation) {
    var setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var limitToBounds = setup.limitToBounds;
    var initialTransformation = createState(contextInstance.props);
    var _a = contextInstance.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
    if (!wrapperComponent)
        return;
    var newBounds = calculateBounds(contextInstance, initialTransformation.scale);
    var boundedPositions = getMouseBoundedPosition(initialTransformation.positionX, initialTransformation.positionY, newBounds, limitToBounds, 0, 0, wrapperComponent);
    var newState = {
        scale: initialTransformation.scale,
        positionX: boundedPositions.x,
        positionY: boundedPositions.y,
    };
    if (scale === initialTransformation.scale &&
        positionX === initialTransformation.positionX &&
        positionY === initialTransformation.positionY) {
        return;
    }
    onResetTransformation === null || onResetTransformation === void 0 ? void 0 : onResetTransformation();
    animate(contextInstance, newState, animationTime, animationType);
}
function getOffset(element, wrapper, content, state) {
    var offset = element.getBoundingClientRect();
    var wrapperOffset = wrapper.getBoundingClientRect();
    var contentOffset = content.getBoundingClientRect();
    var xOff = wrapperOffset.x * state.scale;
    var yOff = wrapperOffset.y * state.scale;
    return {
        x: (offset.x - contentOffset.x + xOff) / state.scale,
        y: (offset.y - contentOffset.y + yOff) / state.scale,
    };
}
function calculateZoomToNode(contextInstance, node, customZoom) {
    var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent, transformState = contextInstance.transformState;
    var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, minScale = _a.minScale, maxScale = _a.maxScale;
    if (!wrapperComponent || !contentComponent)
        return transformState;
    var wrapperRect = wrapperComponent.getBoundingClientRect();
    var nodeRect = node.getBoundingClientRect();
    var nodeOffset = getOffset(node, wrapperComponent, contentComponent, transformState);
    var nodeLeft = nodeOffset.x;
    var nodeTop = nodeOffset.y;
    var nodeWidth = nodeRect.width / transformState.scale;
    var nodeHeight = nodeRect.height / transformState.scale;
    var scaleX = wrapperComponent.offsetWidth / nodeWidth;
    var scaleY = wrapperComponent.offsetHeight / nodeHeight;
    var newScale = checkZoomBounds(customZoom || Math.min(scaleX, scaleY), minScale, maxScale, 0, false);
    var offsetX = (wrapperRect.width - nodeWidth * newScale) / 2;
    var offsetY = (wrapperRect.height - nodeHeight * newScale) / 2;
    var newPositionX = (wrapperRect.left - nodeLeft) * newScale + offsetX;
    var newPositionY = (wrapperRect.top - nodeTop) * newScale + offsetY;
    var bounds = calculateBounds(contextInstance, newScale);
    var _b = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, 0, 0, wrapperComponent), x = _b.x, y = _b.y;
    return { positionX: x, positionY: y, scale: newScale };
}

var zoomIn = function (contextInstance) {
    return function (step, animationTime, animationType) {
        if (step === void 0) { step = 0.5; }
        if (animationTime === void 0) { animationTime = 300; }
        if (animationType === void 0) { animationType = "easeOut"; }
        handleZoomToViewCenter(contextInstance, 1, step, animationTime, animationType);
    };
};
var zoomOut = function (contextInstance) {
    return function (step, animationTime, animationType) {
        if (step === void 0) { step = 0.5; }
        if (animationTime === void 0) { animationTime = 300; }
        if (animationType === void 0) { animationType = "easeOut"; }
        handleZoomToViewCenter(contextInstance, -1, step, animationTime, animationType);
    };
};
var setTransform = function (contextInstance) {
    return function (newPositionX, newPositionY, newScale, animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 300; }
        if (animationType === void 0) { animationType = "easeOut"; }
        var _a = contextInstance.transformState, positionX = _a.positionX, positionY = _a.positionY, scale = _a.scale;
        var wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        var disabled = contextInstance.setup.disabled;
        if (disabled || !wrapperComponent || !contentComponent)
            return;
        var targetState = {
            positionX: Number.isNaN(newPositionX) ? positionX : newPositionX,
            positionY: Number.isNaN(newPositionY) ? positionY : newPositionY,
            scale: Number.isNaN(newScale) ? scale : newScale,
        };
        animate(contextInstance, targetState, animationTime, animationType);
    };
};
var resetTransform = function (contextInstance) {
    return function (animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 200; }
        if (animationType === void 0) { animationType = "easeOut"; }
        resetTransformations(contextInstance, animationTime, animationType);
    };
};
var centerView = function (contextInstance) {
    return function (scale, animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 200; }
        if (animationType === void 0) { animationType = "easeOut"; }
        var transformState = contextInstance.transformState, wrapperComponent = contextInstance.wrapperComponent, contentComponent = contextInstance.contentComponent;
        if (wrapperComponent && contentComponent) {
            var targetState = getCenterPosition(scale || transformState.scale, wrapperComponent, contentComponent);
            animate(contextInstance, targetState, animationTime, animationType);
        }
    };
};
var zoomToElement = function (contextInstance) {
    return function (node, scale, animationTime, animationType) {
        if (animationTime === void 0) { animationTime = 600; }
        if (animationType === void 0) { animationType = "easeOut"; }
        handleCancelAnimation(contextInstance);
        var wrapperComponent = contextInstance.wrapperComponent;
        var target = typeof node === "string" ? document.getElementById(node) : node;
        if (wrapperComponent && target && wrapperComponent.contains(target)) {
            var targetState = calculateZoomToNode(contextInstance, target, scale);
            animate(contextInstance, targetState, animationTime, animationType);
        }
    };
};

var getControls = function (contextInstance) {
    return {
        instance: contextInstance,
        zoomIn: zoomIn(contextInstance),
        zoomOut: zoomOut(contextInstance),
        setTransform: setTransform(contextInstance),
        resetTransform: resetTransform(contextInstance),
        centerView: centerView(contextInstance),
        zoomToElement: zoomToElement(contextInstance),
    };
};
var getState = function (contextInstance) {
    return {
        instance: contextInstance,
        state: contextInstance.transformState,
    };
};
var getContext = function (contextInstance) {
    var ref = {};
    Object.assign(ref, getState(contextInstance));
    Object.assign(ref, getControls(contextInstance));
    return ref;
};

// We want to make event listeners non-passive, and to do so have to check
// that browsers support EventListenerOptions in the first place.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
var passiveSupported = false;
function makePassiveEventOption() {
    try {
        var options = {
            get passive() {
                // This function will be called when the browser
                //   attempts to access the passive property.
                passiveSupported = true;
                return false;
            },
        };
        return options;
    }
    catch (err) {
        passiveSupported = false;
        return passiveSupported;
    }
}

var matchPrefix = ".".concat(baseClasses.wrapperClass);
var isExcludedNode = function (node, excluded) {
    return excluded.some(function (exclude) {
        return node.matches("".concat(matchPrefix, " ").concat(exclude, ", ").concat(matchPrefix, " .").concat(exclude, ", ").concat(matchPrefix, " ").concat(exclude, " *, ").concat(matchPrefix, " .").concat(exclude, " *"));
    });
};
var cancelTimeout = function (timeout) {
    if (timeout) {
        clearTimeout(timeout);
    }
};

var getTransformStyles = function (x, y, scale) {
    // Standard translate prevents blurry svg on the safari
    return "translate(".concat(x, "px, ").concat(y, "px) scale(").concat(scale, ")");
};
var getMatrixTransformStyles = function (x, y, scale) {
    // The shorthand for matrix does not work for Safari hence the need to explicitly use matrix3d
    // Refer to https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix
    var a = scale;
    var b = 0;
    var c = 0;
    var d = scale;
    var tx = x;
    var ty = y;
    return "matrix3d(".concat(a, ", ").concat(b, ", 0, 0, ").concat(c, ", ").concat(d, ", 0, 0, 0, 0, 1, 0, ").concat(tx, ", ").concat(ty, ", 0, 1)");
};
var getCenterPosition = function (scale, wrapperComponent, contentComponent) {
    var contentWidth = contentComponent.offsetWidth * scale;
    var contentHeight = contentComponent.offsetHeight * scale;
    var centerPositionX = (wrapperComponent.offsetWidth - contentWidth) / 2;
    var centerPositionY = (wrapperComponent.offsetHeight - contentHeight) / 2;
    return {
        scale: scale,
        positionX: centerPositionX,
        positionY: centerPositionY,
    };
};

function mergeRefs(refs) {
    return function (value) {
        refs.forEach(function (ref) {
            if (typeof ref === "function") {
                ref(value);
            }
            else if (ref != null) {
                ref.current = value;
            }
        });
    };
}

var isWheelAllowed = function (contextInstance, event) {
    var _a = contextInstance.setup.wheel, disabled = _a.disabled, wheelDisabled = _a.wheelDisabled, touchPadDisabled = _a.touchPadDisabled, excluded = _a.excluded;
    var isInitialized = contextInstance.isInitialized, isPanning = contextInstance.isPanning;
    var target = event.target;
    var isAllowed = isInitialized && !isPanning && !disabled && target;
    if (!isAllowed)
        return false;
    // Event ctrlKey detects if touchpad action is executing wheel or pinch gesture
    if (wheelDisabled && !event.ctrlKey)
        return false;
    if (touchPadDisabled && event.ctrlKey)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};
var getDeltaY = function (event) {
    if (event) {
        return event.deltaY < 0 ? 1 : -1;
    }
    return 0;
};
function getDelta(event, customDelta) {
    var deltaY = getDeltaY(event);
    var delta = checkIsNumber(customDelta, deltaY);
    return delta;
}
function getMousePosition(event, contentComponent, scale) {
    var contentRect = contentComponent.getBoundingClientRect();
    var mouseX = 0;
    var mouseY = 0;
    if ("clientX" in event) {
        // mouse position x, y over wrapper component
        mouseX = (event.clientX - contentRect.left) / scale;
        mouseY = (event.clientY - contentRect.top) / scale;
    }
    else {
        var touch = event.touches[0];
        mouseX = (touch.clientX - contentRect.left) / scale;
        mouseY = (touch.clientY - contentRect.top) / scale;
    }
    if (Number.isNaN(mouseX) || Number.isNaN(mouseY))
        console.error("No mouse or touch offset found");
    return {
        x: mouseX,
        y: mouseY,
    };
}
var handleCalculateWheelZoom = function (contextInstance, delta, step, disable, getTarget) {
    var scale = contextInstance.transformState.scale;
    var wrapperComponent = contextInstance.wrapperComponent, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    if (!wrapperComponent) {
        throw new Error("Wrapper is not mounted");
    }
    var targetScale = scale + delta * step;
    if (getTarget)
        return targetScale;
    var paddingEnabled = disable ? false : !disabled;
    var newScale = checkZoomBounds(roundNumber(targetScale, 3), minScale, maxScale, size, paddingEnabled && !disablePadding);
    return newScale;
};
var handleWheelZoomStop = function (contextInstance, event) {
    var previousWheelEvent = contextInstance.previousWheelEvent;
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, maxScale = _a.maxScale, minScale = _a.minScale;
    if (!previousWheelEvent)
        return false;
    if (scale < maxScale || scale > minScale)
        return true;
    if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY))
        return true;
    if (previousWheelEvent.deltaY > 0 && previousWheelEvent.deltaY < event.deltaY)
        return true;
    if (previousWheelEvent.deltaY < 0 && previousWheelEvent.deltaY > event.deltaY)
        return true;
    if (Math.sign(previousWheelEvent.deltaY) !== Math.sign(event.deltaY))
        return true;
    return false;
};

var isPinchStartAllowed = function (contextInstance, event) {
    var _a = contextInstance.setup.pinch, disabled = _a.disabled, excluded = _a.excluded;
    var isInitialized = contextInstance.isInitialized;
    var target = event.target;
    var isAllowed = isInitialized && !disabled && target;
    if (!isAllowed)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};
var isPinchAllowed = function (contextInstance) {
    var disabled = contextInstance.setup.pinch.disabled;
    var isInitialized = contextInstance.isInitialized, pinchStartDistance = contextInstance.pinchStartDistance;
    var isAllowed = isInitialized && !disabled && pinchStartDistance;
    if (!isAllowed)
        return false;
    return true;
};
var calculateTouchMidPoint = function (event, scale, contentComponent) {
    var contentRect = contentComponent.getBoundingClientRect();
    var touches = event.touches;
    var firstPointX = roundNumber(touches[0].clientX - contentRect.left, 5);
    var firstPointY = roundNumber(touches[0].clientY - contentRect.top, 5);
    var secondPointX = roundNumber(touches[1].clientX - contentRect.left, 5);
    var secondPointY = roundNumber(touches[1].clientY - contentRect.top, 5);
    return {
        x: (firstPointX + secondPointX) / 2 / scale,
        y: (firstPointY + secondPointY) / 2 / scale,
    };
};
var getTouchDistance = function (event) {
    return Math.sqrt(Math.pow((event.touches[0].pageX - event.touches[1].pageX), 2) +
        Math.pow((event.touches[0].pageY - event.touches[1].pageY), 2));
};
var calculatePinchZoom = function (contextInstance, currentDistance) {
    var pinchStartScale = contextInstance.pinchStartScale, pinchStartDistance = contextInstance.pinchStartDistance, setup = contextInstance.setup;
    var maxScale = setup.maxScale, minScale = setup.minScale, zoomAnimation = setup.zoomAnimation, disablePadding = setup.disablePadding;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    if (!pinchStartScale || pinchStartDistance === null || !currentDistance) {
        throw new Error("Pinch touches distance was not provided");
    }
    if (currentDistance < 0) {
        return contextInstance.transformState.scale;
    }
    var touchProportion = currentDistance / pinchStartDistance;
    var scaleDifference = touchProportion * pinchStartScale;
    return checkZoomBounds(roundNumber(scaleDifference, 2), minScale, maxScale, size, !disabled && !disablePadding);
};

var wheelStopEventTime = 160;
var wheelAnimationTime = 100;
var handleWheelStart = function (contextInstance, event) {
    var _a = contextInstance.props, onWheelStart = _a.onWheelStart, onZoomStart = _a.onZoomStart;
    if (!contextInstance.wheelStopEventTimer) {
        handleCancelAnimation(contextInstance);
        handleCallback(getContext(contextInstance), event, onWheelStart);
        handleCallback(getContext(contextInstance), event, onZoomStart);
    }
};
var handleWheelZoom = function (contextInstance, event) {
    var _a = contextInstance.props, onWheel = _a.onWheel, onZoom = _a.onZoom;
    var contentComponent = contextInstance.contentComponent, setup = contextInstance.setup, transformState = contextInstance.transformState;
    var scale = transformState.scale;
    var limitToBounds = setup.limitToBounds, centerZoomedOut = setup.centerZoomedOut, zoomAnimation = setup.zoomAnimation, wheel = setup.wheel, disablePadding = setup.disablePadding, smooth = setup.smooth;
    var size = zoomAnimation.size, disabled = zoomAnimation.disabled;
    var step = wheel.step, smoothStep = wheel.smoothStep;
    if (!contentComponent) {
        throw new Error("Component not mounted");
    }
    event.preventDefault();
    event.stopPropagation();
    var delta = getDelta(event, null);
    var zoomStep = smooth ? smoothStep * Math.abs(event.deltaY) : step;
    var newScale = handleCalculateWheelZoom(contextInstance, delta, zoomStep, !event.ctrlKey);
    // if scale not change
    if (scale === newScale)
        return;
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var mousePosition = getMousePosition(event, contentComponent, scale);
    var isPaddingDisabled = disabled || size === 0 || centerZoomedOut || disablePadding;
    var isLimitedToBounds = limitToBounds && isPaddingDisabled;
    var _b = handleCalculateZoomPositions(contextInstance, mousePosition.x, mousePosition.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
    contextInstance.previousWheelEvent = event;
    contextInstance.setTransformState(newScale, x, y);
    handleCallback(getContext(contextInstance), event, onWheel);
    handleCallback(getContext(contextInstance), event, onZoom);
};
var handleWheelStop = function (contextInstance, event) {
    var _a = contextInstance.props, onWheelStop = _a.onWheelStop, onZoomStop = _a.onZoomStop;
    // fire animation
    cancelTimeout(contextInstance.wheelAnimationTimer);
    contextInstance.wheelAnimationTimer = setTimeout(function () {
        if (!contextInstance.mounted)
            return;
        handleAlignToScaleBounds(contextInstance, event.x, event.y);
        contextInstance.wheelAnimationTimer = null;
    }, wheelAnimationTime);
    // Wheel stop event
    var hasStoppedZooming = handleWheelZoomStop(contextInstance, event);
    if (hasStoppedZooming) {
        cancelTimeout(contextInstance.wheelStopEventTimer);
        contextInstance.wheelStopEventTimer = setTimeout(function () {
            if (!contextInstance.mounted)
                return;
            contextInstance.wheelStopEventTimer = null;
            handleCallback(getContext(contextInstance), event, onWheelStop);
            handleCallback(getContext(contextInstance), event, onZoomStop);
        }, wheelStopEventTime);
    }
};

var getTouchCenter = function (event) {
    var totalX = 0;
    var totalY = 0;
    // Sum up the positions of all touches
    for (var i = 0; i < 2; i += 1) {
        totalX += event.touches[i].clientX;
        totalY += event.touches[i].clientY;
    }
    // Calculate the average position
    var x = totalX / 2;
    var y = totalY / 2;
    return { x: x, y: y };
};
var handlePinchStart = function (contextInstance, event) {
    var distance = getTouchDistance(event);
    contextInstance.pinchStartDistance = distance;
    contextInstance.lastDistance = distance;
    contextInstance.pinchStartScale = contextInstance.transformState.scale;
    contextInstance.isPanning = false;
    var center = getTouchCenter(event);
    contextInstance.pinchLastCenterX = center.x;
    contextInstance.pinchLastCenterY = center.y;
    handleCancelAnimation(contextInstance);
};
var handlePinchZoom = function (contextInstance, event) {
    var contentComponent = contextInstance.contentComponent, pinchStartDistance = contextInstance.pinchStartDistance, wrapperComponent = contextInstance.wrapperComponent;
    var scale = contextInstance.transformState.scale;
    var _a = contextInstance.setup, limitToBounds = _a.limitToBounds, centerZoomedOut = _a.centerZoomedOut, zoomAnimation = _a.zoomAnimation, alignmentAnimation = _a.alignmentAnimation;
    var disabled = zoomAnimation.disabled, size = zoomAnimation.size;
    // if one finger starts from outside of wrapper
    if (pinchStartDistance === null || !contentComponent)
        return;
    var midPoint = calculateTouchMidPoint(event, scale, contentComponent);
    // if touches goes off of the wrapper element
    if (!Number.isFinite(midPoint.x) || !Number.isFinite(midPoint.y))
        return;
    var currentDistance = getTouchDistance(event);
    var newScale = calculatePinchZoom(contextInstance, currentDistance);
    var center = getTouchCenter(event);
    // pan should be scale invariant.
    var panX = center.x - (contextInstance.pinchLastCenterX || 0);
    var panY = center.y - (contextInstance.pinchLastCenterY || 0);
    if (newScale === scale && panX === 0 && panY === 0)
        return;
    contextInstance.pinchLastCenterX = center.x;
    contextInstance.pinchLastCenterY = center.y;
    var bounds = handleCalculateBounds(contextInstance, newScale);
    var isPaddingDisabled = disabled || size === 0 || centerZoomedOut;
    var isLimitedToBounds = limitToBounds && isPaddingDisabled;
    var _b = handleCalculateZoomPositions(contextInstance, midPoint.x, midPoint.y, newScale, bounds, isLimitedToBounds), x = _b.x, y = _b.y;
    contextInstance.pinchMidpoint = midPoint;
    contextInstance.lastDistance = currentDistance;
    var sizeX = alignmentAnimation.sizeX, sizeY = alignmentAnimation.sizeY;
    var paddingValueX = getPaddingValue(contextInstance, sizeX);
    var paddingValueY = getPaddingValue(contextInstance, sizeY);
    var newPositionX = x + panX;
    var newPositionY = y + panY;
    var _c = getMouseBoundedPosition(newPositionX, newPositionY, bounds, limitToBounds, paddingValueX, paddingValueY, wrapperComponent), finalX = _c.x, finalY = _c.y;
    contextInstance.setTransformState(newScale, finalX, finalY);
};
var handlePinchStop = function (contextInstance) {
    var pinchMidpoint = contextInstance.pinchMidpoint;
    contextInstance.velocity = null;
    contextInstance.lastDistance = null;
    contextInstance.pinchMidpoint = null;
    contextInstance.pinchStartScale = null;
    contextInstance.pinchStartDistance = null;
    handleAlignToScaleBounds(contextInstance, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.x, pinchMidpoint === null || pinchMidpoint === void 0 ? void 0 : pinchMidpoint.y);
};

var handleDoubleClickStop = function (contextInstance, event) {
    var onZoomStop = contextInstance.props.onZoomStop;
    var animationTime = contextInstance.setup.doubleClick.animationTime;
    cancelTimeout(contextInstance.doubleClickStopEventTimer);
    contextInstance.doubleClickStopEventTimer = setTimeout(function () {
        contextInstance.doubleClickStopEventTimer = null;
        handleCallback(getContext(contextInstance), event, onZoomStop);
    }, animationTime);
};
var handleDoubleClickResetMode = function (contextInstance, event) {
    var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
    var _b = contextInstance.setup.doubleClick, animationTime = _b.animationTime, animationType = _b.animationType;
    handleCallback(getContext(contextInstance), event, onZoomStart);
    resetTransformations(contextInstance, animationTime, animationType, function () {
        return handleCallback(getContext(contextInstance), event, onZoom);
    });
    handleDoubleClickStop(contextInstance, event);
};
function getDoubleClickScale(mode, scale) {
    if (mode === "toggle") {
        return scale === 1 ? 1 : -1;
    }
    return mode === "zoomOut" ? -1 : 1;
}
function handleDoubleClick(contextInstance, event) {
    var setup = contextInstance.setup, doubleClickStopEventTimer = contextInstance.doubleClickStopEventTimer, transformState = contextInstance.transformState, contentComponent = contextInstance.contentComponent;
    var scale = transformState.scale;
    var _a = contextInstance.props, onZoomStart = _a.onZoomStart, onZoom = _a.onZoom;
    var _b = setup.doubleClick, disabled = _b.disabled, mode = _b.mode, step = _b.step, animationTime = _b.animationTime, animationType = _b.animationType;
    if (disabled)
        return;
    if (doubleClickStopEventTimer)
        return;
    if (mode === "reset") {
        return handleDoubleClickResetMode(contextInstance, event);
    }
    if (!contentComponent)
        return console.error("No ContentComponent found");
    var delta = getDoubleClickScale(mode, contextInstance.transformState.scale);
    var newScale = handleCalculateButtonZoom(contextInstance, delta, step);
    // stop execution when scale didn't change
    if (scale === newScale)
        return;
    handleCallback(getContext(contextInstance), event, onZoomStart);
    var mousePosition = getMousePosition(event, contentComponent, scale);
    var targetState = handleZoomToPoint(contextInstance, newScale, mousePosition.x, mousePosition.y);
    if (!targetState) {
        return console.error("Error during zoom event. New transformation state was not calculated.");
    }
    handleCallback(getContext(contextInstance), event, onZoom);
    animate(contextInstance, targetState, animationTime, animationType);
    handleDoubleClickStop(contextInstance, event);
}
var isDoubleClickAllowed = function (contextInstance, event) {
    var isInitialized = contextInstance.isInitialized, setup = contextInstance.setup, wrapperComponent = contextInstance.wrapperComponent;
    var _a = setup.doubleClick, disabled = _a.disabled, excluded = _a.excluded;
    var target = event.target;
    var isWrapperChild = wrapperComponent === null || wrapperComponent === void 0 ? void 0 : wrapperComponent.contains(target);
    var isAllowed = isInitialized && target && isWrapperChild && !disabled;
    if (!isAllowed)
        return false;
    var isExcluded = isExcludedNode(target, excluded);
    if (isExcluded)
        return false;
    return true;
};

var ZoomPanPinch = /** @class */ (function () {
    function ZoomPanPinch(props) {
        var _this = this;
        this.mounted = true;
        this.pinchLastCenterX = null;
        this.pinchLastCenterY = null;
        this.onChangeCallbacks = new Set();
        this.onInitCallbacks = new Set();
        // Components
        this.wrapperComponent = null;
        this.contentComponent = null;
        // Initialization
        this.isInitialized = false;
        this.bounds = null;
        // wheel helpers
        this.previousWheelEvent = null;
        this.wheelStopEventTimer = null;
        this.wheelAnimationTimer = null;
        // panning helpers
        this.isPanning = false;
        this.isWheelPanning = false;
        this.startCoords = null;
        this.lastTouch = null;
        // pinch helpers
        this.distance = null;
        this.lastDistance = null;
        this.pinchStartDistance = null;
        this.pinchStartScale = null;
        this.pinchMidpoint = null;
        // double click helpers
        this.doubleClickStopEventTimer = null;
        // velocity helpers
        this.velocity = null;
        this.velocityTime = null;
        this.lastMousePosition = null;
        // animations helpers
        this.animate = false;
        this.animation = null;
        this.maxBounds = null;
        // key press
        this.pressedKeys = {};
        this.mount = function () {
            _this.initializeWindowEvents();
        };
        this.unmount = function () {
            _this.cleanupWindowEvents();
        };
        this.update = function (newProps) {
            _this.props = newProps;
            handleCalculateBounds(_this, _this.transformState.scale);
            _this.setup = createSetup(newProps);
        };
        this.initializeWindowEvents = function () {
            var _a, _b;
            var passive = makePassiveEventOption();
            var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
            var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
            (_b = _this.wrapperComponent) === null || _b === void 0 ? void 0 : _b.addEventListener("wheel", _this.onWheelPanning, passive);
            // Panning on window to allow panning when mouse is out of component wrapper
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mousedown", _this.onPanningStart, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mousemove", _this.onPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("mouseup", _this.onPanningStop, passive);
            currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.addEventListener("mouseleave", _this.clearPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("keyup", _this.setKeyUnPressed, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.addEventListener("keydown", _this.setKeyPressed, passive);
        };
        this.cleanupWindowEvents = function () {
            var _a, _b;
            var passive = makePassiveEventOption();
            var currentDocument = (_a = _this.wrapperComponent) === null || _a === void 0 ? void 0 : _a.ownerDocument;
            var currentWindow = currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.defaultView;
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mousedown", _this.onPanningStart, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mousemove", _this.onPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("mouseup", _this.onPanningStop, passive);
            currentDocument === null || currentDocument === void 0 ? void 0 : currentDocument.removeEventListener("mouseleave", _this.clearPanning, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("keyup", _this.setKeyUnPressed, passive);
            currentWindow === null || currentWindow === void 0 ? void 0 : currentWindow.removeEventListener("keydown", _this.setKeyPressed, passive);
            document.removeEventListener("mouseleave", _this.clearPanning, passive);
            handleCancelAnimation(_this);
            (_b = _this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
        };
        this.handleInitializeWrapperEvents = function (wrapper) {
            // Zooming events on wrapper
            var passive = makePassiveEventOption();
            wrapper.addEventListener("wheel", _this.onWheelZoom, passive);
            wrapper.addEventListener("dblclick", _this.onDoubleClick, passive);
            wrapper.addEventListener("touchstart", _this.onTouchPanningStart, passive);
            wrapper.addEventListener("touchmove", _this.onTouchPanning, passive);
            wrapper.addEventListener("touchend", _this.onTouchPanningStop, passive);
        };
        this.handleInitialize = function (wrapper, contentComponent) {
            var isCentered = false;
            var centerOnInit = _this.setup.centerOnInit;
            var hasTarget = function (entries, target) {
                // eslint-disable-next-line no-restricted-syntax
                for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                    var entry = entries_1[_i];
                    if (entry.target === target) {
                        return true;
                    }
                }
                return false;
            };
            _this.applyTransformation();
            _this.onInitCallbacks.forEach(function (callback) {
                callback(getContext(_this));
            });
            _this.observer = new ResizeObserver(function (entries) {
                if (hasTarget(entries, wrapper) || hasTarget(entries, contentComponent)) {
                    if (centerOnInit && !isCentered) {
                        var currentWidth = contentComponent.offsetWidth;
                        var currentHeight = contentComponent.offsetHeight;
                        if (currentWidth > 0 || currentHeight > 0) {
                            isCentered = true;
                            _this.setCenter();
                        }
                    }
                    else {
                        handleCancelAnimation(_this);
                        handleCalculateBounds(_this, _this.transformState.scale);
                        handleAlignToBounds(_this, 0);
                    }
                }
            });
            // Start observing the target node for configured mutations
            _this.observer.observe(wrapper);
            _this.observer.observe(contentComponent);
        };
        /// ///////
        // Zoom
        /// ///////
        this.onWheelZoom = function (event) {
            var disabled = _this.setup.disabled;
            if (disabled)
                return;
            var isAllowed = isWheelAllowed(_this, event);
            if (!isAllowed)
                return;
            var keysPressed = _this.isPressingKeys(_this.setup.wheel.activationKeys);
            if (!keysPressed)
                return;
            handleWheelStart(_this, event);
            handleWheelZoom(_this, event);
            handleWheelStop(_this, event);
        };
        /// ///////
        // Pan
        /// ///////
        this.onWheelPanning = function (event) {
            var _a = _this.setup, disabled = _a.disabled, wheel = _a.wheel, panning = _a.panning;
            if (!_this.wrapperComponent ||
                !_this.contentComponent ||
                disabled ||
                !wheel.wheelDisabled ||
                panning.disabled ||
                !panning.wheelPanning ||
                event.ctrlKey) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            var _b = _this.transformState, positionX = _b.positionX, positionY = _b.positionY;
            var mouseX = positionX - event.deltaX;
            var mouseY = positionY - event.deltaY;
            var newPositionX = panning.lockAxisX ? positionX : mouseX;
            var newPositionY = panning.lockAxisY ? positionY : mouseY;
            var _c = _this.setup.alignmentAnimation, sizeX = _c.sizeX, sizeY = _c.sizeY;
            var paddingValueX = getPaddingValue(_this, sizeX);
            var paddingValueY = getPaddingValue(_this, sizeY);
            if (newPositionX === positionX && newPositionY === positionY)
                return;
            handleNewPosition(_this, newPositionX, newPositionY, paddingValueX, paddingValueY);
        };
        this.onPanningStart = function (event) {
            var disabled = _this.setup.disabled;
            var onPanningStart = _this.props.onPanningStart;
            if (disabled)
                return;
            var isAllowed = isPanningStartAllowed(_this, event);
            if (!isAllowed)
                return;
            var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
            if (!keysPressed)
                return;
            if (event.button === 0 && !_this.setup.panning.allowLeftClickPan)
                return;
            if (event.button === 1 && !_this.setup.panning.allowMiddleClickPan)
                return;
            if (event.button === 2 && !_this.setup.panning.allowRightClickPan)
                return;
            event.preventDefault();
            event.stopPropagation();
            handleCancelAnimation(_this);
            handlePanningStart(_this, event);
            handleCallback(getContext(_this), event, onPanningStart);
        };
        this.onPanning = function (event) {
            var disabled = _this.setup.disabled;
            var onPanning = _this.props.onPanning;
            if (disabled)
                return;
            var isAllowed = isPanningAllowed(_this);
            if (!isAllowed)
                return;
            var keysPressed = _this.isPressingKeys(_this.setup.panning.activationKeys);
            if (!keysPressed)
                return;
            event.preventDefault();
            event.stopPropagation();
            handlePanning(_this, event.clientX, event.clientY);
            handleCallback(getContext(_this), event, onPanning);
        };
        this.onPanningStop = function (event) {
            var onPanningStop = _this.props.onPanningStop;
            if (_this.isPanning) {
                handlePanningEnd(_this);
                handleCallback(getContext(_this), event, onPanningStop);
            }
        };
        /// ///////
        // Pinch
        /// ///////
        this.onPinchStart = function (event) {
            var disabled = _this.setup.disabled;
            var _a = _this.props, onPinchingStart = _a.onPinchingStart, onZoomStart = _a.onZoomStart;
            if (disabled)
                return;
            var isAllowed = isPinchStartAllowed(_this, event);
            if (!isAllowed)
                return;
            handlePinchStart(_this, event);
            handleCancelAnimation(_this);
            handleCallback(getContext(_this), event, onPinchingStart);
            handleCallback(getContext(_this), event, onZoomStart);
        };
        this.onPinch = function (event) {
            var disabled = _this.setup.disabled;
            var _a = _this.props, onPinching = _a.onPinching, onZoom = _a.onZoom;
            if (disabled)
                return;
            var isAllowed = isPinchAllowed(_this);
            if (!isAllowed)
                return;
            event.preventDefault();
            event.stopPropagation();
            handlePinchZoom(_this, event);
            handleCallback(getContext(_this), event, onPinching);
            handleCallback(getContext(_this), event, onZoom);
        };
        this.onPinchStop = function (event) {
            var _a = _this.props, onPinchingStop = _a.onPinchingStop, onZoomStop = _a.onZoomStop;
            if (_this.pinchStartScale) {
                handlePinchStop(_this);
                handleCallback(getContext(_this), event, onPinchingStop);
                handleCallback(getContext(_this), event, onZoomStop);
            }
        };
        /// ///////
        // Touch
        /// ///////
        this.onTouchPanningStart = function (event) {
            var disabled = _this.setup.disabled;
            var onPanningStart = _this.props.onPanningStart;
            if (disabled)
                return;
            var isAllowed = isPanningStartAllowed(_this, event);
            if (!isAllowed)
                return;
            var isDoubleTap = _this.lastTouch &&
                +new Date() - _this.lastTouch < 200 &&
                event.touches.length === 1;
            if (!isDoubleTap) {
                _this.lastTouch = +new Date();
                handleCancelAnimation(_this);
                var touches = event.touches;
                var isPanningAction = touches.length === 1;
                var isPinchAction = touches.length === 2;
                if (isPanningAction) {
                    handleCancelAnimation(_this);
                    handlePanningStart(_this, event);
                    handleCallback(getContext(_this), event, onPanningStart);
                }
                if (isPinchAction) {
                    _this.onPinchStart(event);
                }
            }
        };
        this.onTouchPanning = function (event) {
            var disabled = _this.setup.disabled;
            var onPanning = _this.props.onPanning;
            if (_this.isPanning && event.touches.length === 1) {
                if (disabled)
                    return;
                var isAllowed = isPanningAllowed(_this);
                if (!isAllowed)
                    return;
                event.preventDefault();
                event.stopPropagation();
                var touch = event.touches[0];
                handlePanning(_this, touch.clientX, touch.clientY);
                handleCallback(getContext(_this), event, onPanning);
            }
            else if (event.touches.length > 1) {
                _this.onPinch(event);
            }
        };
        this.onTouchPanningStop = function (event) {
            _this.onPanningStop(event);
            _this.onPinchStop(event);
        };
        /// ///////
        // Double Click
        /// ///////
        this.onDoubleClick = function (event) {
            var disabled = _this.setup.disabled;
            if (disabled)
                return;
            var isAllowed = isDoubleClickAllowed(_this, event);
            if (!isAllowed)
                return;
            handleDoubleClick(_this, event);
        };
        /// ///////
        // Helpers
        /// ///////
        this.clearPanning = function (event) {
            if (_this.isPanning) {
                _this.onPanningStop(event);
            }
        };
        this.setKeyPressed = function (e) {
            _this.pressedKeys[e.key] = true;
        };
        this.setKeyUnPressed = function (e) {
            _this.pressedKeys[e.key] = false;
        };
        this.isPressingKeys = function (keys) {
            if (!keys.length) {
                return true;
            }
            return Boolean(keys.find(function (key) { return _this.pressedKeys[key]; }));
        };
        this.setTransformState = function (scale, positionX, positionY) {
            var onTransformed = _this.props.onTransformed;
            if (!Number.isNaN(scale) &&
                !Number.isNaN(positionX) &&
                !Number.isNaN(positionY)) {
                if (scale !== _this.transformState.scale) {
                    _this.transformState.previousScale = _this.transformState.scale;
                    _this.transformState.scale = scale;
                }
                _this.transformState.positionX = positionX;
                _this.transformState.positionY = positionY;
                _this.applyTransformation();
                var ctx_1 = getContext(_this);
                _this.onChangeCallbacks.forEach(function (callback) { return callback(ctx_1); });
                handleCallback(ctx_1, { scale: scale, positionX: positionX, positionY: positionY }, onTransformed);
            }
            else {
                console.error("Detected NaN set state values");
            }
        };
        this.setCenter = function () {
            if (_this.wrapperComponent && _this.contentComponent) {
                var targetState = getCenterPosition(_this.transformState.scale, _this.wrapperComponent, _this.contentComponent);
                _this.setTransformState(targetState.scale, targetState.positionX, targetState.positionY);
            }
        };
        this.handleTransformStyles = function (x, y, scale) {
            if (_this.props.customTransform) {
                return _this.props.customTransform(x, y, scale);
            }
            return getTransformStyles(x, y, scale);
        };
        this.applyTransformation = function () {
            if (!_this.mounted || !_this.contentComponent)
                return;
            var _a = _this.transformState, scale = _a.scale, positionX = _a.positionX, positionY = _a.positionY;
            var transform = _this.handleTransformStyles(positionX, positionY, scale);
            _this.contentComponent.style.transform = transform;
        };
        this.getContext = function () {
            return getContext(_this);
        };
        /**
         * Hooks
         */
        this.onChange = function (callback) {
            if (!_this.onChangeCallbacks.has(callback)) {
                _this.onChangeCallbacks.add(callback);
            }
            return function () {
                _this.onChangeCallbacks.delete(callback);
            };
        };
        this.onInit = function (callback) {
            if (!_this.onInitCallbacks.has(callback)) {
                _this.onInitCallbacks.add(callback);
            }
            return function () {
                _this.onInitCallbacks.delete(callback);
            };
        };
        /**
         * Initialization
         */
        this.init = function (wrapperComponent, contentComponent) {
            _this.cleanupWindowEvents();
            _this.wrapperComponent = wrapperComponent;
            _this.contentComponent = contentComponent;
            handleCalculateBounds(_this, _this.transformState.scale);
            _this.handleInitializeWrapperEvents(wrapperComponent);
            _this.handleInitialize(wrapperComponent, contentComponent);
            _this.initializeWindowEvents();
            _this.isInitialized = true;
            var ctx = getContext(_this);
            handleCallback(ctx, undefined, _this.props.onInit);
        };
        this.props = props;
        this.setup = createSetup(this.props);
        this.transformState = createState(this.props);
    }
    return ZoomPanPinch;
}());

var Context = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);
var getContent = function (children, ctx) {
    if (typeof children === "function") {
        return children(ctx);
    }
    return children;
};
var TransformWrapper = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
    var instance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new ZoomPanPinch(props)).current;
    var content = getContent(props.children, getControls(instance));
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, function () { return getControls(instance); }, [instance]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        instance.update(props);
    }, [instance, props]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Context.Provider, { value: instance }, content);
});

var KeepScale = react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
    var localRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var instance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        return instance.onChange(function (ctx) {
            if (localRef.current) {
                var positionX = 0;
                var positionY = 0;
                localRef.current.style.transform = instance.handleTransformStyles(positionX, positionY, 1 / ctx.instance.transformState.scale);
            }
        });
    }, [instance]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({}, props, { ref: mergeRefs([localRef, ref]) }));
});

var initialElementRect = {
    width: 0,
    height: 0,
    y: 0,
    x: 0,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
};
var useResize = function (ref, onResize, dependencies) {
    var resizeObserverRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var rectRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialElementRect);
    var didUnmount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
        var _a;
        didUnmount.current = false;
        if (!("ResizeObserver" in window)) {
            return;
        }
        if (ref) {
            resizeObserverRef.current = new ResizeObserver(function (entries) {
                var newSize = ref.getBoundingClientRect();
                if (!Array.isArray(entries) ||
                    !entries.length ||
                    didUnmount.current ||
                    (newSize.width === rectRef.current.width &&
                        newSize.height === rectRef.current.height))
                    return;
                onResize(newSize, ref);
                rectRef.current = newSize;
            });
            (_a = resizeObserverRef.current) === null || _a === void 0 ? void 0 : _a.observe(ref);
        }
        return function () {
            var _a;
            didUnmount.current = true;
            if (ref) {
                (_a = resizeObserverRef.current) === null || _a === void 0 ? void 0 : _a.unobserve(ref);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, __spreadArray([onResize, ref], dependencies, true));
};

var previewStyles = {
    position: "absolute",
    zIndex: 2,
    top: "0px",
    left: "0px",
    boxSizing: "border-box",
    border: "3px solid red",
    transformOrigin: "0% 0%",
    boxShadow: "rgba(0,0,0,0.2) 0 0 0 10000000px",
};
var MiniMap = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 200 : _b, _c = _a.height, height = _c === void 0 ? 200 : _c, _d = _a.borderColor, borderColor = _d === void 0 ? "red" : _d, children = _a.children, rest = __rest(_a, ["width", "height", "borderColor", "children"]);
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), initialized = _e[0], setInitialized = _e[1];
    var instance = useTransformContext();
    var miniMapInstance = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var mainRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var previewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var getViewportSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        if (instance.wrapperComponent) {
            var rect = instance.wrapperComponent.getBoundingClientRect();
            return {
                width: rect.width,
                height: rect.height,
            };
        }
        return {
            width: 0,
            height: 0,
        };
    }, [instance.wrapperComponent]);
    var getContentSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        if (instance.contentComponent) {
            var rect = instance.contentComponent.getBoundingClientRect();
            return {
                width: rect.width / instance.transformState.scale,
                height: rect.height / instance.transformState.scale,
            };
        }
        return {
            width: 0,
            height: 0,
        };
    }, [instance.contentComponent, instance.transformState.scale]);
    var computeMiniMapScale = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
        var contentSize = getContentSize();
        var scaleX = width / contentSize.width;
        var scaleY = height / contentSize.height;
        var scale = scaleY > scaleX ? scaleX : scaleY;
        return scale;
    }, [getContentSize, height, width]);
    var computeMiniMapSize = function () {
        var contentSize = getContentSize();
        var scaleX = width / contentSize.width;
        var scaleY = height / contentSize.height;
        if (scaleY > scaleX) {
            return { width: width, height: contentSize.height * scaleX };
        }
        return { width: contentSize.width * scaleY, height: height };
    };
    var computeMiniMapStyle = function () {
        var scale = computeMiniMapScale();
        var style = {
            transform: "scale(".concat(scale || 1, ")"),
            transformOrigin: "0% 0%",
            position: "absolute",
            boxSizing: "border-box",
            zIndex: 1,
            overflow: "hidden",
        };
        Object.keys(style).forEach(function (key) {
            if (wrapperRef.current) {
                wrapperRef.current.style[key] = style[key];
            }
        });
    };
    var transformMiniMap = function () {
        computeMiniMapStyle();
        var miniSize = computeMiniMapSize();
        var wrapSize = getContentSize();
        if (wrapperRef.current) {
            wrapperRef.current.style.width = "".concat(wrapSize.width, "px");
            wrapperRef.current.style.height = "".concat(wrapSize.height, "px");
        }
        if (mainRef.current) {
            mainRef.current.style.width = "".concat(miniSize.width, "px");
            mainRef.current.style.height = "".concat(miniSize.height, "px");
        }
        if (previewRef.current) {
            var size = getViewportSize();
            var scale = computeMiniMapScale();
            var previewScale = scale * (1 / instance.transformState.scale);
            var transform = instance.handleTransformStyles(-instance.transformState.positionX * previewScale, -instance.transformState.positionY * previewScale, 1);
            previewRef.current.style.transform = transform;
            previewRef.current.style.width = "".concat(size.width * previewScale, "px");
            previewRef.current.style.height = "".concat(size.height * previewScale, "px");
        }
    };
    var initialize = function () {
        transformMiniMap();
    };
    useTransformEffect(function () {
        transformMiniMap();
    });
    useTransformInit(function () {
        initialize();
        setInitialized(true);
    });
    useResize(instance.contentComponent, initialize, [initialized]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        return instance.onChange(function (zpp) {
            var scale = computeMiniMapScale();
            if (miniMapInstance.current) {
                miniMapInstance.current.instance.transformState.scale =
                    zpp.instance.transformState.scale;
                miniMapInstance.current.instance.transformState.positionX =
                    zpp.instance.transformState.positionX * scale;
                miniMapInstance.current.instance.transformState.positionY =
                    zpp.instance.transformState.positionY * scale;
            }
        });
    }, [computeMiniMapScale, instance, miniMapInstance]);
    var wrapperStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return {
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({}, rest, { ref: mainRef, style: wrapperStyle, className: "rzpp-mini-map ".concat(rest.className || "") }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({}, rest, { ref: wrapperRef, className: "rzpp-wrapper" }), children),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "rzpp-preview", ref: previewRef, style: __assign(__assign({}, previewStyles), { borderColor: borderColor }) })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".transform-component-module_wrapper__SPB86 {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  -webkit-touch-callout: none; /* iOS Safari */\n  -webkit-user-select: none; /* Safari */\n  -khtml-user-select: none; /* Konqueror HTML */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* Internet Explorer/Edge */\n  user-select: none;\n  margin: 0;\n  padding: 0;\n  transform: translate3d(0, 0, 0);\n}\n.transform-component-module_content__FBWxo {\n  display: flex;\n  flex-wrap: wrap;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  transform-origin: 0% 0%;\n}\n.transform-component-module_content__FBWxo img {\n  pointer-events: none;\n}\n";
var styles = {"wrapper":"transform-component-module_wrapper__SPB86","content":"transform-component-module_content__FBWxo"};
styleInject(css_248z);

var TransformComponent = function (_a) {
    var children = _a.children, _b = _a.wrapperClass, wrapperClass = _b === void 0 ? "" : _b, _c = _a.contentClass, contentClass = _c === void 0 ? "" : _c, wrapperStyle = _a.wrapperStyle, contentStyle = _a.contentStyle, _d = _a.wrapperProps, wrapperProps = _d === void 0 ? {} : _d, _e = _a.contentProps, contentProps = _e === void 0 ? {} : _e;
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context), init = _f.init, cleanupWindowEvents = _f.cleanupWindowEvents;
    var wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var contentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var wrapper = wrapperRef.current;
        var content = contentRef.current;
        if (wrapper !== null && content !== null && init) {
            init === null || init === void 0 ? void 0 : init(wrapper, content);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return function () {
            cleanupWindowEvents === null || cleanupWindowEvents === void 0 ? void 0 : cleanupWindowEvents();
        };
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({}, wrapperProps, { ref: wrapperRef, className: "".concat(baseClasses.wrapperClass, " ").concat(styles.wrapper, " ").concat(wrapperClass), style: wrapperStyle }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({}, contentProps, { ref: contentRef, className: "".concat(baseClasses.contentClass, " ").concat(styles.content, " ").concat(contentClass), style: contentStyle }), children)));
};

var useTransformContext = function () {
    var libraryContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
    if (!libraryContext) {
        throw new Error("Transform context must be placed inside TransformWrapper");
    }
    return libraryContext;
};

var useControls = function () {
    var libraryContext = useTransformContext();
    return getControls(libraryContext);
};

var useTransformInit = function (callback) {
    var libraryContext = useTransformContext();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var unmountCallback;
        var unmount;
        if (libraryContext.contentComponent && libraryContext.wrapperComponent) {
            unmountCallback = callback(getState(libraryContext));
        }
        else {
            unmount = libraryContext.onInit(function (ref) {
                unmountCallback = callback(getState(ref.instance));
            });
        }
        return function () {
            unmount === null || unmount === void 0 ? void 0 : unmount();
            unmountCallback === null || unmountCallback === void 0 ? void 0 : unmountCallback();
        };
    }, []);
};

var useTransformEffect = function (callback) {
    var libraryContext = useTransformContext();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var unmountCallback;
        var unmount = libraryContext.onChange(function (ref) {
            unmountCallback = callback(getState(ref.instance));
        });
        return function () {
            unmount();
            unmountCallback === null || unmountCallback === void 0 ? void 0 : unmountCallback();
        };
    }, [callback, libraryContext]);
};

function useTransformComponent(callback) {
    var libraryContext = useTransformContext();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(callback(getState(libraryContext))), transformRender = _a[0], setTransformRender = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var mounted = true;
        var unmount = libraryContext.onChange(function (ref) {
            if (mounted) {
                setTransformRender(callback(getState(ref.instance)));
            }
        });
        return function () {
            unmount();
            mounted = false;
        };
    }, [callback, libraryContext]);
    return transformRender;
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/tinycolor2/tinycolor.js":
/*!**********************************************!*\
  !*** ./node_modules/tinycolor2/tinycolor.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License

(function(Math) {

var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color,
    this._r = rgb.r,
    this._g = rgb.g,
    this._b = rgb.b,
    this._a = rgb.a,
    this._roundA = mathRound(100*this._a) / 100,
    this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
    isDark: function() {
        return this.getBrightness() < 128;
    },
    isLight: function() {
        return !this.isDark();
    },
    isValid: function() {
        return this._ok;
    },
    getOriginalInput: function() {
      return this._originalInput;
    },
    getFormat: function() {
        return this._format;
    },
    getAlpha: function() {
        return this._a;
    },
    getBrightness: function() {
        //http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function() {
        //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R, G, B;
        RsRGB = rgb.r/255;
        GsRGB = rgb.g/255;
        BsRGB = rgb.b/255;

        if (RsRGB <= 0.03928) {R = RsRGB / 12.92;} else {R = Math.pow(((RsRGB + 0.055) / 1.055), 2.4);}
        if (GsRGB <= 0.03928) {G = GsRGB / 12.92;} else {G = Math.pow(((GsRGB + 0.055) / 1.055), 2.4);}
        if (BsRGB <= 0.03928) {B = BsRGB / 12.92;} else {B = Math.pow(((BsRGB + 0.055) / 1.055), 2.4);}
        return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
    },
    setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100*this._a) / 100;
        return this;
    },
    toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
    },
    toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
        return (this._a == 1) ?
          "hsv("  + h + ", " + s + "%, " + v + "%)" :
          "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
    },
    toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    },
    toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
        return (this._a == 1) ?
          "hsl("  + h + ", " + s + "%, " + l + "%)" :
          "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
    },
    toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function(allow3Char) {
        return '#' + this.toHex(allow3Char);
    },
    toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function(allow4Char) {
        return '#' + this.toHex8(allow4Char);
    },
    toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
    },
    toRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
          "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
    },
    toPercentageRgbString: function() {
        return (this._a == 1) ?
          "rgb("  + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" :
          "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function() {
        if (this._a === 0) {
            return "transparent";
        }

        if (this._a < 1) {
            return false;
        }

        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function(secondColor) {
        var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";

        if (secondColor) {
            var s = tinycolor(secondColor);
            secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }

        return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
    },
    toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;

        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
            formattedString = this.toHexString();
        }
        if (format === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format === "name") {
            formattedString = this.toName();
        }
        if (format === "hsl") {
            formattedString = this.toHslString();
        }
        if (format === "hsv") {
            formattedString = this.toHsvString();
        }

        return formattedString || this.toHexString();
    },
    clone: function() {
        return tinycolor(this.toString());
    },

    _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function() {
        return this._applyModification(lighten, arguments);
    },
    brighten: function() {
        return this._applyModification(brighten, arguments);
    },
    darken: function() {
        return this._applyModification(darken, arguments);
    },
    desaturate: function() {
        return this._applyModification(desaturate, arguments);
    },
    saturate: function() {
        return this._applyModification(saturate, arguments);
    },
    greyscale: function() {
        return this._applyModification(greyscale, arguments);
    },
    spin: function() {
        return this._applyModification(spin, arguments);
    },

    _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function() {
        return this._applyCombination(analogous, arguments);
    },
    complement: function() {
        return this._applyCombination(complement, arguments);
    },
    monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
    },
    splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
    },
    triad: function() {
        return this._applyCombination(triad, arguments);
    },
    tetrad: function() {
        return this._applyCombination(tetrad, arguments);
    }
};

// If input is an object, force 1 into "1.0" to handle ratios properly
// String input requires "1.0" as input, so 1 will be treated as 1
tinycolor.fromRatio = function(color, opts) {
    if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                }
                else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }

    return tinycolor(color, opts);
};

// Given a string or object, convert that input to RGB
// Possible string inputs:
//
//     "red"
//     "#f00" or "f00"
//     "#ff0000" or "ff0000"
//     "#ff000000" or "ff000000"
//     "rgb 255 0 0" or "rgb (255, 0, 0)"
//     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
//     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
//     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
//     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
//     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
//     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
//
function inputToRGB(color) {

    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
        color = stringInputToObject(color);
    }

    if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
        }

        if (color.hasOwnProperty("a")) {
            a = color.a;
        }
    }

    a = boundAlpha(a);

    return {
        ok: ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a: a
    };
}


// Conversion Functions
// --------------------

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b){
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255
    };
}

// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min) {
        h = s = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
    }

    return { h: h, s: s, l: l };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
    var r, g, b;

    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
        if(t < 0) t += 1;
        if(t > 1) t -= 1;
        if(t < 1/6) return p + (q - p) * 6 * t;
        if(t < 1/2) return q;
        if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
    }

    if(s === 0) {
        r = g = b = l; // achromatic
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
function rgbToHsv(r, g, b) {

    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);

    var max = mathMax(r, g, b), min = mathMin(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if(max == min) {
        h = 0; // achromatic
    }
    else {
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
 function hsvToRgb(h, s, v) {

    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);

    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];

    return { r: r * 255, g: g * 255, b: b * 255 };
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
}

// `rgbaToHex`
// Converts an RGBA color plus alpha transparency to hex
// Assumes r, g, b are contained in the set [0, 255] and
// a in [0, 1]. Returns a 4 or 8 character rgba hex
function rgbaToHex(r, g, b, a, allow4Char) {

    var hex = [
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
    ];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
}

// `rgbaToArgbHex`
// Converts an RGBA color to an ARGB Hex8 string
// Rarely used, but required for "toFilter()"
function rgbaToArgbHex(r, g, b, a) {

    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r).toString(16)),
        pad2(mathRound(g).toString(16)),
        pad2(mathRound(b).toString(16))
    ];

    return hex.join("");
}

// `equals`
// Can be called with any tinycolor input
tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) { return false; }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};

tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
    });
};


// Modification Functions
// ----------------------
// Thanks to less.js for some of the basics here
// <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

function desaturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function saturate(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
}

function greyscale(color) {
    return tinycolor(color).desaturate(100);
}

function lighten (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

function brighten(color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
    return tinycolor(rgb);
}

function darken (color, amount) {
    amount = (amount === 0) ? 0 : (amount || 10);
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
}

// Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
// Values outside of this range will be wrapped into this range.
function spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
}

// Combination Functions
// ---------------------
// Thanks to jQuery xColor for some of the ideas behind these
// <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

function complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
}

function triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
    ];
}

function tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
    ];
}

function splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [
        tinycolor(color),
        tinycolor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
        tinycolor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
    ];
}

function analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;

    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor(hsl));
    }
    return ret;
}

function monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h, s = hsv.s, v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
        ret.push(tinycolor({ h: h, s: s, v: v}));
        v = (v + modification) % 1;
    }

    return ret;
}

// Utility Functions
// ---------------------

tinycolor.mix = function(color1, color2, amount) {
    amount = (amount === 0) ? 0 : (amount || 50);

    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();

    var p = amount / 100;

    var rgba = {
        r: ((rgb2.r - rgb1.r) * p) + rgb1.r,
        g: ((rgb2.g - rgb1.g) * p) + rgb1.g,
        b: ((rgb2.b - rgb1.b) * p) + rgb1.b,
        a: ((rgb2.a - rgb1.a) * p) + rgb1.a
    };

    return tinycolor(rgba);
};


// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

// `contrast`
// Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(),c2.getLuminance())+0.05) / (Math.min(c1.getLuminance(),c2.getLuminance())+0.05);
};

// `isReadable`
// Ensure that foreground and background color combinations meet WCAG2 guidelines.
// The third argument is an optional Object.
//      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
//      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
// If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

// *Example*
//    tinycolor.isReadable("#000", "#111") => false
//    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;

    out = false;

    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;

};

// `mostReadable`
// Given a base color and a list of possible foreground or background
// colors for that base, returns the most readable color.
// Optionally returns Black or White if the most readable color is unreadable.
// *Example*
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
//    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
//    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size ;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors ;
    level = args.level;
    size = args.size;

    for (var i= 0; i < colorList.length ; i++) {
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {"level":level,"size":size}) || !includeFallbackColors) {
        return bestColor;
    }
    else {
        args.includeFallbackColors=false;
        return tinycolor.mostReadable(baseColor,["#fff", "#000"],args);
    }
};


// Big List of Colors
// ------------------
// <http://www.w3.org/TR/css3-color/#svg-color>
var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};

// Make it easy to access colors via `hexNames[hex]`
var hexNames = tinycolor.hexNames = flip(names);


// Utilities
// ---------

// `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
function flip(o) {
    var flipped = { };
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            flipped[o[i]] = i;
        }
    }
    return flipped;
}

// Return a valid alpha value [0,1] with all invalid values being set to 1
function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }

    return a;
}

// Take input from [0, n] and return it as [0, 1]
function bound01(n, max) {
    if (isOnePointZero(n)) { n = "100%"; }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
        n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if ((Math.abs(n - max) < 0.000001)) {
        return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return (n % max) / parseFloat(max);
}

// Force a number between 0 and 1
function clamp01(val) {
    return mathMin(1, mathMax(0, val));
}

// Parse a base-16 hex value into a base-10 integer
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
}

// Check to see if string passed in is a percentage
function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
}

// Force a hex value to have 2 characters
function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
    if (n <= 1) {
        n = (n * 100) + "%";
    }

    return n;
}

// Converts a decimal to a hex value
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
// Converts a hex value to a decimal
function convertHexToDecimal(h) {
    return (parseIntFromHex(h) / 255);
}

var matchers = (function() {

    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {

    color = color.replace(trimLeft,'').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color == 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if ((match = matchers.rgb.exec(color))) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    if ((match = matchers.rgba.exec(color))) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    if ((match = matchers.hsl.exec(color))) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    if ((match = matchers.hsla.exec(color))) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    if ((match = matchers.hsv.exec(color))) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    if ((match = matchers.hsva.exec(color))) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    if ((match = matchers.hex8.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex6.exec(color))) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? "name" : "hex"
        };
    }
    if ((match = matchers.hex4.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            a: convertHexToDecimal(match[4] + '' + match[4]),
            format: named ? "name" : "hex8"
        };
    }
    if ((match = matchers.hex3.exec(color))) {
        return {
            r: parseIntFromHex(match[1] + '' + match[1]),
            g: parseIntFromHex(match[2] + '' + match[2]),
            b: parseIntFromHex(match[3] + '' + match[3]),
            format: named ? "name" : "hex"
        };
    }

    return false;
}

function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {"level":"AA", "size":"small"};
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
        level = "AA";
    }
    if (size !== "small" && size !== "large") {
        size = "small";
    }
    return {"level":level, "size":size};
}

// Node: Export function
if ( true && module.exports) {
    module.exports = tinycolor;
}
// AMD/requirejs: Define the module
else if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return tinycolor;}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
// Browser: Expose to window
else {}

})(Math);


/***/ }),

/***/ "./src/images/hide.png":
/*!*****************************!*\
  !*** ./src/images/hide.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/hide.2b6811fa.png";

/***/ }),

/***/ "./src/images/visible.png":
/*!********************************!*\
  !*** ./src/images/visible.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/visible.9cfeb61a.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/axios/lib/adapters/adapters.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/adapters/adapters.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.js */ "./node_modules/axios/lib/helpers/null.js");
/* harmony import */ var _xhr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr.js */ "./node_modules/axios/lib/adapters/xhr.js");
/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetch.js */ "./node_modules/axios/lib/adapters/fetch.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");






const knownAdapters = {
  http: _http_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  xhr: _xhr_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  fetch: _fetch_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getAdapter: (adapters) => {
    adapters = _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_4__["default"](
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});


/***/ }),

/***/ "./node_modules/axios/lib/adapters/fetch.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/adapters/fetch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/composeSignals.js */ "./node_modules/axios/lib/helpers/composeSignals.js");
/* harmony import */ var _helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/trackStream.js */ "./node_modules/axios/lib/helpers/trackStream.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");
/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/settle.js */ "./node_modules/axios/lib/core/settle.js");










const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
}

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"](`Response type '${type}' is not supported`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NOT_SUPPORT, config);
      })
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isBlob(body)) {
    return body.size;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSpecCompliantForm(body)) {
    const _request = new Request(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBufferView(body) || _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isURLSearchParams(body)) {
    body = body + '';
  }

  if(_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(body)) {
    return (await encodeText(body)).byteLength;
  }
}

const resolveBodyLength = async (headers, body) => {
  const length = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = (0,_helpers_composeSignals_js__WEBPACK_IMPORTED_MODULE_4__["default"])([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader)
      }

      if (_request.body) {
        const [onProgress, flush] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventDecorator)(
          requestContentLength,
          (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventReducer)((0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.asyncDecorator)(onUploadProgress))
        );

        data = (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_6__.trackStream)(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventDecorator)(
        responseContentLength,
        (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.progressEventReducer)((0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_5__.asyncDecorator)(onDownloadProgress), true)
      ) || [];

      response = new Response(
        (0,_helpers_trackStream_js__WEBPACK_IMPORTED_MODULE_6__.trackStream)(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_7__["default"])(resolve, reject, {
        data: responseData,
        headers: _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_8__["default"].from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      })
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /fetch/i.test(err.message)) {
      throw Object.assign(
        new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"].from(err, err && err.code, config, request);
  }
}));




/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_settle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/settle.js */ "./node_modules/axios/lib/core/settle.js");
/* harmony import */ var _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/parseProtocol.js */ "./node_modules/axios/lib/helpers/parseProtocol.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/progressEventReducer.js */ "./node_modules/axios/lib/helpers/progressEventReducer.js");
/* harmony import */ var _helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/resolveConfig.js */ "./node_modules/axios/lib/helpers/resolveConfig.js");











const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = (0,_helpers_resolveConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
    let requestData = _config.data;
    const requestHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      (0,_core_settle_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Request aborted', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Network Error', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || _defaults_transitional_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"](
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ETIMEDOUT : _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      _utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_5__["default"].isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventReducer)(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = (0,_helpers_progressEventReducer_js__WEBPACK_IMPORTED_MODULE_6__.progressEventReducer)(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_7__["default"](null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = (0,_helpers_parseProtocol_js__WEBPACK_IMPORTED_MODULE_8__["default"])(_config.url);

    if (protocol && _platform_index_js__WEBPACK_IMPORTED_MODULE_9__["default"].protocols.indexOf(protocol) === -1) {
      reject(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"]('Unsupported protocol ' + protocol + ':', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_3__["default"].ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");
/* harmony import */ var _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Axios.js */ "./node_modules/axios/lib/core/Axios.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cancel/CancelToken.js */ "./node_modules/axios/lib/cancel/CancelToken.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/spread.js */ "./node_modules/axios/lib/helpers/spread.js");
/* harmony import */ var _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/isAxiosError.js */ "./node_modules/axios/lib/helpers/isAxiosError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");
/* harmony import */ var _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/HttpStatusCode.js */ "./node_modules/axios/lib/helpers/HttpStatusCode.js");




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"](defaultConfig);
  const instance = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.request, context);

  // Copy axios.prototype to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].prototype, context, {allOwnKeys: true});

  // Copy context to instance
  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance((0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"])(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(_defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

// Expose Axios class to allow class inheritance
axios.Axios = _core_Axios_js__WEBPACK_IMPORTED_MODULE_0__["default"];

// Expose Cancel & CancelToken
axios.CanceledError = _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_5__["default"];
axios.CancelToken = _cancel_CancelToken_js__WEBPACK_IMPORTED_MODULE_6__["default"];
axios.isCancel = _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_7__["default"];
axios.VERSION = _env_data_js__WEBPACK_IMPORTED_MODULE_8__.VERSION;
axios.toFormData = _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_9__["default"];

// Expose AxiosError class
axios.AxiosError = _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_10__["default"];

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = _helpers_spread_js__WEBPACK_IMPORTED_MODULE_11__["default"];

// Expose isAxiosError
axios.isAxiosError = _helpers_isAxiosError_js__WEBPACK_IMPORTED_MODULE_12__["default"];

// Expose mergeConfig
axios.mergeConfig = _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_3__["default"];

axios.AxiosHeaders = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_13__["default"];

axios.formToJSON = thing => (0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_14__["default"])(_utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_15__["default"].getAdapter;

axios.HttpStatusCode = _helpers_HttpStatusCode_js__WEBPACK_IMPORTED_MODULE_16__["default"];

axios.default = axios;

// this module should only have a default export
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new _CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CancelToken);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, message == null ? 'canceled' : message, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].inherits(CanceledError, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
  __CANCEL__: true
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanceledError);


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isCancel)
/* harmony export */ });


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");
/* harmony import */ var _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterceptorManager.js */ "./node_modules/axios/lib/core/InterceptorManager.js");
/* harmony import */ var _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dispatchRequest.js */ "./node_modules/axios/lib/core/dispatchRequest.js");
/* harmony import */ var _mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/validator.js */ "./node_modules/axios/lib/helpers/validator.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");











const validators = _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"](),
      response: new _InterceptorManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    _helpers_validator_js__WEBPACK_IMPORTED_MODULE_0__["default"].assertOptions(config, {
      baseUrl: validators.spelling('baseURL'),
      withXsrfToken: validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].merge(
      headers.common,
      headers[config.method]
    );

    headers && _utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_4__["default"].concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [_dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = _dispatchRequest_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = (0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.defaults, config);
    const fullPath = (0,_buildFullPath_js__WEBPACK_IMPORTED_MODULE_6__["default"])(config.baseURL, config.url);
    return (0,_helpers_buildURL_js__WEBPACK_IMPORTED_MODULE_7__["default"])(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

_utils_js__WEBPACK_IMPORTED_MODULE_3__["default"].forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request((0,_mergeConfig_js__WEBPACK_IMPORTED_MODULE_2__["default"])(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Axios);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);

  _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosError);


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosHeaders.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosHeaders.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/parseHeaders.js */ "./node_modules/axios/lib/helpers/parseHeaders.js");





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value)) return;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders((0,_helpers_parseHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"])(header), valueOrRewrite);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      const key = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].freezeMethods(AxiosHeaders);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosHeaders);


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InterceptorManager);


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFullPath)
/* harmony export */ });
/* harmony import */ var _helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isAbsoluteURL.js */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
/* harmony import */ var _helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/combineURLs.js */ "./node_modules/axios/lib/helpers/combineURLs.js");





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0,_helpers_isAbsoluteURL_js__WEBPACK_IMPORTED_MODULE_0__["default"])(requestedURL)) {
    return (0,_helpers_combineURLs_js__WEBPACK_IMPORTED_MODULE_1__["default"])(baseURL, requestedURL);
  }
  return requestedURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dispatchRequest)
/* harmony export */ });
/* harmony import */ var _transformData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformData.js */ "./node_modules/axios/lib/core/transformData.js");
/* harmony import */ var _cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel/isCancel.js */ "./node_modules/axios/lib/cancel/isCancel.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adapters/adapters.js */ "./node_modules/axios/lib/adapters/adapters.js");









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(config.headers);

  // Transform request data
  config.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = _adapters_adapters_js__WEBPACK_IMPORTED_MODULE_3__["default"].getAdapter(config.adapter || _defaults_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
      config,
      config.transformResponse,
      response
    );

    response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!(0,_cancel_isCancel_js__WEBPACK_IMPORTED_MODULE_5__["default"])(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = _transformData_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeConfig)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");





const headersToObject = (thing) => thing instanceof _AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(target) && _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge.call({caseless}, target, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isPlainObject(source)) {
      return _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].merge({}, source);
    } else if (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (_utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ settle)
/* harmony export */ });
/* harmony import */ var _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      'Request failed with status code ' + response.status,
      [_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_REQUEST, _AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ transformData)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaults/index.js */ "./node_modules/axios/lib/defaults/index.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || _defaults_index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  const context = response || config;
  const headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(context.headers);
  let data = context.data;

  _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _transitional_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitional.js */ "./node_modules/axios/lib/defaults/transitional.js");
/* harmony import */ var _helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/toURLEncodedForm.js */ "./node_modules/axios/lib/helpers/toURLEncodedForm.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/formDataToJSON.js */ "./node_modules/axios/lib/helpers/formDataToJSON.js");










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: _transitional_js__WEBPACK_IMPORTED_MODULE_1__["default"],

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(data);

    if (isObjectPayload && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify((0,_helpers_formDataToJSON_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data)) : data;
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBuffer(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isStream(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFile(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(data) ||
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)
    ) {
      return data;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBufferView(data)) {
      return data.buffer;
    }
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return (0,_helpers_toURLEncodedForm_js__WEBPACK_IMPORTED_MODULE_3__["default"])(data, this.formSerializer).toString();
      }

      if ((isFileList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return (0,_helpers_toFormData_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isResponse(data) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isReadableStream(data)) {
      return data;
    }

    if (data && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].from(e, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_5__["default"].ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.FormData,
    Blob: _platform_index_js__WEBPACK_IMPORTED_MODULE_6__["default"].classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaults);


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VERSION: () => (/* binding */ VERSION)
/* harmony export */ });
const VERSION = "1.7.9";

/***/ }),

/***/ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AxiosURLSearchParams);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/HttpStatusCode.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/HttpStatusCode.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HttpStatusCode);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bind)
/* harmony export */ });


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildURL)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isURLSearchParams(params) ?
      params.toString() :
      new _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_1__["default"](params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ combineURLs)
/* harmony export */ });


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/composeSignals.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/composeSignals.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cancel/CanceledError.js */ "./node_modules/axios/lib/cancel/CanceledError.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? err : new _cancel_CanceledError_js__WEBPACK_IMPORTED_MODULE_1__["default"](err instanceof Error ? err.message : err));
      }
    }

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"](`timeout ${timeout} of ms exceeded`, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_0__["default"].ETIMEDOUT))
    }, timeout)

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    }

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].asap(unsubscribe);

    return signal;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (composeSignals);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(path) && cookie.push('path=' + path);

      _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });



/***/ }),

/***/ "./node_modules/axios/lib/helpers/formDataToJSON.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/formDataToJSON.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target) ? target.length : name;

    if (isLast) {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFormData(formData) && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(formData.entries)) {
    const obj = {};

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formDataToJSON);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteURL)
/* harmony export */ });


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAxiosError)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(payload) && (payload.isAxiosError === true);
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].origin),
  _platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigator && /(msie|trident)/i.test(_platform_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigator.userAgent)
) : () => true);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// eslint-disable-next-line strict
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (null);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils.js */ "./node_modules/axios/lib/utils.js");




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseProtocol)
/* harmony export */ });


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/progressEventReducer.js":
/*!****************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/progressEventReducer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asyncDecorator: () => (/* binding */ asyncDecorator),
/* harmony export */   progressEventDecorator: () => (/* binding */ progressEventDecorator),
/* harmony export */   progressEventReducer: () => (/* binding */ progressEventReducer)
/* harmony export */ });
/* harmony import */ var _speedometer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speedometer.js */ "./node_modules/axios/lib/helpers/speedometer.js");
/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle.js */ "./node_modules/axios/lib/helpers/throttle.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = (0,_speedometer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(50, 250);

  return (0,_throttle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
}

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
}

const asyncDecorator = (fn) => (...args) => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].asap(() => fn(...args));


/***/ }),

/***/ "./node_modules/axios/lib/helpers/resolveConfig.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/resolveConfig.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isURLSameOrigin.js */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cookies.js */ "./node_modules/axios/lib/helpers/cookies.js");
/* harmony import */ var _core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/buildFullPath.js */ "./node_modules/axios/lib/core/buildFullPath.js");
/* harmony import */ var _core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/mergeConfig.js */ "./node_modules/axios/lib/core/mergeConfig.js");
/* harmony import */ var _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosHeaders.js */ "./node_modules/axios/lib/core/AxiosHeaders.js");
/* harmony import */ var _buildURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildURL.js */ "./node_modules/axios/lib/helpers/buildURL.js");









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((config) => {
  const newConfig = (0,_core_mergeConfig_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = _core_AxiosHeaders_js__WEBPACK_IMPORTED_MODULE_1__["default"].from(headers);

  newConfig.url = (0,_buildURL_js__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_core_buildFullPath_js__WEBPACK_IMPORTED_MODULE_3__["default"])(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (_utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFormData(data)) {
    if (_platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserEnv || _platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (_platform_index_js__WEBPACK_IMPORTED_MODULE_5__["default"].hasStandardBrowserEnv) {
    withXSRFToken && _utils_js__WEBPACK_IMPORTED_MODULE_4__["default"].isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && (0,_isURLSameOrigin_js__WEBPACK_IMPORTED_MODULE_6__["default"])(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && _cookies_js__WEBPACK_IMPORTED_MODULE_7__["default"].read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
});



/***/ }),

/***/ "./node_modules/axios/lib/helpers/speedometer.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/speedometer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speedometer);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ spread)
/* harmony export */ });


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/throttle.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/throttle.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs)
        }, threshold - passed);
      }
    }
  }

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (throttle);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");
/* harmony import */ var _platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/node/classes/FormData.js */ "./node_modules/axios/lib/helpers/null.js");




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isPlainObject(thing) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(arr) && !arr.some(isVisitable);
}

const predicates = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"], {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (_platform_node_classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"] || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSpecCompliantForm(formData);

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isBlob(value)) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Blob is not supported. Use a Buffer instead.');
    }

    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArrayBuffer(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value) && isFlatArray(value)) ||
        ((_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFileList(value) || _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].endsWith(key, '[]')) && (arr = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(value, function each(el, key) {
      const result = !(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isUndefined(el) || el === null) && visitor.call(
        formData, el, _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toFormData);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toURLEncodedForm.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toURLEncodedForm.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toURLEncodedForm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils.js */ "./node_modules/axios/lib/utils.js");
/* harmony import */ var _toFormData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toFormData.js */ "./node_modules/axios/lib/helpers/toFormData.js");
/* harmony import */ var _platform_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../platform/index.js */ "./node_modules/axios/lib/platform/index.js");






function toURLEncodedForm(data, options) {
  return (0,_toFormData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data, new _platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (_platform_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].isNode && _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/trackStream.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/trackStream.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readBytes: () => (/* binding */ readBytes),
/* harmony export */   streamChunk: () => (/* binding */ streamChunk),
/* harmony export */   trackStream: () => (/* binding */ trackStream)
/* harmony export */ });

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
}

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
}

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
}

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
}


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env/data.js */ "./node_modules/axios/lib/env/data.js");
/* harmony import */ var _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/AxiosError.js */ "./node_modules/axios/lib/core/AxiosError.js");





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + _env_data_js__WEBPACK_IMPORTED_MODULE_0__.VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('options must be an object', _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('option ' + opt + ' must be ' + result, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Unknown option ' + opt, _core_AxiosError_js__WEBPACK_IMPORTED_MODULE_1__["default"].ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  assertOptions,
  validators
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/Blob.js":
/*!*****************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/Blob.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof Blob !== 'undefined' ? Blob : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/FormData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/FormData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof FormData !== 'undefined' ? FormData : null);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/AxiosURLSearchParams.js */ "./node_modules/axios/lib/helpers/AxiosURLSearchParams.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : _helpers_AxiosURLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/axios/lib/platform/browser/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/axios/lib/platform/browser/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/URLSearchParams.js */ "./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js");
/* harmony import */ var _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/FormData.js */ "./node_modules/axios/lib/platform/browser/classes/FormData.js");
/* harmony import */ var _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Blob.js */ "./node_modules/axios/lib/platform/browser/classes/Blob.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isBrowser: true,
  classes: {
    URLSearchParams: _classes_URLSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    FormData: _classes_FormData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
    Blob: _classes_Blob_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});


/***/ }),

/***/ "./node_modules/axios/lib/platform/common/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/platform/common/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasBrowserEnv: () => (/* binding */ hasBrowserEnv),
/* harmony export */   hasStandardBrowserEnv: () => (/* binding */ hasStandardBrowserEnv),
/* harmony export */   hasStandardBrowserWebWorkerEnv: () => (/* binding */ hasStandardBrowserWebWorkerEnv),
/* harmony export */   navigator: () => (/* binding */ _navigator),
/* harmony export */   origin: () => (/* binding */ origin)
/* harmony export */ });
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';




/***/ }),

/***/ "./node_modules/axios/lib/platform/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/platform/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/index.js */ "./node_modules/axios/lib/platform/browser/index.js");
/* harmony import */ var _common_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils.js */ "./node_modules/axios/lib/platform/common/utils.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ..._common_utils_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._node_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/bind.js */ "./node_modules/axios/lib/helpers/bind.js");




// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = (0,_helpers_bind_js__WEBPACK_IMPORTED_MODULE_0__["default"])(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
}

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
}

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0]
  }

  return str;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
});


/***/ }),

/***/ "./node_modules/react-best-gradient-color-picker/dist/esm/hooks/useColorPicker.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-best-gradient-color-picker/dist/esm/hooks/useColorPicker.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useColorPicker: () => (/* binding */ useColorPicker)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_converters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/converters.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/converters.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/utils.js");
/* harmony import */ var _utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/formatters.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/formatters.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var useColorPicker = function (value, onChange, config) {
    var _a = config !== null && config !== void 0 ? config : {}, _b = _a.defaultColor, defaultColor = _b === void 0 ? 'rgba(175, 51, 242, 1)' : _b, _c = _a.defaultGradient, defaultGradient = _c === void 0 ? 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)' : _c;
    var colors = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.getColors)(value, defaultColor, defaultGradient);
    var _d = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.getDetails)(value), degrees = _d.degrees, degreeStr = _d.degreeStr, isGradient = _d.isGradient, gradientType = _d.gradientType;
    var _e = (0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.getColorObj)(colors, defaultGradient), currentColor = _e.currentColor, selectedColor = _e.selectedColor, currentLeft = _e.currentLeft;
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), previousColors = _f[0], setPreviousColors = _f[1];
    var getGradientObject = function (currentValue) {
        if (currentValue) {
            colors = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.getColors)(currentValue, defaultColor, defaultGradient);
        }
        if (value) {
            if (isGradient) {
                return {
                    isGradient: true,
                    gradientType: gradientType,
                    degrees: degreeStr,
                    colors: colors === null || colors === void 0 ? void 0 : colors.map(function (c) {
                        var _a;
                        return (__assign(__assign({}, c), { value: (_a = c.value) === null || _a === void 0 ? void 0 : _a.toLowerCase() }));
                    }),
                };
            }
            else {
                return {
                    isGradient: false,
                    gradientType: null,
                    degrees: null,
                    colors: colors === null || colors === void 0 ? void 0 : colors.map(function (c) {
                        var _a;
                        return (__assign(__assign({}, c), { value: (_a = c.value) === null || _a === void 0 ? void 0 : _a.toLowerCase() }));
                    }),
                };
            }
        }
        else {
            console.log('RBGCP ERROR - YOU MUST PASS A VALUE AND CALLBACK TO THE useColorPicker HOOK');
        }
    };
    var tiny = tinycolor2__WEBPACK_IMPORTED_MODULE_0__(currentColor);
    var _g = tiny.toRgb(), r = _g.r, g = _g.g, b = _g.b, a = _g.a;
    var _h = tiny.toHsl(), h = _h.h, s = _h.s, l = _h.l;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
        var _a;
        if (((_a = tinycolor2__WEBPACK_IMPORTED_MODULE_0__(currentColor)) === null || _a === void 0 ? void 0 : _a.isValid()) && previousColors[0] !== currentColor) {
            // @ts-expect-error - currentColor type issue
            setPreviousColors(__spreadArray([currentColor], previousColors.slice(0, 19), true));
        }
    }, [currentColor, previousColors]);
    var setLinear = function () {
        var remaining = value.split(/,(.+)/)[1];
        onChange("linear-gradient(90deg, ".concat(remaining));
    };
    var setRadial = function () {
        var remaining = value.split(/,(.+)/)[1];
        onChange("radial-gradient(circle, ".concat(remaining));
    };
    var setDegrees = function (newDegrees) {
        var remaining = value.split(/,(.+)/)[1];
        onChange("linear-gradient(".concat((0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newDegrees, 0, 360), "deg, ").concat(remaining));
        if (gradientType !== 'linear-gradient') {
            console.log('Warning: you are updating degrees when the gradient type is not linear. This will change the gradients type which may be undesired');
        }
    };
    var setSolid = function (startingColor) {
        var _a;
        var newValue = (_a = startingColor !== null && startingColor !== void 0 ? startingColor : defaultColor) !== null && _a !== void 0 ? _a : 'rgba(175, 51, 242, 1)';
        onChange(newValue);
    };
    var setGradient = function (startingGradiant) {
        var _a;
        var newValue = (_a = startingGradiant !== null && startingGradiant !== void 0 ? startingGradiant : defaultGradient) !== null && _a !== void 0 ? _a : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)';
        onChange(newValue);
    };
    var createGradientStr = function (newColors) {
        var sorted = newColors.sort(function (a, b) { return a.left - b.left; });
        var colorString = sorted === null || sorted === void 0 ? void 0 : sorted.map(function (cc) { return "".concat(cc === null || cc === void 0 ? void 0 : cc.value, " ").concat(cc.left, "%"); });
        onChange("".concat(gradientType, "(").concat(degreeStr, ", ").concat(colorString.join(', '), ")"));
    };
    var handleGradient = function (newColor, left) {
        var remaining = colors === null || colors === void 0 ? void 0 : colors.filter(function (c) { return !(0,_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.isUpperCase)(c.value); });
        var newColors = __spreadArray([
            { value: newColor.toUpperCase(), left: left !== null && left !== void 0 ? left : currentLeft }
        ], remaining, true);
        createGradientStr(newColors);
    };
    var handleChange = function (newColor) {
        newColor = newColor === null || newColor === void 0 ? void 0 : newColor.replace(/\s+/g, '');
        if (isGradient) {
            handleGradient(newColor);
        }
        else {
            onChange(newColor);
        }
    };
    var setR = function (newR) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newR, 0, 255);
        handleChange("rgba(".concat(newVal, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
    };
    var setG = function (newG) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newG, 0, 255);
        handleChange("rgba(".concat(r, ", ").concat(newVal, ", ").concat(b, ", ").concat(a, ")"));
    };
    var setB = function (newB) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newB, 0, 255);
        handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(newVal, ", ").concat(a, ")"));
    };
    var setA = function (newA) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newA, 0, 100);
        handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(newVal / 100, ")"));
    };
    var setHue = function (newHue) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newHue, 0, 360);
        var tinyNew = tinycolor2__WEBPACK_IMPORTED_MODULE_0__({ h: newVal, s: s, l: l });
        var _a = tinyNew.toRgb(), r = _a.r, g = _a.g, b = _a.b;
        handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
    };
    var setSaturation = function (newSat) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newSat, 0, 100);
        var tinyNew = tinycolor2__WEBPACK_IMPORTED_MODULE_0__({ h: h, s: newVal / 100, l: l });
        var _a = tinyNew.toRgb(), r = _a.r, g = _a.g, b = _a.b;
        handleChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
    };
    var setLightness = function (newLight) {
        var newVal = (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(newLight, 0, 100);
        var tinyNew = tinycolor2__WEBPACK_IMPORTED_MODULE_0__({ h: h, s: s, l: newVal / 100 });
        if (tinyNew === null || tinyNew === void 0 ? void 0 : tinyNew.isValid()) {
            var _a = tinyNew.toRgb(), r_1 = _a.r, g_1 = _a.g, b_1 = _a.b;
            handleChange("rgba(".concat(r_1, ", ").concat(g_1, ", ").concat(b_1, ", ").concat(a, ")"));
        }
        else {
            console.log('The new color was invalid, perhaps the lightness you passed in was a decimal? Please pass the new value between 0 - 100');
        }
    };
    var valueToHSL = function () {
        return tiny.toHslString();
    };
    var valueToHSV = function () {
        return tiny.toHsvString();
    };
    var valueToHex = function () {
        return tiny.toHexString();
    };
    var valueToCmyk = function () {
        var _a = (0,_utils_converters_js__WEBPACK_IMPORTED_MODULE_4__.rgb2cmyk)(r, g, b), c = _a.c, m = _a.m, y = _a.y, k = _a.k;
        return "cmyk(".concat(c, ", ").concat(m, ", ").concat(y, ", ").concat(k, ")");
    };
    var setSelectedPoint = function (index) {
        if (isGradient) {
            var newGradStr = colors === null || colors === void 0 ? void 0 : colors.map(function (cc, i) { return (__assign(__assign({}, cc), { value: i === index ? (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.high)(cc) : (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.low)(cc) })); });
            createGradientStr(newGradStr);
        }
        else {
            console.log('This function is only relevant when the picker is in gradient mode');
        }
    };
    var addPoint = function (left) {
        var newColors = __spreadArray(__spreadArray([], colors.map(function (c) { return (__assign(__assign({}, c), { value: (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.low)(c) })); }), true), [
            { value: currentColor, left: left },
        ], false);
        createGradientStr(newColors);
        if (!left) {
            console.log('You did not pass a stop value (left amount) for the new color point so it defaulted to 50');
        }
    };
    var deletePoint = function (index) {
        if ((colors === null || colors === void 0 ? void 0 : colors.length) > 2) {
            var pointToDelete_1 = index !== null && index !== void 0 ? index : selectedColor;
            var remaining = colors === null || colors === void 0 ? void 0 : colors.filter(function (rc, i) { return i !== pointToDelete_1; });
            createGradientStr(remaining);
            if (!index) {
                console.log('You did not pass in the index of the point you wanted to delete so the function default to the currently selected point');
            }
        }
        else {
            console.log('A gradient must have atleast two colors, disable your delete button when necessary');
        }
    };
    var setPointLeft = function (left) {
        handleGradient(currentColor, (0,_utils_formatters_js__WEBPACK_IMPORTED_MODULE_2__.formatInputValues)(left, 0, 100));
    };
    var rgbaArr = [r, g, b, a];
    var hslArr = [h, s, l];
    return {
        setR: setR,
        setG: setG,
        setB: setB,
        setA: setA,
        setHue: setHue,
        addPoint: addPoint,
        setSolid: setSolid,
        setLinear: setLinear,
        setRadial: setRadial,
        valueToHSL: valueToHSL,
        valueToHSV: valueToHSV,
        valueToHex: valueToHex,
        valueToCmyk: valueToCmyk,
        setDegrees: setDegrees,
        setGradient: setGradient,
        setLightness: setLightness,
        setSaturation: setSaturation,
        setSelectedPoint: setSelectedPoint,
        deletePoint: deletePoint,
        isGradient: isGradient,
        gradientType: gradientType,
        degrees: degrees,
        setPointLeft: setPointLeft,
        currentLeft: currentLeft,
        rgbaArr: rgbaArr,
        hslArr: hslArr,
        handleChange: handleChange,
        previousColors: previousColors,
        getGradientObject: getGradientObject,
        selectedPoint: selectedColor,
    };
};


/***/ }),

/***/ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/converters.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-best-gradient-color-picker/dist/esm/utils/converters.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cmykToRgb: () => (/* binding */ cmykToRgb),
/* harmony export */   getHexAlpha: () => (/* binding */ getHexAlpha),
/* harmony export */   rgb2cmyk: () => (/* binding */ rgb2cmyk)
/* harmony export */ });
function rgb2cmyk(r, g, b) {
    var computedC = 0;
    var computedM = 0;
    var computedY = 0;
    var computedK = 0;
    if (r === null ||
        g === null ||
        b === null ||
        isNaN(r) ||
        isNaN(g) ||
        isNaN(b)) {
        console.log('Please enter numeric RGB values!');
        return { c: 0, m: 0, k: 0, y: 1 };
    }
    if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
        console.log('RGB values must be in the range 0 to 255.');
        return { c: 0, m: 0, k: 0, y: 1 };
    }
    if (r === 0 && g === 0 && b === 0) {
        computedK = 1;
        return { c: 0, m: 0, k: 0, y: 1 };
    }
    computedC = 1 - r / 255;
    computedM = 1 - g / 255;
    computedY = 1 - b / 255;
    var minCMY = Math.min(computedC, Math.min(computedM, computedY));
    computedC = (computedC - minCMY) / (1 - minCMY);
    computedM = (computedM - minCMY) / (1 - minCMY);
    computedY = (computedY - minCMY) / (1 - minCMY);
    computedK = minCMY;
    return { c: computedC, m: computedM, y: computedY, k: computedK };
}
var cmykToRgb = function (_a) {
    var c = _a.c, m = _a.m, y = _a.y, k = _a.k;
    var r = 255 * (1 - c) * (1 - k);
    var g = 255 * (1 - m) * (1 - k);
    var b = 255 * (1 - y) * (1 - k);
    return { r: r, g: g, b: b };
};
var getHexAlpha = function (opacityPercent) {
    if (typeof opacityPercent !== 'number') {
        return 'FF';
    }
    if (opacityPercent < 0) {
        return '00';
    }
    if (opacityPercent > 1) {
        return 'FF';
    }
    return Math.round(opacityPercent * 255)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase();
};


/***/ }),

/***/ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/formatters.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-best-gradient-color-picker/dist/esm/utils/formatters.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatInputValues: () => (/* binding */ formatInputValues),
/* harmony export */   getColors: () => (/* binding */ getColors),
/* harmony export */   high: () => (/* binding */ high),
/* harmony export */   low: () => (/* binding */ low),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
/* harmony import */ var _gradientParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gradientParser.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/gradientParser.js");

var low = function (color) {
    return color.value.toLowerCase();
};
var high = function (color) {
    return color.value.toUpperCase();
};
var getColors = function (value, defaultColor, defaultGradient) {
    var isGradient = value === null || value === void 0 ? void 0 : value.includes('gradient');
    if (isGradient) {
        var isConic = value === null || value === void 0 ? void 0 : value.includes('conic');
        var safeValue = !isConic ? value : defaultGradient;
        if (isConic) {
            console.log('Sorry we cant handle conic gradients yet');
        }
        var obj = (0,_gradientParser_js__WEBPACK_IMPORTED_MODULE_0__.gradientParser)(safeValue);
        return obj === null || obj === void 0 ? void 0 : obj.colorStops;
    }
    else {
        var safeValue = value || defaultColor;
        return [{ value: safeValue }];
    }
};
var formatInputValues = function (value, min, max) {
    return isNaN(value) ? min : value < min ? min : value > max ? max : value;
};
var round = function (val) {
    return Math.round(val);
};


/***/ }),

/***/ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/gradientParser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/react-best-gradient-color-picker/dist/esm/utils/gradientParser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gradientParser: () => (/* binding */ gradientParser)
/* harmony export */ });
/* harmony import */ var _formatters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatters.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/formatters.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/utils.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tinycolor2 */ "./node_modules/tinycolor2/tinycolor.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var gradientParser = function (input) {
    if (input === void 0) { input = ''; }
    var tokens = {
        linearGradient: /^(-(webkit|o|ms|moz)-)?(linear-gradient)/i,
        repeatingLinearGradient: /^(-(webkit|o|ms|moz)-)?(repeating-linear-gradient)/i,
        radialGradient: /^(-(webkit|o|ms|moz)-)?(radial-gradient)/i,
        repeatingRadialGradient: /^(-(webkit|o|ms|moz)-)?(repeating-radial-gradient)/i,
        sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
        extentKeywords: /^(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)/,
        positionKeywords: /^(left|center|right|top|bottom)/i,
        pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
        percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))%/,
        emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
        angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
        startCall: /^\(/,
        endCall: /^\)/,
        comma: /^,/,
        hexColor: /^#([0-9a-fA-F]+)/,
        literalColor: /^([a-zA-Z]+)/,
        rgbColor: /^rgb/i,
        spacedRgbColor: /^(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+([0-1](\.\d+)?)/,
        rgbaColor: /^rgba/i,
        hslColor: /^hsl/i,
        hsvColor: /^hsv/i,
        number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,
    };
    function error(msg) {
        var err = new Error(input + ': ' + msg);
        // err.source = input
        throw err;
    }
    function consume(size) {
        input = input.substr(size);
    }
    function scan(regexp) {
        var blankCaptures = /^[\n\r\t\s]+/.exec(input);
        if (blankCaptures) {
            consume(blankCaptures[0].length);
        }
        var captures = regexp.exec(input);
        if (captures) {
            consume(captures[0].length);
        }
        return captures;
    }
    function matchListing(matcher) {
        var captures = matcher();
        var result = [];
        if (captures) {
            result.push(captures);
            while (scan(tokens.comma)) {
                captures = matcher();
                if (captures) {
                    result.push(captures);
                }
                else {
                    error('One extra comma');
                }
            }
        }
        return result;
    }
    function match(type, pattern, captureIndex) {
        var captures = scan(pattern);
        if (captures) {
            return {
                type: type,
                value: captures[captureIndex],
            };
        }
    }
    function matchHexColor() {
        var hexObj = match('hex', tokens.hexColor, 1);
        if (hexObj === null || hexObj === void 0 ? void 0 : hexObj.value) {
            var _a = tinycolor2__WEBPACK_IMPORTED_MODULE_0__(hexObj === null || hexObj === void 0 ? void 0 : hexObj.value).toRgb(), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
            return {
                value: "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"),
            };
        }
    }
    var checkCaps = function (val) {
        var capIt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
        return {
            value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(matchListing(matchNumber), ")"),
        };
    };
    function matchCall(pattern, callback) {
        var captures = scan(pattern);
        if (captures) {
            if (!scan(tokens.startCall)) {
                error('Missing (');
            }
            var result = callback(captures);
            if (!scan(tokens.endCall)) {
                error('Missing )');
            }
            return result;
        }
    }
    function matchHSLColor() {
        return matchCall(tokens.hslColor, convertHsl);
    }
    function matchRGBAColor() {
        return matchCall(tokens.rgbaColor, checkCaps);
    }
    function matchRGBColor() {
        return matchCall(tokens.rgbColor, convertRgb);
    }
    function matchLiteralColor() {
        var litObj = match('literal', tokens.literalColor, 0);
        if (litObj === null || litObj === void 0 ? void 0 : litObj.value) {
            var _a = tinycolor2__WEBPACK_IMPORTED_MODULE_0__(litObj === null || litObj === void 0 ? void 0 : litObj.value).toRgb(), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
            return {
                value: "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"),
            };
        }
    }
    function matchHSVColor() {
        return matchCall(tokens.hsvColor, convertHsv);
    }
    function matchColor() {
        return (matchHexColor() ||
            matchHSLColor() ||
            matchRGBAColor() ||
            matchRGBColor() ||
            matchLiteralColor() ||
            matchHSVColor());
    }
    function matchColorStop() {
        var _a;
        var color = matchColor();
        if (!color) {
            error('Expected color definition');
        }
        color.left = parseInt((_a = matchDistance()) === null || _a === void 0 ? void 0 : _a.value);
        return color;
    }
    function matchGradient(gradientType, pattern, orientationMatcher) {
        return matchCall(pattern, function () {
            var orientation = orientationMatcher();
            if (orientation) {
                if (!scan(tokens.comma)) {
                    error('Missing comma before color stops');
                }
            }
            return {
                type: gradientType,
                orientation: orientation,
                colorStops: matchListing(matchColorStop),
            };
        });
    }
    function matchLinearOrientation() {
        return matchSideOrCorner() || matchAngle();
    }
    function matchDefinition() {
        return (matchGradient('linear-gradient', tokens.linearGradient, matchLinearOrientation) ||
            matchGradient('repeating-linear-gradient', tokens.repeatingLinearGradient, matchLinearOrientation) ||
            matchGradient('radial-gradient', tokens.radialGradient, matchListRadialOrientations) ||
            matchGradient('repeating-radial-gradient', tokens.repeatingRadialGradient, matchListRadialOrientations));
    }
    function matchListDefinitions() {
        return matchListing(matchDefinition);
    }
    function getAST() {
        var _a;
        var ast = matchListDefinitions();
        if (input.length > 0) {
            error('Invalid input not EOF');
        }
        var ast0 = ast[0];
        var checkSelected = (_a = ast0 === null || ast0 === void 0 ? void 0 : ast0.colorStops) === null || _a === void 0 ? void 0 : _a.filter(function (c) {
            return (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isUpperCase)(c.value);
        }).length;
        var getGradientObj = function () {
            if (checkSelected > 0) {
                return ast0;
            }
            else {
                var val_1 = function (c, i) { return (i === 0 ? (0,_formatters_js__WEBPACK_IMPORTED_MODULE_2__.high)(c) : (0,_formatters_js__WEBPACK_IMPORTED_MODULE_2__.low)(c)); };
                return __assign(__assign({}, ast0), { colorStops: ast0.colorStops.map(function (c, i) { return (__assign(__assign({}, c), { value: val_1(c, i) })); }) });
            }
        };
        return getGradientObj();
    }
    function matchSideOrCorner() {
        return match('directional', tokens.sideOrCorner, 1);
    }
    function matchAngle() {
        return match('angular', tokens.angleValue, 1);
    }
    function matchListRadialOrientations() {
        var radialOrientations, radialOrientation = matchRadialOrientation(), lookaheadCache;
        if (radialOrientation) {
            radialOrientations = [];
            radialOrientations.push(radialOrientation);
            lookaheadCache = input;
            if (scan(tokens.comma)) {
                radialOrientation = matchRadialOrientation();
                if (radialOrientation) {
                    radialOrientations.push(radialOrientation);
                }
                else {
                    input = lookaheadCache;
                }
            }
        }
        return radialOrientations;
    }
    function matchRadialOrientation() {
        var radialType = matchCircle() || matchEllipse();
        if (radialType) {
            // @ts-expect-error - need to circle back for these types
            radialType.at = matchAtPosition();
        }
        else {
            var extent = matchExtentKeyword();
            if (extent) {
                radialType = extent;
                var positionAt = matchAtPosition();
                if (positionAt) {
                    // @ts-expect-error - need to circle back for these types
                    radialType.at = positionAt;
                }
            }
            else {
                var defaultPosition = matchPositioning();
                if (defaultPosition) {
                    radialType = {
                        type: 'default-radial',
                        // @ts-expect-error - need to circle back for these types
                        at: defaultPosition,
                    };
                }
            }
        }
        return radialType;
    }
    function matchLength() {
        return match('px', tokens.pixelValue, 1) || match('em', tokens.emValue, 1);
    }
    function matchCircle() {
        var circle = match('shape', /^(circle)/i, 0);
        if (circle) {
            // @ts-expect-error - need to circle back for these types
            circle.style = matchLength() || matchExtentKeyword();
        }
        return circle;
    }
    function matchEllipse() {
        var ellipse = match('shape', /^(ellipse)/i, 0);
        if (ellipse) {
            // @ts-expect-error - need to circle back for these types
            ellipse.style = matchDistance() || matchExtentKeyword();
        }
        return ellipse;
    }
    function matchExtentKeyword() {
        return match('extent-keyword', tokens.extentKeywords, 1);
    }
    function matchAtPosition() {
        if (match('position', /^at/, 0)) {
            var positioning = matchPositioning();
            if (!positioning) {
                error('Missing positioning value');
            }
            return positioning;
        }
    }
    function matchPositioning() {
        var location = matchCoordinates();
        if (location.x || location.y) {
            return {
                type: 'position',
                value: location,
            };
        }
    }
    function matchCoordinates() {
        return {
            x: matchDistance(),
            y: matchDistance(),
        };
    }
    function matchNumber() {
        return scan(tokens.number)[1];
    }
    var convertHsl = function (val) {
        var capIt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
        var hsl = matchListing(matchNumber);
        var _a = tinycolor2__WEBPACK_IMPORTED_MODULE_0__({
            h: hsl[0],
            s: hsl[1],
            l: hsl[2],
            a: hsl[3] || 1,
        }).toRgb(), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        return {
            value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"),
        };
    };
    var convertHsv = function (val) {
        var capIt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
        var hsv = matchListing(matchNumber);
        var _a = tinycolor2__WEBPACK_IMPORTED_MODULE_0__({
            h: hsv[0],
            s: hsv[1],
            v: hsv[2],
            a: hsv[3] || 1,
        }).toRgb(), r = _a.r, g = _a.g, b = _a.b, a = _a.a;
        return {
            value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"),
        };
    };
    var convertRgb = function (val) {
        var capIt = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isUpperCase)(val === null || val === void 0 ? void 0 : val[0]);
        var captures = scan(tokens.spacedRgbColor);
        var _a = captures || __spreadArray([null], matchListing(matchNumber), true), r = _a[1], g = _a[2], b = _a[3], _b = _a[4], a = _b === void 0 ? 1 : _b;
        return {
            value: "".concat(capIt ? 'RGBA' : 'rgba', "(").concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"),
        };
    };
    function matchDistance() {
        return (match('%', tokens.percentageValue, 1) ||
            matchPositionKeyword() ||
            matchLength());
    }
    function matchPositionKeyword() {
        return match('position-keyword', tokens.positionKeywords, 1);
    }
    return getAST();
};


/***/ }),

/***/ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/utils.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-best-gradient-color-picker/dist/esm/utils/utils.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computePickerPosition: () => (/* binding */ computePickerPosition),
/* harmony export */   computeSquareXY: () => (/* binding */ computeSquareXY),
/* harmony export */   getColorObj: () => (/* binding */ getColorObj),
/* harmony export */   getDetails: () => (/* binding */ getDetails),
/* harmony export */   getHandleValue: () => (/* binding */ getHandleValue),
/* harmony export */   isUpperCase: () => (/* binding */ isUpperCase),
/* harmony export */   objectToString: () => (/* binding */ objectToString),
/* harmony export */   safeBounds: () => (/* binding */ safeBounds)
/* harmony export */ });
/* harmony import */ var _formatters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatters.js */ "./node_modules/react-best-gradient-color-picker/dist/esm/utils/formatters.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var safeBounds = function (e) {
    var client = e.target.parentNode.getBoundingClientRect();
    var className = e.target.className;
    var adjuster = className === 'c-resize ps-rl' ? 15 : 0;
    return {
        offsetLeft: (client === null || client === void 0 ? void 0 : client.x) + adjuster,
        offsetTop: client === null || client === void 0 ? void 0 : client.y,
        clientWidth: client === null || client === void 0 ? void 0 : client.width,
        clientHeight: client === null || client === void 0 ? void 0 : client.height,
    };
};
function getHandleValue(e, barSize) {
    var _a = safeBounds(e), offsetLeft = _a.offsetLeft, clientWidth = _a.clientWidth;
    var pos = e.clientX - offsetLeft - barSize / 2;
    var adjuster = clientWidth - 18;
    var bounded = (0,_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatInputValues)(pos, 0, adjuster);
    return Math.round(bounded / (adjuster / 100));
}
function computeSquareXY(s, v, squareWidth, squareHeight, crossSize) {
    var x = s * squareWidth - crossSize / 2;
    var y = ((100 - v) / 100) * squareHeight - crossSize / 2;
    return [x, y];
}
var getClientXY = function (e) {
    if (e.clientX) {
        return { clientX: e.clientX, clientY: e.clientY };
    }
    else {
        var touch = e.touches[0] || {};
        return { clientX: touch.clientX, clientY: touch.clientY };
    }
};
function computePickerPosition(e, crossSize) {
    var _a = safeBounds(e), offsetLeft = _a.offsetLeft, offsetTop = _a.offsetTop, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
    var _b = getClientXY(e), clientX = _b.clientX, clientY = _b.clientY;
    var getX = function () {
        var xPos = clientX - offsetLeft - crossSize / 2;
        return (0,_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatInputValues)(xPos, -9, clientWidth - 10);
    };
    var getY = function () {
        var yPos = clientY - offsetTop - crossSize / 2;
        return (0,_formatters_js__WEBPACK_IMPORTED_MODULE_0__.formatInputValues)(yPos, -9, clientHeight - 10);
    };
    return [getX(), getY()];
}
// export const getGradientType = (value: string) => {
//   return value?.split('(')[0]
// }
var isUpperCase = function (str) {
    var _a;
    return (str === null || str === void 0 ? void 0 : str[0]) === ((_a = str === null || str === void 0 ? void 0 : str[0]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
};
// export const compareGradients = (g1: string, g2: string) => {
//   const ng1 = g1?.toLowerCase()?.replaceAll(' ', '')
//   const ng2 = g2?.toLowerCase()?.replaceAll(' ', '')
//   if (ng1 === ng2) {
//     return true
//   } else {
//     return false
//   }
// }
var convertShortHandDeg = function (dir) {
    if (dir === 'to top') {
        return 0;
    }
    else if (dir === 'to bottom') {
        return 180;
    }
    else if (dir === 'to left') {
        return 270;
    }
    else if (dir === 'to right') {
        return 90;
    }
    else if (dir === 'to top right') {
        return 45;
    }
    else if (dir === 'to bottom right') {
        return 135;
    }
    else if (dir === 'to bottom left') {
        return 225;
    }
    else if (dir === 'to top left') {
        return 315;
    }
    else {
        var safeDir = dir || 0;
        return parseInt(safeDir);
    }
};
var objectToString = function (value) {
    var _a, _b, _c, _d, _e;
    if (typeof value === 'string') {
        return value;
    }
    else {
        if ((_a = value === null || value === void 0 ? void 0 : value.type) === null || _a === void 0 ? void 0 : _a.includes('gradient')) {
            var sorted = (_b = value === null || value === void 0 ? void 0 : value.colorStops) === null || _b === void 0 ? void 0 : _b.sort(function (a, b) { return (a === null || a === void 0 ? void 0 : a.left) - (b === null || b === void 0 ? void 0 : b.left); });
            var string = (_c = sorted === null || sorted === void 0 ? void 0 : sorted.map(function (c) { return "".concat(c === null || c === void 0 ? void 0 : c.value, " ").concat(c === null || c === void 0 ? void 0 : c.left, "%"); })) === null || _c === void 0 ? void 0 : _c.join(', ');
            var type = value === null || value === void 0 ? void 0 : value.type;
            var degs = convertShortHandDeg((_d = value === null || value === void 0 ? void 0 : value.orientation) === null || _d === void 0 ? void 0 : _d.value);
            var gradientStr = type === 'linear-gradient' ? "".concat(degs, "deg") : 'circle';
            return "".concat(type, "(").concat(gradientStr, ", ").concat(string, ")");
        }
        else {
            var color = ((_e = value === null || value === void 0 ? void 0 : value.colorStops[0]) === null || _e === void 0 ? void 0 : _e.value) || 'rgba(175, 51, 242, 1)';
            return color;
        }
    }
};
var getColorObj = function (colors, defaultGradient) {
    var idxCols = colors === null || colors === void 0 ? void 0 : colors.map(function (c, i) { return (__assign(__assign({}, c), { index: i })); });
    var upperObj = idxCols === null || idxCols === void 0 ? void 0 : idxCols.find(function (c) { return isUpperCase(c.value); });
    var ccObj = upperObj || idxCols[0];
    return {
        currentColor: (ccObj === null || ccObj === void 0 ? void 0 : ccObj.value) || defaultGradient,
        selectedColor: (ccObj === null || ccObj === void 0 ? void 0 : ccObj.index) || 0,
        currentLeft: (ccObj === null || ccObj === void 0 ? void 0 : ccObj.left) || 0,
    };
};
var getDegrees = function (value) {
    var _a;
    var s1 = value === null || value === void 0 ? void 0 : value.split(',')[0];
    var s2 = (_a = s1 === null || s1 === void 0 ? void 0 : s1.split('(')[1]) === null || _a === void 0 ? void 0 : _a.replace('deg', '');
    return convertShortHandDeg(s2);
};
var getDetails = function (value) {
    var isGradient = value === null || value === void 0 ? void 0 : value.includes('gradient');
    var gradientType = value === null || value === void 0 ? void 0 : value.split('(')[0];
    var degrees = getDegrees(value);
    var degreeStr = gradientType === 'linear-gradient' ? "".concat(degrees, "deg") : 'circle';
    return {
        degrees: degrees,
        degreeStr: degreeStr,
        isGradient: isGradient,
        gradientType: gradientType,
    };
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/app */ "./src/scripts/app.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");




if (document.querySelector("#react-app")) {
  const root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.querySelector("#react-app"));
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_scripts_app__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map