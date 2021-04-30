import { c as createCommonjsModule, a as commonjsGlobal } from './common/_commonjsHelpers-8c19dec8.js';
import { r as react } from './common/index-fc424163.js';

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode:  'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});
});

var _functionToString = _shared('native-function-to-string', Function.toString);

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');

var TO_STRING = 'toString';
var TPL = ('' + _functionToString).split(TO_STRING);

_core.inspectSource = function (it) {
  return _functionToString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || _functionToString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

// 20.2.2.3 Math.acosh(x)


var sqrt = Math.sqrt;
var $acosh = Math.acosh;

_export(_export.S + _export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

// 20.2.2.5 Math.asinh(x)

var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
_export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

// 20.2.2.7 Math.atanh(x)

var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
_export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

// 20.2.2.9 Math.cbrt(x)



_export(_export.S, 'Math', {
  cbrt: function cbrt(x) {
    return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

// 20.2.2.11 Math.clz32(x)


_export(_export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

// 20.2.2.12 Math.cosh(x)

var exp = Math.exp;

_export(_export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
var _mathExpm1 = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

// 20.2.2.14 Math.expm1(x)



_export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', { expm1: _mathExpm1 });

// 20.2.2.16 Math.fround(x)

var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

var _mathFround = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = _mathSign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

// 20.2.2.16 Math.fround(x)


_export(_export.S, 'Math', { fround: _mathFround });

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

var abs = Math.abs;

_export(_export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

// 20.2.2.18 Math.imul(x, y)

var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
_export(_export.S + _export.F * _fails(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

// 20.2.2.21 Math.log10(x)


_export(_export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

// 20.2.2.20 Math.log1p(x)


_export(_export.S, 'Math', { log1p: _mathLog1p });

// 20.2.2.22 Math.log2(x)


_export(_export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

// 20.2.2.28 Math.sign(x)


_export(_export.S, 'Math', { sign: _mathSign });

// 20.2.2.30 Math.sinh(x)


var exp$1 = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
_export(_export.S + _export.F * _fails(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (_mathExpm1(x) - _mathExpm1(-x)) / 2
      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

// 20.2.2.33 Math.tanh(x)


var exp$2 = Math.exp;

_export(_export.S, 'Math', {
  tanh: function tanh(x) {
    var a = _mathExpm1(x = +x);
    var b = _mathExpm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

// 20.2.2.34 Math.trunc(x)


_export(_export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var math = _core.Math;

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

var f$1 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$1
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$2 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$2
};

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$3
};

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var gOPN = _objectGopn.f;
var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var $trim = _stringTrim.trim;
var NUMBER = 'Number';
var $Number = _global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = _toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? _fails(function () { proto.valueOf.call(that); }) : _cof(that) != NUMBER)
        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = _descriptors ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (_has(Base, key = keys[j]) && !_has($Number, key)) {
      dP$1($Number, key, gOPD$1(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  _redefine(_global, NUMBER, $Number);
}

var _aNumberValue = function (it, msg) {
  if (typeof it != 'number' && _cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

var _stringRepeat = function repeat(count) {
  var str = String(_defined(this));
  var res = '';
  var n = _toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

var $toFixed = 1.0.toFixed;
var floor$1 = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor$1(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow$1 = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow$1(x, n - 1, acc * x) : pow$1(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

_export(_export.P + _export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !_fails(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = _aNumberValue(this, ERROR);
    var f = _toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow$1(2, 69, 1)) - 69;
      z = e < 0 ? x * pow$1(2, -e, 1) : x / pow$1(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow$1(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + _stringRepeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

var $toPrecision = 1.0.toPrecision;

_export(_export.P + _export.F * (_fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !_fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

// 20.1.2.1 Number.EPSILON


_export(_export.S, 'Number', { EPSILON: Math.pow(2, -52) });

// 20.1.2.2 Number.isFinite(number)

var _isFinite = _global.isFinite;

_export(_export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

// 20.1.2.3 Number.isInteger(number)

var floor$2 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$2(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

// 20.1.2.4 Number.isNaN(number)


_export(_export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

// 20.1.2.5 Number.isSafeInteger(number)


var abs$1 = Math.abs;

_export(_export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return _isInteger(number) && abs$1(number) <= 0x1fffffffffffff;
  }
});

// 20.1.2.6 Number.MAX_SAFE_INTEGER


_export(_export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

// 20.1.2.10 Number.MIN_SAFE_INTEGER


_export(_export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

var $parseFloat = _global.parseFloat;
var $trim$1 = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim$1(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

var $parseInt = _global.parseInt;
var $trim$2 = _stringTrim.trim;

var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim$2(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

// 20.1.2.13 Number.parseInt(string, radix)
_export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', { parseInt: _parseInt });

var number = _core.Number;

/* eslint no-proto: 0 */

var testObject = {};

if (!(Object.setPrototypeOf || testObject.__proto__)) {
  var nativeGetPrototypeOf = Object.getPrototypeOf;

  Object.getPrototypeOf = function (object) {
    if (object.__proto__) {
      return object.__proto__;
    }

    return nativeGetPrototypeOf.call(Object, object);
  };
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

var isNil_1 = isNil;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag);
}

var isString_1 = isString;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString$1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike_1(value) && _baseGetTag(value) == numberTag);
}

var isNumber_1 = isNumber;

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN$1(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber_1(value) && value != +value;
}

var _isNaN = isNaN$1;

var mathSign = function mathSign(value) {
  if (value === 0) {
    return 0;
  }

  if (value > 0) {
    return 1;
  }

  return -1;
};
var isPercent = function isPercent(value) {
  return isString_1(value) && value.indexOf('%') === value.length - 1;
};
var isNumber$1 = function isNumber(value) {
  return isNumber_1(value) && !_isNaN(value);
};
var isNumOrStr = function isNumOrStr(value) {
  return isNumber$1(value) || isString_1(value);
};
var idCounter = 0;
var uniqueId = function uniqueId(prefix) {
  var id = ++idCounter;
  return "".concat(prefix || '').concat(id);
};
/**
 * Get percent value of a total value
 * @param {Number|String} percent A percent
 * @param {Number} totalValue     Total value
 * @param {NUmber} defaultValue   The value returned when percent is undefined or invalid
 * @param {Boolean} validate      If set to be true, the result will be validated
 * @return {Number} value
 */

var getPercentValue = function getPercentValue(percent, totalValue) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var validate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!isNumber$1(percent) && !isString_1(percent)) {
    return defaultValue;
  }

  var value;

  if (isPercent(percent)) {
    var index = percent.indexOf('%');
    value = totalValue * parseFloat(percent.slice(0, index)) / 100;
  } else {
    value = +percent;
  }

  if (_isNaN(value)) {
    value = defaultValue;
  }

  if (validate && value > totalValue) {
    value = totalValue;
  }

  return value;
};
var getAnyElementOfObject = function getAnyElementOfObject(obj) {
  if (!obj) {
    return null;
  }

  var keys = Object.keys(obj);

  if (keys && keys.length) {
    return obj[keys[0]];
  }

  return null;
};
var hasDuplicate = function hasDuplicate(ary) {
  if (!isArray_1(ary)) {
    return false;
  }

  var len = ary.length;
  var cache = {};

  for (var i = 0; i < len; i++) {
    if (!cache[ary[i]]) {
      cache[ary[i]] = true;
    } else {
      return true;
    }
  }

  return false;
};
var interpolateNumber = function interpolateNumber(numberA, numberB) {
  if (isNumber$1(numberA) && isNumber$1(numberB)) {
    return function (t) {
      return numberA + t * (numberB - numberA);
    };
  }

  return function () {
    return numberB;
  };
};
var findEntryInArray = function findEntryInArray(ary, specifiedKey, specifiedValue) {
  if (!ary || !ary.length) {
    return null;
  }

  return ary.find(function (entry) {
    return entry && (typeof specifiedKey === 'function' ? specifiedKey(entry) : get_1(entry, specifiedKey)) === specifiedValue;
  });
};

function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (var key in a) {
    if ({}.hasOwnProperty.call(a, key) && (!{}.hasOwnProperty.call(b, key) || a[key] !== b[key])) {
      return false;
    }
  }

  for (var _key in b) {
    if ({}.hasOwnProperty.call(b, _key) && !{}.hasOwnProperty.call(a, _key)) {
      return false;
    }
  }

  return true;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var PRESENTATION_ATTRIBUTES = {
  'aria-current': propTypes.string,
  // state
  'aria-details': propTypes.any,
  'aria-disabled': propTypes.any,
  // state
  'aria-hidden': propTypes.any,
  // state
  'aria-invalid': propTypes.any,
  // state
  'aria-keyshortcuts': propTypes.any,
  'aria-label': propTypes.any,
  'aria-roledescription': propTypes.any,
  // Widget Attributes
  'aria-autocomplete': propTypes.any,
  'aria-checked': propTypes.any,
  'aria-expanded': propTypes.any,
  'aria-haspopup': propTypes.any,
  'aria-level': propTypes.any,
  'aria-modal': propTypes.any,
  'aria-multiline': propTypes.any,
  'aria-multiselectable': propTypes.any,
  'aria-orientation': propTypes.any,
  'aria-placeholder': propTypes.any,
  'aria-pressed': propTypes.any,
  'aria-readonly': propTypes.any,
  'aria-required': propTypes.any,
  'aria-selected': propTypes.any,
  'aria-sort': propTypes.any,
  'aria-valuemax': propTypes.any,
  'aria-valuemin': propTypes.any,
  'aria-valuenow': propTypes.any,
  'aria-valuetext': propTypes.any,
  // Live Region Attributes
  'aria-atomic': propTypes.any,
  'aria-busy': propTypes.any,
  'aria-live': propTypes.any,
  'aria-relevant': propTypes.any,
  // Drag-and-Drop Attributes
  'aria-dropeffect': propTypes.any,
  'aria-grabbed': propTypes.any,
  // Relationship Attributes
  'aria-activedescendant': propTypes.any,
  'aria-colcount': propTypes.any,
  'aria-colindex': propTypes.any,
  'aria-colspan': propTypes.any,
  'aria-controls': propTypes.any,
  'aria-describedby': propTypes.any,
  'aria-errormessage': propTypes.any,
  'aria-flowto': propTypes.any,
  'aria-labelledby': propTypes.any,
  'aria-owns': propTypes.any,
  'aria-posinset': propTypes.any,
  'aria-rowcount': propTypes.any,
  'aria-rowindex': propTypes.any,
  'aria-rowspan': propTypes.any,
  'aria-setsize': propTypes.any,
  alignmentBaseline: propTypes.string,
  angle: propTypes.number,
  baselineShift: propTypes.string,
  clip: propTypes.string,
  clipPath: propTypes.string,
  clipRule: propTypes.string,
  color: propTypes.string,
  colorInterpolation: propTypes.string,
  colorInterpolationFilters: propTypes.string,
  colorProfile: propTypes.string,
  colorRendering: propTypes.string,
  cursor: propTypes.string,
  direction: propTypes.oneOf(['ltr', 'rtl', 'inherit']),
  display: propTypes.string,
  dominantBaseline: propTypes.string,
  enableBackground: propTypes.string,
  fill: propTypes.string,
  fillOpacity: propTypes.oneOfType([propTypes.string, propTypes.number]),
  fillRule: propTypes.oneOf(['nonzero', 'evenodd', 'inherit']),
  filter: propTypes.string,
  floodColor: propTypes.string,
  floodOpacity: propTypes.oneOfType([propTypes.string, propTypes.number]),
  font: propTypes.string,
  fontFamily: propTypes.string,
  fontSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fontSizeAdjust: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fontStretch: propTypes.oneOf(['normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'inherit']),
  fontStyle: propTypes.oneOf(['normal', 'italic', 'oblique', 'inherit']),
  fontVariant: propTypes.oneOf(['normal', 'small-caps', 'inherit']),
  fontWeight: propTypes.oneOf(['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']),
  glyphOrientationHorizontal: propTypes.string,
  glyphOrientationVertical: propTypes.string,
  imageRendering: propTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeQuality', 'inherit']),
  kerning: propTypes.oneOfType([propTypes.number, propTypes.string]),
  letterSpacing: propTypes.oneOfType([propTypes.number, propTypes.string]),
  lightingColor: propTypes.string,
  lineHeight: propTypes.oneOfType([propTypes.number, propTypes.string]),
  markerEnd: propTypes.string,
  markerMid: propTypes.string,
  markerStart: propTypes.string,
  mask: propTypes.string,
  opacity: propTypes.oneOfType([propTypes.number, propTypes.string]),
  overflow: propTypes.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
  pointerEvents: propTypes.oneOf(['visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none', 'inherit']),
  shapeRendering: propTypes.oneOf(['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit']),
  stopColor: propTypes.string,
  stopOpacity: propTypes.oneOfType([propTypes.number, propTypes.string]),
  stroke: propTypes.oneOfType([propTypes.number, propTypes.string]),
  strokeDasharray: propTypes.string,
  strokeDashoffset: propTypes.oneOfType([propTypes.number, propTypes.string]),
  strokeLinecap: propTypes.oneOf(['butt', 'round', 'square', 'inherit']),
  strokeLinejoin: propTypes.oneOf(['miter', 'round', 'bevel', 'inherit']),
  strokeMiterlimit: propTypes.oneOfType([propTypes.number, propTypes.string]),
  strokeOpacity: propTypes.oneOfType([propTypes.number, propTypes.string]),
  strokeWidth: propTypes.oneOfType([propTypes.number, propTypes.string]),
  textAnchor: propTypes.oneOf(['start', 'middle', 'end', 'inherit']),
  textDecoration: propTypes.oneOf(['none', 'underline', 'overline', 'line-through', 'blink', 'inherit']),
  textRendering: propTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit']),
  unicodeBidi: propTypes.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
  visibility: propTypes.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
  wordSpacing: propTypes.oneOfType([propTypes.number, propTypes.string]),
  writingMode: propTypes.oneOf(['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit']),
  transform: propTypes.string,
  role: propTypes.string,
  focusable: propTypes.string,
  tabIndex: propTypes.string,
  style: propTypes.object,
  width: propTypes.number,
  height: propTypes.number,
  dx: propTypes.number,
  dy: propTypes.number,
  x: propTypes.number,
  y: propTypes.number,
  r: propTypes.number,
  // The radius of Rectangle
  radius: propTypes.oneOfType([propTypes.number, propTypes.array])
};
var EVENT_ATTRIBUTES = {
  onClick: propTypes.func,
  onMouseDown: propTypes.func,
  onMouseUp: propTypes.func,
  onMouseOver: propTypes.func,
  onMouseMove: propTypes.func,
  onMouseOut: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onTouchEnd: propTypes.func,
  onTouchMove: propTypes.func,
  onTouchStart: propTypes.func,
  onTouchCancel: propTypes.func
};
var REACT_BROWSER_EVENT_MAP = {
  click: 'onClick',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mouseover: 'onMouseOver',
  mousemove: 'onMouseMove',
  mouseout: 'onMouseOut',
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  touchcancel: 'onTouchCancel',
  touchend: 'onTouchEnd',
  touchmove: 'onTouchMove',
  touchstart: 'onTouchStart'
};
var SCALE_TYPES = ['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold'];
var LEGEND_TYPES = ['plainline', 'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye', 'none'];
var TOOLTIP_TYPES = ['none'];
/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */

var getDisplayName = function getDisplayName(Comp) {
  if (typeof Comp === 'string') {
    return Comp;
  }

  if (!Comp) {
    return '';
  }

  return Comp.displayName || Comp.name || 'Component';
};
/*
 * Find and return all matched children by type. `type` can be a React element class or
 * string
 */

var findAllByType = function findAllByType(children, type) {
  var result = [];
  var types = [];

  if (isArray_1(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }

  react.Children.forEach(children, function (child) {
    var childType = child && child.type && (child.type.displayName || child.type.name);

    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });
  return result;
};
/*
 * Return the first matched child by type, return null otherwise.
 * `type` can be a React element class or string.
 */

var findChildByType = function findChildByType(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
};
/**
 * get all the presentation attribute of svg element
 * @param  {Object} el A react element or the props of a react element
 * @return {Object}    attributes or null
 */

var getPresentationAttributes = function getPresentationAttributes(el) {
  if (!el || isFunction_1(el)) {
    return null;
  }

  var props = react.isValidElement(el) ? el.props : el;

  if (!isObject_1(props)) {
    return null;
  }

  var out = null; // eslint-disable-next-line no-restricted-syntax

  for (var i in props) {
    if ({}.hasOwnProperty.call(props, i) && PRESENTATION_ATTRIBUTES[i]) {
      if (!out) out = {};
      out[i] = props[i];
    }
  }

  return out;
};

var getEventHandlerOfElement = function getEventHandlerOfElement(originalHandler, props) {
  return function (e) {
    originalHandler(props, e);
    return null;
  };
};
/**
 * get all the event attribute of svg element
 * @param  {Object}   el           A react element or the props of a react element
 * @param  {Function} newHandler   New handler of event
 * @param  {Boolean}  wrapCallback Wrap callback and return more parameters or not
 * @return {Object}                attributes or null
 */


var filterEventAttributes = function filterEventAttributes(el, newHandler) {
  var wrapCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!el || isFunction_1(el)) {
    return null;
  }

  var props = react.isValidElement(el) ? el.props : el;

  if (!isObject_1(props)) {
    return null;
  }

  var out = null; // eslint-disable-next-line no-restricted-syntax

  for (var i in props) {
    if ({}.hasOwnProperty.call(props, i) && EVENT_ATTRIBUTES[i]) {
      if (!out) out = {};
      out[i] = newHandler || (wrapCallback ? getEventHandlerOfElement(props[i], props) : props[i]);
    }
  }

  return out;
};

var getEventHandlerOfChild = function getEventHandlerOfChild(originalHandler, data, index) {
  return function (e) {
    originalHandler(data, index, e);
    return null;
  };
};

var filterEventsOfChild = function filterEventsOfChild(props, data, index) {
  if (!isObject_1(props)) {
    return null;
  }

  var out = null; // eslint-disable-next-line no-restricted-syntax

  for (var i in props) {
    if ({}.hasOwnProperty.call(props, i) && EVENT_ATTRIBUTES[i] && isFunction_1(props[i])) {
      if (!out) out = {};
      out[i] = getEventHandlerOfChild(props[i], data, index);
    }
  }

  return out;
};
/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */

var validateWidthHeight = function validateWidthHeight(el) {
  if (!el || !el.props) {
    return false;
  }

  var _el$props = el.props,
      width = _el$props.width,
      height = _el$props.height;

  if (!isNumber$1(width) || width <= 0 || !isNumber$1(height) || height <= 0) {
    return false;
  }

  return true;
};
var isSsr = function isSsr() {
  return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};
var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];

var isSvgElement = function isSvgElement(child) {
  return child && child.type && isString_1(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
var isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
  if (isNil_1(nextChild) && isNil_1(prevChild)) {
    return true;
  }

  if (!isNil_1(nextChild) && !isNil_1(prevChild)) {
    var _ref = nextChild.props || {},
        nextChildren = _ref.children,
        nextProps = _objectWithoutProperties(_ref, ["children"]);

    var _ref2 = prevChild.props || {},
        prevChildren = _ref2.children,
        prevProps = _objectWithoutProperties(_ref2, ["children"]);

    if (nextChildren && prevChildren) {
      // eslint-disable-next-line no-use-before-define
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }

    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }

    return false;
  }

  return false;
};
/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */

var isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }

  if (react.Children.count(nextChildren) !== react.Children.count(prevChildren)) {
    return false;
  }

  var count = react.Children.count(nextChildren);

  if (count === 0) {
    return true;
  }

  if (count === 1) {
    return isSingleChildEqual(isArray_1(nextChildren) ? nextChildren[0] : nextChildren, isArray_1(prevChildren) ? prevChildren[0] : prevChildren);
  }

  for (var _i = 0; _i < count; _i++) {
    var nextChild = nextChildren[_i];
    var prevChild = prevChildren[_i];

    if (isArray_1(nextChild) || isArray_1(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      }
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};
var renderByOrder = function renderByOrder(children, renderMap) {
  var elements = [];
  var record = {};
  react.Children.forEach(children, function (child, index) {
    if (child && isSvgElement(child)) {
      elements.push(child);
    } else if (child && renderMap[getDisplayName(child.type)]) {
      var displayName = getDisplayName(child.type);
      var _renderMap$displayNam = renderMap[displayName],
          handler = _renderMap$displayNam.handler,
          once = _renderMap$displayNam.once;

      if (once && !record[displayName] || !once) {
        var results = handler(child, displayName, index);

        if (isArray_1(results)) {
          elements = [elements].concat(_toConsumableArray(results));
        } else {
          elements.push(results);
        }

        record[displayName] = true;
      }
    }
  });
  return elements;
};
var getReactEventByType = function getReactEventByType(e) {
  var type = e && e.type;

  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }

  return null;
};
var parseChildIndex = function parseChildIndex(child, children) {
  var result = -1;
  react.Children.forEach(children, function (entry, index) {
    if (entry === child) {
      result = index;
    }
  });
  return result;
};

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes$1 = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  viewBox: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
  }),
  className: propTypes.string,
  style: propTypes.object,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
};

function Surface(props) {
  var children = props.children,
      width = props.width,
      height = props.height,
      viewBox = props.viewBox,
      className = props.className,
      style = props.style,
      others = _objectWithoutProperties$1(props, ["children", "width", "height", "viewBox", "className", "style"]);

  var svgView = viewBox || {
    width: width,
    height: height,
    x: 0,
    y: 0
  };
  var layerClass = classnames('recharts-surface', className);
  var attrs = getPresentationAttributes(others);
  return react.createElement("svg", _extends({}, attrs, {
    className: layerClass,
    width: width,
    height: height,
    style: style,
    viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
    version: "1.1"
  }), children);
}

Surface.propTypes = propTypes$1;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes$2 = {
  className: propTypes.string,
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
};

function Layer(props) {
  var children = props.children,
      className = props.className,
      others = _objectWithoutProperties$2(props, ["children", "className"]);

  var layerClass = classnames('recharts-layer', className);
  return react.createElement("g", _extends$1({
    className: layerClass
  }, others), children);
}

Layer.propTypes = propTypes$2;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$2 = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$2] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$2] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$6.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys$1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView$1 = _getNative(_root, 'DataView');

var _DataView = DataView$1;

/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$9.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$9.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes$1 = arrayIncludes;

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

var _arrayIncludesWith = arrayIncludesWith;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY$2) ? noop_1 : function(values) {
  return new _Set(values);
};

var _createSet = createSet;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE$1 = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes$1,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE$1) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseUniq = baseUniq;

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? _baseUniq(array, _baseIteratee(iteratee)) : [];
}

var uniqBy_1 = uniqBy;

var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

function constant(x) {
  return function constant() {
    return x;
  };
}

var pi$1 = Math.PI;
var tau$1 = 2 * pi$1;

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function shapeLine() {
  var x$1 = x,
      y$1 = y,
      defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function shapeArea() {
  var x0 = x,
      x1 = null,
      y0 = constant(0),
      y1 = y,
      defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return shapeLine().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

var slice = Array.prototype.slice;

var symbolCircle = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi$1);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau$1);
  }
};

var symbolCross = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

var symbolDiamond = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var ka = 0.89081309152928522810,
    kr = Math.sin(pi$1 / 10) / Math.sin(7 * pi$1 / 10),
    kx = Math.sin(tau$1 / 10) * kr,
    ky = -Math.cos(tau$1 / 10) * kr;

var symbolStar = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = tau$1 * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

var symbolSquare = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var sqrt3 = Math.sqrt(3);

var symbolTriangle = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

var symbolWye = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

function shapeSymbol() {
  var type = constant(symbolCircle),
      size = constant(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

function noop$1() {}

function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasis(context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasisClosed(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function curveBasisOpen(context) {
  return new BasisOpen(context);
}

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop$1,
  areaEnd: noop$1,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

function curveLinearClosed(context) {
  return new LinearClosed(context);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$1(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point$1(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point$1(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$1(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function curveNatural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

function stackOffsetNone(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function stackOrderNone(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

function stackValue(d, key) {
  return d[key];
}

function shapeStack() {
  var keys = constant([]),
      order = stackOrderNone,
      offset = stackOffsetNone,
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant(slice.call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? stackOrderNone : typeof _ === "function" ? _ : constant(slice.call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? stackOffsetNone : _, stack) : offset;
  };

  return stack;
}

function stackOffsetExpand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  stackOffsetNone(series, order);
}

function stackOffsetSilhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  stackOffsetNone(series, order);
}

function stackOffsetWiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  stackOffsetNone(series, order);
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var SYMBOL_FACTORIES = {
  symbolCircle: symbolCircle,
  symbolCross: symbolCross,
  symbolDiamond: symbolDiamond,
  symbolSquare: symbolSquare,
  symbolStar: symbolStar,
  symbolTriangle: symbolTriangle,
  symbolWye: symbolWye
};
var RADIAN = Math.PI / 180;

var getSymbolFactory = function getSymbolFactory(type) {
  var name = "symbol".concat(type.slice(0, 1).toUpperCase()).concat(type.slice(1));
  return SYMBOL_FACTORIES[name] || symbolCircle;
};

var calculateAreaSize = function calculateAreaSize(size, sizeType, type) {
  if (sizeType === 'area') {
    return size;
  }

  switch (type) {
    case 'cross':
      return 5 * size * size / 9;

    case 'diamond':
      return 0.5 * size * size / Math.sqrt(3);

    case 'square':
      return size * size;

    case 'star':
      {
        var angle = 18 * RADIAN;
        return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
      }

    case 'triangle':
      return Math.sqrt(3) * size * size / 4;

    case 'wye':
      return (21 - 10 * Math.sqrt(3)) * size * size / 8;

    default:
      return Math.PI * size * size / 4;
  }
};

var Symbols =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Symbols, _PureComponent);

  function Symbols() {
    _classCallCheck(this, Symbols);

    return _possibleConstructorReturn(this, _getPrototypeOf(Symbols).apply(this, arguments));
  }

  _createClass(Symbols, [{
    key: "getPath",

    /**
     * Calculate the path of curve
     * @return {String} path
     */
    value: function getPath() {
      var _this$props = this.props,
          size = _this$props.size,
          sizeType = _this$props.sizeType,
          type = _this$props.type;
      var symbolFactory = getSymbolFactory(type);
      var symbol = shapeSymbol().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
      return symbol();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          cx = _this$props2.cx,
          cy = _this$props2.cy,
          size = _this$props2.size;

      if (cx === +cx && cy === +cy && size === +size) {
        return react.createElement("path", _extends$2({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
          className: classnames('recharts-symbols', className),
          transform: "translate(".concat(cx, ", ").concat(cy, ")"),
          d: this.getPath()
        }));
      }

      return null;
    }
  }]);

  return Symbols;
}(react.PureComponent);

Symbols.displayName = 'Symbols';
Symbols.propTypes = _objectSpread({}, PRESENTATION_ATTRIBUTES, {
  className: propTypes.string,
  type: propTypes.oneOf(['circle', 'cross', 'diamond', 'square', 'star', 'triangle', 'wye']),
  cx: propTypes.number,
  cy: propTypes.number,
  size: propTypes.number,
  sizeType: propTypes.oneOf(['area', 'diameter'])
});
Symbols.defaultProps = {
  type: 'circle',
  size: 64,
  sizeType: 'area'
};

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }
var SIZE = 32;
var ICON_TYPES = LEGEND_TYPES.filter(function (type) {
  return type !== 'none';
});

var DefaultLegendContent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$1(DefaultLegendContent, _PureComponent);

  function DefaultLegendContent() {
    _classCallCheck$1(this, DefaultLegendContent);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(DefaultLegendContent).apply(this, arguments));
  }

  _createClass$1(DefaultLegendContent, [{
    key: "renderIcon",

    /**
     * Render the path of icon
     * @param {Object} data Data of each legend item
     * @return {String} Path element
     */
    value: function renderIcon(data) {
      var inactiveColor = this.props.inactiveColor;
      var halfSize = SIZE / 2;
      var sixthSize = SIZE / 6;
      var thirdSize = SIZE / 3;
      var color = data.inactive ? inactiveColor : data.color;

      if (data.type === 'plainline') {
        return react.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: color,
          strokeDasharray: data.payload.strokeDasharray,
          x1: 0,
          y1: halfSize,
          x2: SIZE,
          y2: halfSize,
          className: "recharts-legend-icon"
        });
      }

      if (data.type === 'line') {
        return react.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: color,
          d: "M0,".concat(halfSize, "h").concat(thirdSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(2 * thirdSize, ",").concat(halfSize, "\n            H").concat(SIZE, "M").concat(2 * thirdSize, ",").concat(halfSize, "\n            A").concat(sixthSize, ",").concat(sixthSize, ",0,1,1,").concat(thirdSize, ",").concat(halfSize),
          className: "recharts-legend-icon"
        });
      }

      if (data.type === 'rect') {
        return react.createElement("path", {
          stroke: "none",
          fill: color,
          d: "M0,".concat(SIZE / 8, "h").concat(SIZE, "v").concat(SIZE * 3 / 4, "h").concat(-SIZE, "z"),
          className: "recharts-legend-icon"
        });
      }

      return react.createElement(Symbols, {
        fill: color,
        cx: halfSize,
        cy: halfSize,
        size: SIZE,
        sizeType: "diameter",
        type: data.type
      });
    }
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */

  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var _this$props = this.props,
          payload = _this$props.payload,
          iconSize = _this$props.iconSize,
          layout = _this$props.layout,
          formatter = _this$props.formatter;
      var viewBox = {
        x: 0,
        y: 0,
        width: SIZE,
        height: SIZE
      };
      var itemStyle = {
        display: layout === 'horizontal' ? 'inline-block' : 'block',
        marginRight: 10
      };
      var svgStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 4
      };
      return payload.map(function (entry, i) {
        var _classNames;

        var finalFormatter = entry.formatter || formatter;
        var className = classnames((_classNames = {
          'recharts-legend-item': true
        }, _defineProperty$1(_classNames, "legend-item-".concat(i), true), _defineProperty$1(_classNames, "inactive", entry.inactive), _classNames));

        if (entry.type === 'none') {
          return null;
        }

        return react.createElement("li", _extends$3({
          className: className,
          style: itemStyle,
          key: "legend-item-".concat(i) // eslint-disable-line react/no-array-index-key

        }, filterEventsOfChild(_this.props, entry, i)), react.createElement(Surface, {
          width: iconSize,
          height: iconSize,
          viewBox: viewBox,
          style: svgStyle
        }, _this.renderIcon(entry)), react.createElement("span", {
          className: "recharts-legend-item-text"
        }, finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          payload = _this$props2.payload,
          layout = _this$props2.layout,
          align = _this$props2.align;

      if (!payload || !payload.length) {
        return null;
      }

      var finalStyle = {
        padding: 0,
        margin: 0,
        textAlign: layout === 'horizontal' ? align : 'left'
      };
      return react.createElement("ul", {
        className: "recharts-default-legend",
        style: finalStyle
      }, this.renderItems());
    }
  }]);

  return DefaultLegendContent;
}(react.PureComponent);

DefaultLegendContent.displayName = 'Legend';
DefaultLegendContent.propTypes = {
  content: propTypes.element,
  iconSize: propTypes.number,
  iconType: propTypes.oneOf(ICON_TYPES),
  layout: propTypes.oneOf(['horizontal', 'vertical']),
  align: propTypes.oneOf(['center', 'left', 'right']),
  verticalAlign: propTypes.oneOf(['top', 'bottom', 'middle']),
  payload: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    id: propTypes.any,
    type: propTypes.oneOf(LEGEND_TYPES)
  })),
  inactiveColor: propTypes.string,
  formatter: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onClick: propTypes.func
};
DefaultLegendContent.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc'
};

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

var defaultUniqBy = function defaultUniqBy(entry) {
  return entry.value;
};

var getUniqPaylod = function getUniqPaylod(option, payload) {
  if (option === true) {
    return uniqBy_1(payload, defaultUniqBy);
  }

  if (isFunction_1(option)) {
    return uniqBy_1(payload, option);
  }

  return payload;
};

var renderContent = function renderContent(content, props) {
  if (react.isValidElement(content)) {
    return react.cloneElement(content, props);
  }

  if (isFunction_1(content)) {
    return content(props);
  }

  return react.createElement(DefaultLegendContent, props);
};

var EPS = 1;
var ICON_TYPES$1 = LEGEND_TYPES.filter(function (type) {
  return type !== 'none';
});

var Legend =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$2(Legend, _PureComponent);

  function Legend() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$2(this, Legend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$2(this, (_getPrototypeOf2 = _getPrototypeOf$2(Legend)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      boxWidth: -1,
      boxHeight: -1
    };
    return _this;
  }

  _createClass$2(Legend, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function getBBox() {
      var _this$state = this.state,
          boxWidth = _this$state.boxWidth,
          boxHeight = _this$state.boxHeight;

      if (boxWidth >= 0 && boxHeight >= 0) {
        return {
          width: boxWidth,
          height: boxHeight
        };
      }

      return null;
    }
  }, {
    key: "getDefaultPosition",
    value: function getDefaultPosition(style) {
      var _this$props = this.props,
          layout = _this$props.layout,
          align = _this$props.align,
          verticalAlign = _this$props.verticalAlign,
          margin = _this$props.margin,
          chartWidth = _this$props.chartWidth,
          chartHeight = _this$props.chartHeight;
      var hPos, vPos;

      if (!style || (style.left === undefined || style.left === null) && (style.right === undefined || style.right === null)) {
        if (align === 'center' && layout === 'vertical') {
          var box = this.getBBox() || {
            width: 0
          };
          hPos = {
            left: ((chartWidth || 0) - box.width) / 2
          };
        } else {
          hPos = align === 'right' ? {
            right: margin && margin.right || 0
          } : {
            left: margin && margin.left || 0
          };
        }
      }

      if (!style || (style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null)) {
        if (verticalAlign === 'middle') {
          var _box = this.getBBox() || {
            height: 0
          };

          vPos = {
            top: ((chartHeight || 0) - _box.height) / 2
          };
        } else {
          vPos = verticalAlign === 'bottom' ? {
            bottom: margin && margin.bottom || 0
          } : {
            top: margin && margin.top || 0
          };
        }
      }

      return _objectSpread$1({}, hPos, {}, vPos);
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var _this$state2 = this.state,
          boxWidth = _this$state2.boxWidth,
          boxHeight = _this$state2.boxHeight;
      var onBBoxUpdate = this.props.onBBoxUpdate;

      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          }, function () {
            if (onBBoxUpdate) {
              onBBoxUpdate(box);
            }
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        }, function () {
          if (onBBoxUpdate) {
            onBBoxUpdate(null);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          content = _this$props2.content,
          width = _this$props2.width,
          height = _this$props2.height,
          wrapperStyle = _this$props2.wrapperStyle,
          paylodUniqBy = _this$props2.paylodUniqBy,
          payload = _this$props2.payload;

      var outerStyle = _objectSpread$1({
        position: 'absolute',
        width: width || 'auto',
        height: height || 'auto'
      }, this.getDefaultPosition(wrapperStyle), {}, wrapperStyle);

      return react.createElement("div", {
        className: "recharts-legend-wrapper",
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, renderContent(content, _objectSpread$1({}, this.props, {
        payload: getUniqPaylod(paylodUniqBy, payload)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function getWithHeight(item, chartWidth) {
      var layout = item.props.layout;

      if (layout === 'vertical' && isNumber$1(item.props.height)) {
        return {
          height: item.props.height
        };
      }

      if (layout === 'horizontal') {
        return {
          width: item.props.width || chartWidth
        };
      }

      return null;
    }
  }]);

  return Legend;
}(react.PureComponent);

Legend.displayName = 'Legend';
Legend.propTypes = {
  content: propTypes.oneOfType([propTypes.element, propTypes.func]),
  wrapperStyle: propTypes.object,
  chartWidth: propTypes.number,
  chartHeight: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  iconSize: propTypes.number,
  iconType: propTypes.oneOf(ICON_TYPES$1),
  layout: propTypes.oneOf(['horizontal', 'vertical']),
  align: propTypes.oneOf(['center', 'left', 'right']),
  verticalAlign: propTypes.oneOf(['top', 'bottom', 'middle']),
  margin: propTypes.shape({
    top: propTypes.number,
    left: propTypes.number,
    bottom: propTypes.number,
    right: propTypes.number
  }),
  payload: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    id: propTypes.any,
    type: propTypes.oneOf(LEGEND_TYPES)
  })),
  paylodUniqBy: propTypes.oneOfType([propTypes.func, propTypes.bool]),
  formatter: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onClick: propTypes.func,
  onBBoxUpdate: propTypes.func
};
Legend.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom'
};

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
    globalContext = window;
} else if (typeof self !== 'undefined') {
    globalContext = self;
} else {
    globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop$2() {}

var on = noop$2;
var addListener = noop$2;
var once = noop$2;
var off = noop$2;
var removeListener = noop$2;
var removeAllListeners = noop$2;
var emit = noop$2;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance$1 = globalContext.performance || {};
var performanceNow =
  performance$1.now        ||
  performance$1.mozNow     ||
  performance$1.msNow      ||
  performance$1.oNow       ||
  performance$1.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance$1)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: {"NODE_ENV":"production"},
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var performanceNow$1 = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root$1 = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root$1['request' + suffix]
  , caf = root$1['cancel' + suffix] || root$1['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root$1[vendors[i] + 'Request' + suffix];
  caf = root$1[vendors[i] + 'Cancel' + suffix]
      || root$1[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id$1 = 0
    , queue$1 = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue$1.length === 0) {
      var _now = performanceNow$1()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue$1.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue$1.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue$1.push({
      handle: ++id$1,
      callback: callback,
      cancelled: false
    });
    return id$1
  };

  caf = function(handle) {
    for(var i = 0; i < queue$1.length; i++) {
      if(queue$1[i].handle === handle) {
        queue$1[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root$1, fn)
};
var cancel = function() {
  caf.apply(root$1, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root$1;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

function setRafTimeout(callback) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var currTime = -1;

  var shouldUpdate = function shouldUpdate(now) {
    if (currTime < 0) {
      currTime = now;
    }

    if (now - currTime > timeout) {
      callback(now);
      currTime = -1;
    } else {
      raf_1(shouldUpdate);
    }
  };

  raf_1(shouldUpdate);
}

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray$1(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray$1(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function createAnimateManager() {
  var currStyle = {};

  var handleChange = function handleChange() {
    return null;
  };

  var shouldStop = false;

  var setStyle = function setStyle(_style) {
    if (shouldStop) {
      return;
    }

    if (Array.isArray(_style)) {
      if (!_style.length) {
        return;
      }

      var styles = _style;

      var _styles = _toArray(styles),
          curr = _styles[0],
          restStyles = _styles.slice(1);

      if (typeof curr === 'number') {
        setRafTimeout(setStyle.bind(null, restStyles), curr);
        return;
      }

      setStyle(curr);
      setRafTimeout(setStyle.bind(null, restStyles));
      return;
    }

    if (_typeof$3(_style) === 'object') {
      currStyle = _style;
      handleChange(currStyle);
    }

    if (typeof _style === 'function') {
      _style();
    }
  };

  return {
    stop: function stop() {
      shouldStop = true;
    },
    start: function start(style) {
      shouldStop = false;
      setStyle(style);
    },
    subscribe: function subscribe(_handleChange) {
      handleChange = _handleChange;
      return function () {
        handleChange = function handleChange() {
          return null;
        };
      };
    }
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? _arrayIncludesWith : _arrayIncludes$1,
      length = arrays[0].length,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      maxLength = Infinity,
      result = [];

  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = _arrayMap(array, _baseUnary(iteratee));
    }
    maxLength = nativeMin(array.length, maxLength);
    caches[othIndex] = !comparator && (iteratee || (length >= 120 && array.length >= 120))
      ? new _SetCache(othIndex && array)
      : undefined;
  }
  array = arrays[0];

  var index = -1,
      seen = caches[0];

  outer:
  while (++index < length && result.length < maxLength) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (!(seen
          ? _cacheHas(seen, computed)
          : includes(result, computed, comparator)
        )) {
      othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache
              ? _cacheHas(cache, computed)
              : includes(arrays[othIndex], computed, comparator))
            ) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

var _baseIntersection = baseIntersection;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$3 = defineProperty;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty$3 ? identity_1 : function(func, string) {
  return _defineProperty$3(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Casts `value` to an empty array if it's not an array like object.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array|Object} Returns the cast array-like object.
 */
function castArrayLikeObject(value) {
  return isArrayLikeObject_1(value) ? value : [];
}

var _castArrayLikeObject = castArrayLikeObject;

/**
 * Creates an array of unique values that are included in all given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
var intersection = _baseRest(function(arrays) {
  var mapped = _arrayMap(arrays, _castArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0])
    ? _baseIntersection(mapped)
    : [];
});

var intersection_1 = intersection;

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-console: 0 */
var PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];
var IN_LINE_PREFIX_LIST = ['-webkit-', '-moz-', '-o-', '-ms-'];
var IN_COMPATIBLE_PROPERTY = ['transform', 'transformOrigin', 'transition'];
var getIntersectionKeys = function getIntersectionKeys(preObj, nextObj) {
  return intersection_1(Object.keys(preObj), Object.keys(nextObj));
};
var identity$1 = function identity(param) {
  return param;
};
/*
 * @description: convert camel case to dash case
 * string => string
 */

var getDashCase = function getDashCase(name) {
  return name.replace(/([A-Z])/g, function (v) {
    return "-".concat(v.toLowerCase());
  });
};
/*
 * @description: add compatible style prefix
 * (string, string) => object
 */

var generatePrefixStyle = function generatePrefixStyle(name, value) {
  if (IN_COMPATIBLE_PROPERTY.indexOf(name) === -1) {
    return _defineProperty$4({}, name, value);
  }

  var isTransition = name === 'transition';
  var camelName = name.replace(/(\w)/, function (v) {
    return v.toUpperCase();
  });
  var styleVal = value;
  return PREFIX_LIST.reduce(function (result, property, i) {
    if (isTransition) {
      styleVal = value.replace(/(transform|transform-origin)/gim, "".concat(IN_LINE_PREFIX_LIST[i], "$1"));
    }

    return _objectSpread$2({}, result, _defineProperty$4({}, property + camelName, styleVal));
  }, {});
};
/*
 * @description: map object on every element in this object.
 * (function, object) => object
 */

var mapObject = function mapObject(fn, obj) {
  return Object.keys(obj).reduce(function (res, key) {
    return _objectSpread$2({}, res, _defineProperty$4({}, key, fn(key, obj[key])));
  }, {});
};
/*
 * @description: add compatible prefix to style
 * object => object
 */

var translateStyle = function translateStyle(style) {
  return Object.keys(style).reduce(function (res, key) {
    return _objectSpread$2({}, res, generatePrefixStyle(key, res[key]));
  }, style);
};
var getTransitionVal = function getTransitionVal(props, duration, easing) {
  return props.map(function (prop) {
    return "".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing);
  }).join(',');
};

function _slicedToArray(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$2(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$2(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
var ACCURACY = 1e-4;

var cubicBezierFactor = function cubicBezierFactor(c1, c2) {
  return [0, 3 * c1, 3 * c2 - 6 * c1, 3 * c1 - 3 * c2 + 1];
};

var multyTime = function multyTime(params, t) {
  return params.map(function (param, i) {
    return param * Math.pow(t, i);
  }).reduce(function (pre, curr) {
    return pre + curr;
  });
};

var cubicBezier = function cubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);
    return multyTime(params, t);
  };
};

var derivativeCubicBezier = function derivativeCubicBezier(c1, c2) {
  return function (t) {
    var params = cubicBezierFactor(c1, c2);

    var newParams = _toConsumableArray$1(params.map(function (param, i) {
      return param * i;
    }).slice(1)).concat([0]);

    return multyTime(newParams, t);
  };
}; // calculate cubic-bezier using Newton's method


var configBezier = function configBezier() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var x1 = args[0],
      y1 = args[1],
      x2 = args[2],
      y2 = args[3];

  if (args.length === 1) {
    switch (args[0]) {
      case 'linear':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;

      case 'ease':
        x1 = 0.25;
        y1 = 0.1;
        x2 = 0.25;
        y2 = 1.0;
        break;

      case 'ease-in':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 1.0;
        y2 = 1.0;
        break;

      case 'ease-out':
        x1 = 0.42;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;

      case 'ease-in-out':
        x1 = 0.0;
        y1 = 0.0;
        x2 = 0.58;
        y2 = 1.0;
        break;

      default:
        {
          var easing = args[0].split('(');

          if (easing[0] === 'cubic-bezier' && easing[1].split(')')[0].split(',').length === 4) {
            var _easing$1$split$0$spl = easing[1].split(')')[0].split(',').map(function (x) {
              return parseFloat(x);
            });

            var _easing$1$split$0$spl2 = _slicedToArray(_easing$1$split$0$spl, 4);

            x1 = _easing$1$split$0$spl2[0];
            y1 = _easing$1$split$0$spl2[1];
            x2 = _easing$1$split$0$spl2[2];
            y2 = _easing$1$split$0$spl2[3];
          }
        }
    }
  }
  var curveX = cubicBezier(x1, x2);
  var curveY = cubicBezier(y1, y2);
  var derCurveX = derivativeCubicBezier(x1, x2);

  var rangeValue = function rangeValue(value) {
    if (value > 1) {
      return 1;
    } else if (value < 0) {
      return 0;
    }

    return value;
  };

  var bezier = function bezier(_t) {
    var t = _t > 1 ? 1 : _t;
    var x = t;

    for (var i = 0; i < 8; ++i) {
      var evalT = curveX(x) - t;
      var derVal = derCurveX(x);

      if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
        return curveY(x);
      }

      x = rangeValue(x - evalT / derVal);
    }

    return curveY(x);
  };

  bezier.isStepper = false;
  return bezier;
};
var configSpring = function configSpring() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$stiff = config.stiff,
      stiff = _config$stiff === void 0 ? 100 : _config$stiff,
      _config$damping = config.damping,
      damping = _config$damping === void 0 ? 8 : _config$damping,
      _config$dt = config.dt,
      dt = _config$dt === void 0 ? 17 : _config$dt;

  var stepper = function stepper(currX, destX, currV) {
    var FSpring = -(currX - destX) * stiff;
    var FDamping = currV * damping;
    var newV = currV + (FSpring - FDamping) * dt / 1000;
    var newX = currV * dt / 1000 + currX;

    if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
      return [destX, 0];
    }

    return [newX, newV];
  };

  stepper.isStepper = true;
  stepper.dt = dt;
  return stepper;
};
var configEasing = function configEasing() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var easing = args[0];

  if (typeof easing === 'string') {
    switch (easing) {
      case 'ease':
      case 'ease-in-out':
      case 'ease-out':
      case 'ease-in':
      case 'linear':
        return configBezier(easing);

      case 'spring':
        return configSpring();

      default:
        if (easing.split('(')[0] === 'cubic-bezier') {
          return configBezier(easing);
        }
    }
  }

  if (typeof easing === 'function') {
    return easing;
  }
  return null;
};

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  _baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter;

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
  return func(collection, _baseIteratee(predicate));
}

var filter_1 = filter;

function _toConsumableArray$2(arr) { return _arrayWithoutHoles$2(arr) || _iterableToArray$3(arr) || _nonIterableSpread$2(); }

function _nonIterableSpread$2() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$3(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$2(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$5(target, key, source[key]); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$2(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$2(); }

function _nonIterableRest$2() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$1(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$2(arr) { if (Array.isArray(arr)) return arr; }

var alpha = function alpha(begin, end, k) {
  return begin + (end - begin) * k;
};

var needContinue = function needContinue(_ref) {
  var from = _ref.from,
      to = _ref.to;
  return from !== to;
};
/*
 * @description: cal new from value and velocity in each stepper
 * @return: { [styleProperty]: { from, to, velocity } }
 */


var calStepperVals = function calStepperVals(easing, preVals, steps) {
  var nextStepVals = mapObject(function (key, val) {
    if (needContinue(val)) {
      var _easing = easing(val.from, val.to, val.velocity),
          _easing2 = _slicedToArray$1(_easing, 2),
          newX = _easing2[0],
          newV = _easing2[1];

      return _objectSpread$3({}, val, {
        from: newX,
        velocity: newV
      });
    }

    return val;
  }, preVals);

  if (steps < 1) {
    return mapObject(function (key, val) {
      if (needContinue(val)) {
        return _objectSpread$3({}, val, {
          velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
          from: alpha(val.from, nextStepVals[key].from, steps)
        });
      }

      return val;
    }, preVals);
  }

  return calStepperVals(easing, nextStepVals, steps - 1);
}; // configure update function


var configUpdate = (function (from, to, easing, duration, render) {
  var interKeys = getIntersectionKeys(from, to);
  var timingStyle = interKeys.reduce(function (res, key) {
    return _objectSpread$3({}, res, _defineProperty$5({}, key, [from[key], to[key]]));
  }, {});
  var stepperStyle = interKeys.reduce(function (res, key) {
    return _objectSpread$3({}, res, _defineProperty$5({}, key, {
      from: from[key],
      velocity: 0,
      to: to[key]
    }));
  }, {});
  var cafId = -1;
  var preTime;
  var beginTime;

  var update = function update() {
    return null;
  };

  var getCurrStyle = function getCurrStyle() {
    return mapObject(function (key, val) {
      return val.from;
    }, stepperStyle);
  };

  var shouldStopAnimation = function shouldStopAnimation() {
    return !filter_1(stepperStyle, needContinue).length;
  }; // stepper timing function like spring


  var stepperUpdate = function stepperUpdate(now) {
    if (!preTime) {
      preTime = now;
    }

    var deltaTime = now - preTime;
    var steps = deltaTime / easing.dt;
    stepperStyle = calStepperVals(easing, stepperStyle, steps); // get union set and add compatible prefix

    render(_objectSpread$3({}, from, to, getCurrStyle()));
    preTime = now;

    if (!shouldStopAnimation()) {
      cafId = raf_1(update);
    }
  }; // t => val timing function like cubic-bezier


  var timingUpdate = function timingUpdate(now) {
    if (!beginTime) {
      beginTime = now;
    }

    var t = (now - beginTime) / duration;
    var currStyle = mapObject(function (key, val) {
      return alpha.apply(void 0, _toConsumableArray$2(val).concat([easing(t)]));
    }, timingStyle); // get union set and add compatible prefix

    render(_objectSpread$3({}, from, to, currStyle));

    if (t < 1) {
      cafId = raf_1(update);
    } else {
      var finalStyle = mapObject(function (key, val) {
        return alpha.apply(void 0, _toConsumableArray$2(val).concat([easing(1)]));
      }, timingStyle);
      render(_objectSpread$3({}, from, to, finalStyle));
    }
  };

  update = easing.isStepper ? stepperUpdate : timingUpdate; // return start animation method

  return function () {
    raf_1(update); // return stop animation method

    return function () {
      cancel(cafId);
    };
  };
});

function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray$3(arr) { return _arrayWithoutHoles$3(arr) || _iterableToArray$4(arr) || _nonIterableSpread$3(); }

function _nonIterableSpread$3() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$4(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$3(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$6(target, key, source[key]); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$3(self, call) { if (call && (_typeof$4(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$3(self); }

function _getPrototypeOf$3(o) { _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$3(o); }

function _inherits$3(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$3(subClass, superClass); }

function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }

function _assertThisInitialized$3(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Animate =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$3(Animate, _PureComponent);

  function Animate(props, context) {
    var _this;

    _classCallCheck$3(this, Animate);

    _this = _possibleConstructorReturn$3(this, _getPrototypeOf$3(Animate).call(this, props, context));
    var _this$props = _this.props,
        isActive = _this$props.isActive,
        attributeName = _this$props.attributeName,
        from = _this$props.from,
        to = _this$props.to,
        steps = _this$props.steps,
        children = _this$props.children;
    _this.handleStyleChange = _this.handleStyleChange.bind(_assertThisInitialized$3(_assertThisInitialized$3(_this)));
    _this.changeStyle = _this.changeStyle.bind(_assertThisInitialized$3(_assertThisInitialized$3(_this)));

    if (!isActive) {
      _this.state = {
        style: {}
      }; // if children is a function and animation is not active, set style to 'to'

      if (typeof children === 'function') {
        _this.state = {
          style: to
        };
      }

      return _possibleConstructorReturn$3(_this);
    }

    if (steps && steps.length) {
      _this.state = {
        style: steps[0].style
      };
    } else if (from) {
      if (typeof children === 'function') {
        _this.state = {
          style: from
        };
        return _possibleConstructorReturn$3(_this);
      }

      _this.state = {
        style: attributeName ? _defineProperty$6({}, attributeName, from) : from
      };
    } else {
      _this.state = {
        style: {}
      };
    }

    return _this;
  }

  _createClass$3(Animate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          isActive = _this$props2.isActive,
          canBegin = _this$props2.canBegin;
      this.mounted = true;

      if (!isActive || !canBegin) {
        return;
      }

      this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          isActive = _this$props3.isActive,
          canBegin = _this$props3.canBegin,
          attributeName = _this$props3.attributeName,
          shouldReAnimate = _this$props3.shouldReAnimate;

      if (!canBegin) {
        return;
      }

      if (!isActive) {
        var newState = {
          style: attributeName ? _defineProperty$6({}, attributeName, this.props.to) : this.props.to
        };

        if (this.state && this.state.style) {
          if (attributeName && this.state.style[attributeName] !== this.props.to || !attributeName && this.state.style !== this.props.to) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(newState);
          }
        }

        return;
      }

      if (isEqual_1(prevProps.to, this.props.to) && prevProps.canBegin && prevProps.isActive) {
        return;
      }

      var isTriggered = !prevProps.canBegin || !prevProps.isActive;

      if (this.manager) {
        this.manager.stop();
      }

      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }

      var from = isTriggered || shouldReAnimate ? this.props.from : prevProps.to;

      if (this.state && this.state.style) {
        var _newState = {
          style: attributeName ? _defineProperty$6({}, attributeName, from) : from
        };

        if (attributeName && this.state.style[attributeName] !== from || !attributeName && this.state.style !== from) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState(_newState);
        }
      }

      this.runAnimation(_objectSpread$4({}, this.props, {
        from: from,
        begin: 0
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.unSubscribe) {
        this.unSubscribe();
      }

      if (this.manager) {
        this.manager.stop();
        this.manager = null;
      }

      if (this.stopJSAnimation) {
        this.stopJSAnimation();
      }
    }
  }, {
    key: "runJSAnimation",
    value: function runJSAnimation(props) {
      var _this2 = this;

      var from = props.from,
          to = props.to,
          duration = props.duration,
          easing = props.easing,
          begin = props.begin,
          onAnimationEnd = props.onAnimationEnd,
          onAnimationStart = props.onAnimationStart;
      var startAnimation = configUpdate(from, to, configEasing(easing), duration, this.changeStyle);

      var finalStartAnimation = function finalStartAnimation() {
        _this2.stopJSAnimation = startAnimation();
      };

      this.manager.start([onAnimationStart, begin, finalStartAnimation, duration, onAnimationEnd]);
    }
  }, {
    key: "runStepAnimation",
    value: function runStepAnimation(props) {
      var _this3 = this;

      var steps = props.steps,
          begin = props.begin,
          onAnimationStart = props.onAnimationStart;
      var _steps$ = steps[0],
          initialStyle = _steps$.style,
          _steps$$duration = _steps$.duration,
          initialTime = _steps$$duration === void 0 ? 0 : _steps$$duration;

      var addStyle = function addStyle(sequence, nextItem, index) {
        if (index === 0) {
          return sequence;
        }

        var duration = nextItem.duration,
            _nextItem$easing = nextItem.easing,
            easing = _nextItem$easing === void 0 ? 'ease' : _nextItem$easing,
            style = nextItem.style,
            nextProperties = nextItem.properties,
            onAnimationEnd = nextItem.onAnimationEnd;
        var preItem = index > 0 ? steps[index - 1] : nextItem;
        var properties = nextProperties || Object.keys(style);

        if (typeof easing === 'function' || easing === 'spring') {
          return _toConsumableArray$3(sequence).concat([_this3.runJSAnimation.bind(_this3, {
            from: preItem.style,
            to: style,
            duration: duration,
            easing: easing
          }), duration]);
        }

        var transition = getTransitionVal(properties, duration, easing);

        var newStyle = _objectSpread$4({}, preItem.style, style, {
          transition: transition
        });

        return _toConsumableArray$3(sequence).concat([newStyle, duration, onAnimationEnd]).filter(identity$1);
      };

      return this.manager.start([onAnimationStart].concat(_toConsumableArray$3(steps.reduce(addStyle, [initialStyle, Math.max(initialTime, begin)])), [props.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function runAnimation(props) {
      if (!this.manager) {
        this.manager = createAnimateManager();
      }

      var begin = props.begin,
          duration = props.duration,
          attributeName = props.attributeName,
          propsTo = props.to,
          easing = props.easing,
          onAnimationStart = props.onAnimationStart,
          onAnimationEnd = props.onAnimationEnd,
          steps = props.steps,
          children = props.children;
      var manager = this.manager;
      this.unSubscribe = manager.subscribe(this.handleStyleChange);

      if (typeof easing === 'function' || typeof children === 'function' || easing === 'spring') {
        this.runJSAnimation(props);
        return;
      }

      if (steps.length > 1) {
        this.runStepAnimation(props);
        return;
      }

      var to = attributeName ? _defineProperty$6({}, attributeName, propsTo) : propsTo;
      var transition = getTransitionVal(Object.keys(to), duration, easing);
      manager.start([onAnimationStart, begin, _objectSpread$4({}, to, {
        transition: transition
      }), duration, onAnimationEnd]);
    }
  }, {
    key: "handleStyleChange",
    value: function handleStyleChange(style) {
      this.changeStyle(style);
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(style) {
      if (this.mounted) {
        this.setState({
          style: style
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          begin = _this$props4.begin,
          duration = _this$props4.duration,
          attributeName = _this$props4.attributeName,
          easing = _this$props4.easing,
          isActive = _this$props4.isActive,
          steps = _this$props4.steps,
          from = _this$props4.from,
          to = _this$props4.to,
          canBegin = _this$props4.canBegin,
          onAnimationEnd = _this$props4.onAnimationEnd,
          shouldReAnimate = _this$props4.shouldReAnimate,
          onAnimationReStart = _this$props4.onAnimationReStart,
          others = _objectWithoutProperties$3(_this$props4, ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"]);

      var count = react.Children.count(children);
      var stateStyle = translateStyle(this.state.style);

      if (typeof children === 'function') {
        return children(stateStyle);
      }

      if (!isActive || count === 0) {
        return children;
      }

      var cloneContainer = function cloneContainer(container) {
        var _container$props = container.props,
            _container$props$styl = _container$props.style,
            style = _container$props$styl === void 0 ? {} : _container$props$styl,
            className = _container$props.className;
        var res = react.cloneElement(container, _objectSpread$4({}, others, {
          style: _objectSpread$4({}, style, stateStyle),
          className: className
        }));
        return res;
      };

      if (count === 1) {
        return cloneContainer(react.Children.only(children));
      }

      return react.createElement("div", null, react.Children.map(children, function (child) {
        return cloneContainer(child);
      }));
    }
  }]);

  return Animate;
}(react.PureComponent);

Animate.displayName = 'Animate';
Animate.propTypes = {
  from: propTypes.oneOfType([propTypes.object, propTypes.string]),
  to: propTypes.oneOfType([propTypes.object, propTypes.string]),
  attributeName: propTypes.string,
  // animation duration
  duration: propTypes.number,
  begin: propTypes.number,
  easing: propTypes.oneOfType([propTypes.string, propTypes.func]),
  steps: propTypes.arrayOf(propTypes.shape({
    duration: propTypes.number.isRequired,
    style: propTypes.object.isRequired,
    easing: propTypes.oneOfType([propTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']), propTypes.func]),
    // transition css properties(dash case), optional
    properties: propTypes.arrayOf('string'),
    onAnimationEnd: propTypes.func
  })),
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  isActive: propTypes.bool,
  canBegin: propTypes.bool,
  onAnimationEnd: propTypes.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: propTypes.bool,
  onAnimationStart: propTypes.func,
  onAnimationReStart: propTypes.func
};
Animate.defaultProps = {
  begin: 0,
  duration: 1000,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: true,
  canBegin: true,
  steps: [],
  onAnimationEnd: function onAnimationEnd() {},
  onAnimationStart: function onAnimationStart() {}
};

({
  appearOptions: propTypes.object,
  enterOptions: propTypes.object,
  leaveOptions: propTypes.object,
  children: propTypes.element
});

({
  appear: propTypes.object,
  enter: propTypes.object,
  leave: propTypes.object,
  children: propTypes.oneOfType([propTypes.array, propTypes.element]),
  component: propTypes.any
});

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol_1(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol_1(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = _compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = _arrayMap(iteratees, function(iteratee) {
      if (isArray_1(iteratee)) {
        return function(value) {
          return _baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity_1];
  }

  var index = -1;
  iteratees = _arrayMap(iteratees, _baseUnary(_baseIteratee));

  var result = _baseMap(collection, function(value, key, collection) {
    var criteria = _arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return _baseSortBy(result, function(object, other) {
    return _compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
var sortBy = _baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && _isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && _isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return _baseOrderBy(collection, _baseFlatten(iteratees, 1), []);
});

var sortBy_1 = sortBy;

function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

function _slicedToArray$2(arr, i) { return _arrayWithHoles$3(arr) || _iterableToArrayLimit$2(arr, i) || _nonIterableRest$3(); }

function _nonIterableRest$3() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$2(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$3(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty$7(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$4(self, call) { if (call && (_typeof$5(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$4(self); }

function _assertThisInitialized$4(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$4(o) { _getPrototypeOf$4 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$4(o); }

function _inherits$4(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$4(subClass, superClass); }

function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }

var defaultFormatter = function defaultFormatter(value) {
  return isArray_1(value) && isNumOrStr(value[0]) && isNumOrStr(value[1]) ? value.join(' ~ ') : value;
};

var DefaultTooltipContent =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$4(DefaultTooltipContent, _PureComponent);

  function DefaultTooltipContent() {
    _classCallCheck$4(this, DefaultTooltipContent);

    return _possibleConstructorReturn$4(this, _getPrototypeOf$4(DefaultTooltipContent).apply(this, arguments));
  }

  _createClass$4(DefaultTooltipContent, [{
    key: "renderContent",
    value: function renderContent() {
      var _this$props = this.props,
          payload = _this$props.payload,
          separator = _this$props.separator,
          formatter = _this$props.formatter,
          itemStyle = _this$props.itemStyle,
          itemSorter = _this$props.itemSorter;

      if (payload && payload.length) {
        var listStyle = {
          padding: 0,
          margin: 0
        };
        var items = (itemSorter ? sortBy_1(payload, itemSorter) : payload).map(function (entry, i) {
          if (entry.type === 'none') {
            return null;
          }

          var finalItemStyle = _objectSpread$5({
            display: 'block',
            paddingTop: 4,
            paddingBottom: 4,
            color: entry.color || '#000'
          }, itemStyle);

          var finalFormatter = entry.formatter || formatter || defaultFormatter;
          var name = entry.name,
              value = entry.value;

          if (finalFormatter) {
            var formatted = finalFormatter(value, name, entry, i);

            if (Array.isArray(formatted)) {
              var _formatted = _slicedToArray$2(formatted, 2);

              value = _formatted[0];
              name = _formatted[1];
            } else {
              value = formatted;
            }
          }

          return (// eslint-disable-next-line react/no-array-index-key
            react.createElement("li", {
              className: "recharts-tooltip-item",
              key: "tooltip-item-".concat(i),
              style: finalItemStyle
            }, isNumOrStr(name) ? react.createElement("span", {
              className: "recharts-tooltip-item-name"
            }, name) : null, isNumOrStr(name) ? react.createElement("span", {
              className: "recharts-tooltip-item-separator"
            }, separator) : null, react.createElement("span", {
              className: "recharts-tooltip-item-value"
            }, value), react.createElement("span", {
              className: "recharts-tooltip-item-unit"
            }, entry.unit || ''))
          );
        });
        return react.createElement("ul", {
          className: "recharts-tooltip-item-list",
          style: listStyle
        }, items);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          wrapperClassName = _this$props2.wrapperClassName,
          contentStyle = _this$props2.contentStyle,
          labelClassName = _this$props2.labelClassName,
          labelStyle = _this$props2.labelStyle,
          label = _this$props2.label,
          labelFormatter = _this$props2.labelFormatter;

      var finalStyle = _objectSpread$5({
        margin: 0,
        padding: 10,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        whiteSpace: 'nowrap'
      }, contentStyle);

      var finalLabelStyle = _objectSpread$5({
        margin: 0
      }, labelStyle);

      var hasLabel = isNumOrStr(label);
      var finalLabel = hasLabel ? label : '';
      var wrapperCN = classnames('recharts-default-tooltip', wrapperClassName);
      var labelCN = classnames('recharts-tooltip-label', labelClassName);

      if (hasLabel && labelFormatter) {
        finalLabel = labelFormatter(label);
      }

      return react.createElement("div", {
        className: wrapperCN,
        style: finalStyle
      }, react.createElement("p", {
        className: labelCN,
        style: finalLabelStyle
      }, finalLabel), this.renderContent());
    }
  }]);

  return DefaultTooltipContent;
}(react.PureComponent);

DefaultTooltipContent.displayName = 'DefaultTooltipContent';
DefaultTooltipContent.propTypes = {
  separator: propTypes.string,
  wrapperClassName: propTypes.string,
  labelClassName: propTypes.string,
  formatter: propTypes.func,
  contentStyle: propTypes.object,
  itemStyle: propTypes.object,
  labelStyle: propTypes.object,
  labelFormatter: propTypes.func,
  label: propTypes.any,
  payload: propTypes.arrayOf(propTypes.shape({
    name: propTypes.any,
    value: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
    unit: propTypes.any
  })),
  itemSorter: propTypes.func
};
DefaultTooltipContent.defaultProps = {
  separator: ' : ',
  contentStyle: {},
  itemStyle: {},
  labelStyle: {}
};

function _typeof$6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty$8(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$5(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$5(self); }

function _assertThisInitialized$5(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$5(o) { _getPrototypeOf$5 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$5(o); }

function _inherits$5(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$5(subClass, superClass); }

function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }
var CLS_PREFIX = 'recharts-tooltip-wrapper';
var EPS$1 = 1;

var defaultUniqBy$1 = function defaultUniqBy(entry) {
  return entry.dataKey;
};

var getUniqPaylod$1 = function getUniqPaylod(option, payload) {
  if (option === true) {
    return uniqBy_1(payload, defaultUniqBy$1);
  }

  if (isFunction_1(option)) {
    return uniqBy_1(payload, option);
  }

  return payload;
};

var propTypes$3 = {
  allowEscapeViewBox: propTypes.shape({
    x: propTypes["boolean"],
    y: propTypes["boolean"]
  }),
  content: propTypes.oneOfType([propTypes.element, propTypes.func]),
  viewBox: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
  }),
  active: propTypes.bool,
  separator: propTypes.string,
  formatter: propTypes.func,
  offset: propTypes.number,
  itemStyle: propTypes.object,
  labelStyle: propTypes.object,
  wrapperStyle: propTypes.object,
  contentStyle: propTypes.object,
  cursor: propTypes.oneOfType([propTypes.bool, propTypes.element, propTypes.object]),
  coordinate: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number
  }),
  position: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number
  }),
  label: propTypes.any,
  payload: propTypes.arrayOf(propTypes.shape({
    name: propTypes.any,
    value: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array]),
    unit: propTypes.any,
    type: propTypes.oneOf(TOOLTIP_TYPES)
  })),
  paylodUniqBy: propTypes.oneOfType([propTypes.func, propTypes.bool]),
  isAnimationActive: propTypes.bool,
  animationDuration: propTypes.number,
  animationEasing: propTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  itemSorter: propTypes.func,
  filterNull: propTypes.bool,
  useTranslate3d: propTypes.bool
};
var defaultProps = {
  active: false,
  allowEscapeViewBox: {
    x: false,
    y: false
  },
  offset: 10,
  viewBox: {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0
  },
  coordinate: {
    x: 0,
    y: 0
  },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: true,
  isAnimationActive: !isSsr(),
  animationEasing: 'ease',
  animationDuration: 400,
  filterNull: true,
  useTranslate3d: false
};

var renderContent$1 = function renderContent(content, props) {
  if (react.isValidElement(content)) {
    return react.cloneElement(content, props);
  }

  if (isFunction_1(content)) {
    return content(props);
  }

  return react.createElement(DefaultTooltipContent, props);
};

var Tooltip =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$5(Tooltip, _PureComponent);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$5(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$5(this, (_getPrototypeOf2 = _getPrototypeOf$5(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      boxWidth: -1,
      boxHeight: -1
    };

    _this.getTranslate = function (_ref) {
      var key = _ref.key,
          tooltipDimension = _ref.tooltipDimension,
          viewBoxDimension = _ref.viewBoxDimension;
      var _this$props = _this.props,
          allowEscapeViewBox = _this$props.allowEscapeViewBox,
          coordinate = _this$props.coordinate,
          offset = _this$props.offset,
          position = _this$props.position,
          viewBox = _this$props.viewBox;

      if (position && isNumber$1(position[key])) {
        return position[key];
      }

      var restricted = coordinate[key] - tooltipDimension - offset;
      var unrestricted = coordinate[key] + offset;

      if (allowEscapeViewBox[key]) {
        return unrestricted;
      }

      var tooltipBoundary = coordinate[key] + tooltipDimension + offset;
      var viewBoxBoundary = viewBox[key] + viewBoxDimension;

      if (tooltipBoundary > viewBoxBoundary) {
        return Math.max(restricted, viewBox[key]);
      }

      return Math.max(unrestricted, viewBox[key]);
    };

    return _this;
  }

  _createClass$5(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBBox();
    }
  }, {
    key: "updateBBox",
    value: function updateBBox() {
      var _this$state = this.state,
          boxWidth = _this$state.boxWidth,
          boxHeight = _this$state.boxHeight;

      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var box = this.wrapperNode.getBoundingClientRect();

        if (Math.abs(box.width - boxWidth) > EPS$1 || Math.abs(box.height - boxHeight) > EPS$1) {
          this.setState({
            boxWidth: box.width,
            boxHeight: box.height
          });
        }
      } else if (boxWidth !== -1 || boxHeight !== -1) {
        this.setState({
          boxWidth: -1,
          boxHeight: -1
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          payload = _this$props2.payload,
          isAnimationActive = _this$props2.isAnimationActive,
          animationDuration = _this$props2.animationDuration,
          animationEasing = _this$props2.animationEasing,
          filterNull = _this$props2.filterNull,
          paylodUniqBy = _this$props2.paylodUniqBy;
      var finalPayload = getUniqPaylod$1(paylodUniqBy, filterNull && payload && payload.length ? payload.filter(function (entry) {
        return !isNil_1(entry.value);
      }) : payload);
      var hasPayload = finalPayload && finalPayload.length;
      var _this$props3 = this.props,
          content = _this$props3.content,
          viewBox = _this$props3.viewBox,
          coordinate = _this$props3.coordinate,
          position = _this$props3.position,
          active = _this$props3.active,
          wrapperStyle = _this$props3.wrapperStyle;

      var outerStyle = _objectSpread$6({
        pointerEvents: 'none',
        visibility: active && hasPayload ? 'visible' : 'hidden',
        position: 'absolute',
        top: 0
      }, wrapperStyle);

      var translateX, translateY;

      if (position && isNumber$1(position.x) && isNumber$1(position.y)) {
        translateX = position.x;
        translateY = position.y;
      } else {
        var _this$state2 = this.state,
            boxWidth = _this$state2.boxWidth,
            boxHeight = _this$state2.boxHeight;

        if (boxWidth > 0 && boxHeight > 0 && coordinate) {
          translateX = this.getTranslate({
            key: 'x',
            tooltipDimension: boxWidth,
            viewBoxDimension: viewBox.width
          });
          translateY = this.getTranslate({
            key: 'y',
            tooltipDimension: boxHeight,
            viewBoxDimension: viewBox.height
          });
        } else {
          outerStyle.visibility = 'hidden';
        }
      }

      outerStyle = _objectSpread$6({}, translateStyle({
        transform: this.props.useTranslate3d ? "translate3d(".concat(translateX, "px, ").concat(translateY, "px, 0)") : "translate(".concat(translateX, "px, ").concat(translateY, "px)")
      }), {}, outerStyle);

      if (isAnimationActive && active) {
        outerStyle = _objectSpread$6({}, translateStyle({
          transition: "transform ".concat(animationDuration, "ms ").concat(animationEasing)
        }), {}, outerStyle);
      }

      var cls = classnames(CLS_PREFIX, (_classNames = {}, _defineProperty$8(_classNames, "".concat(CLS_PREFIX, "-right"), isNumber$1(translateX) && coordinate && isNumber$1(coordinate.x) && translateX >= coordinate.x), _defineProperty$8(_classNames, "".concat(CLS_PREFIX, "-left"), isNumber$1(translateX) && coordinate && isNumber$1(coordinate.x) && translateX < coordinate.x), _defineProperty$8(_classNames, "".concat(CLS_PREFIX, "-bottom"), isNumber$1(translateY) && coordinate && isNumber$1(coordinate.y) && translateY >= coordinate.y), _defineProperty$8(_classNames, "".concat(CLS_PREFIX, "-top"), isNumber$1(translateY) && coordinate && isNumber$1(coordinate.y) && translateY < coordinate.y), _classNames));
      return react.createElement("div", {
        className: cls,
        style: outerStyle,
        ref: function ref(node) {
          _this2.wrapperNode = node;
        }
      }, renderContent$1(content, _objectSpread$6({}, this.props, {
        payload: finalPayload
      })));
    }
  }]);

  return Tooltip;
}(react.PureComponent);

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = propTypes$3;
Tooltip.defaultProps = defaultProps;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin$1(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty$9(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Cell() {
  return null;
}

Cell.propTypes = _objectSpread$7({}, PRESENTATION_ATTRIBUTES);
Cell.displayName = 'Cell';

var balancedMatch = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}

var balancedMatch$1 = balanced$1;
function balanced$1(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch$1(a, str);
  if (b instanceof RegExp) b = maybeMatch$1(b, str);

  var r = range$1(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch$1(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced$1.range = range$1;
function range$1(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    if(a===b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}

/*
 * Module dependencies
 */


/**
 * Expose `reduceFunctionCall`
 *
 * @type {Function}
 */
var reduceFunctionCall_1 = reduceFunctionCall;

/**
 * Walkthrough all expressions, evaluate them and insert them into the declaration
 *
 * @param {Array} expressions
 * @param {Object} declaration
 */

function reduceFunctionCall(string, functionRE, callback) {
  var call = string;
  return getFunctionCalls(string, functionRE).reduce(function(string, obj) {
    return string.replace(obj.functionIdentifier + "(" + obj.matches.body + ")", evalFunctionCall(obj.matches.body, obj.functionIdentifier, callback, call, functionRE))
  }, string)
}

/**
 * Parses expressions in a value
 *
 * @param {String} value
 * @returns {Array}
 * @api private
 */

function getFunctionCalls(call, functionRE) {
  var expressions = [];

  var fnRE = typeof functionRE === "string" ? new RegExp("\\b(" + functionRE + ")\\(") : functionRE;
  do {
    var searchMatch = fnRE.exec(call);
    if (!searchMatch) {
      return expressions
    }
    if (searchMatch[1] === undefined) {
      throw new Error("Missing the first couple of parenthesis to get the function identifier in " + functionRE)
    }
    var fn = searchMatch[1];
    var startIndex = searchMatch.index;
    var matches = balancedMatch$1("(", ")", call.substring(startIndex));

    if (!matches || matches.start !== searchMatch[0].length - 1) {
      throw new SyntaxError(fn + "(): missing closing ')' in the value '" + call + "'")
    }

    expressions.push({matches: matches, functionIdentifier: fn});
    call = matches.post;
  }
  while (fnRE.test(call))

  return expressions
}

/**
 * Evaluates an expression
 *
 * @param {String} expression
 * @returns {String}
 * @api private
 */

function evalFunctionCall (string, functionIdentifier, callback, call, functionRE) {
  // allow recursivity
  return callback(reduceFunctionCall(string, functionRE, callback), functionIdentifier, call)
}

var Mexp = function (parsed) {
  this.value = parsed;
};

Mexp.math = {
  isDegree: true, // mode of calculator
  acos: function (x) {
    return (Mexp.math.isDegree ? 180 / Math.PI * Math.acos(x) : Math.acos(x))
  },
  add: function (a, b) {
    return a + b
  },
  asin: function (x) {
    return (Mexp.math.isDegree ? 180 / Math.PI * Math.asin(x) : Math.asin(x))
  },
  atan: function (x) {
    return (Mexp.math.isDegree ? 180 / Math.PI * Math.atan(x) : Math.atan(x))
  },
  acosh: function (x) {
    return Math.log(x + Math.sqrt(x * x - 1))
  },
  asinh: function (x) {
    return Math.log(x + Math.sqrt(x * x + 1))
  },
  atanh: function (x) {
    return Math.log((1 + x) / (1 - x))
  },
  C: function (n, r) {
    var pro = 1;
    var other = n - r;
    var choice = r;
    if (choice < other) {
      choice = other;
      other = r;
    }
    for (var i = choice + 1; i <= n; i++) {
      pro *= i;
    }
    return pro / Mexp.math.fact(other)
  },
  changeSign: function (x) {
    return -x
  },
  cos: function (x) {
    if (Mexp.math.isDegree) x = Mexp.math.toRadian(x);
    return Math.cos(x)
  },
  cosh: function (x) {
    return (Math.pow(Math.E, x) + Math.pow(Math.E, -1 * x)) / 2
  },
  div: function (a, b) {
    return a / b
  },
  fact: function (n) {
    if (n % 1 !== 0) return 'NaN'
    var pro = 1;
    for (var i = 2; i <= n; i++) {
      pro *= i;
    }
    return pro
  },
  inverse: function (x) {
    return 1 / x
  },
  log: function (i) {
    return Math.log(i) / Math.log(10)
  },
  mod: function (a, b) {
    return a % b
  },
  mul: function (a, b) {
    return a * b
  },
  P: function (n, r) {
    var pro = 1;
    for (var i = Math.floor(n) - Math.floor(r) + 1; i <= Math.floor(n); i++) {
      pro *= i;
    }
    return pro
  },
  Pi: function (low, high, ex) {
    var pro = 1;
    for (var i = low; i <= high; i++) {
      pro *= Number(ex.postfixEval({
        n: i
      }));
    }
    return pro
  },
  pow10x: function (e) {
    var x = 1;
    while (e--) {
      x *= 10;
    }
    return x
  },
  sigma: function (low, high, ex) {
    var sum = 0;
    for (var i = low; i <= high; i++) {
      sum += Number(ex.postfixEval({
        n: i
      }));
    }
    return sum
  },
  sin: function (x) {
    if (Mexp.math.isDegree) x = Mexp.math.toRadian(x);
    return Math.sin(x)
  },
  sinh: function (x) {
    return (Math.pow(Math.E, x) - Math.pow(Math.E, -1 * x)) / 2
  },
  sub: function (a, b) {
    return a - b
  },
  tan: function (x) {
    if (Mexp.math.isDegree) x = Mexp.math.toRadian(x);
    return Math.tan(x)
  },
  tanh: function (x) {
    return Mexp.sinha(x) / Mexp.cosha(x)
  },
  toRadian: function (x) {
    return x * Math.PI / 180
  }
};
Mexp.Exception = function (message) {
  this.message = message;
};
var math_function = Mexp;

function inc(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += val;
  }
  return arr
}
var token = ['sin', 'cos', 'tan', 'pi', '(', ')', 'P', 'C', ' ',
  'asin', 'acos', 'atan', '7', '8', '9', 'int',
  'cosh', 'acosh', 'ln', '^', 'root', '4', '5', '6', '/', '!',
  'tanh', 'atanh', 'Mod', '1', '2', '3', '*',
  'sinh', 'asinh', 'e', 'log', '0', '.', '+', '-', ',', 'Sigma', 'n', 'Pi', 'pow'];
var show = ['sin', 'cos', 'tan', '&pi;', '(', ')', 'P', 'C', ' ',
  'asin', 'acos', 'atan', '7', '8', '9', 'Int',
  'cosh', 'acosh', ' ln', '^', 'root', '4', '5', '6', '&divide;', '!',
  'tanh', 'atanh', ' Mod ', '1', '2', '3', '&times;',
  'sinh', 'asinh', 'e', ' log', '0', '.', '+', '-', ',', '&Sigma;', 'n', '&Pi;', 'pow'];
var eva = [math_function.math.sin, math_function.math.cos, math_function.math.tan, 'PI', '(', ')', math_function.math.P, math_function.math.C, ' '.anchor,
math_function.math.asin, math_function.math.acos, math_function.math.atan, '7', '8', '9', Math.floor,
math_function.math.cosh, math_function.math.acosh, Math.log, Math.pow, Math.sqrt, '4', '5', '6', math_function.math.div, math_function.math.fact,
math_function.math.tanh, math_function.math.atanh, math_function.math.mod, '1', '2', '3', math_function.math.mul,
math_function.math.sinh, math_function.math.asinh, 'E', math_function.math.log, '0', '.', math_function.math.add, math_function.math.sub, ',', math_function.math.sigma, 'n', math_function.math.Pi, Math.pow];
var preced = {
  0: 11,
  1: 0,
  2: 3,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 11,
  8: 11,
  9: 1,
  10: 10,
  11: 0,
  12: 11,
  13: 0,
  14: -1 // will be filtered after lexer
}; // stores precedence by types
var type = [0, 0, 0, 3, 4, 5, 10, 10, 14,
  0, 0, 0, 1, 1, 1, 0,
  0, 0, 0, 10, 0, 1, 1, 1, 2, 7,
  0, 0, 2, 1, 1, 1, 2,
  0, 0, 3, 0, 1, 6, 9, 9, 11, 12, 13, 12, 8];
/*
0 : function with syntax function_name(Maths_exp)
1 : numbers
2 : binary operators like * / Mod left associate and same precedence
3 : Math constant values like e,pi,Cruncher ans
4 : opening bracket
5 : closing bracket
6 : decimal
7 : function with syntax (Math_exp)function_name
8: function with syntax function_name(Math_exp1,Math_exp2)
9 : binary operator like +,-
10: binary operator like P C or ^
11: ,
12: function with , seperated three parameters and third parameter is a string that will be mexp string
13: variable of Sigma function
*/
var type0 = {
  0: true,
  1: true,
  3: true,
  4: true,
  6: true,
  8: true,
  9: true,
  12: true,
  13: true,
  14: true
}; // type2:true,type4:true,type9:true,type11:true,type21:true,type22
var type1 = {
  0: true,
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
  6: true,
  7: true,
  8: true,
  9: true,
  10: true,
  11: true,
  12: true,
  13: true
}; // type3:true,type5:true,type7:true,type23
var type1Asterick = {
  0: true,
  3: true,
  4: true,
  8: true,
  12: true,
  13: true
};
var empty = {};
var type3Asterick = {
  0: true,
  1: true,
  3: true,
  4: true,
  6: true,
  8: true,
  12: true,
  13: true
}; // type_5:true,type_7:true,type_23
var type6 = {
  1: true
};
var newAr = [
  [],
  ['1', '2', '3', '7', '8', '9', '4', '5', '6', '+', '-', '*', '/', '(', ')', '^', '!', 'P', 'C', 'e', '0', '.', ',', 'n', ' '],
  ['pi', 'ln', 'Pi'],
  ['sin', 'cos', 'tan', 'Del', 'int', 'Mod', 'log', 'pow'],
  ['asin', 'acos', 'atan', 'cosh', 'root', 'tanh', 'sinh'],
  ['acosh', 'atanh', 'asinh', 'Sigma']
];

function match(str1, str2, i, x) {
  for (var f = 0; f < x; f++) {
    if (str1[i + f] !== str2[f]) {
      return false
    }
  }
  return true
}
math_function.addToken = function (tokens) {
  for (var i = 0; i < tokens.length; i++) {
    var x = tokens[i].token.length;
    var temp = -1;

    // newAr is a specially designed data structure index of 1d array = length of tokens
    newAr[x] = newAr[x] || [];
    for (var y = 0; y < newAr[x].length; y++) {
      if (tokens[i].token === newAr[x][y]) {
        temp = token.indexOf(newAr[x][y]);
        break
      }
    }
    if (temp === -1) {
      token.push(tokens[i].token);
      type.push(tokens[i].type);
      if (newAr.length <= tokens[i].token.length) {
        newAr[tokens[i].token.length] = [];
      }
      newAr[tokens[i].token.length].push(tokens[i].token);
      eva.push(tokens[i].value);
      show.push(tokens[i].show);
    } else { // overwrite
      token[temp] = tokens[i].token;
      type[temp] = tokens[i].type;
      eva[temp] = tokens[i].value;
      show[temp] = tokens[i].show;
    }
  }
};

function tokenize(string) {
  var nodes = [];
  var length = string.length;
  var key, x, y;
  for (var i = 0; i < length; i++) {
    if (i < length - 1 && string[i] === ' ' && string[i + 1] === ' ') {
      continue
    }
    key = '';
    for (x = (string.length - i > (newAr.length - 2) ? newAr.length - 1 : string.length - i); x > 0; x--) {
      if (newAr[x] === undefined) continue;
      for (y = 0; y < newAr[x].length; y++) {
        if (match(string, newAr[x][y], i, x)) {
          key = newAr[x][y];
          y = newAr[x].length;
          x = 0;
        }
      }
    }
    i += key.length - 1;
    if (key === '') {
      throw (new math_function.Exception('Can\'t understand after ' + string.slice(i)))
    }
    var index = token.indexOf(key);
    nodes.push({
      index: index,
      token: key,
      type: type[index],
      eval: eva[index],
      precedence: preced[type[index]],
      show: show[index]
    });
  }
  return nodes;
}

math_function.lex = function (inp, tokens) {


  var changeSignObj = {
    value: math_function.math.changeSign,
    type: 0,
    pre: 21,
    show: '-'
  };
  var closingParObj = {
    value: ')',
    show: ')',
    type: 5,
    pre: 0
  };
  var openingParObj = {
    value: '(',
    type: 4,
    pre: 0,
    show: '('
  };
  var str = [openingParObj];

  var ptc = []; // Parenthesis to close at the beginning is after one token
  var inpStr = inp;
  var allowed = type0;
  var bracToClose = 0;
  var asterick = empty;
  var prevKey = '';
  var i;
  if (typeof tokens !== 'undefined') {
    math_function.addToken(tokens);
  }
  var obj = {};
  var nodes = tokenize(inpStr);
  for (i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.type === 14) {
      if (i > 0 &&
        i < nodes.length - 1 &&
        nodes[i + 1].type === 1 &&
        (nodes[i - 1].type === 1 || nodes[i - 1].type === 6))
        throw new math_function.Exception('Unexpected Space')
      continue
    }

    var index = node.index;
    var cToken = node.token;
    var cType = node.type;
    var cEv = node.eval;
    var cPre = node.precedence;
    var cShow = node.show;
    var pre = str[str.length - 1];
    var j;
    for (j = ptc.length; j--;) { // loop over ptc
      if (ptc[j] === 0) {
        if ([0, 2, 3, 4, 5, 9, 11, 12, 13].indexOf(cType) !== -1) {
          if (allowed[cType] !== true) {
            console.log(inp, node, nodes, allowed);
            throw (new math_function.Exception(cToken + ' is not allowed after ' + prevKey))
          }
          str.push(closingParObj);
          allowed = type1;
          asterick = type3Asterick;
          inc(ptc, -1).pop();
        }
      } else break
    }
    if (allowed[cType] !== true) {
      throw (new math_function.Exception(cToken + ' is not allowed after ' + prevKey))
    }
    if (asterick[cType] === true) {
      cType = 2;
      cEv = math_function.math.mul;
      cShow = '&times;';
      cPre = 3;
      i = i - cToken.length;
    }
    obj = {
      value: cEv,
      type: cType,
      pre: cPre,
      show: cShow
    };
    if (cType === 0) {
      allowed = type0;
      asterick = empty;
      inc(ptc, 2).push(2);
      str.push(obj);
      str.push(openingParObj);
    } else if (cType === 1) {
      if (pre.type === 1) {
        pre.value += cEv;
        inc(ptc, 1);
      } else {
        str.push(obj);
      }
      allowed = type1;
      asterick = type1Asterick;
    } else if (cType === 2) {
      allowed = type0;
      asterick = empty;
      inc(ptc, 2);
      str.push(obj);
    } else if (cType === 3) { // constant
      str.push(obj);
      allowed = type1;
      asterick = type3Asterick;
    } else if (cType === 4) {
      inc(ptc, 1);
      bracToClose++;
      allowed = type0;
      asterick = empty;
      str.push(obj);
    } else if (cType === 5) {
      if (!bracToClose) {
        throw (new math_function.Exception('Closing parenthesis are more than opening one, wait What!!!'))
      }
      bracToClose--;
      allowed = type1;
      asterick = type3Asterick;
      str.push(obj);
      inc(ptc, 1);
    } else if (cType === 6) {
      if (pre.hasDec) {
        throw (new math_function.Exception('Two decimals are not allowed in one number'))
      }
      if (pre.type !== 1) {
        pre = {
          value: 0,
          type: 1,
          pre: 0
        }; // pre needs to be changed as it will the last value now to be safe in later code
        str.push(pre);
        inc(ptc, -1);
      }
      allowed = type6;
      inc(ptc, 1);
      asterick = empty;
      pre.value += cEv;
      pre.hasDec = true;
    } else if (cType === 7) {
      allowed = type1;
      asterick = type3Asterick;
      inc(ptc, 1);
      str.push(obj);
    }
    if (cType === 8) {
      allowed = type0;
      asterick = empty;
      inc(ptc, 4).push(4);
      str.push(obj);
      str.push(openingParObj);
    } else if (cType === 9) {
      if (pre.type === 9) {
        if (pre.value === math_function.math.add) {
          pre.value = cEv;
          pre.show = cShow;
          inc(ptc, 1);
        } else if (pre.value === math_function.math.sub && cShow === '-') {
          pre.value = math_function.math.add;
          pre.show = '+';
          inc(ptc, 1);
        }
      } else if (pre.type !== 5 && pre.type !== 7 && pre.type !== 1 && pre.type !== 3 && pre.type !== 13) { // changesign only when negative is found
        if (cToken === '-') { // do nothing for + token
          // don't add with the above if statement as that will run the else statement of parent if on Ctoken +
          allowed = type0;
          asterick = empty;
          inc(ptc, 2).push(2);
          str.push(changeSignObj);
          str.push(openingParObj);
        }
      } else {
        str.push(obj);
        inc(ptc, 2);
      }
      allowed = type0;
      asterick = empty;
    } else if (cType === 10) {
      allowed = type0;
      asterick = empty;
      inc(ptc, 2);
      str.push(obj);
    } else if (cType === 11) {
      allowed = type0;
      asterick = empty;
      str.push(obj);
    } else if (cType === 12) {
      allowed = type0;
      asterick = empty;
      inc(ptc, 6).push(6);
      str.push(obj);
      str.push(openingParObj);
    } else if (cType === 13) {
      allowed = type1;
      asterick = type3Asterick;
      str.push(obj);
    }
    inc(ptc, -1);
    prevKey = cToken;
  }
  for (j = ptc.length; j--;) { // loop over ptc
    if (ptc[j] === 0) {
      str.push(closingParObj);
      inc(ptc, -1).pop();
    } else break  // if it is not zero so before ptc also cant be zero
  }
  if (allowed[5] !== true) {
    throw (new math_function.Exception('complete the expression'))
  }
  while (bracToClose--) {
    str.push(closingParObj);
  }

  str.push(closingParObj);
  //        console.log(str);
  return new math_function(str)
};
var lexer = math_function;

lexer.prototype.toPostfix = function () {
	var post = [], elem, popped, prep, pre, ele;
	var stack = [{ value: "(", type: 4, pre: 0 }];
	var arr = this.value;
	for (var i = 1; i < arr.length; i++) {
		if (arr[i].type === 1 || arr[i].type === 3 || arr[i].type === 13) {	//if token is number,constant,or n(which is also a special constant in our case)
			if (arr[i].type === 1)
				arr[i].value = Number(arr[i].value);
			post.push(arr[i]);
		}
		else if (arr[i].type === 4) {
			stack.push(arr[i]);
		}
		else if (arr[i].type === 5) {
			while ((popped = stack.pop()).type !== 4) {
				post.push(popped);
			}
		}
		else if (arr[i].type === 11) {
			while ((popped = stack.pop()).type !== 4) {
				post.push(popped);
			}
			stack.push(popped);
		}
		else {
			elem = arr[i];
			pre = elem.pre;
			ele = stack[stack.length - 1];
			prep = ele.pre;
			var flag = ele.value == 'Math.pow' && elem.value == 'Math.pow';
			if (pre > prep) stack.push(elem);
			else {
				while (prep >= pre && !flag || flag && pre < prep) {
					popped = stack.pop();
					ele = stack[stack.length - 1];
					post.push(popped);
					prep = ele.pre;
					flag = elem.value == 'Math.pow' && ele.value == 'Math.pow';
				}
				stack.push(elem);
			}
		}
	}
	return new lexer(post);
};
var postfix = lexer;

postfix.prototype.postfixEval = function (UserDefined) {
	UserDefined=UserDefined||{};
	UserDefined.PI=Math.PI;
	UserDefined.E=Math.E;
	var stack=[],pop1,pop2,pop3;
	var arr=this.value;
	var bool=(typeof UserDefined.n!=="undefined");
	for(var i=0;i<arr.length;i++){
		if(arr[i].type===1){
			stack.push({value:arr[i].value,type:1});
		}
		else if(arr[i].type===3){
			stack.push({value:UserDefined[arr[i].value],type:1});
		}
		else if(arr[i].type===0){
			if(typeof stack[stack.length-1].type==="undefined"){
				stack[stack.length-1].value.push(arr[i]);
			}
			else stack[stack.length-1].value=arr[i].value(stack[stack.length-1].value);
		}
		else if(arr[i].type===7){
			if(typeof stack[stack.length-1].type==="undefined"){
				stack[stack.length-1].value.push(arr[i]);
			}
			else stack[stack.length-1].value=arr[i].value(stack[stack.length-1].value);
		}
		else if(arr[i].type===8){
			pop1=stack.pop();
			pop2=stack.pop();
			stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)});
		}
		else if(arr[i].type===10){
			pop1=stack.pop();
			pop2=stack.pop();
			if(typeof pop2.type==="undefined"){
				pop2.value=pop2.concat(pop1);
				pop2.value.push(arr[i]);
				stack.push(pop2);
			}
			else if (typeof pop1.type==="undefined") {
				pop1.unshift(pop2);
				pop1.push(arr[i]);
				stack.push(pop1);
			}
			else {
				stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)});
            }
		}
		else if(arr[i].type===2||arr[i].type===9){
			pop1=stack.pop();
			pop2=stack.pop();
			if(typeof pop2.type==="undefined"){
				pop2=pop2.concat(pop1);
				pop2.push(arr[i]);
				stack.push(pop2);
			}
			else if (typeof pop1.type==="undefined") {
				pop1.unshift(pop2);
				pop1.push(arr[i]);
				stack.push(pop1);
			}
			else {
				stack.push({type:1,value:arr[i].value(pop2.value,pop1.value)});
			}
		}
		else if(arr[i].type===12){
			pop1=stack.pop();
			if (typeof pop1.type!=="undefined") {
				pop1=[pop1];
			}
			pop2=stack.pop();
			pop3=stack.pop();
			stack.push({type:1,value:arr[i].value(pop3.value,pop2.value,new postfix(pop1))});
		}
		else if(arr[i].type===13){
			if(bool){
				stack.push({value:UserDefined[arr[i].value],type:3});
			}
			else stack.push([arr[i]]);
		}
	}
	if (stack.length>1) {
		throw(new postfix.Exception("Uncaught Syntax error"));
	}
	return stack[0].value>1000000000000000?"Infinity":parseFloat(stack[0].value.toFixed(15));
};
postfix.eval=function(str,tokens,obj){
	if (typeof tokens==="undefined") {
		return this.lex(str).toPostfix().postfixEval();
	}
	else if (typeof obj==="undefined") {
		if (typeof tokens.length!=="undefined") 
			return this.lex(str,tokens).toPostfix().postfixEval();
		else
			return this.lex(str).toPostfix().postfixEval(tokens);
	}
	else
		return this.lex(str,tokens).toPostfix().postfixEval(obj);
};
var postfix_evaluator=postfix;

postfix_evaluator.prototype.formulaEval = function () {
	var pop1,pop2,pop3;
	var disp=[];
	var arr=this.value;
	for(var i=0;i<arr.length;i++){
		if(arr[i].type===1||arr[i].type===3){
			disp.push({value:arr[i].type===3?arr[i].show:arr[i].value,type:1});
		}
		else if(arr[i].type===13){
			disp.push({value:arr[i].show,type:1});
		}
		else if(arr[i].type===0){
			disp[disp.length-1]={value:arr[i].show+(arr[i].show!="-"?"(":"")+disp[disp.length-1].value+(arr[i].show!="-"?")":""),type:0};
		}
		else if(arr[i].type===7){
			disp[disp.length-1]={value:(disp[disp.length-1].type!=1?"(":"")+disp[disp.length-1].value+(disp[disp.length-1].type!=1?")":"")+arr[i].show,type:7};
		}
		else if(arr[i].type===10){
			pop1=disp.pop();
			pop2=disp.pop();
			if(arr[i].show==='P'||arr[i].show==='C')disp.push({value:"<sup>"+pop2.value+"</sup>"+arr[i].show+"<sub>"+pop1.value+"</sub>",type:10});
			else disp.push({value:(pop2.type!=1?"(":"")+pop2.value+(pop2.type!=1?")":"")+"<sup>"+pop1.value+"</sup>",type:1});
		}
		else if(arr[i].type===2||arr[i].type===9){
			pop1=disp.pop();
			pop2=disp.pop();
			disp.push({value:(pop2.type!=1?"(":"")+pop2.value+(pop2.type!=1?")":"")+arr[i].show+(pop1.type!=1?"(":"")+pop1.value+(pop1.type!=1?")":""),type:arr[i].type});
		}
		else if(arr[i].type===12){
			pop1=disp.pop();
			pop2=disp.pop();
			pop3=disp.pop();
			disp.push({value:arr[i].show+"("+pop3.value+","+pop2.value+","+pop1.value+")",type:12});
		}
	}
	return disp[0].value;
};
var formula_evaluator=postfix_evaluator;

/**
 * Module dependencies
 */




/**
 * Constantes
 */
var MAX_STACK = 100; // should be enough for a single calc()...
var NESTED_CALC_RE = /(\+|\-|\*|\\|[^a-z]|)(\s*)(\()/g;

/**
 * Global variables
 */
var stack;

/**
 * Expose reduceCSSCalc plugin
 *
 * @type {Function}
 */
var reduceCssCalc = reduceCSSCalc;

/**
 * Reduce CSS calc() in a string, whenever it's possible
 *
 * @param {String} value css input
 */
function reduceCSSCalc(value, decimalPrecision) {
  stack = 0;
  decimalPrecision = Math.pow(10, decimalPrecision === undefined ? 5 : decimalPrecision);

  // Allow calc() on multiple lines
  value = value.replace(/\n+/g, " ");

  /**
   * Evaluates an expression
   *
   * @param {String} expression
   * @returns {String}
   */
  function evaluateExpression (expression, functionIdentifier, call) {
    if (stack++ > MAX_STACK) {
      stack = 0;
      throw new Error("Call stack overflow for " + call)
    }

    if (expression === "") {
      throw new Error(functionIdentifier + "(): '" + call + "' must contain a non-whitespace string")
    }

    expression = evaluateNestedExpression(expression, call);

    var units = getUnitsInExpression(expression);

    // If the expression contains multiple units or CSS variables,
    // then let the expression be (i.e. browser calc())
    if (units.length > 1 || expression.indexOf("var(") > -1) {
      return functionIdentifier + "(" + expression + ")"
    }

    var unit = units[0] || "";

    if (unit === "%") {
      // Convert percentages to numbers, to handle expressions like: 50% * 50% (will become: 25%):
      // console.log(expression)
      expression = expression.replace(/\b[0-9\.]+%/g, function(percent) {
        return parseFloat(percent.slice(0, -1)) * 0.01
      });
    }

    // Remove units in expression:
    var toEvaluate = expression.replace(new RegExp(unit, "gi"), "");
    var result;

    try {
      result = formula_evaluator.eval(toEvaluate);
    }
    catch (e) {
      return functionIdentifier + "(" + expression + ")"
    }

    // Transform back to a percentage result:
    if (unit === "%") {
      result *= 100;
    }

    // adjust rounding shit
    // (0.1 * 0.2 === 0.020000000000000004)
    if (functionIdentifier.length || unit === "%") {
      result = Math.round(result * decimalPrecision) / decimalPrecision;
    }

    // Add unit
    result += unit;

    return result
  }

  /**
   * Evaluates nested expressions
   *
   * @param {String} expression
   * @returns {String}
   */
  function evaluateNestedExpression(expression, call) {
    // Remove the calc part from nested expressions to ensure
    // better browser compatibility
    expression = expression.replace(/((?:\-[a-z]+\-)?calc)/g, "");
    var evaluatedPart = "";
    var nonEvaluatedPart = expression;
    var matches;
    while ((matches = NESTED_CALC_RE.exec(nonEvaluatedPart))) {
      if (matches[0].index > 0) {
        evaluatedPart += nonEvaluatedPart.substring(0, matches[0].index);
      }

      var balancedExpr = balancedMatch("(", ")", nonEvaluatedPart.substring([0].index));
      if (balancedExpr.body === "") {
        throw new Error("'" + expression + "' must contain a non-whitespace string")
      }

      var evaluated = evaluateExpression(balancedExpr.body, "", call);

      evaluatedPart += balancedExpr.pre + evaluated;
      nonEvaluatedPart = balancedExpr.post;
    }

    return evaluatedPart + nonEvaluatedPart
  }

  return reduceFunctionCall_1(value, /((?:\-[a-z]+\-)?calc)\(/, evaluateExpression)
}

/**
 * Checks what units are used in an expression
 *
 * @param {String} expression
 * @returns {Array}
 */

function getUnitsInExpression(expression) {
  var uniqueUnits = [];
  var uniqueLowerCaseUnits = [];
  var unitRegEx = /[\.0-9]([%a-z]+)/gi;
  var matches = unitRegEx.exec(expression);

  while (matches) {
    if (!matches || !matches[1]) {
      continue
    }

    if (uniqueLowerCaseUnits.indexOf(matches[1].toLowerCase()) === -1) {
      uniqueUnits.push(matches[1]);
      uniqueLowerCaseUnits.push(matches[1].toLowerCase());
    }

    matches = unitRegEx.exec(expression);
  }

  return uniqueUnits
}

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty$a(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$a(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray$4(arr) { return _arrayWithoutHoles$4(arr) || _iterableToArray$5(arr) || _nonIterableSpread$4(); }

function _nonIterableSpread$4() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$5(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$4(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
var stringCache = {
  widthCache: {},
  cacheCount: 0
};
var MAX_CACHE_NUM = 2000;
var SPAN_STYLE = {
  position: 'absolute',
  top: '-20000px',
  left: 0,
  padding: 0,
  margin: 0,
  border: 'none',
  whiteSpace: 'pre'
};
var STYLE_LIST = ['minWidth', 'maxWidth', 'width', 'minHeight', 'maxHeight', 'height', 'top', 'left', 'fontSize', 'lineHeight', 'padding', 'margin', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom'];
var MEASUREMENT_SPAN_ID = 'recharts_measurement_span';

function autoCompleteStyle(name, value) {
  if (STYLE_LIST.indexOf(name) >= 0 && value === +value) {
    return "".concat(value, "px");
  }

  return value;
}

function camelToMiddleLine(text) {
  var strs = text.split('');
  var formatStrs = strs.reduce(function (result, entry) {
    if (entry === entry.toUpperCase()) {
      return [].concat(_toConsumableArray$4(result), ['-', entry.toLowerCase()]);
    }

    return [].concat(_toConsumableArray$4(result), [entry]);
  }, []);
  return formatStrs.join('');
}

var getStyleString = function getStyleString(style) {
  return Object.keys(style).reduce(function (result, s) {
    return "".concat(result).concat(camelToMiddleLine(s), ":").concat(autoCompleteStyle(s, style[s]), ";");
  }, '');
};
var getStringSize = function getStringSize(text) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (text === undefined || text === null || isSsr()) {
    return {
      width: 0,
      height: 0
    };
  }

  var str = "".concat(text);
  var styleString = getStyleString(style);
  var cacheKey = "".concat(str, "-").concat(styleString);

  if (stringCache.widthCache[cacheKey]) {
    return stringCache.widthCache[cacheKey];
  }

  try {
    var measurementSpan = document.getElementById(MEASUREMENT_SPAN_ID);

    if (!measurementSpan) {
      measurementSpan = document.createElement('span');
      measurementSpan.setAttribute('id', MEASUREMENT_SPAN_ID);
      document.body.appendChild(measurementSpan);
    } // Need to use CSS Object Model (CSSOM) to be able to comply with Content Security Policy (CSP)
    // https://en.wikipedia.org/wiki/Content_Security_Policy


    var measurementSpanStyle = _objectSpread$8({}, SPAN_STYLE, {}, style);

    Object.keys(measurementSpanStyle).map(function (styleKey) {
      measurementSpan.style[styleKey] = measurementSpanStyle[styleKey];
      return styleKey;
    });
    measurementSpan.textContent = str;
    var rect = measurementSpan.getBoundingClientRect();
    var result = {
      width: rect.width,
      height: rect.height
    };
    stringCache.widthCache[cacheKey] = result;

    if (++stringCache.cacheCount > MAX_CACHE_NUM) {
      stringCache.cacheCount = 0;
      stringCache.widthCache = {};
    }

    return result;
  } catch (e) {
    return {
      width: 0,
      height: 0
    };
  }
};
var getOffset = function getOffset(el) {
  var html = el.ownerDocument.documentElement;
  var box = {
    top: 0,
    left: 0
  }; // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)

  if (typeof el.getBoundingClientRect !== 'undefined') {
    box = el.getBoundingClientRect();
  }

  return {
    top: box.top + window.pageYOffset - html.clientTop,
    left: box.left + window.pageXOffset - html.clientLeft
  };
};
/**
 * Calculate coordinate of cursor in chart
 * @param  {Object} event  Event object
 * @param  {Object} offset The offset of main part in the svg element
 * @return {Object}        {chartX, chartY}
 */

var calculateChartCoordinate = function calculateChartCoordinate(event, offset) {
  return {
    chartX: Math.round(event.pageX - offset.left),
    chartY: Math.round(event.pageY - offset.top)
  };
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty$b(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$b(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof$7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$6(self, call) { if (call && (_typeof$7(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$6(self); }

function _assertThisInitialized$6(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$6(o) { _getPrototypeOf$6 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$6(o); }

function _inherits$6(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$6(subClass, superClass); }

function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }
var BREAKING_SPACES = /[ \f\n\r\t\v\u2028\u2029]+/;

var calculateWordWidths = function calculateWordWidths(props) {
  try {
    var words = !isNil_1(props.children) ? props.children.toString().split(BREAKING_SPACES) : [];
    var wordsWithComputedWidth = words.map(function (word) {
      return {
        word: word,
        width: getStringSize(word, props.style).width
      };
    });
    var spaceWidth = getStringSize("\xA0", props.style).width;
    return {
      wordsWithComputedWidth: wordsWithComputedWidth,
      spaceWidth: spaceWidth
    };
  } catch (e) {
    return null;
  }
};

var Text =
/*#__PURE__*/
function (_Component) {
  _inherits$6(Text, _Component);

  function Text(_props) {
    var _this;

    _classCallCheck$6(this, Text);

    _this = _possibleConstructorReturn$6(this, _getPrototypeOf$6(Text).call(this, _props));

    _this.getWordsWithoutCalculate = function (props) {
      var words = !isNil_1(props.children) ? props.children.toString().split(BREAKING_SPACES) : [];
      return [{
        words: words
      }];
    };

    _this.state = {
      wordsByLines: _this.getWordsByLines(_props, true)
    };
    return _this;
  }

  _createClass$6(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateWordsByLines(this.props, true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.width !== this.props.width || prevProps.scaleToFit !== this.props.scaleToFit || prevProps.children !== this.props.children || prevProps.style !== this.props.style) {
        var needCalculate = this.props.children !== prevProps.children || this.props.style !== prevProps.style;
        this.updateWordsByLines(this.props, needCalculate);
      }
    }
  }, {
    key: "updateWordsByLines",
    value: function updateWordsByLines(props, needCalculate) {
      this.setState({
        wordsByLines: this.getWordsByLines(props, needCalculate)
      });
    }
  }, {
    key: "getWordsByLines",
    value: function getWordsByLines(props, needCalculate) {
      // Only perform calculations if using features that require them (multiline, scaleToFit)
      if ((props.width || props.scaleToFit) && !isSsr()) {
        if (needCalculate) {
          var wordWidths = calculateWordWidths(props);

          if (wordWidths) {
            var wordsWithComputedWidth = wordWidths.wordsWithComputedWidth,
                spaceWidth = wordWidths.spaceWidth;
            this.wordsWithComputedWidth = wordsWithComputedWidth;
            this.spaceWidth = spaceWidth;
          } else {
            return this.getWordsWithoutCalculate(props);
          }
        }

        return this.calculateWordsByLines(this.wordsWithComputedWidth, this.spaceWidth, props.width);
      }

      return this.getWordsWithoutCalculate(props);
    }
  }, {
    key: "calculateWordsByLines",
    value: function calculateWordsByLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
      var scaleToFit = this.props.scaleToFit;
      return (wordsWithComputedWidth || []).reduce(function (result, _ref) {
        var word = _ref.word,
            width = _ref.width;
        var currentLine = result[result.length - 1];

        if (currentLine && (lineWidth == null || scaleToFit || currentLine.width + width + spaceWidth < lineWidth)) {
          // Word can be added to an existing line
          currentLine.words.push(word);
          currentLine.width += width + spaceWidth;
        } else {
          // Add first word to line or word is too long to scaleToFit on existing line
          var newLine = {
            words: [word],
            width: width
          };
          result.push(newLine);
        }

        return result;
      }, []);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dx = _this$props.dx,
          dy = _this$props.dy,
          textAnchor = _this$props.textAnchor,
          verticalAnchor = _this$props.verticalAnchor,
          scaleToFit = _this$props.scaleToFit,
          angle = _this$props.angle,
          lineHeight = _this$props.lineHeight,
          capHeight = _this$props.capHeight,
          className = _this$props.className,
          textProps = _objectWithoutProperties$4(_this$props, ["dx", "dy", "textAnchor", "verticalAnchor", "scaleToFit", "angle", "lineHeight", "capHeight", "className"]);

      var wordsByLines = this.state.wordsByLines;

      if (!isNumOrStr(textProps.x) || !isNumOrStr(textProps.y)) {
        return null;
      }

      var x = textProps.x + (isNumber$1(dx) ? dx : 0);
      var y = textProps.y + (isNumber$1(dy) ? dy : 0);
      var startDy;

      switch (verticalAnchor) {
        case 'start':
          startDy = reduceCssCalc("calc(".concat(capHeight, ")"));
          break;

        case 'middle':
          startDy = reduceCssCalc("calc(".concat((wordsByLines.length - 1) / 2, " * -").concat(lineHeight, " + (").concat(capHeight, " / 2))"));
          break;

        default:
          startDy = reduceCssCalc("calc(".concat(wordsByLines.length - 1, " * -").concat(lineHeight, ")"));
          break;
      }

      var transforms = [];

      if (scaleToFit) {
        var lineWidth = wordsByLines[0].width;
        transforms.push("scale(".concat(this.props.width / lineWidth, ")"));
      }

      if (angle) {
        transforms.push("rotate(".concat(angle, ", ").concat(x, ", ").concat(y, ")"));
      }

      if (transforms.length) {
        textProps.transform = transforms.join(' ');
      }

      return react.createElement("text", _extends$4({}, getPresentationAttributes(textProps), filterEventAttributes(textProps), {
        x: x,
        y: y,
        className: classnames('recharts-text', className),
        textAnchor: textAnchor
      }), wordsByLines.map(function (line, index) {
        return (// eslint-disable-next-line react/no-array-index-key
          react.createElement("tspan", {
            x: x,
            dy: index === 0 ? startDy : lineHeight,
            key: index
          }, line.words.join(' '))
        );
      }));
    }
  }]);

  return Text;
}(react.Component);

Text.propTypes = _objectSpread$9({}, PRESENTATION_ATTRIBUTES, {
  scaleToFit: propTypes.bool,
  angle: propTypes.number,
  textAnchor: propTypes.oneOf(['start', 'middle', 'end', 'inherit']),
  verticalAnchor: propTypes.oneOf(['start', 'middle', 'end']),
  style: propTypes.object
});
Text.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: '1em',
  capHeight: '0.71em',
  // Magic number from d3
  scaleToFit: false,
  textAnchor: 'start',
  verticalAnchor: 'end' // Maintain compat with existing charts / default SVG behavior

};

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol_1(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

var _baseExtremum = baseExtremum;

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

var _baseGt = baseGt;

/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */
function max$1(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity_1, _baseGt)
    : undefined;
}

var max_1 = max$1;

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

var _baseLt = baseLt;

/**
 * Computes the minimum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => undefined
 */
function min$2(array) {
  return (array && array.length)
    ? _baseExtremum(array, identity_1, _baseLt)
    : undefined;
}

var min_1 = min$2;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}

var map_1 = map;

/**
 * Creates a flattened array of values by running each element in `collection`
 * thru `iteratee` and flattening the mapped results. The iteratee is invoked
 * with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [n, n];
 * }
 *
 * _.flatMap([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */
function flatMap(collection, iteratee) {
  return _baseFlatten(map_1(collection, iteratee), 1);
}

var flatMap_1 = flatMap;

var MAX_DIGITS = 1e9, defaults = {
  precision: 20,
  rounding: 4,
  toExpNeg: -7,
  toExpPos: 21,
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Decimal, external = true, decimalError = "[DecimalError] ", invalidArgument = decimalError + "Invalid argument: ", exponentOutOfRange = decimalError + "Exponent out of range: ", mathfloor = Math.floor, mathpow = Math.pow, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, ONE, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER$2 = 9007199254740991, MAX_E = mathfloor(MAX_SAFE_INTEGER$2 / LOG_BASE), P = {};
P.absoluteValue = P.abs = function() {
  var x = new this.constructor(this);
  if (x.s)
    x.s = 1;
  return x;
};
P.comparedTo = P.cmp = function(y) {
  var i, j, xdL, ydL, x = this;
  y = new x.constructor(y);
  if (x.s !== y.s)
    return x.s || -y.s;
  if (x.e !== y.e)
    return x.e > y.e ^ x.s < 0 ? 1 : -1;
  xdL = x.d.length;
  ydL = y.d.length;
  for (i = 0, j = xdL < ydL ? xdL : ydL; i < j; ++i) {
    if (x.d[i] !== y.d[i])
      return x.d[i] > y.d[i] ^ x.s < 0 ? 1 : -1;
  }
  return xdL === ydL ? 0 : xdL > ydL ^ x.s < 0 ? 1 : -1;
};
P.decimalPlaces = P.dp = function() {
  var x = this, w = x.d.length - 1, dp = (w - x.e) * LOG_BASE;
  w = x.d[w];
  if (w)
    for (; w % 10 == 0; w /= 10)
      dp--;
  return dp < 0 ? 0 : dp;
};
P.dividedBy = P.div = function(y) {
  return divide$1(this, new this.constructor(y));
};
P.dividedToIntegerBy = P.idiv = function(y) {
  var x = this, Ctor = x.constructor;
  return round(divide$1(x, new Ctor(y), 0, 1), Ctor.precision);
};
P.equals = P.eq = function(y) {
  return !this.cmp(y);
};
P.exponent = function() {
  return getBase10Exponent(this);
};
P.greaterThan = P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.greaterThanOrEqualTo = P.gte = function(y) {
  return this.cmp(y) >= 0;
};
P.isInteger = P.isint = function() {
  return this.e > this.d.length - 2;
};
P.isNegative = P.isneg = function() {
  return this.s < 0;
};
P.isPositive = P.ispos = function() {
  return this.s > 0;
};
P.isZero = function() {
  return this.s === 0;
};
P.lessThan = P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lessThanOrEqualTo = P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.logarithm = P.log = function(base) {
  var r, x = this, Ctor = x.constructor, pr = Ctor.precision, wpr = pr + 5;
  if (base === void 0) {
    base = new Ctor(10);
  } else {
    base = new Ctor(base);
    if (base.s < 1 || base.eq(ONE))
      throw Error(decimalError + "NaN");
  }
  if (x.s < 1)
    throw Error(decimalError + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(ONE))
    return new Ctor(0);
  external = false;
  r = divide$1(ln(x, wpr), ln(base, wpr), wpr);
  external = true;
  return round(r, pr);
};
P.minus = P.sub = function(y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? subtract(x, y) : add(x, (y.s = -y.s, y));
};
P.modulo = P.mod = function(y) {
  var q, x = this, Ctor = x.constructor, pr = Ctor.precision;
  y = new Ctor(y);
  if (!y.s)
    throw Error(decimalError + "NaN");
  if (!x.s)
    return round(new Ctor(x), pr);
  external = false;
  q = divide$1(x, y, 0, 1).times(y);
  external = true;
  return x.minus(q);
};
P.naturalExponential = P.exp = function() {
  return exp$3(this);
};
P.naturalLogarithm = P.ln = function() {
  return ln(this);
};
P.negated = P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s || 0;
  return x;
};
P.plus = P.add = function(y) {
  var x = this;
  y = new x.constructor(y);
  return x.s == y.s ? add(x, y) : subtract(x, (y.s = -y.s, y));
};
P.precision = P.sd = function(z) {
  var e, sd, w, x = this;
  if (z !== void 0 && z !== !!z && z !== 1 && z !== 0)
    throw Error(invalidArgument + z);
  e = getBase10Exponent(x) + 1;
  w = x.d.length - 1;
  sd = w * LOG_BASE + 1;
  w = x.d[w];
  if (w) {
    for (; w % 10 == 0; w /= 10)
      sd--;
    for (w = x.d[0]; w >= 10; w /= 10)
      sd++;
  }
  return z && e > sd ? e : sd;
};
P.squareRoot = P.sqrt = function() {
  var e, n, pr, r, s, t, wpr, x = this, Ctor = x.constructor;
  if (x.s < 1) {
    if (!x.s)
      return new Ctor(0);
    throw Error(decimalError + "NaN");
  }
  e = getBase10Exponent(x);
  external = false;
  s = Math.sqrt(+x);
  if (s == 0 || s == 1 / 0) {
    n = digitsToString(x.d);
    if ((n.length + e) % 2 == 0)
      n += "0";
    s = Math.sqrt(n);
    e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
    if (s == 1 / 0) {
      n = "5e" + e;
    } else {
      n = s.toExponential();
      n = n.slice(0, n.indexOf("e") + 1) + e;
    }
    r = new Ctor(n);
  } else {
    r = new Ctor(s.toString());
  }
  pr = Ctor.precision;
  s = wpr = pr + 3;
  for (; ; ) {
    t = r;
    r = t.plus(divide$1(x, t, wpr + 2)).times(0.5);
    if (digitsToString(t.d).slice(0, wpr) === (n = digitsToString(r.d)).slice(0, wpr)) {
      n = n.slice(wpr - 3, wpr + 1);
      if (s == wpr && n == "4999") {
        round(t, pr + 1, 0);
        if (t.times(t).eq(x)) {
          r = t;
          break;
        }
      } else if (n != "9999") {
        break;
      }
      wpr += 4;
    }
  }
  external = true;
  return round(r, pr);
};
P.times = P.mul = function(y) {
  var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
  if (!x.s || !y.s)
    return new Ctor(0);
  y.s *= x.s;
  e = x.e + y.e;
  xdL = xd.length;
  ydL = yd.length;
  if (xdL < ydL) {
    r = xd;
    xd = yd;
    yd = r;
    rL = xdL;
    xdL = ydL;
    ydL = rL;
  }
  r = [];
  rL = xdL + ydL;
  for (i = rL; i--; )
    r.push(0);
  for (i = ydL; --i >= 0; ) {
    carry = 0;
    for (k = xdL + i; k > i; ) {
      t = r[k] + yd[i] * xd[k - i - 1] + carry;
      r[k--] = t % BASE | 0;
      carry = t / BASE | 0;
    }
    r[k] = (r[k] + carry) % BASE | 0;
  }
  for (; !r[--rL]; )
    r.pop();
  if (carry)
    ++e;
  else
    r.shift();
  y.d = r;
  y.e = e;
  return external ? round(y, Ctor.precision) : y;
};
P.toDecimalPlaces = P.todp = function(dp, rm) {
  var x = this, Ctor = x.constructor;
  x = new Ctor(x);
  if (dp === void 0)
    return x;
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  return round(x, dp + getBase10Exponent(x) + 1, rm);
};
P.toExponential = function(dp, rm) {
  var str, x = this, Ctor = x.constructor;
  if (dp === void 0) {
    str = toString$2(x, true);
  } else {
    checkInt32(dp, 0, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = round(new Ctor(x), dp + 1, rm);
    str = toString$2(x, true, dp + 1);
  }
  return str;
};
P.toFixed = function(dp, rm) {
  var str, y, x = this, Ctor = x.constructor;
  if (dp === void 0)
    return toString$2(x);
  checkInt32(dp, 0, MAX_DIGITS);
  if (rm === void 0)
    rm = Ctor.rounding;
  else
    checkInt32(rm, 0, 8);
  y = round(new Ctor(x), dp + getBase10Exponent(x) + 1, rm);
  str = toString$2(y.abs(), false, dp + getBase10Exponent(y) + 1);
  return x.isneg() && !x.isZero() ? "-" + str : str;
};
P.toInteger = P.toint = function() {
  var x = this, Ctor = x.constructor;
  return round(new Ctor(x), getBase10Exponent(x) + 1, Ctor.rounding);
};
P.toNumber = function() {
  return +this;
};
P.toPower = P.pow = function(y) {
  var e, k, pr, r, sign, yIsInt, x = this, Ctor = x.constructor, guard = 12, yn = +(y = new Ctor(y));
  if (!y.s)
    return new Ctor(ONE);
  x = new Ctor(x);
  if (!x.s) {
    if (y.s < 1)
      throw Error(decimalError + "Infinity");
    return x;
  }
  if (x.eq(ONE))
    return x;
  pr = Ctor.precision;
  if (y.eq(ONE))
    return round(x, pr);
  e = y.e;
  k = y.d.length - 1;
  yIsInt = e >= k;
  sign = x.s;
  if (!yIsInt) {
    if (sign < 0)
      throw Error(decimalError + "NaN");
  } else if ((k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER$2) {
    r = new Ctor(ONE);
    e = Math.ceil(pr / LOG_BASE + 4);
    external = false;
    for (; ; ) {
      if (k % 2) {
        r = r.times(x);
        truncate(r.d, e);
      }
      k = mathfloor(k / 2);
      if (k === 0)
        break;
      x = x.times(x);
      truncate(x.d, e);
    }
    external = true;
    return y.s < 0 ? new Ctor(ONE).div(r) : round(r, pr);
  }
  sign = sign < 0 && y.d[Math.max(e, k)] & 1 ? -1 : 1;
  x.s = 1;
  external = false;
  r = y.times(ln(x, pr + guard));
  external = true;
  r = exp$3(r);
  r.s = sign;
  return r;
};
P.toPrecision = function(sd, rm) {
  var e, str, x = this, Ctor = x.constructor;
  if (sd === void 0) {
    e = getBase10Exponent(x);
    str = toString$2(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    x = round(new Ctor(x), sd, rm);
    e = getBase10Exponent(x);
    str = toString$2(x, sd <= e || e <= Ctor.toExpNeg, sd);
  }
  return str;
};
P.toSignificantDigits = P.tosd = function(sd, rm) {
  var x = this, Ctor = x.constructor;
  if (sd === void 0) {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  } else {
    checkInt32(sd, 1, MAX_DIGITS);
    if (rm === void 0)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  }
  return round(new Ctor(x), sd, rm);
};
P.toString = P.valueOf = P.val = P.toJSON = P[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var x = this, e = getBase10Exponent(x), Ctor = x.constructor;
  return toString$2(x, e <= Ctor.toExpNeg || e >= Ctor.toExpPos);
};
function add(x, y) {
  var carry, d, e, i, k, len, xd, yd, Ctor = x.constructor, pr = Ctor.precision;
  if (!x.s || !y.s) {
    if (!y.s)
      y = new Ctor(x);
    return external ? round(y, pr) : y;
  }
  xd = x.d;
  yd = y.d;
  k = x.e;
  e = y.e;
  xd = xd.slice();
  i = k - e;
  if (i) {
    if (i < 0) {
      d = xd;
      i = -i;
      len = yd.length;
    } else {
      d = yd;
      e = k;
      len = xd.length;
    }
    k = Math.ceil(pr / LOG_BASE);
    len = k > len ? k + 1 : len + 1;
    if (i > len) {
      i = len;
      d.length = 1;
    }
    d.reverse();
    for (; i--; )
      d.push(0);
    d.reverse();
  }
  len = xd.length;
  i = yd.length;
  if (len - i < 0) {
    i = len;
    d = yd;
    yd = xd;
    xd = d;
  }
  for (carry = 0; i; ) {
    carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
    xd[i] %= BASE;
  }
  if (carry) {
    xd.unshift(carry);
    ++e;
  }
  for (len = xd.length; xd[--len] == 0; )
    xd.pop();
  y.d = xd;
  y.e = e;
  return external ? round(y, pr) : y;
}
function checkInt32(i, min, max) {
  if (i !== ~~i || i < min || i > max) {
    throw Error(invalidArgument + i);
  }
}
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1; i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (; w % 10 === 0; )
    w /= 10;
  return str + w;
}
var divide$1 = function() {
  function multiplyInteger(x, k) {
    var temp, carry = 0, i = x.length;
    for (x = x.slice(); i--; ) {
      temp = x[i] * k + carry;
      x[i] = temp % BASE | 0;
      carry = temp / BASE | 0;
    }
    if (carry)
      x.unshift(carry);
    return x;
  }
  function compare(a, b, aL, bL) {
    var i, r;
    if (aL != bL) {
      r = aL > bL ? 1 : -1;
    } else {
      for (i = r = 0; i < aL; i++) {
        if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
      }
    }
    return r;
  }
  function subtract2(a, b, aL) {
    var i = 0;
    for (; aL--; ) {
      a[aL] -= i;
      i = a[aL] < b[aL] ? 1 : 0;
      a[aL] = i * BASE + a[aL] - b[aL];
    }
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(x, y, pr, dp) {
    var cmp, e, i, k, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
    if (!x.s)
      return new Ctor(x);
    if (!y.s)
      throw Error(decimalError + "Division by zero");
    e = x.e - y.e;
    yL = yd.length;
    xL = xd.length;
    q = new Ctor(sign);
    qd = q.d = [];
    for (i = 0; yd[i] == (xd[i] || 0); )
      ++i;
    if (yd[i] > (xd[i] || 0))
      --e;
    if (pr == null) {
      sd = pr = Ctor.precision;
    } else if (dp) {
      sd = pr + (getBase10Exponent(x) - getBase10Exponent(y)) + 1;
    } else {
      sd = pr;
    }
    if (sd < 0)
      return new Ctor(0);
    sd = sd / LOG_BASE + 2 | 0;
    i = 0;
    if (yL == 1) {
      k = 0;
      yd = yd[0];
      sd++;
      for (; (i < xL || k) && sd--; i++) {
        t = k * BASE + (xd[i] || 0);
        qd[i] = t / yd | 0;
        k = t % yd | 0;
      }
    } else {
      k = BASE / (yd[0] + 1) | 0;
      if (k > 1) {
        yd = multiplyInteger(yd, k);
        xd = multiplyInteger(xd, k);
        yL = yd.length;
        xL = xd.length;
      }
      xi = yL;
      rem = xd.slice(0, yL);
      remL = rem.length;
      for (; remL < yL; )
        rem[remL++] = 0;
      yz = yd.slice();
      yz.unshift(0);
      yd0 = yd[0];
      if (yd[1] >= BASE / 2)
        ++yd0;
      do {
        k = 0;
        cmp = compare(yd, rem, yL, remL);
        if (cmp < 0) {
          rem0 = rem[0];
          if (yL != remL)
            rem0 = rem0 * BASE + (rem[1] || 0);
          k = rem0 / yd0 | 0;
          if (k > 1) {
            if (k >= BASE)
              k = BASE - 1;
            prod = multiplyInteger(yd, k);
            prodL = prod.length;
            remL = rem.length;
            cmp = compare(prod, rem, prodL, remL);
            if (cmp == 1) {
              k--;
              subtract2(prod, yL < prodL ? yz : yd, prodL);
            }
          } else {
            if (k == 0)
              cmp = k = 1;
            prod = yd.slice();
          }
          prodL = prod.length;
          if (prodL < remL)
            prod.unshift(0);
          subtract2(rem, prod, remL);
          if (cmp == -1) {
            remL = rem.length;
            cmp = compare(yd, rem, yL, remL);
            if (cmp < 1) {
              k++;
              subtract2(rem, yL < remL ? yz : yd, remL);
            }
          }
          remL = rem.length;
        } else if (cmp === 0) {
          k++;
          rem = [0];
        }
        qd[i++] = k;
        if (cmp && rem[0]) {
          rem[remL++] = xd[xi] || 0;
        } else {
          rem = [xd[xi]];
          remL = 1;
        }
      } while ((xi++ < xL || rem[0] !== void 0) && sd--);
    }
    if (!qd[0])
      qd.shift();
    q.e = e;
    return round(q, dp ? pr + getBase10Exponent(q) + 1 : pr);
  };
}();
function exp$3(x, sd) {
  var denominator, guard, pow, sum, t, wpr, i = 0, k = 0, Ctor = x.constructor, pr = Ctor.precision;
  if (getBase10Exponent(x) > 16)
    throw Error(exponentOutOfRange + getBase10Exponent(x));
  if (!x.s)
    return new Ctor(ONE);
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.abs().gte(0.1)) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow = sum = new Ctor(ONE);
  Ctor.precision = wpr;
  for (; ; ) {
    pow = round(pow.times(x), wpr);
    denominator = denominator.times(++i);
    t = sum.plus(divide$1(pow, denominator, wpr));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      while (k--)
        sum = round(sum.times(sum), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }
    sum = t;
  }
}
function getBase10Exponent(x) {
  var e = x.e * LOG_BASE, w = x.d[0];
  for (; w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > Ctor.LN10.sd()) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(decimalError + "LN10 precision limit exceeded");
  }
  return round(new Ctor(Ctor.LN10), sd);
}
function getZeroString(k) {
  var zs = "";
  for (; k--; )
    zs += "0";
  return zs;
}
function ln(y, sd) {
  var c, c0, denominator, e, numerator, sum, t, wpr, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, pr = Ctor.precision;
  if (x.s < 1)
    throw Error(decimalError + (x.s ? "NaN" : "-Infinity"));
  if (x.eq(ONE))
    return new Ctor(0);
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  if (x.eq(10)) {
    if (sd == null)
      external = true;
    return getLn10(Ctor, wpr);
  }
  wpr += guard;
  Ctor.precision = wpr;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  e = getBase10Exponent(x);
  if (Math.abs(e) < 15e14) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = getBase10Exponent(x);
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = ln(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? (external = true, round(x, pr)) : x;
  }
  sum = numerator = x = divide$1(x.minus(ONE), x.plus(ONE), wpr);
  x2 = round(x.times(x), wpr);
  denominator = 3;
  for (; ; ) {
    numerator = round(numerator.times(x2), wpr);
    t = sum.plus(divide$1(numerator, new Ctor(denominator), wpr));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
      sum = sum.times(2);
      if (e !== 0)
        sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum = divide$1(sum, new Ctor(n), wpr);
      Ctor.precision = pr;
      return sd == null ? (external = true, round(sum, pr)) : sum;
    }
    sum = t;
    denominator += 2;
  }
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0; str.charCodeAt(i) === 48; )
    ++i;
  for (len = str.length; str.charCodeAt(len - 1) === 48; )
    --len;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    e = e - i - 1;
    x.e = mathfloor(e / LOG_BASE);
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE; i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (; i--; )
      str += "0";
    x.d.push(+str);
    if (external && (x.e > MAX_E || x.e < -MAX_E))
      throw Error(exponentOutOfRange + e);
  } else {
    x.s = 0;
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function round(x, sd, rm) {
  var i, j, k, n, rd, doRound, w, xdi, xd = x.d;
  for (n = 1, k = xd[0]; k >= 10; k /= 10)
    n++;
  i = sd - n;
  if (i < 0) {
    i += LOG_BASE;
    j = sd;
    w = xd[xdi = 0];
  } else {
    xdi = Math.ceil((i + 1) / LOG_BASE);
    k = xd.length;
    if (xdi >= k)
      return x;
    w = k = xd[xdi];
    for (n = 1; k >= 10; k /= 10)
      n++;
    i %= LOG_BASE;
    j = i - LOG_BASE + n;
  }
  if (rm !== void 0) {
    k = mathpow(10, n - j - 1);
    rd = w / k % 10 | 0;
    doRound = sd < 0 || xd[xdi + 1] !== void 0 || w % k;
    doRound = rm < 4 ? (rd || doRound) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || doRound || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, n - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
  }
  if (sd < 1 || !xd[0]) {
    if (doRound) {
      k = getBase10Exponent(x);
      xd.length = 1;
      sd = sd - k - 1;
      xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
      x.e = mathfloor(-sd / LOG_BASE) || 0;
    } else {
      xd.length = 1;
      xd[0] = x.e = x.s = 0;
    }
    return x;
  }
  if (i == 0) {
    xd.length = xdi;
    k = 1;
    xdi--;
  } else {
    xd.length = xdi + 1;
    k = mathpow(10, LOG_BASE - i);
    xd[xdi] = j > 0 ? (w / mathpow(10, n - j) % mathpow(10, j) | 0) * k : 0;
  }
  if (doRound) {
    for (; ; ) {
      if (xdi == 0) {
        if ((xd[0] += k) == BASE) {
          xd[0] = 1;
          ++x.e;
        }
        break;
      } else {
        xd[xdi] += k;
        if (xd[xdi] != BASE)
          break;
        xd[xdi--] = 0;
        k = 1;
      }
    }
  }
  for (i = xd.length; xd[--i] === 0; )
    xd.pop();
  if (external && (x.e > MAX_E || x.e < -MAX_E)) {
    throw Error(exponentOutOfRange + getBase10Exponent(x));
  }
  return x;
}
function subtract(x, y) {
  var d, e, i, j, k, len, xd, xe, xLTy, yd, Ctor = x.constructor, pr = Ctor.precision;
  if (!x.s || !y.s) {
    if (y.s)
      y.s = -y.s;
    else
      y = new Ctor(x);
    return external ? round(y, pr) : y;
  }
  xd = x.d;
  yd = y.d;
  e = y.e;
  xe = x.e;
  xd = xd.slice();
  k = xe - e;
  if (k) {
    xLTy = k < 0;
    if (xLTy) {
      d = xd;
      k = -k;
      len = yd.length;
    } else {
      d = yd;
      e = xe;
      len = xd.length;
    }
    i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
    if (k > i) {
      k = i;
      d.length = 1;
    }
    d.reverse();
    for (i = k; i--; )
      d.push(0);
    d.reverse();
  } else {
    i = xd.length;
    len = yd.length;
    xLTy = i < len;
    if (xLTy)
      len = i;
    for (i = 0; i < len; i++) {
      if (xd[i] != yd[i]) {
        xLTy = xd[i] < yd[i];
        break;
      }
    }
    k = 0;
  }
  if (xLTy) {
    d = xd;
    xd = yd;
    yd = d;
    y.s = -y.s;
  }
  len = xd.length;
  for (i = yd.length - len; i > 0; --i)
    xd[len++] = 0;
  for (i = yd.length; i > k; ) {
    if (xd[--i] < yd[i]) {
      for (j = i; j && xd[--j] === 0; )
        xd[j] = BASE - 1;
      --xd[j];
      xd[i] += BASE;
    }
    xd[i] -= yd[i];
  }
  for (; xd[--len] === 0; )
    xd.pop();
  for (; xd[0] === 0; xd.shift())
    --e;
  if (!xd[0])
    return new Ctor(0);
  y.d = xd;
  y.e = e;
  return external ? round(y, pr) : y;
}
function toString$2(x, isExp, sd) {
  var k, e = getBase10Exponent(x), str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (e < 0 ? "e" : "e+") + e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(value) {
    var x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(value);
    x.constructor = Decimal2;
    if (value instanceof Decimal2) {
      x.s = value.s;
      x.e = value.e;
      x.d = (value = value.d) ? value.slice() : value;
      return;
    }
    if (typeof value === "number") {
      if (value * 0 !== 0) {
        throw Error(invalidArgument + value);
      }
      if (value > 0) {
        x.s = 1;
      } else if (value < 0) {
        value = -value;
        x.s = -1;
      } else {
        x.s = 0;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (value === ~~value && value < 1e7) {
        x.e = 0;
        x.d = [value];
        return;
      }
      return parseDecimal(x, value.toString());
    } else if (typeof value !== "string") {
      throw Error(invalidArgument + value);
    }
    if (value.charCodeAt(0) === 45) {
      value = value.slice(1);
      x.s = -1;
    } else {
      x.s = 1;
    }
    if (isDecimal.test(value))
      parseDecimal(x, value);
    else
      throw Error(invalidArgument + value);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.clone = clone;
  Decimal2.config = Decimal2.set = config$1;
  if (obj === void 0)
    obj = {};
  if (obj) {
    ps = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
    for (i = 0; i < ps.length; )
      if (!obj.hasOwnProperty(p = ps[i++]))
        obj[p] = this[p];
  }
  Decimal2.config(obj);
  return Decimal2;
}
function config$1(obj) {
  if (!obj || typeof obj !== "object") {
    throw Error(decimalError + "Object expected");
  }
  var i, p, v, ps = [
    "precision",
    1,
    MAX_DIGITS,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (i = 0; i < ps.length; i += 3) {
    if ((v = obj[p = ps[i]]) !== void 0) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if ((v = obj[p = "LN10"]) !== void 0) {
    if (v == Math.LN10)
      this[p] = new this(v);
    else
      throw Error(invalidArgument + p + ": " + v);
  }
  return this;
}
var Decimal = clone(defaults);
ONE = new Decimal(1);
var Decimal$1 = Decimal;

function _toConsumableArray$5(arr) { return _arrayWithoutHoles$5(arr) || _iterableToArray$6(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread$5(); }

function _nonIterableSpread$5() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray$6(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$5(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var identity$2 = function identity(i) {
  return i;
};

var PLACE_HOLDER = {
  '@@functional/placeholder': true
};

var isPlaceHolder = function isPlaceHolder(val) {
  return val === PLACE_HOLDER;
};

var curry0 = function curry0(fn) {
  return function _curried() {
    if (arguments.length === 0 || arguments.length === 1 && isPlaceHolder(arguments.length <= 0 ? undefined : arguments[0])) {
      return _curried;
    }

    return fn.apply(void 0, arguments);
  };
};

var curryN = function curryN(n, fn) {
  if (n === 1) {
    return fn;
  }

  return curry0(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var argsLength = args.filter(function (arg) {
      return arg !== PLACE_HOLDER;
    }).length;

    if (argsLength >= n) {
      return fn.apply(void 0, args);
    }

    return curryN(n - argsLength, curry0(function () {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      var newArgs = args.map(function (arg) {
        return isPlaceHolder(arg) ? restArgs.shift() : arg;
      });
      return fn.apply(void 0, _toConsumableArray$5(newArgs).concat(restArgs));
    }));
  });
};

var curry = function curry(fn) {
  return curryN(fn.length, fn);
};
var range$2 = function range(begin, end) {
  var arr = [];

  for (var i = begin; i < end; ++i) {
    arr[i - begin] = i;
  }

  return arr;
};
var map$1 = curry(function (fn, arr) {
  if (Array.isArray(arr)) {
    return arr.map(fn);
  }

  return Object.keys(arr).map(function (key) {
    return arr[key];
  }).map(fn);
});
var compose = function compose() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  if (!args.length) {
    return identity$2;
  }

  var fns = args.reverse(); // first function can receive multiply arguments

  var firstFn = fns[0];
  var tailsFn = fns.slice(1);
  return function () {
    return tailsFn.reduce(function (res, fn) {
      return fn(res);
    }, firstFn.apply(void 0, arguments));
  };
};
var reverse = function reverse(arr) {
  if (Array.isArray(arr)) {
    return arr.reverse();
  } // can be string


  return arr.split('').reverse.join('');
};
var memoize$1 = function memoize(fn) {
  var lastArgs = null;
  var lastResult = null;
  return function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (lastArgs && args.every(function (val, i) {
      return val === lastArgs[i];
    })) {
      return lastResult;
    }

    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};

/**
 * @fileOverview 一些公用的运算方法
 * @author xile611
 * @date 2015-09-17
 */
/**
 * 获取数值的位数
 * 其中绝对值属于区间[0.1, 1)， 得到的值为0
 * 绝对值属于区间[0.01, 0.1)，得到的位数为 -1
 * 绝对值属于区间[0.001, 0.01)，得到的位数为 -2
 *
 * @param  {Number} value 数值
 * @return {Integer} 位数
 */

function getDigitCount(value) {
  var result;

  if (value === 0) {
    result = 1;
  } else {
    result = Math.floor(new Decimal$1(value).abs().log(10).toNumber()) + 1;
  }

  return result;
}
/**
 * 按照固定的步长获取[start, end)这个区间的数据
 * 并且需要处理js计算精度的问题
 *
 * @param  {Decimal} start 起点
 * @param  {Decimal} end   终点，不包含该值
 * @param  {Decimal} step  步长
 * @return {Array}         若干数值
 */


function rangeStep(start, end, step) {
  var num = new Decimal$1(start);
  var i = 0;
  var result = []; // magic number to prevent infinite loop

  while (num.lt(end) && i < 100000) {
    result.push(num.toNumber());
    num = num.add(step);
    i++;
  }

  return result;
}
/**
 * 对数值进行线性插值
 *
 * @param  {Number} a  定义域的极点
 * @param  {Number} b  定义域的极点
 * @param  {Number} t  [0, 1]内的某个值
 * @return {Number}    定义域内的某个值
 */


var interpolateNumber$1 = curry(function (a, b, t) {
  var newA = +a;
  var newB = +b;
  return newA + t * (newB - newA);
});
/**
 * 线性插值的逆运算
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个范围内时，返回值属于[0, 1]
 */

var uninterpolateNumber = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return (x - a) / diff;
});
/**
 * 线性插值的逆运算，并且有截断的操作
 *
 * @param  {Number} a 定义域的极点
 * @param  {Number} b 定义域的极点
 * @param  {Number} x 可以认为是插值后的一个输出值
 * @return {Number}   当x在 a ~ b这个区间内时，返回值属于[0, 1]，
 * 当x不在 a ~ b这个区间时，会截断到 a ~ b 这个区间
 */

var uninterpolateTruncation = curry(function (a, b, x) {
  var diff = b - +a;
  diff = diff || Infinity;
  return Math.max(0, Math.min(1, (x - a) / diff));
});
var Arithmetic = {
  rangeStep: rangeStep,
  getDigitCount: getDigitCount,
  interpolateNumber: interpolateNumber$1,
  uninterpolateNumber: uninterpolateNumber,
  uninterpolateTruncation: uninterpolateTruncation
};

function _toConsumableArray$6(arr) { return _arrayWithoutHoles$6(arr) || _iterableToArray$7(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$6(); }

function _nonIterableSpread$6() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray$7(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles$6(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function _slicedToArray$3(arr, i) { return _arrayWithHoles$4(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$4(); }

function _nonIterableRest$4() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$3(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$4(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Calculate a interval of a minimum value and a maximum value
 *
 * @param  {Number} min       The minimum value
 * @param  {Number} max       The maximum value
 * @return {Array} An interval
 */

function getValidInterval(_ref) {
  var _ref2 = _slicedToArray$3(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  var validMin = min,
      validMax = max; // exchange

  if (min > max) {
    validMin = max;
    validMax = min;
  }

  return [validMin, validMax];
}
/**
 * Calculate the step which is easy to understand between ticks, like 10, 20, 25
 *
 * @param  {Decimal} roughStep        The rough step calculated by deviding the
 * difference by the tickCount
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Integer} correctionFactor A correction factor
 * @return {Decimal} The step which is easy to understand between two ticks
 */


function getFormatStep(roughStep, allowDecimals, correctionFactor) {
  if (roughStep.lte(0)) {
    return new Decimal$1(0);
  }

  var digitCount = Arithmetic.getDigitCount(roughStep.toNumber()); // The ratio between the rough step and the smallest number which has a bigger
  // order of magnitudes than the rough step

  var digitCountValue = new Decimal$1(10).pow(digitCount);
  var stepRatio = roughStep.div(digitCountValue); // When an integer and a float multiplied, the accuracy of result may be wrong

  var stepRatioScale = digitCount !== 1 ? 0.05 : 0.1;
  var amendStepRatio = new Decimal$1(Math.ceil(stepRatio.div(stepRatioScale).toNumber())).add(correctionFactor).mul(stepRatioScale);
  var formatStep = amendStepRatio.mul(digitCountValue);
  return allowDecimals ? formatStep : new Decimal$1(Math.ceil(formatStep));
}
/**
 * calculate the ticks when the minimum value equals to the maximum value
 *
 * @param  {Number}  value         The minimum valuue which is also the maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}                 ticks
 */


function getTickOfSingleValue(value, tickCount, allowDecimals) {
  var step = 1; // calculate the middle value of ticks

  var middle = new Decimal$1(value);

  if (!middle.isint() && allowDecimals) {
    var absVal = Math.abs(value);

    if (absVal < 1) {
      // The step should be a float number when the difference is smaller than 1
      step = new Decimal$1(10).pow(Arithmetic.getDigitCount(value) - 1);
      middle = new Decimal$1(Math.floor(middle.div(step).toNumber())).mul(step);
    } else if (absVal > 1) {
      // Return the maximum integer which is smaller than 'value' when 'value' is greater than 1
      middle = new Decimal$1(Math.floor(value));
    }
  } else if (value === 0) {
    middle = new Decimal$1(Math.floor((tickCount - 1) / 2));
  } else if (!allowDecimals) {
    middle = new Decimal$1(Math.floor(value));
  }

  var middleIndex = Math.floor((tickCount - 1) / 2);
  var fn = compose(map$1(function (n) {
    return middle.add(new Decimal$1(n - middleIndex).mul(step)).toNumber();
  }), range$2);
  return fn(0, tickCount);
}
/**
 * Calculate the step
 *
 * @param  {Number}  min              The minimum value of an interval
 * @param  {Number}  max              The maximum value of an interval
 * @param  {Integer} tickCount        The count of ticks
 * @param  {Boolean} allowDecimals    Allow the ticks to be decimals or not
 * @param  {Number}  correctionFactor A correction factor
 * @return {Object}  The step, minimum value of ticks, maximum value of ticks
 */


function calculateStep(min, max, tickCount, allowDecimals) {
  var correctionFactor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

  // dirty hack (for recharts' test)
  if (!Number.isFinite((max - min) / (tickCount - 1))) {
    return {
      step: new Decimal$1(0),
      tickMin: new Decimal$1(0),
      tickMax: new Decimal$1(0)
    };
  } // The step which is easy to understand between two ticks


  var step = getFormatStep(new Decimal$1(max).sub(min).div(tickCount - 1), allowDecimals, correctionFactor); // A medial value of ticks

  var middle; // When 0 is inside the interval, 0 should be a tick

  if (min <= 0 && max >= 0) {
    middle = new Decimal$1(0);
  } else {
    // calculate the middle value
    middle = new Decimal$1(min).add(max).div(2); // minus modulo value

    middle = middle.sub(new Decimal$1(middle).mod(step));
  }

  var belowCount = Math.ceil(middle.sub(min).div(step).toNumber());
  var upCount = Math.ceil(new Decimal$1(max).sub(middle).div(step).toNumber());
  var scaleCount = belowCount + upCount + 1;

  if (scaleCount > tickCount) {
    // When more ticks need to cover the interval, step should be bigger.
    return calculateStep(min, max, tickCount, allowDecimals, correctionFactor + 1);
  }

  if (scaleCount < tickCount) {
    // When less ticks can cover the interval, we should add some additional ticks
    upCount = max > 0 ? upCount + (tickCount - scaleCount) : upCount;
    belowCount = max > 0 ? belowCount : belowCount + (tickCount - scaleCount);
  }

  return {
    step: step,
    tickMin: middle.sub(new Decimal$1(belowCount).mul(step)),
    tickMax: middle.add(new Decimal$1(upCount).mul(step))
  };
}
/**
 * Calculate the ticks of an interval, the count of ticks will be guraranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getNiceTickValuesFn(_ref3) {
  var _ref4 = _slicedToArray$3(_ref3, 2),
      min = _ref4[0],
      max = _ref4[1];

  var tickCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  // More than two ticks should be return
  var count = Math.max(tickCount, 2);

  var _getValidInterval = getValidInterval([min, max]),
      _getValidInterval2 = _slicedToArray$3(_getValidInterval, 2),
      cormin = _getValidInterval2[0],
      cormax = _getValidInterval2[1];

  if (cormin === -Infinity || cormax === Infinity) {
    var _values = cormax === Infinity ? [cormin].concat(_toConsumableArray$6(range$2(0, tickCount - 1).map(function () {
      return Infinity;
    }))) : [].concat(_toConsumableArray$6(range$2(0, tickCount - 1).map(function () {
      return -Infinity;
    })), [cormax]);

    return min > max ? reverse(_values) : _values;
  }

  if (cormin === cormax) {
    return getTickOfSingleValue(cormin, tickCount, allowDecimals);
  } // Get the step between two ticks


  var _calculateStep = calculateStep(cormin, cormax, count, allowDecimals),
      step = _calculateStep.step,
      tickMin = _calculateStep.tickMin,
      tickMax = _calculateStep.tickMax;

  var values = Arithmetic.rangeStep(tickMin, tickMax.add(new Decimal$1(0.1).mul(step)), step);
  return min > max ? reverse(values) : values;
}
/**
 * Calculate the ticks of an interval, the count of ticks won't be guraranteed,
 * but the domain will be guaranteed
 *
 * @param  {Number}  min, max      min: The minimum value, max: The maximum value
 * @param  {Integer} tickCount     The count of ticks
 * @param  {Boolean} allowDecimals Allow the ticks to be decimals or not
 * @return {Array}   ticks
 */


function getTickValuesFixedDomainFn(_ref7, tickCount) {
  var _ref8 = _slicedToArray$3(_ref7, 2),
      min = _ref8[0],
      max = _ref8[1];

  var allowDecimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // More than two ticks should be return
  var _getValidInterval5 = getValidInterval([min, max]),
      _getValidInterval6 = _slicedToArray$3(_getValidInterval5, 2),
      cormin = _getValidInterval6[0],
      cormax = _getValidInterval6[1];

  if (cormin === -Infinity || cormax === Infinity) {
    return [min, max];
  }

  if (cormin === cormax) {
    return [cormin];
  }

  var count = Math.max(tickCount, 2);
  var step = getFormatStep(new Decimal$1(cormax).sub(cormin).div(count - 1), allowDecimals, 0);
  var values = [].concat(_toConsumableArray$6(Arithmetic.rangeStep(new Decimal$1(cormin), new Decimal$1(cormax).sub(new Decimal$1(0.99).mul(step)), step)), [cormax]);
  return min > max ? reverse(values) : values;
}

var getNiceTickValues = memoize$1(getNiceTickValuesFn);
var getTickValuesFixedDomain = memoize$1(getTickValuesFixedDomainFn);

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function bisector(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
}

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;

function number$1(x) {
  return x === null ? NaN : +x;
}

function sequence(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function ticks(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
}

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

function threshold(values, p, valueof) {
  if (valueof == null) valueof = number$1;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}

function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.interpolator(domain); break;
    default: this.interpolator(interpolator).domain(domain); break;
  }
  return this;
}

var prefix = "$";

function Map$1() {}

Map$1.prototype = map$2.prototype = {
  constructor: Map$1,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map$2(object, f) {
  var map = new Map$1;

  // Copy constructor.
  if (object instanceof Map$1) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

function Set$1() {}

var proto$1 = map$2.prototype;

Set$1.prototype = {
  constructor: Set$1,
  has: proto$1.has,
  add: function(value) {
    value += "";
    this[prefix + value] = value;
    return this;
  },
  remove: proto$1.remove,
  clear: proto$1.clear,
  values: proto$1.keys,
  size: proto$1.size,
  empty: proto$1.empty,
  each: proto$1.each
};

var array = Array.prototype;

var map$3 = array.map;
var slice$1 = array.slice;

var implicit = {name: "implicit"};

function ordinal() {
  var index = map$2(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = map$2();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$1.call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = sequence(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point$2() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex$1(this.r) + hex$1(this.g) + hex$1(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex$1(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

function constant$2(x) {
  return function() {
    return x;
  };
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$2(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant$2(isNaN(a) ? b : a);
}

var rgb$1 = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = interpolateValue(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function interpolateNumber$2(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolateValue(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: interpolateNumber$2(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function interpolateValue(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$2(b)
      : (t === "number" ? interpolateNumber$2
      : t === "string" ? ((c = color(b)) ? (b = c, rgb$1) : string)
      : b instanceof color ? rgb$1
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : interpolateNumber$2)(a, b);
}

function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

function constant$3(x) {
  return function() {
    return x;
  };
}

function number$2(x) {
  return +x;
}

var unit = [0, 1];

function identity$3(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constant$3(isNaN(b) ? NaN : 0.5);
}

function clamper(domain) {
  var a = domain[0], b = domain[domain.length - 1], t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisectRight(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = interpolateValue,
      transform,
      untransform,
      unknown,
      clamp = identity$3,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), interpolateNumber$2)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = map$3.call(_, number$2), clamp === identity$3 || (clamp = clamper(domain)), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$1.call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = slice$1.call(_), interpolate = interpolateRound, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? clamper(domain) : identity$3, scale) : clamp !== identity$3;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous(transform, untransform) {
  return transformer()(transform, untransform);
}

function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": formatDecimal,
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return formatRounded(x * 100, p); },
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
};

function identity$4(x) {
  return x;
}

var map$4 = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

function formatLocale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? identity$4 : formatGroup(map$4.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? identity$4 : formatNumerals(map$4.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = tickIncrement(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous(identity$3, identity$3);

  scale.copy = function() {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function identity$5(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = map$3.call(_, number$2), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity$5(domain).unknown(unknown);
  };

  domain = arguments.length ? map$3.call(domain, number$2) : [0, 1];

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(nice(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log$1() {
  var scale = loggish(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, log$1()).base(scale.base());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return linearish(scale);
}

function symlog() {
  var scale = symlogish(transformer());

  scale.copy = function() {
    return copy(scale, symlog()).constant(scale.constant());
  };

  return initRange.apply(scale, arguments);
}

function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(identity$3, identity$3),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(identity$3, identity$3)
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return linearish(scale);
}

function pow$2() {
  var scale = powish(transformer());

  scale.copy = function() {
    return copy(scale, pow$2()).exponent(scale.exponent());
  };

  initRange.apply(scale, arguments);

  return scale;
}

function sqrt$1() {
  return pow$2.apply(null, arguments).exponent(0.5);
}

function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = threshold(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[bisectRight(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$1.call(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[bisectRight(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = slice$1.call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(linearish(scale), arguments);
}

function threshold$1() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[bisectRight(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = slice$1.call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = slice$1.call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold$1()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return initRange.apply(scale, arguments);
}

var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}

var millisecond = newInterval(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

var second = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * durationSecond);
}, function(start, end) {
  return (end - start) / durationSecond;
}, function(date) {
  return date.getUTCSeconds();
});

var minute = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getMinutes();
});

var hour = newInterval(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * durationSecond - date.getMinutes() * durationMinute);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getHours();
});

var day = newInterval(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay;
}, function(date) {
  return date.getDate() - 1;
});

function weekday(i) {
  return newInterval(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var month = newInterval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

var year = newInterval(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

var utcMinute = newInterval(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationMinute);
}, function(start, end) {
  return (end - start) / durationMinute;
}, function(date) {
  return date.getUTCMinutes();
});

var utcHour = newInterval(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * durationHour);
}, function(start, end) {
  return (end - start) / durationHour;
}, function(date) {
  return date.getUTCHours();
});

var utcDay = newInterval(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / durationDay;
}, function(date) {
  return date.getUTCDate() - 1;
});

function utcWeekday(i) {
  return newInterval(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / durationWeek;
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcMonth = newInterval(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

var utcYear = newInterval(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : newInterval(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale$1(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day$1 = week.getUTCDay();
          week = day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day$1 = week.getDay();
          week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$1 = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day$1 + 5) % 7 : d.w + d.U * 7 - (day$1 + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale$1;
var timeFormat;
var utcFormat;

defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  timeFormat = locale$1.format;
  locale$1.parse;
  utcFormat = locale$1.utcFormat;
  locale$1.utcParse;
  return locale$1;
}

var durationSecond$1 = 1000,
    durationMinute$1 = durationSecond$1 * 60,
    durationHour$1 = durationMinute$1 * 60,
    durationDay$1 = durationHour$1 * 24,
    durationWeek$1 = durationDay$1 * 7,
    durationMonth = durationDay$1 * 30,
    durationYear = durationDay$1 * 365;

function date$1(t) {
  return new Date(t);
}

function number$3(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = continuous(identity$3, identity$3),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond$1],
    [second,  5,  5 * durationSecond$1],
    [second, 15, 15 * durationSecond$1],
    [second, 30, 30 * durationSecond$1],
    [minute,  1,      durationMinute$1],
    [minute,  5,  5 * durationMinute$1],
    [minute, 15, 15 * durationMinute$1],
    [minute, 30, 30 * durationMinute$1],
    [  hour,  1,      durationHour$1  ],
    [  hour,  3,  3 * durationHour$1  ],
    [  hour,  6,  6 * durationHour$1  ],
    [  hour, 12, 12 * durationHour$1  ],
    [   day,  1,      durationDay$1   ],
    [   day,  2,  2 * durationDay$1   ],
    [  week,  1,      durationWeek$1  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = bisector(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(map$3.call(_, number$3)) : domain().map(date$1);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(nice(d, interval))
        : scale;
  };

  scale.copy = function() {
    return copy(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

function time() {
  return initRange.apply(calendar(year, month, sunday, day, hour, minute, second, millisecond, timeFormat).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}

function utcTime() {
  return initRange.apply(calendar(utcYear, utcMonth, utcSunday, utcDay, utcHour, utcMinute, second, millisecond, utcFormat).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}

function transformer$1() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = identity$3,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy$1(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = linearish(transformer$1()(identity$3));

  scale.copy = function() {
    return copy$1(scale, sequential());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialLog() {
  var scale = loggish(transformer$1()).domain([1, 10]);

  scale.copy = function() {
    return copy$1(scale, sequentialLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = symlogish(transformer$1());

  scale.copy = function() {
    return copy$1(scale, sequentialSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialPow() {
  var scale = powish(transformer$1());

  scale.copy = function() {
    return copy$1(scale, sequentialPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}

function sequentialQuantile() {
  var domain = [],
      interpolator = identity$3;

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((bisectRight(domain, x) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return initInterpolator.apply(scale, arguments);
}

function transformer$2() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = identity$3,
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
    return scale;
  };
}

function diverging() {
  var scale = linearish(transformer$2()(identity$3));

  scale.copy = function() {
    return copy$1(scale, diverging());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingLog() {
  var scale = loggish(transformer$2()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return copy$1(scale, divergingLog()).base(scale.base());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingSymlog() {
  var scale = symlogish(transformer$2());

  scale.copy = function() {
    return copy$1(scale, divergingSymlog()).constant(scale.constant());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingPow() {
  var scale = powish(transformer$2());

  scale.copy = function() {
    return copy$1(scale, divergingPow()).exponent(scale.exponent());
  };

  return initInterpolator.apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}

var d3Scales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  scaleBand: band,
  scalePoint: point$2,
  scaleIdentity: identity$5,
  scaleLinear: linear$1,
  scaleLog: log$1,
  scaleSymlog: symlog,
  scaleOrdinal: ordinal,
  scaleImplicit: implicit,
  scalePow: pow$2,
  scaleSqrt: sqrt$1,
  scaleQuantile: quantile,
  scaleQuantize: quantize,
  scaleThreshold: threshold$1,
  scaleTime: time,
  scaleUtc: utcTime,
  scaleSequential: sequential,
  scaleSequentialLog: sequentialLog,
  scaleSequentialPow: sequentialPow,
  scaleSequentialSqrt: sequentialSqrt,
  scaleSequentialSymlog: sequentialSymlog,
  scaleSequentialQuantile: sequentialQuantile,
  scaleDiverging: diverging,
  scaleDivergingLog: divergingLog,
  scaleDivergingPow: divergingPow,
  scaleDivergingSqrt: divergingSqrt,
  scaleDivergingSymlog: divergingSymlog,
  tickFormat: tickFormat
});

function _typeof$8(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$8 = function _typeof(obj) { return typeof obj; }; } else { _typeof$8 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$8(obj); }

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _slicedToArray$4(arr, i) { return _arrayWithHoles$5(arr) || _iterableToArrayLimit$4(arr, i) || _nonIterableRest$5(); }

function _nonIterableRest$5() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$4(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$5(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$7(self, call) { if (call && (_typeof$8(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$7(self); }

function _assertThisInitialized$7(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$7(o) { _getPrototypeOf$7 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$7(o); }

function _inherits$7(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$7(subClass, superClass); }

function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }

var ErrorBar =
/*#__PURE__*/
function (_Component) {
  _inherits$7(ErrorBar, _Component);

  function ErrorBar() {
    _classCallCheck$7(this, ErrorBar);

    return _possibleConstructorReturn$7(this, _getPrototypeOf$7(ErrorBar).apply(this, arguments));
  }

  _createClass$7(ErrorBar, [{
    key: "renderErrorBars",
    value: function renderErrorBars() {
      var _this$props = this.props,
          offset = _this$props.offset,
          layout = _this$props.layout,
          width = _this$props.width,
          dataKey = _this$props.dataKey,
          data = _this$props.data,
          dataPointFormatter = _this$props.dataPointFormatter,
          xAxis = _this$props.xAxis,
          yAxis = _this$props.yAxis,
          others = _objectWithoutProperties$5(_this$props, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]);

      var props = getPresentationAttributes(others);
      return data.map(function (entry, i) {
        var _dataPointFormatter = dataPointFormatter(entry, dataKey),
            x = _dataPointFormatter.x,
            y = _dataPointFormatter.y,
            value = _dataPointFormatter.value,
            errorVal = _dataPointFormatter.errorVal;

        if (!errorVal) {
          return null;
        }

        var xMid, yMid, xMin, yMin, xMax, yMax, scale, coordsTop, coordsMid, coordsBot, lowBound, highBound;

        if (Array.isArray(errorVal)) {
          var _errorVal = _slicedToArray$4(errorVal, 2);

          lowBound = _errorVal[0];
          highBound = _errorVal[1];
        } else {
          lowBound = highBound = errorVal;
        }

        if (layout === 'vertical') {
          scale = xAxis.scale;
          xMid = value;
          yMid = y + offset;
          xMin = scale(xMid - lowBound);
          yMin = yMid + width;
          xMax = scale(xMid + highBound);
          yMax = yMid - width;
          coordsTop = {
            x1: xMax,
            y1: yMin,
            x2: xMax,
            y2: yMax
          };
          coordsMid = {
            x1: xMin,
            y1: yMid,
            x2: xMax,
            y2: yMid
          };
          coordsBot = {
            x1: xMin,
            y1: yMin,
            x2: xMin,
            y2: yMax
          };
        } else if (layout === 'horizontal') {
          scale = yAxis.scale;
          xMid = x + offset;
          yMid = value;
          xMin = xMid - width;
          xMax = xMid + width;
          yMin = scale(yMid - lowBound);
          yMax = scale(yMid + highBound);
          coordsTop = {
            x1: xMin,
            y1: yMax,
            x2: xMax,
            y2: yMax
          };
          coordsMid = {
            x1: xMid,
            y1: yMin,
            x2: xMid,
            y2: yMax
          };
          coordsBot = {
            x1: xMin,
            y1: yMin,
            x2: xMax,
            y2: yMin
          };
        }

        return (// eslint-disable-next-line react/no-array-index-key
          react.createElement(Layer, _extends$5({
            className: "recharts-errorBar",
            key: "bar-".concat(i)
          }, props), react.createElement("line", coordsTop), react.createElement("line", coordsMid), react.createElement("line", coordsBot))
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react.createElement(Layer, {
        className: "recharts-errorBars"
      }, this.renderErrorBars());
    }
  }]);

  return ErrorBar;
}(react.Component);

ErrorBar.propTypes = {
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]).isRequired,
  data: propTypes.array,
  xAxis: propTypes.object,
  yAxis: propTypes.object,
  layout: propTypes.string,
  dataPointFormatter: propTypes.func,
  stroke: propTypes.string,
  strokeWidth: propTypes.number,
  width: propTypes.number,
  offset: propTypes.number
};
ErrorBar.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal'
};

function _toConsumableArray$7(arr) { return _arrayWithoutHoles$7(arr) || _iterableToArray$8(arr) || _nonIterableSpread$7(); }

function _nonIterableSpread$7() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$8(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$7(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty$c(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$c(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var getValueByDataKey = function getValueByDataKey(obj, dataKey, defaultValue) {
  if (isNil_1(obj) || isNil_1(dataKey)) {
    return defaultValue;
  }

  if (isNumOrStr(dataKey)) {
    return get_1(obj, dataKey, defaultValue);
  }

  if (isFunction_1(dataKey)) {
    return dataKey(obj);
  }

  return defaultValue;
};
/**
 * Get domain of data by key
 * @param  {Array}   data      The data displayed in the chart
 * @param  {String}  key       The unique key of a group of data
 * @param  {String}  type      The type of axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array} Domain of data
 */

var getDomainOfDataByKey = function getDomainOfDataByKey(data, key, type, filterNil) {
  var flattenData = flatMap_1(data, function (entry) {
    return getValueByDataKey(entry, key);
  });

  if (type === 'number') {
    var domain = flattenData.filter(function (entry) {
      return isNumber$1(entry) || parseFloat(entry, 10);
    });
    return domain.length ? [min_1(domain), max_1(domain)] : [Infinity, -Infinity];
  }

  var validateData = filterNil ? flattenData.filter(function (entry) {
    return !isNil_1(entry);
  }) : flattenData;
  return validateData.map(function (entry) {
    return isNumOrStr(entry) ? entry : '';
  });
};
var calculateActiveTickIndex = function calculateActiveTickIndex(coordinate, ticks, unsortedTicks, axis) {
  var index = -1;
  var len = ticks.length;

  if (len > 1) {
    if (axis && axis.axisType === 'angleAxis' && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
      var range = axis.range; // ticks are distributed in a circle

      for (var i = 0; i < len; i++) {
        var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
        var cur = unsortedTicks[i].coordinate;
        var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
        var sameDirectionCoord = void 0;

        if (mathSign(cur - before) !== mathSign(after - cur)) {
          var diffInterval = [];

          if (mathSign(after - cur) === mathSign(range[1] - range[0])) {
            sameDirectionCoord = after;
            var curInRange = cur + range[1] - range[0];
            diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
            diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
          } else {
            sameDirectionCoord = before;
            var afterInRange = after + range[1] - range[0];
            diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
            diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
          }

          var sameInterval = [Math.min(cur, (sameDirectionCoord + cur) / 2), Math.max(cur, (sameDirectionCoord + cur) / 2)];

          if (coordinate > sameInterval[0] && coordinate <= sameInterval[1] || coordinate >= diffInterval[0] && coordinate <= diffInterval[1]) {
            index = unsortedTicks[i].index;
            break;
          }
        } else {
          var min = Math.min(before, after);
          var max = Math.max(before, after);

          if (coordinate > (min + cur) / 2 && coordinate <= (max + cur) / 2) {
            index = unsortedTicks[i].index;
            break;
          }
        }
      }
    } else {
      // ticks are distributed in a single direction
      for (var _i = 0; _i < len; _i++) {
        if (_i === 0 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i > 0 && _i < len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2 && coordinate <= (ticks[_i].coordinate + ticks[_i + 1].coordinate) / 2 || _i === len - 1 && coordinate > (ticks[_i].coordinate + ticks[_i - 1].coordinate) / 2) {
          index = ticks[_i].index;
          break;
        }
      }
    }
  } else {
    index = 0;
  }

  return index;
};
/**
 * Get the main color of each graphic item
 * @param  {ReactElement} item A graphic item
 * @return {String}            Color
 */

var getMainColorOfGraphicItem = function getMainColorOfGraphicItem(item) {
  var displayName = item.type.displayName;
  var _item$props = item.props,
      stroke = _item$props.stroke,
      fill = _item$props.fill;
  var result;

  switch (displayName) {
    case 'Line':
      result = stroke;
      break;

    case 'Area':
    case 'Radar':
      result = stroke && stroke !== 'none' ? stroke : fill;
      break;

    default:
      result = fill;
      break;
  }

  return result;
};
var getLegendProps = function getLegendProps(_ref) {
  var children = _ref.children,
      formatedGraphicalItems = _ref.formatedGraphicalItems,
      legendWidth = _ref.legendWidth,
      legendContent = _ref.legendContent;
  var legendItem = findChildByType(children, Legend);

  if (!legendItem) {
    return null;
  }

  var legendData;

  if (legendItem.props && legendItem.props.payload) {
    legendData = legendItem.props && legendItem.props.payload;
  } else if (legendContent === 'children') {
    legendData = (formatedGraphicalItems || []).reduce(function (result, _ref2) {
      var item = _ref2.item,
          props = _ref2.props;
      var data = props.sectors || props.data || [];
      return result.concat(data.map(function (entry) {
        return {
          type: legendItem.props.iconType || item.props.legendType,
          value: entry.name,
          color: entry.fill,
          payload: entry
        };
      }));
    }, []);
  } else {
    legendData = (formatedGraphicalItems || []).map(function (_ref3) {
      var item = _ref3.item;
      var _item$props2 = item.props,
          dataKey = _item$props2.dataKey,
          name = _item$props2.name,
          legendType = _item$props2.legendType,
          hide = _item$props2.hide;
      return {
        inactive: hide,
        dataKey: dataKey,
        type: legendItem.props.iconType || legendType || 'square',
        color: getMainColorOfGraphicItem(item),
        value: name || dataKey,
        payload: item.props
      };
    });
  }

  return _objectSpread$a({}, legendItem.props, {}, Legend.getWithHeight(legendItem, legendWidth), {
    payload: legendData,
    item: legendItem
  });
};
/**
 * Calculate the size of all groups for stacked bar graph
 * @param  {Object} stackGroups The items grouped by axisId and stackId
 * @return {Object} The size of all groups
 */

var getBarSizeList = function getBarSizeList(_ref4) {
  var globalSize = _ref4.barSize,
      _ref4$stackGroups = _ref4.stackGroups,
      stackGroups = _ref4$stackGroups === void 0 ? {} : _ref4$stackGroups;

  if (!stackGroups) {
    return {};
  }

  var result = {};
  var numericAxisIds = Object.keys(stackGroups);

  for (var i = 0, len = numericAxisIds.length; i < len; i++) {
    var sgs = stackGroups[numericAxisIds[i]].stackGroups;
    var stackIds = Object.keys(sgs);

    for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
      var _sgs$stackIds$j = sgs[stackIds[j]],
          items = _sgs$stackIds$j.items,
          cateAxisId = _sgs$stackIds$j.cateAxisId;
      var barItems = items.filter(function (item) {
        return getDisplayName(item.type).indexOf('Bar') >= 0;
      });

      if (barItems && barItems.length) {
        var selfSize = barItems[0].props.barSize;
        var cateId = barItems[0].props[cateAxisId];

        if (!result[cateId]) {
          result[cateId] = [];
        }

        result[cateId].push({
          item: barItems[0],
          stackList: barItems.slice(1),
          barSize: isNil_1(selfSize) ? globalSize : selfSize
        });
      }
    }
  }

  return result;
};
/**
   * Calculate the size of each bar and the gap between two bars
   * @param  {Number} bandSize  The size of each category
   * @param  {sizeList} sizeList  The size of all groups
   * @param  {maxBarSize} maxBarSize The maximum size of bar
   * @return {Number} The size of each bar and the gap between two bars
   */

var getBarPosition = function getBarPosition(_ref5) {
  var barGap = _ref5.barGap,
      barCategoryGap = _ref5.barCategoryGap,
      bandSize = _ref5.bandSize,
      _ref5$sizeList = _ref5.sizeList,
      sizeList = _ref5$sizeList === void 0 ? [] : _ref5$sizeList,
      maxBarSize = _ref5.maxBarSize;
  var len = sizeList.length;
  if (len < 1) return null;
  var realBarGap = getPercentValue(barGap, bandSize, 0, true);
  var result; // whether or not is barSize setted by user

  if (sizeList[0].barSize === +sizeList[0].barSize) {
    var useFull = false;
    var fullBarSize = bandSize / len;
    var sum = sizeList.reduce(function (res, entry) {
      return res + entry.barSize || 0;
    }, 0);
    sum += (len - 1) * realBarGap;

    if (sum >= bandSize) {
      sum -= (len - 1) * realBarGap;
      realBarGap = 0;
    }

    if (sum >= bandSize && fullBarSize > 0) {
      useFull = true;
      fullBarSize *= 0.9;
      sum = len * fullBarSize;
    }

    var offset = (bandSize - sum) / 2 >> 0;
    var prev = {
      offset: offset - realBarGap,
      size: 0
    };
    result = sizeList.reduce(function (res, entry) {
      var newRes = [].concat(_toConsumableArray$7(res), [{
        item: entry.item,
        position: {
          offset: prev.offset + prev.size + realBarGap,
          size: useFull ? fullBarSize : entry.barSize
        }
      }]);
      prev = newRes[newRes.length - 1].position;

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function (item) {
          newRes.push({
            item: item,
            position: prev
          });
        });
      }

      return newRes;
    }, []);
  } else {
    var _offset = getPercentValue(barCategoryGap, bandSize, 0, true);

    if (bandSize - 2 * _offset - (len - 1) * realBarGap <= 0) {
      realBarGap = 0;
    }

    var originalSize = (bandSize - 2 * _offset - (len - 1) * realBarGap) / len;

    if (originalSize > 1) {
      originalSize >>= 0;
    }

    var size = maxBarSize === +maxBarSize ? Math.min(originalSize, maxBarSize) : originalSize;
    result = sizeList.reduce(function (res, entry, i) {
      var newRes = [].concat(_toConsumableArray$7(res), [{
        item: entry.item,
        position: {
          offset: _offset + (originalSize + realBarGap) * i + (originalSize - size) / 2,
          size: size
        }
      }]);

      if (entry.stackList && entry.stackList.length) {
        entry.stackList.forEach(function (item) {
          newRes.push({
            item: item,
            position: newRes[newRes.length - 1].position
          });
        });
      }

      return newRes;
    }, []);
  }

  return result;
};
var appendOffsetOfLegend = function appendOffsetOfLegend(offset, items, props, legendBox) {
  var children = props.children,
      width = props.width,
      height = props.height,
      margin = props.margin;
  var legendWidth = width - (margin.left || 0) - (margin.right || 0);
  var legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
  var legendProps = getLegendProps({
    children: children,
    items: items,
    legendWidth: legendWidth,
    legendHeight: legendHeight
  });
  var newOffset = offset;

  if (legendProps) {
    var box = legendBox || {};
    var align = legendProps.align,
        verticalAlign = legendProps.verticalAlign,
        layout = legendProps.layout;

    if ((layout === 'vertical' || layout === 'horizontal' && verticalAlign === 'center') && isNumber$1(offset[align])) {
      newOffset = _objectSpread$a({}, offset, _defineProperty$c({}, align, newOffset[align] + (box.width || 0)));
    }

    if ((layout === 'horizontal' || layout === 'vertical' && align === 'center') && isNumber$1(offset[verticalAlign])) {
      newOffset = _objectSpread$a({}, offset, _defineProperty$c({}, verticalAlign, newOffset[verticalAlign] + (box.height || 0)));
    }
  }

  return newOffset;
};
var getDomainOfErrorBars = function getDomainOfErrorBars(data, item, dataKey, axisType) {
  var children = item.props.children;
  var errorBars = findAllByType(children, ErrorBar).filter(function (errorBarChild) {
    var direction = errorBarChild.props.direction;
    return isNil_1(direction) || isNil_1(axisType) ? true : axisType.indexOf(direction) >= 0;
  });

  if (errorBars && errorBars.length) {
    var keys = errorBars.map(function (errorBarChild) {
      return errorBarChild.props.dataKey;
    });
    return data.reduce(function (result, entry) {
      var entryValue = getValueByDataKey(entry, dataKey, 0);
      var mainValue = isArray_1(entryValue) ? [min_1(entryValue), max_1(entryValue)] : [entryValue, entryValue];
      var errorDomain = keys.reduce(function (prevErrorArr, k) {
        var errorValue = getValueByDataKey(entry, k, 0);
        var lowerValue = mainValue[0] - Math.abs(isArray_1(errorValue) ? errorValue[0] : errorValue);
        var upperValue = mainValue[1] + Math.abs(isArray_1(errorValue) ? errorValue[1] : errorValue);
        return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
      }, [Infinity, -Infinity]);
      return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
    }, [Infinity, -Infinity]);
  }

  return null;
};
var parseErrorBarsOfAxis = function parseErrorBarsOfAxis(data, items, dataKey, axisType) {
  var domains = items.map(function (item) {
    return getDomainOfErrorBars(data, item, dataKey, axisType);
  }).filter(function (entry) {
    return !isNil_1(entry);
  });

  if (domains && domains.length) {
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }

  return null;
};
/**
 * Get domain of data by the configuration of item element
 * @param  {Array}   data      The data displayed in the chart
 * @param  {Array}   items     The instances of item
 * @param  {String}  type      The type of axis, number - Number Axis, category - Category Axis
 * @param  {Boolean} filterNil Whether or not filter nil values
 * @return {Array}        Domain
 */

var getDomainOfItemsWithSameAxis = function getDomainOfItemsWithSameAxis(data, items, type, filterNil) {
  var domains = items.map(function (item) {
    var dataKey = item.props.dataKey;

    if (type === 'number' && dataKey) {
      return getDomainOfErrorBars(data, item, dataKey) || getDomainOfDataByKey(data, dataKey, type, filterNil);
    }

    return getDomainOfDataByKey(data, dataKey, type, filterNil);
  });

  if (type === 'number') {
    // Calculate the domain of number axis
    return domains.reduce(function (result, entry) {
      return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])];
    }, [Infinity, -Infinity]);
  }

  var tag = {}; // Get the union set of category axis

  return domains.reduce(function (result, entry) {
    for (var i = 0, len = entry.length; i < len; i++) {
      if (!tag[entry[i]]) {
        tag[entry[i]] = true;
        result.push(entry[i]);
      }
    }

    return result;
  }, []);
};
var isCategorialAxis = function isCategorialAxis(layout, axisType) {
  return layout === 'horizontal' && axisType === 'xAxis' || layout === 'vertical' && axisType === 'yAxis' || layout === 'centric' && axisType === 'angleAxis' || layout === 'radial' && axisType === 'radiusAxis';
};
/**
 * Calculate the Coordinates of grid
 * @param  {Array} ticks The ticks in axis
 * @param {Number} min   The minimun value of axis
 * @param {Number} max   The maximun value of axis
 * @return {Array}       Coordinates
 */

var getCoordinatesOfGrid = function getCoordinatesOfGrid(ticks, min, max) {
  var hasMin, hasMax;
  var values = ticks.map(function (entry) {
    if (entry.coordinate === min) {
      hasMin = true;
    }

    if (entry.coordinate === max) {
      hasMax = true;
    }

    return entry.coordinate;
  });

  if (!hasMin) {
    values.push(min);
  }

  if (!hasMax) {
    values.push(max);
  }

  return values;
};
/**
 * Get the ticks of an axis
 * @param  {Object}  axis The configuration of an axis
 * @param {Boolean} isGrid Whether or not are the ticks in grid
 * @param {Boolean} isAll Return the ticks of all the points or not
 * @return {Array}  Ticks
 */

var getTicksOfAxis = function getTicksOfAxis(axis, isGrid, isAll) {
  if (!axis) return null;
  var scale = axis.scale;
  var duplicateDomain = axis.duplicateDomain,
      type = axis.type,
      range = axis.range;
  var offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / 2 : 0;
  offset = axis.axisType === 'angleAxis' ? mathSign(range[0] - range[1]) * 2 * offset : offset; // The ticks setted by user should only affect the ticks adjacent to axis line

  if (isGrid && (axis.ticks || axis.niceTicks)) {
    return (axis.ticks || axis.niceTicks).map(function (entry) {
      var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
      return {
        coordinate: scale(scaleContent) + offset,
        value: entry,
        offset: offset
      };
    });
  }

  if (axis.isCategorial && axis.categoricalDomain) {
    return axis.categoricalDomain.map(function (entry, index) {
      return {
        coordinate: scale(entry),
        value: entry,
        index: index,
        offset: offset
      };
    });
  }

  if (scale.ticks && !isAll) {
    return scale.ticks(axis.tickCount).map(function (entry) {
      return {
        coordinate: scale(entry) + offset,
        value: entry,
        offset: offset
      };
    });
  } // When axis has duplicated text, serial numbers are used to generate scale


  return scale.domain().map(function (entry, index) {
    return {
      coordinate: scale(entry) + offset,
      value: duplicateDomain ? duplicateDomain[entry] : entry,
      index: index,
      offset: offset
    };
  });
};
/**
 * combine the handlers
 * @param  {Function} defaultHandler Internal private handler
 * @param  {Function} parentHandler  Handler function specified in parent component
 * @param  {Function} childHandler   Handler function specified in child component
 * @return {Function}                The combined handler
 */

var combineEventHandlers = function combineEventHandlers(defaultHandler, parentHandler, childHandler) {
  var customizedHandler;

  if (isFunction_1(childHandler)) {
    customizedHandler = childHandler;
  } else if (isFunction_1(parentHandler)) {
    customizedHandler = parentHandler;
  }

  if (isFunction_1(defaultHandler) || customizedHandler) {
    return function (arg1, arg2, arg3, arg4) {
      if (isFunction_1(defaultHandler)) {
        defaultHandler(arg1, arg2, arg3, arg4);
      }

      if (isFunction_1(customizedHandler)) {
        customizedHandler(arg1, arg2, arg3, arg4);
      }
    };
  }

  return null;
};
/**
 * Parse the scale function of axis
 * @param  {Object}   axis          The option of axis
 * @param  {String}   chartType     The displayName of chart
 * @return {Function}               The scale funcion
 */

var parseScale = function parseScale(axis, chartType) {
  var scale = axis.scale,
      type = axis.type,
      layout = axis.layout,
      axisType = axis.axisType;

  if (scale === 'auto') {
    if (layout === 'radial' && axisType === 'radiusAxis') {
      return {
        scale: band(),
        realScaleType: 'band'
      };
    }

    if (layout === 'radial' && axisType === 'angleAxis') {
      return {
        scale: linear$1(),
        realScaleType: 'linear'
      };
    }

    if (type === 'category' && chartType && (chartType.indexOf('LineChart') >= 0 || chartType.indexOf('AreaChart') >= 0)) {
      return {
        scale: point$2(),
        realScaleType: 'point'
      };
    }

    if (type === 'category') {
      return {
        scale: band(),
        realScaleType: 'band'
      };
    }

    return {
      scale: linear$1(),
      realScaleType: 'linear'
    };
  }

  if (isString_1(scale)) {
    var name = "scale".concat(scale.slice(0, 1).toUpperCase()).concat(scale.slice(1));
    return {
      scale: (d3Scales[name] || point$2)(),
      realScaleType: d3Scales[name] ? name : 'point'
    };
  }

  return isFunction_1(scale) ? {
    scale: scale
  } : {
    scale: point$2(),
    realScaleType: 'point'
  };
};
var EPS$2 = 1e-4;
var checkDomainOfScale = function checkDomainOfScale(scale) {
  var domain = scale.domain();

  if (!domain || domain.length <= 2) {
    return;
  }

  var len = domain.length;
  var range = scale.range();
  var min = Math.min(range[0], range[1]) - EPS$2;
  var max = Math.max(range[0], range[1]) + EPS$2;
  var first = scale(domain[0]);
  var last = scale(domain[len - 1]);

  if (first < min || first > max || last < min || last > max) {
    scale.domain([domain[0], domain[len - 1]]);
  }
};
var findPositionOfBar = function findPositionOfBar(barPosition, child) {
  if (!barPosition) {
    return null;
  }

  for (var i = 0, len = barPosition.length; i < len; i++) {
    if (barPosition[i].item === child) {
      return barPosition[i].position;
    }
  }

  return null;
};
var truncateByDomain = function truncateByDomain(value, domain) {
  if (!domain || domain.length !== 2 || !isNumber$1(domain[0]) || !isNumber$1(domain[1])) {
    return value;
  }

  var min = Math.min(domain[0], domain[1]);
  var max = Math.max(domain[0], domain[1]);
  var result = [value[0], value[1]];

  if (!isNumber$1(value[0]) || value[0] < min) {
    result[0] = min;
  }

  if (!isNumber$1(value[1]) || value[1] > max) {
    result[1] = max;
  }

  if (result[0] > max) {
    result[0] = max;
  }

  if (result[1] < min) {
    result[1] = min;
  }

  return result;
};
/* eslint no-param-reassign: 0 */

var offsetSign = function offsetSign(series) {
  var n = series.length;

  if (n <= 0) {
    return;
  }

  for (var j = 0, m = series[0].length; j < m; ++j) {
    var positive = 0;
    var negative = 0;

    for (var i = 0; i < n; ++i) {
      var value = _isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
      /* eslint-disable prefer-destructuring */

      if (value >= 0) {
        series[i][j][0] = positive;
        series[i][j][1] = positive + value;
        positive = series[i][j][1];
      } else {
        series[i][j][0] = negative;
        series[i][j][1] = negative + value;
        negative = series[i][j][1];
      }
      /* eslint-enable prefer-destructuring */

    }
  }
};
var STACK_OFFSET_MAP = {
  sign: offsetSign,
  expand: stackOffsetExpand,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle
};
var getStackedData = function getStackedData(data, stackItems, offsetType) {
  var dataKeys = stackItems.map(function (item) {
    return item.props.dataKey;
  });
  var stack = shapeStack().keys(dataKeys).value(function (d, key) {
    return +getValueByDataKey(d, key, 0);
  }).order(stackOrderNone).offset(STACK_OFFSET_MAP[offsetType]);
  return stack(data);
};
var getStackGroupsByAxisId = function getStackGroupsByAxisId(data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
  if (!data) {
    return null;
  } // reversing items to affect render order (for layering)


  var items = reverseStackOrder ? _items.reverse() : _items;
  var stackGroups = items.reduce(function (result, item) {
    var _item$props3 = item.props,
        stackId = _item$props3.stackId,
        hide = _item$props3.hide;

    if (hide) {
      return result;
    }

    var axisId = item.props[numericAxisId];
    var parentGroup = result[axisId] || {
      hasStack: false,
      stackGroups: {}
    };

    if (isNumOrStr(stackId)) {
      var childGroup = parentGroup.stackGroups[stackId] || {
        numericAxisId: numericAxisId,
        cateAxisId: cateAxisId,
        items: []
      };
      childGroup.items.push(item);
      parentGroup.hasStack = true;
      parentGroup.stackGroups[stackId] = childGroup;
    } else {
      parentGroup.stackGroups[uniqueId('_stackId_')] = {
        numericAxisId: numericAxisId,
        cateAxisId: cateAxisId,
        items: [item]
      };
    }

    return _objectSpread$a({}, result, _defineProperty$c({}, axisId, parentGroup));
  }, {});
  return Object.keys(stackGroups).reduce(function (result, axisId) {
    var group = stackGroups[axisId];

    if (group.hasStack) {
      group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
        var g = group.stackGroups[stackId];
        return _objectSpread$a({}, res, _defineProperty$c({}, stackId, {
          numericAxisId: numericAxisId,
          cateAxisId: cateAxisId,
          items: g.items,
          stackedData: getStackedData(data, g.items, offsetType)
        }));
      }, {});
    }

    return _objectSpread$a({}, result, _defineProperty$c({}, axisId, group));
  }, {});
};
/**
 * get domain of ticks
 * @param  {Array} ticks Ticks of axis
 * @param  {String} type  The type of axis
 * @return {Array} domain
 */

var calculateDomainOfTicks = function calculateDomainOfTicks(ticks, type) {
  if (type === 'number') {
    return [min_1(ticks), max_1(ticks)];
  }

  return ticks;
};
/**
 * Configure the scale function of axis
 * @param {Object} scale The scale function
 * @param {Object} opts  The configuration of axis
 * @return {Object}      null
 */

var getTicksOfScale = function getTicksOfScale(scale, opts) {
  var realScaleType = opts.realScaleType,
      type = opts.type,
      tickCount = opts.tickCount,
      originalDomain = opts.originalDomain,
      allowDecimals = opts.allowDecimals;
  var scaleType = realScaleType || opts.scale;

  if (scaleType !== 'auto' && scaleType !== 'linear') {
    return null;
  }

  if (tickCount && type === 'number' && originalDomain && (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
    // Calculate the ticks by the number of grid when the axis is a number axis
    var domain = scale.domain();
    var tickValues = getNiceTickValues(domain, tickCount, allowDecimals);
    scale.domain(calculateDomainOfTicks(tickValues, type));
    return {
      niceTicks: tickValues
    };
  }

  if (tickCount && type === 'number') {
    var _domain = scale.domain();

    var _tickValues = getTickValuesFixedDomain(_domain, tickCount, allowDecimals);

    return {
      niceTicks: _tickValues
    };
  }

  return null;
};
var getCateCoordinateOfBar = function getCateCoordinateOfBar(_ref7) {
  var axis = _ref7.axis,
      ticks = _ref7.ticks,
      offset = _ref7.offset,
      bandSize = _ref7.bandSize,
      entry = _ref7.entry,
      index = _ref7.index;

  if (axis.type === 'category') {
    return ticks[index] ? ticks[index].coordinate + offset : null;
  }

  var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
  return !isNil_1(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
var getBaseValueOfBar = function getBaseValueOfBar(_ref8) {
  var numericAxis = _ref8.numericAxis;
  var domain = numericAxis.scale.domain();

  if (numericAxis.type === 'number') {
    var min = Math.min(domain[0], domain[1]);
    var max = Math.max(domain[0], domain[1]);

    if (min <= 0 && max >= 0) {
      return 0;
    }

    if (max < 0) {
      return max;
    }

    return min;
  }

  return domain[0];
};
var getStackedDataOfItem = function getStackedDataOfItem(item, stackGroups) {
  var stackId = item.props.stackId;

  if (isNumOrStr(stackId)) {
    var group = stackGroups[stackId];

    if (group && group.items.length) {
      var itemIndex = -1;

      for (var i = 0, len = group.items.length; i < len; i++) {
        if (group.items[i] === item) {
          itemIndex = i;
          break;
        }
      }

      return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
    }
  }

  return null;
};

var getDomainOfSingle = function getDomainOfSingle(data) {
  return data.reduce(function (result, entry) {
    return [min_1(entry.concat([result[0]]).filter(isNumber$1)), max_1(entry.concat([result[1]]).filter(isNumber$1))];
  }, [Infinity, -Infinity]);
};

var getDomainOfStackGroups = function getDomainOfStackGroups(stackGroups, startIndex, endIndex) {
  return Object.keys(stackGroups).reduce(function (result, stackId) {
    var group = stackGroups[stackId];
    var stackedData = group.stackedData;
    var domain = stackedData.reduce(function (res, entry) {
      var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
      return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
    }, [Infinity, -Infinity]);
    return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
  }, [Infinity, -Infinity]).map(function (result) {
    return result === Infinity || result === -Infinity ? 0 : result;
  });
};
var MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function parseSpecifiedDomain(specifiedDomain, dataDomain, allowDataOverflow) {
  if (!isArray_1(specifiedDomain)) {
    return dataDomain;
  }

  var domain = [];
  /* eslint-disable prefer-destructuring */

  if (isNumber$1(specifiedDomain[0])) {
    domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
  } else if (MIN_VALUE_REG.test(specifiedDomain[0])) {
    var value = +MIN_VALUE_REG.exec(specifiedDomain[0])[1];
    domain[0] = dataDomain[0] - value;
  } else if (isFunction_1(specifiedDomain[0])) {
    domain[0] = specifiedDomain[0](dataDomain[0]);
  } else {
    domain[0] = dataDomain[0];
  }

  if (isNumber$1(specifiedDomain[1])) {
    domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
  } else if (MAX_VALUE_REG.test(specifiedDomain[1])) {
    var _value = +MAX_VALUE_REG.exec(specifiedDomain[1])[1];

    domain[1] = dataDomain[1] + _value;
  } else if (isFunction_1(specifiedDomain[1])) {
    domain[1] = specifiedDomain[1](dataDomain[1]);
  } else {
    domain[1] = dataDomain[1];
  }
  /* eslint-enable prefer-destructuring */


  return domain;
};
/**
 * Calculate the size between two category
 * @param  {Object} axis  The options of axis
 * @param  {Array}  ticks The ticks of axis
 * @return {Number} Size
 */

var getBandSizeOfAxis = function getBandSizeOfAxis(axis, ticks) {
  if (axis && axis.scale && axis.scale.bandwidth) {
    return axis.scale.bandwidth();
  }

  if (axis && ticks && ticks.length >= 2) {
    var orderedTicks = sortBy_1(ticks, function (o) {
      return o.coordinate;
    });

    var bandSize = Infinity;

    for (var i = 1, len = orderedTicks.length; i < len; i++) {
      var cur = orderedTicks[i];
      var prev = orderedTicks[i - 1];
      bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
    }

    return bandSize === Infinity ? 0 : bandSize;
  }

  return 0;
};
/**
 * parse the domain of a category axis when a domain is specified
 * @param   {Array}        specifiedDomain  The domain specified by users
 * @param   {Array}        calculatedDomain The domain calculated by dateKey
 * @param   {ReactElement} axisChild        The axis element
 * @returns {Array}        domains
 */

var parseDomainOfCategoryAxis = function parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisChild) {
  if (!specifiedDomain || !specifiedDomain.length) {
    return calculatedDomain;
  }

  if (isEqual_1(specifiedDomain, get_1(axisChild, 'type.defaultProps.domain'))) {
    return calculatedDomain;
  }

  return specifiedDomain;
};

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { _defineProperty$d(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$d(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$5(arr, i) { return _arrayWithHoles$6(arr) || _iterableToArrayLimit$5(arr, i) || _nonIterableRest$6(); }

function _nonIterableRest$6() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$5(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$6(arr) { if (Array.isArray(arr)) return arr; }
var RADIAN$1 = Math.PI / 180;
var radianToDegree = function radianToDegree(angleInRadian) {
  return angleInRadian * 180 / Math.PI;
};
var polarToCartesian = function polarToCartesian(cx, cy, radius, angle) {
  return {
    x: cx + Math.cos(-RADIAN$1 * angle) * radius,
    y: cy + Math.sin(-RADIAN$1 * angle) * radius
  };
};
var getMaxRadius = function getMaxRadius(width, height) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {Object} axisType  The type of axes, radius-axis or angle-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */

var formatAxisMap = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height;
  var startAngle = props.startAngle,
      endAngle = props.endAngle;
  var cx = getPercentValue(props.cx, width, width / 2);
  var cy = getPercentValue(props.cy, height, height / 2);
  var maxRadius = getMaxRadius(width, height, offset);
  var innerRadius = getPercentValue(props.innerRadius, maxRadius, 0);
  var outerRadius = getPercentValue(props.outerRadius, maxRadius, maxRadius * 0.8);
  var ids = Object.keys(axisMap);
  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var domain = axis.domain,
        reversed = axis.reversed;
    var range;

    if (isNil_1(axis.range)) {
      if (axisType === 'angleAxis') {
        range = [startAngle, endAngle];
      } else if (axisType === 'radiusAxis') {
        range = [innerRadius, outerRadius];
      }

      if (reversed) {
        range = [range[1], range[0]];
      }
    } else {
      range = axis.range;
      var _range = range;

      var _range2 = _slicedToArray$5(_range, 2);

      startAngle = _range2[0];
      endAngle = _range2[1];
    }

    var _parseScale = parseScale(axis, chartName),
        realScaleType = _parseScale.realScaleType,
        scale = _parseScale.scale;

    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _objectSpread$b({}, axis, {
      realScaleType: realScaleType
    }));

    var finalAxis = _objectSpread$b({}, axis, {}, ticks, {
      range: range,
      radius: outerRadius,
      realScaleType: realScaleType,
      scale: scale,
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });

    return _objectSpread$b({}, result, _defineProperty$d({}, id, finalAxis));
  }, {});
};
var distanceBetweenPoints = function distanceBetweenPoints(point, anotherPoint) {
  var x1 = point.x,
      y1 = point.y;
  var x2 = anotherPoint.x,
      y2 = anotherPoint.y;
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
};
var getAngleOfPoint = function getAngleOfPoint(_ref, _ref2) {
  var x = _ref.x,
      y = _ref.y;
  var cx = _ref2.cx,
      cy = _ref2.cy;
  var radius = distanceBetweenPoints({
    x: x,
    y: y
  }, {
    x: cx,
    y: cy
  });

  if (radius <= 0) {
    return {
      radius: radius
    };
  }

  var cos = (x - cx) / radius;
  var angleInRadian = Math.acos(cos);

  if (y > cy) {
    angleInRadian = 2 * Math.PI - angleInRadian;
  }

  return {
    radius: radius,
    angle: radianToDegree(angleInRadian),
    angleInRadian: angleInRadian
  };
};
var formatAngleOfSector = function formatAngleOfSector(_ref3) {
  var startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return {
    startAngle: startAngle - min * 360,
    endAngle: endAngle - min * 360
  };
};

var reverseFormatAngleOfSetor = function reverseFormatAngleOfSetor(angle, _ref4) {
  var startAngle = _ref4.startAngle,
      endAngle = _ref4.endAngle;
  var startCnt = Math.floor(startAngle / 360);
  var endCnt = Math.floor(endAngle / 360);
  var min = Math.min(startCnt, endCnt);
  return angle + min * 360;
};

var inRangeOfSector = function inRangeOfSector(_ref5, sector) {
  var x = _ref5.x,
      y = _ref5.y;

  var _getAngleOfPoint = getAngleOfPoint({
    x: x,
    y: y
  }, sector),
      radius = _getAngleOfPoint.radius,
      angle = _getAngleOfPoint.angle;

  var innerRadius = sector.innerRadius,
      outerRadius = sector.outerRadius;

  if (radius < innerRadius || radius > outerRadius) {
    return false;
  }

  if (radius === 0) {
    return true;
  }

  var _formatAngleOfSector = formatAngleOfSector(sector),
      startAngle = _formatAngleOfSector.startAngle,
      endAngle = _formatAngleOfSector.endAngle;

  var formatAngle = angle;
  var inRange;

  if (startAngle <= endAngle) {
    while (formatAngle > endAngle) {
      formatAngle -= 360;
    }

    while (formatAngle < startAngle) {
      formatAngle += 360;
    }

    inRange = formatAngle >= startAngle && formatAngle <= endAngle;
  } else {
    while (formatAngle > startAngle) {
      formatAngle -= 360;
    }

    while (formatAngle < endAngle) {
      formatAngle += 360;
    }

    inRange = formatAngle >= endAngle && formatAngle <= startAngle;
  }

  if (inRange) {
    return _objectSpread$b({}, sector, {
      radius: radius,
      angle: reverseFormatAngleOfSetor(formatAngle, sector)
    });
  }

  return null;
};

function _toConsumableArray$8(arr) { return _arrayWithoutHoles$8(arr) || _iterableToArray$9(arr) || _nonIterableSpread$8(); }

function _nonIterableSpread$8() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$9(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$8(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { _defineProperty$e(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$e(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var cartesianViewBoxShape = propTypes.shape({
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number
});
var polarViewBoxShape = propTypes.shape({
  cx: propTypes.number,
  cy: propTypes.number,
  innerRadius: propTypes.number,
  outerRadius: propTypes.number,
  startAngle: propTypes.number,
  endAngle: propTypes.number
});

var propTypes$4 = _objectSpread$c({}, PRESENTATION_ATTRIBUTES, {
  viewBox: propTypes.oneOfType([cartesianViewBoxShape, polarViewBoxShape]),
  formatter: propTypes.func,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  offset: propTypes.number,
  position: propTypes.oneOf(['top', 'left', 'right', 'bottom', 'inside', 'outside', 'insideLeft', 'insideRight', 'insideTop', 'insideBottom', 'insideTopLeft', 'insideBottomLeft', 'insideTopRight', 'insideBottomRight', 'insideStart', 'insideEnd', 'end', 'center', 'centerTop', 'centerBottom']),
  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
  className: propTypes.string,
  content: propTypes.oneOfType([propTypes.element, propTypes.func])
});

var defaultProps$1 = {
  offset: 5
};

var getLabel = function getLabel(props) {
  var value = props.value,
      formatter = props.formatter;
  var label = isNil_1(props.children) ? value : props.children;

  if (isFunction_1(formatter)) {
    return formatter(label);
  }

  return label;
};

var getDeltaAngle = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};

var renderRadialLabel = function renderRadialLabel(labelProps, label, attrs) {
  var position = labelProps.position,
      viewBox = labelProps.viewBox,
      offset = labelProps.offset,
      className = labelProps.className;
  var cx = viewBox.cx,
      cy = viewBox.cy,
      innerRadius = viewBox.innerRadius,
      outerRadius = viewBox.outerRadius,
      startAngle = viewBox.startAngle,
      endAngle = viewBox.endAngle,
      clockWise = viewBox.clockWise;
  var radius = (innerRadius + outerRadius) / 2;
  var deltaAngle = getDeltaAngle(startAngle, endAngle);
  var sign = deltaAngle >= 0 ? 1 : -1;
  var labelAngle, direction;

  if (position === 'insideStart') {
    labelAngle = startAngle + sign * offset;
    direction = clockWise;
  } else if (position === 'insideEnd') {
    labelAngle = endAngle - sign * offset;
    direction = !clockWise;
  } else if (position === 'end') {
    labelAngle = endAngle + sign * offset;
    direction = clockWise;
  }

  direction = deltaAngle <= 0 ? direction : !direction;
  var startPoint = polarToCartesian(cx, cy, radius, labelAngle);
  var endPoint = polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
  var path = "M".concat(startPoint.x, ",").concat(startPoint.y, "\n    A").concat(radius, ",").concat(radius, ",0,1,").concat(direction ? 0 : 1, ",\n    ").concat(endPoint.x, ",").concat(endPoint.y);
  var id = isNil_1(labelProps.id) ? uniqueId('recharts-radial-line-') : labelProps.id;
  return react.createElement("text", _extends$6({}, attrs, {
    dominantBaseline: "central",
    className: classnames('recharts-radial-bar-label', className)
  }), react.createElement("defs", null, react.createElement("path", {
    id: id,
    d: path
  })), react.createElement("textPath", {
    xlinkHref: "#".concat(id)
  }, label));
};

var getAttrsOfPolarLabel = function getAttrsOfPolarLabel(props) {
  var viewBox = props.viewBox,
      offset = props.offset,
      position = props.position;
  var cx = viewBox.cx,
      cy = viewBox.cy,
      innerRadius = viewBox.innerRadius,
      outerRadius = viewBox.outerRadius,
      startAngle = viewBox.startAngle,
      endAngle = viewBox.endAngle;
  var midAngle = (startAngle + endAngle) / 2;

  if (position === 'outside') {
    var _polarToCartesian = polarToCartesian(cx, cy, outerRadius + offset, midAngle),
        _x = _polarToCartesian.x,
        _y = _polarToCartesian.y;

    return {
      x: _x,
      y: _y,
      textAnchor: _x >= cx ? 'start' : 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'center') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'centerTop') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }

  if (position === 'centerBottom') {
    return {
      x: cx,
      y: cy,
      textAnchor: 'middle',
      verticalAnchor: 'end'
    };
  }

  var r = (innerRadius + outerRadius) / 2;

  var _polarToCartesian2 = polarToCartesian(cx, cy, r, midAngle),
      x = _polarToCartesian2.x,
      y = _polarToCartesian2.y;

  return {
    x: x,
    y: y,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  };
};

var getAttrsOfCartesianLabel = function getAttrsOfCartesianLabel(props) {
  var viewBox = props.viewBox,
      offset = props.offset,
      position = props.position;
  var x = viewBox.x,
      y = viewBox.y,
      width = viewBox.width,
      height = viewBox.height;
  var sign = height >= 0 ? 1 : -1;

  if (position === 'top') {
    return {
      x: x + width / 2,
      y: y - sign * offset,
      textAnchor: 'middle',
      verticalAnchor: sign > 0 ? 'end' : 'start'
    };
  }

  if (position === 'bottom') {
    return {
      x: x + width / 2,
      y: y + height + sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }

  if (position === 'left') {
    return {
      x: x - offset,
      y: y + height / 2,
      textAnchor: 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'right') {
    return {
      x: x + width + offset,
      y: y + height / 2,
      textAnchor: 'start',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'insideLeft') {
    return {
      x: x + offset,
      y: y + height / 2,
      textAnchor: 'start',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'insideRight') {
    return {
      x: x + width - offset,
      y: y + height / 2,
      textAnchor: 'end',
      verticalAnchor: 'middle'
    };
  }

  if (position === 'insideTop') {
    return {
      x: x + width / 2,
      y: y + sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'start'
    };
  }

  if (position === 'insideBottom') {
    return {
      x: x + width / 2,
      y: y + height - sign * offset,
      textAnchor: 'middle',
      verticalAnchor: 'end'
    };
  }

  if (position === 'insideTopLeft') {
    return {
      x: x + offset,
      y: y + sign * offset,
      textAnchor: 'start',
      verticalAnchor: 'start'
    };
  }

  if (position === 'insideTopRight') {
    return {
      x: x + width - offset,
      y: y + sign * offset,
      textAnchor: 'end',
      verticalAnchor: 'start'
    };
  }

  if (position === 'insideBottomLeft') {
    return {
      x: x + offset,
      y: y + height - sign * offset,
      textAnchor: 'start',
      verticalAnchor: 'end'
    };
  }

  if (position === 'insideBottomRight') {
    return {
      x: x + width - offset,
      y: y + height - sign * offset,
      textAnchor: 'end',
      verticalAnchor: 'end'
    };
  }

  if (isObject_1(position) && (isNumber$1(position.x) || isPercent(position.x)) && (isNumber$1(position.y) || isPercent(position.y))) {
    return {
      x: x + getPercentValue(position.x, width),
      y: y + getPercentValue(position.y, height),
      textAnchor: 'end',
      verticalAnchor: 'end'
    };
  }

  return {
    x: x + width / 2,
    y: y + height / 2,
    textAnchor: 'middle',
    verticalAnchor: 'middle'
  };
};

var isPolar = function isPolar(viewBox) {
  return isNumber$1(viewBox.cx);
};

function Label(props) {
  var viewBox = props.viewBox,
      position = props.position,
      value = props.value,
      children = props.children,
      content = props.content,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;

  if (!viewBox || isNil_1(value) && isNil_1(children) && !react.isValidElement(content) && !isFunction_1(content)) {
    return null;
  }

  if (react.isValidElement(content)) {
    return react.cloneElement(content, props);
  }

  var label;

  if (isFunction_1(content)) {
    label = content(props);

    if (react.isValidElement(label)) {
      return label;
    }
  } else {
    label = getLabel(props);
  }

  var isPolarLabel = isPolar(viewBox);
  var attrs = getPresentationAttributes(props);
  var events = filterEventAttributes(props);

  if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
    return renderRadialLabel(props, label, attrs);
  }

  var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
  return react.createElement(Text, _extends$6({
    className: classnames('recharts-label', className)
  }, attrs, positionAttrs, events), label);
}

Label.displayName = 'Label';
Label.defaultProps = defaultProps$1;
Label.propTypes = propTypes$4;

var parseViewBox = function parseViewBox(props) {
  var cx = props.cx,
      cy = props.cy,
      angle = props.angle,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      r = props.r,
      radius = props.radius,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      x = props.x,
      y = props.y,
      top = props.top,
      left = props.left,
      width = props.width,
      height = props.height,
      clockWise = props.clockWise;

  if (isNumber$1(width) && isNumber$1(height)) {
    if (isNumber$1(x) && isNumber$1(y)) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }

    if (isNumber$1(top) && isNumber$1(left)) {
      return {
        x: top,
        y: left,
        width: width,
        height: height
      };
    }
  }

  if (isNumber$1(x) && isNumber$1(y)) {
    return {
      x: x,
      y: y,
      width: 0,
      height: 0
    };
  }

  if (isNumber$1(cx) && isNumber$1(cy)) {
    return {
      cx: cx,
      cy: cy,
      startAngle: startAngle || angle || 0,
      endAngle: endAngle || angle || 0,
      innerRadius: innerRadius || 0,
      outerRadius: outerRadius || radius || r || 0,
      clockWise: clockWise
    };
  }

  if (props.viewBox) {
    return props.viewBox;
  }

  return {};
};

var parseLabel = function parseLabel(label, viewBox) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return react.createElement(Label, {
      key: "label-implicit",
      viewBox: viewBox
    });
  }

  if (isNumOrStr(label)) {
    return react.createElement(Label, {
      key: "label-implicit",
      viewBox: viewBox,
      value: label
    });
  }

  if (react.isValidElement(label)) {
    if (label.type === Label) {
      return react.cloneElement(label, {
        key: 'label-implicit',
        viewBox: viewBox
      });
    }

    return react.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox: viewBox
    });
  }

  if (isFunction_1(label)) {
    return react.createElement(Label, {
      key: "label-implicit",
      content: label,
      viewBox: viewBox
    });
  }

  if (isObject_1(label)) {
    return react.createElement(Label, _extends$6({
      viewBox: viewBox
    }, label, {
      key: "label-implicit"
    }));
  }

  return null;
};

var renderCallByParent = function renderCallByParent(parentProps, viewBox) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }

  var children = parentProps.children;
  var parentViewBox = parseViewBox(parentProps);
  var explicitChilren = findAllByType(children, Label).map(function (child, index) {
    return react.cloneElement(child, {
      viewBox: viewBox || parentViewBox,
      key: "label-".concat(index)
    });
  });

  if (!ckeckPropsLabel) {
    return explicitChilren;
  }

  var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
  return [implicitLabel].concat(_toConsumableArray$8(explicitChilren));
};

Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last$1;

function _toConsumableArray$9(arr) { return _arrayWithoutHoles$9(arr) || _iterableToArray$a(arr) || _nonIterableSpread$9(); }

function _nonIterableSpread$9() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$a(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$9(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { _defineProperty$f(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$f(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes$5 = {
  id: propTypes.string,
  data: propTypes.arrayOf(propTypes.object),
  valueAccessor: propTypes.func,
  clockWise: propTypes.bool,
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func])
};
var defaultProps$2 = {
  valueAccessor: function valueAccessor(entry) {
    return isArray_1(entry.value) ? last_1(entry.value) : entry.value;
  }
};

function LabelList(props) {
  var data = props.data,
      valueAccessor = props.valueAccessor,
      dataKey = props.dataKey,
      clockWise = props.clockWise,
      id = props.id,
      others = _objectWithoutProperties$6(props, ["data", "valueAccessor", "dataKey", "clockWise", "id"]);

  if (!data || !data.length) {
    return null;
  }

  return react.createElement(Layer, {
    className: "recharts-label-list"
  }, data.map(function (entry, index) {
    var value = isNil_1(dataKey) ? valueAccessor(entry, index) : getValueByDataKey(entry && entry.payload, dataKey);
    var idProps = isNil_1(id) ? {} : {
      id: "".concat(id, "-").concat(index)
    };
    return react.createElement(Label, _extends$7({}, getPresentationAttributes(entry), others, idProps, {
      index: index,
      value: value,
      viewBox: Label.parseViewBox(isNil_1(clockWise) ? entry : _objectSpread$d({}, entry, {
        clockWise: clockWise
      })),
      key: "label-".concat(index) // eslint-disable-line react/no-array-index-key

    }));
  }));
}

LabelList.propTypes = propTypes$5;
LabelList.displayName = 'LabelList';

var parseLabelList = function parseLabelList(label, data) {
  if (!label) {
    return null;
  }

  if (label === true) {
    return react.createElement(LabelList, {
      key: "labelList-implicit",
      data: data
    });
  }

  if (react.isValidElement(label) || isFunction_1(label)) {
    return react.createElement(LabelList, {
      key: "labelList-implicit",
      data: data,
      content: label
    });
  }

  if (isObject_1(label)) {
    return react.createElement(LabelList, _extends$7({
      data: data
    }, label, {
      key: "labelList-implicit"
    }));
  }

  return null;
};

var renderCallByParent$1 = function renderCallByParent(parentProps, data) {
  var ckeckPropsLabel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!parentProps || !parentProps.children && ckeckPropsLabel && !parentProps.label) {
    return null;
  }

  var children = parentProps.children;
  var explicitChilren = findAllByType(children, LabelList).map(function (child, index) {
    return react.cloneElement(child, {
      data: data,
      key: "labelList-".concat(index)
    });
  });

  if (!ckeckPropsLabel) {
    return explicitChilren;
  }

  var implicitLabelList = parseLabelList(parentProps.label, data);
  return [implicitLabelList].concat(_toConsumableArray$9(explicitChilren));
};

LabelList.renderCallByParent = renderCallByParent$1;
LabelList.defaultProps = defaultProps$2;

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(source, true).forEach(function (key) { _defineProperty$g(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$g(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof$9(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$9 = function _typeof(obj) { return typeof obj; }; } else { _typeof$9 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$9(obj); }

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$8(self, call) { if (call && (_typeof$9(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$8(self); }

function _assertThisInitialized$8(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$8(o) { _getPrototypeOf$8 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$8(o); }

function _inherits$8(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$8(subClass, superClass); }

function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }

var getDeltaAngle$1 = function getDeltaAngle(startAngle, endAngle) {
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
  return sign * deltaAngle;
};

var getTangentCircle = function getTangentCircle(_ref) {
  var cx = _ref.cx,
      cy = _ref.cy,
      radius = _ref.radius,
      angle = _ref.angle,
      sign = _ref.sign,
      isExternal = _ref.isExternal,
      cornerRadius = _ref.cornerRadius,
      cornerIsExternal = _ref.cornerIsExternal;
  var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
  var theta = Math.asin(cornerRadius / centerRadius) / RADIAN$1;
  var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
  var center = polarToCartesian(cx, cy, centerRadius, centerAngle); // The coordinate of point which is tangent to the circle

  var circleTangency = polarToCartesian(cx, cy, radius, centerAngle); // The coordinate of point which is tangent to the radius line

  var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
  var lineTangency = polarToCartesian(cx, cy, centerRadius * Math.cos(theta * RADIAN$1), lineTangencyAngle);
  return {
    center: center,
    circleTangency: circleTangency,
    lineTangency: lineTangency,
    theta: theta
  };
};

var getSectorPath = function getSectorPath(_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      innerRadius = _ref2.innerRadius,
      outerRadius = _ref2.outerRadius,
      startAngle = _ref2.startAngle,
      endAngle = _ref2.endAngle;
  var angle = getDeltaAngle$1(startAngle, endAngle); // When the angle of sector equals to 360, star point and end point coincide

  var tempEndAngle = startAngle + angle;
  var outerStartPoint = polarToCartesian(cx, cy, outerRadius, startAngle);
  var outerEndPoint = polarToCartesian(cx, cy, outerRadius, tempEndAngle);
  var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");

  if (innerRadius > 0) {
    var innerStartPoint = polarToCartesian(cx, cy, innerRadius, startAngle);
    var innerEndPoint = polarToCartesian(cx, cy, innerRadius, tempEndAngle);
    path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
  } else {
    path += "L ".concat(cx, ",").concat(cy, " Z");
  }

  return path;
};

var getSectorWithCorner = function getSectorWithCorner(_ref3) {
  var cx = _ref3.cx,
      cy = _ref3.cy,
      innerRadius = _ref3.innerRadius,
      outerRadius = _ref3.outerRadius,
      cornerRadius = _ref3.cornerRadius,
      forceCornerRadius = _ref3.forceCornerRadius,
      cornerIsExternal = _ref3.cornerIsExternal,
      startAngle = _ref3.startAngle,
      endAngle = _ref3.endAngle;
  var sign = mathSign(endAngle - startAngle);

  var _getTangentCircle = getTangentCircle({
    cx: cx,
    cy: cy,
    radius: outerRadius,
    angle: startAngle,
    sign: sign,
    cornerRadius: cornerRadius,
    cornerIsExternal: cornerIsExternal
  }),
      soct = _getTangentCircle.circleTangency,
      solt = _getTangentCircle.lineTangency,
      sot = _getTangentCircle.theta;

  var _getTangentCircle2 = getTangentCircle({
    cx: cx,
    cy: cy,
    radius: outerRadius,
    angle: endAngle,
    sign: -sign,
    cornerRadius: cornerRadius,
    cornerIsExternal: cornerIsExternal
  }),
      eoct = _getTangentCircle2.circleTangency,
      eolt = _getTangentCircle2.lineTangency,
      eot = _getTangentCircle2.theta;

  var outerArcAngle = Math.abs(startAngle - endAngle) - sot - eot;

  if (outerArcAngle < 0) {
    if (forceCornerRadius) {
      return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
    }

    return getSectorPath({
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle
    });
  }

  var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");

  if (innerRadius > 0) {
    var _getTangentCircle3 = getTangentCircle({
      cx: cx,
      cy: cy,
      radius: innerRadius,
      angle: startAngle,
      sign: sign,
      isExternal: true,
      cornerRadius: cornerRadius,
      cornerIsExternal: cornerIsExternal
    }),
        sict = _getTangentCircle3.circleTangency,
        silt = _getTangentCircle3.lineTangency,
        sit = _getTangentCircle3.theta;

    var _getTangentCircle4 = getTangentCircle({
      cx: cx,
      cy: cy,
      radius: innerRadius,
      angle: endAngle,
      sign: -sign,
      isExternal: true,
      cornerRadius: cornerRadius,
      cornerIsExternal: cornerIsExternal
    }),
        eict = _getTangentCircle4.circleTangency,
        eilt = _getTangentCircle4.lineTangency,
        eit = _getTangentCircle4.theta;

    var innerArcAngle = Math.abs(startAngle - endAngle) - sit - eit;

    if (innerArcAngle < 0) {
      return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
    }

    path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
  } else {
    path += "L".concat(cx, ",").concat(cy, "Z");
  }

  return path;
};

var Sector =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$8(Sector, _PureComponent);

  function Sector() {
    _classCallCheck$8(this, Sector);

    return _possibleConstructorReturn$8(this, _getPrototypeOf$8(Sector).apply(this, arguments));
  }

  _createClass$8(Sector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cx = _this$props.cx,
          cy = _this$props.cy,
          innerRadius = _this$props.innerRadius,
          outerRadius = _this$props.outerRadius,
          cornerRadius = _this$props.cornerRadius,
          forceCornerRadius = _this$props.forceCornerRadius,
          cornerIsExternal = _this$props.cornerIsExternal,
          startAngle = _this$props.startAngle,
          endAngle = _this$props.endAngle,
          className = _this$props.className;

      if (outerRadius < innerRadius || startAngle === endAngle) {
        return null;
      }

      var layerClass = classnames('recharts-sector', className);
      var deltaRadius = outerRadius - innerRadius;
      var cr = getPercentValue(cornerRadius, deltaRadius, 0, true);
      var path;

      if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
        path = getSectorWithCorner({
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          cornerRadius: Math.min(cr, deltaRadius / 2),
          forceCornerRadius: forceCornerRadius,
          cornerIsExternal: cornerIsExternal,
          startAngle: startAngle,
          endAngle: endAngle
        });
      } else {
        path = getSectorPath({
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          startAngle: startAngle,
          endAngle: endAngle
        });
      }

      return react.createElement("path", _extends$8({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
        className: layerClass,
        d: path
      }));
    }
  }]);

  return Sector;
}(react.PureComponent);

Sector.displayName = 'Sector';
Sector.propTypes = _objectSpread$e({}, PRESENTATION_ATTRIBUTES, {
  className: propTypes.string,
  cx: propTypes.number,
  cy: propTypes.number,
  innerRadius: propTypes.number,
  outerRadius: propTypes.number,
  startAngle: propTypes.number,
  endAngle: propTypes.number,
  cornerRadius: propTypes.oneOfType([propTypes.number, propTypes.string]),
  forceCornerRadius: propTypes.bool,
  cornerIsExternal: propTypes.bool
});
Sector.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: false,
  cornerIsExternal: false
};

function _typeof$a(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$a = function _typeof(obj) { return typeof obj; }; } else { _typeof$a = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$a(obj); }

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(source, true).forEach(function (key) { _defineProperty$h(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$h(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$9(self, call) { if (call && (_typeof$a(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$9(self); }

function _assertThisInitialized$9(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$9(o) { _getPrototypeOf$9 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$9(o); }

function _inherits$9(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$9(subClass, superClass); }

function _setPrototypeOf$9(o, p) { _setPrototypeOf$9 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$9(o, p); }
var CURVE_FACTORIES = {
  curveBasisClosed: curveBasisClosed,
  curveBasisOpen: curveBasisOpen,
  curveBasis: curveBasis,
  curveLinearClosed: curveLinearClosed,
  curveLinear: curveLinear,
  curveMonotoneX: monotoneX,
  curveMonotoneY: monotoneY,
  curveNatural: curveNatural,
  curveStep: curveStep,
  curveStepAfter: stepAfter,
  curveStepBefore: stepBefore
};

var defined = function defined(p) {
  return p.x === +p.x && p.y === +p.y;
};

var getX = function getX(p) {
  return p.x;
};

var getY = function getY(p) {
  return p.y;
};

var getCurveFactory = function getCurveFactory(type, layout) {
  if (isFunction_1(type)) {
    return type;
  }

  var name = "curve".concat(type.slice(0, 1).toUpperCase()).concat(type.slice(1));

  if (name === 'curveMonotone' && layout) {
    return CURVE_FACTORIES["".concat(name).concat(layout === 'vertical' ? 'Y' : 'X')];
  }

  return CURVE_FACTORIES[name] || curveLinear;
};

var Curve =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$9(Curve, _PureComponent);

  function Curve() {
    _classCallCheck$9(this, Curve);

    return _possibleConstructorReturn$9(this, _getPrototypeOf$9(Curve).apply(this, arguments));
  }

  _createClass$9(Curve, [{
    key: "getPath",

    /**
     * Calculate the path of curve
     * @return {String} path
     */
    value: function getPath() {
      var _this$props = this.props,
          type = _this$props.type,
          points = _this$props.points,
          baseLine = _this$props.baseLine,
          layout = _this$props.layout,
          connectNulls = _this$props.connectNulls;
      var curveFactory = getCurveFactory(type, layout);
      var formatPoints = connectNulls ? points.filter(function (entry) {
        return defined(entry);
      }) : points;
      var lineFunction;

      if (isArray_1(baseLine)) {
        var formatBaseLine = connectNulls ? baseLine.filter(function (base) {
          return defined(base);
        }) : baseLine;
        var areaPoints = formatPoints.map(function (entry, index) {
          return _objectSpread$f({}, entry, {
            base: formatBaseLine[index]
          });
        });

        if (layout === 'vertical') {
          lineFunction = shapeArea().y(getY).x1(getX).x0(function (d) {
            return d.base.x;
          });
        } else {
          lineFunction = shapeArea().x(getX).y1(getY).y0(function (d) {
            return d.base.y;
          });
        }

        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(areaPoints);
      }

      if (layout === 'vertical' && isNumber$1(baseLine)) {
        lineFunction = shapeArea().y(getY).x1(getX).x0(baseLine);
      } else if (isNumber$1(baseLine)) {
        lineFunction = shapeArea().x(getX).y1(getY).y0(baseLine);
      } else {
        lineFunction = shapeLine().x(getX).y(getY);
      }

      lineFunction.defined(defined).curve(curveFactory);
      return lineFunction(formatPoints);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          points = _this$props2.points,
          path = _this$props2.path,
          pathRef = _this$props2.pathRef;

      if ((!points || !points.length) && !path) {
        return null;
      }

      var realPath = points && points.length ? this.getPath() : path;
      return react.createElement("path", _extends$9({}, getPresentationAttributes(this.props), filterEventAttributes(this.props, null, true), {
        className: classnames('recharts-curve', className),
        d: realPath,
        ref: pathRef
      }));
    }
  }]);

  return Curve;
}(react.PureComponent);

Curve.displayName = 'Curve';
Curve.propTypes = _objectSpread$f({}, PRESENTATION_ATTRIBUTES, {
  className: propTypes.string,
  type: propTypes.oneOfType([propTypes.oneOf(['basis', 'basisClosed', 'basisOpen', 'linear', 'linearClosed', 'natural', 'monotoneX', 'monotoneY', 'monotone', 'step', 'stepBefore', 'stepAfter']), propTypes.func]),
  layout: propTypes.oneOf(['horizontal', 'vertical']),
  baseLine: propTypes.oneOfType([propTypes.number, propTypes.array]),
  points: propTypes.arrayOf(propTypes.object),
  connectNulls: propTypes.bool,
  path: propTypes.string,
  pathRef: propTypes.func
});
Curve.defaultProps = {
  type: 'linear',
  points: [],
  connectNulls: false
};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(source, true).forEach(function (key) { _defineProperty$i(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$i(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof$b(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$b = function _typeof(obj) { return typeof obj; }; } else { _typeof$b = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$b(obj); }

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$a(self, call) { if (call && (_typeof$b(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$a(self); }

function _assertThisInitialized$a(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$a(o) { _getPrototypeOf$a = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$a(o); }

function _inherits$a(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$a(subClass, superClass); }

function _setPrototypeOf$a(o, p) { _setPrototypeOf$a = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$a(o, p); }

var getRectangePath = function getRectangePath(x, y, width, height, radius) {
  var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
  var ySign = height >= 0 ? 1 : -1;
  var xSign = width >= 0 ? 1 : -1;
  var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
  var path;

  if (maxRadius > 0 && radius instanceof Array) {
    var newRadius = [];

    for (var i = 0, len = 4; i < len; i++) {
      newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
    }

    path = "M".concat(x, ",").concat(y + ySign * newRadius[0]);

    if (newRadius[0] > 0) {
      path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x + xSign * newRadius[0], ",").concat(y);
    }

    path += "L ".concat(x + width - xSign * newRadius[1], ",").concat(y);

    if (newRadius[1] > 0) {
      path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x + width, ",").concat(y + ySign * newRadius[1]);
    }

    path += "L ".concat(x + width, ",").concat(y + height - ySign * newRadius[2]);

    if (newRadius[2] > 0) {
      path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x + width - xSign * newRadius[2], ",").concat(y + height);
    }

    path += "L ".concat(x + xSign * newRadius[3], ",").concat(y + height);

    if (newRadius[3] > 0) {
      path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x, ",").concat(y + height - ySign * newRadius[3]);
    }

    path += 'Z';
  } else if (maxRadius > 0 && radius === +radius && radius > 0) {
    var _newRadius = Math.min(maxRadius, radius);

    path = "M ".concat(x, ",").concat(y + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + xSign * _newRadius, ",").concat(y, "\n            L ").concat(x + width - xSign * _newRadius, ",").concat(y, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width, ",").concat(y + ySign * _newRadius, "\n            L ").concat(x + width, ",").concat(y + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width - xSign * _newRadius, ",").concat(y + height, "\n            L ").concat(x + xSign * _newRadius, ",").concat(y + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x, ",").concat(y + height - ySign * _newRadius, " Z");
  } else {
    path = "M ".concat(x, ",").concat(y, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
  }

  return path;
};

var Rectangle =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$a(Rectangle, _PureComponent);

  function Rectangle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$a(this, Rectangle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$a(this, (_getPrototypeOf2 = _getPrototypeOf$a(Rectangle)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      totalLength: -1
    };
    return _this;
  }

  _createClass$a(Rectangle, [{
    key: "componentDidMount",

    /* eslint-disable  react/no-did-mount-set-state */
    value: function componentDidMount() {
      if (this.node && this.node.getTotalLength) {
        try {
          var totalLength = this.node.getTotalLength();

          if (totalLength) {
            this.setState({
              totalLength: totalLength
            });
          }
        } catch (err) {// calculate total length error
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          width = _this$props.width,
          height = _this$props.height,
          radius = _this$props.radius,
          className = _this$props.className;
      var totalLength = this.state.totalLength;
      var _this$props2 = this.props,
          animationEasing = _this$props2.animationEasing,
          animationDuration = _this$props2.animationDuration,
          animationBegin = _this$props2.animationBegin,
          isAnimationActive = _this$props2.isAnimationActive,
          isUpdateAnimationActive = _this$props2.isUpdateAnimationActive;

      if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
        return null;
      }

      var layerClass = classnames('recharts-rectangle', className);

      if (!isUpdateAnimationActive) {
        return react.createElement("path", _extends$a({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
          className: layerClass,
          d: getRectangePath(x, y, width, height, radius)
        }));
      }

      return react.createElement(Animate, {
        canBegin: totalLength > 0,
        from: {
          width: width,
          height: height,
          x: x,
          y: y
        },
        to: {
          width: width,
          height: height,
          x: x,
          y: y
        },
        duration: animationDuration,
        animationEasing: animationEasing,
        isActive: isUpdateAnimationActive
      }, function (_ref) {
        var currWidth = _ref.width,
            currHeight = _ref.height,
            currX = _ref.x,
            currY = _ref.y;
        return react.createElement(Animate, {
          canBegin: totalLength > 0,
          from: "0px ".concat(totalLength === -1 ? 1 : totalLength, "px"),
          to: "".concat(totalLength, "px 0px"),
          attributeName: "strokeDasharray",
          begin: animationBegin,
          duration: animationDuration,
          isActive: isAnimationActive,
          easing: animationEasing
        }, react.createElement("path", _extends$a({}, getPresentationAttributes(_this2.props), filterEventAttributes(_this2.props), {
          className: layerClass,
          d: getRectangePath(currX, currY, currWidth, currHeight, radius),
          ref: function ref(node) {
            _this2.node = node;
          }
        })));
      });
    }
  }]);

  return Rectangle;
}(react.PureComponent);

Rectangle.displayName = 'Rectangle';
Rectangle.propTypes = _objectSpread$g({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  className: propTypes.string,
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  radius: propTypes.oneOfType([propTypes.number, propTypes.array]),
  isAnimationActive: propTypes.bool,
  isUpdateAnimationActive: propTypes.bool,
  animationBegin: propTypes.number,
  animationDuration: propTypes.number,
  animationEasing: propTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
});
Rectangle.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: false,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(source, true).forEach(function (key) { _defineProperty$j(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$j(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof$c(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$c = function _typeof(obj) { return typeof obj; }; } else { _typeof$c = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$c(obj); }

function _extends$b() { _extends$b = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }

function _classCallCheck$b(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$b(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$b(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$b(Constructor.prototype, protoProps); if (staticProps) _defineProperties$b(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$b(self, call) { if (call && (_typeof$c(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$b(self); }

function _assertThisInitialized$b(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$b(o) { _getPrototypeOf$b = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$b(o); }

function _inherits$b(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$b(subClass, superClass); }

function _setPrototypeOf$b(o, p) { _setPrototypeOf$b = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$b(o, p); }

var getPolygonPoints = function getPolygonPoints(points) {
  return points.reduce(function (result, entry) {
    if (entry.x === +entry.x && entry.y === +entry.y) {
      result.push([entry.x, entry.y]);
    }

    return result;
  }, []).join(' ');
};

var Polygon =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$b(Polygon, _PureComponent);

  function Polygon() {
    _classCallCheck$b(this, Polygon);

    return _possibleConstructorReturn$b(this, _getPrototypeOf$b(Polygon).apply(this, arguments));
  }

  _createClass$b(Polygon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          points = _this$props.points,
          className = _this$props.className;

      if (!points || !points.length) {
        return null;
      }

      var layerClass = classnames('recharts-polygon', className);
      return react.createElement("polygon", _extends$b({}, getPresentationAttributes(this.props), filterEventAttributes(this.props), {
        className: layerClass,
        points: getPolygonPoints(points)
      }));
    }
  }]);

  return Polygon;
}(react.PureComponent);

Polygon.displayName = 'Polygon';
Polygon.propTypes = _objectSpread$h({}, PRESENTATION_ATTRIBUTES, {
  className: propTypes.string,
  points: propTypes.arrayOf(propTypes.shape({
    x: propTypes.number,
    y: propTypes.number
  }))
});

function _typeof$d(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$d = function _typeof(obj) { return typeof obj; }; } else { _typeof$d = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$d(obj); }

function _extends$c() { _extends$c = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }

function _classCallCheck$c(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$c(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$c(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$c(Constructor.prototype, protoProps); if (staticProps) _defineProperties$c(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$c(self, call) { if (call && (_typeof$d(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$c(self); }

function _assertThisInitialized$c(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$c(o) { _getPrototypeOf$c = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$c(o); }

function _inherits$c(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$c(subClass, superClass); }

function _setPrototypeOf$c(o, p) { _setPrototypeOf$c = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$c(o, p); }

var Dot =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$c(Dot, _PureComponent);

  function Dot() {
    _classCallCheck$c(this, Dot);

    return _possibleConstructorReturn$c(this, _getPrototypeOf$c(Dot).apply(this, arguments));
  }

  _createClass$c(Dot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cx = _this$props.cx,
          cy = _this$props.cy,
          r = _this$props.r,
          className = _this$props.className;
      var layerClass = classnames('recharts-dot', className);

      if (cx === +cx && cy === +cy && r === +r) {
        return react.createElement("circle", _extends$c({}, getPresentationAttributes(this.props), filterEventAttributes(this.props, null, true), {
          className: layerClass,
          cx: cx,
          cy: cy,
          r: r
        }));
      }

      return null;
    }
  }]);

  return Dot;
}(react.PureComponent);

Dot.displayName = 'Dot';
Dot.propTypes = {
  className: propTypes.string,
  cx: propTypes.number,
  cy: propTypes.number,
  r: propTypes.number
};

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(source, true).forEach(function (key) { _defineProperty$k(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$k(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof$e(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$e = function _typeof(obj) { return typeof obj; }; } else { _typeof$e = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$e(obj); }

function _extends$d() { _extends$d = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }

function _classCallCheck$d(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$d(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$d(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$d(Constructor.prototype, protoProps); if (staticProps) _defineProperties$d(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$d(self, call) { if (call && (_typeof$e(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$d(self); }

function _assertThisInitialized$d(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$d(o) { _getPrototypeOf$d = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$d(o); }

function _inherits$d(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$d(subClass, superClass); }

function _setPrototypeOf$d(o, p) { _setPrototypeOf$d = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$d(o, p); }

var Cross =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$d(Cross, _PureComponent);

  function Cross() {
    _classCallCheck$d(this, Cross);

    return _possibleConstructorReturn$d(this, _getPrototypeOf$d(Cross).apply(this, arguments));
  }

  _createClass$d(Cross, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          width = _this$props.width,
          height = _this$props.height,
          top = _this$props.top,
          left = _this$props.left,
          className = _this$props.className;

      if (!isNumber$1(x) || !isNumber$1(y) || !isNumber$1(width) || !isNumber$1(height) || !isNumber$1(top) || !isNumber$1(left)) {
        return null;
      }

      return react.createElement("path", _extends$d({}, getPresentationAttributes(this.props), {
        className: classnames('recharts-cross', className),
        d: this.constructor.getPath(x, y, width, height, top, left)
      }));
    }
  }], [{
    key: "getPath",
    value: function getPath(x, y, width, height, top, left) {
      return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
    }
  }]);

  return Cross;
}(react.PureComponent);

Cross.displayName = 'Cross';
Cross.propTypes = _objectSpread$i({}, PRESENTATION_ATTRIBUTES, {
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  top: propTypes.number,
  left: propTypes.number,
  className: propTypes.string
});
Cross.defaultProps = {
  x: 0,
  y: 0,
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

function _typeof$f(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$f = function _typeof(obj) { return typeof obj; }; } else { _typeof$f = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$f(obj); }

function _extends$e() { _extends$e = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(source, true).forEach(function (key) { _defineProperty$l(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$l(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$e(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$e(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$e(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$e(Constructor.prototype, protoProps); if (staticProps) _defineProperties$e(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$e(self, call) { if (call && (_typeof$f(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$e(self); }

function _assertThisInitialized$e(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$e(o) { _getPrototypeOf$e = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$e(o); }

function _inherits$e(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$e(subClass, superClass); }

function _setPrototypeOf$e(o, p) { _setPrototypeOf$e = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$e(o, p); }

var PolarGrid =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$e(PolarGrid, _PureComponent);

  function PolarGrid() {
    _classCallCheck$e(this, PolarGrid);

    return _possibleConstructorReturn$e(this, _getPrototypeOf$e(PolarGrid).apply(this, arguments));
  }

  _createClass$e(PolarGrid, [{
    key: "getPolygonPath",
    value: function getPolygonPath(radius) {
      var _this$props = this.props,
          cx = _this$props.cx,
          cy = _this$props.cy,
          polarAngles = _this$props.polarAngles;
      var path = '';
      polarAngles.forEach(function (angle, i) {
        var point = polarToCartesian(cx, cy, radius, angle);

        if (i) {
          path += "L ".concat(point.x, ",").concat(point.y);
        } else {
          path += "M ".concat(point.x, ",").concat(point.y);
        }
      });
      path += 'Z';
      return path;
    }
    /**
     * Draw axis of radial line
     * @return {[type]} The lines
     */

  }, {
    key: "renderPolarAngles",
    value: function renderPolarAngles() {
      var _this$props2 = this.props,
          cx = _this$props2.cx,
          cy = _this$props2.cy,
          innerRadius = _this$props2.innerRadius,
          outerRadius = _this$props2.outerRadius,
          polarAngles = _this$props2.polarAngles;

      if (!polarAngles || !polarAngles.length) {
        return null;
      }

      var props = _objectSpread$j({
        stroke: '#ccc'
      }, getPresentationAttributes(this.props));

      return react.createElement("g", {
        className: "recharts-polar-grid-angle"
      }, polarAngles.map(function (entry, i) {
        var start = polarToCartesian(cx, cy, innerRadius, entry);
        var end = polarToCartesian(cx, cy, outerRadius, entry);
        return react.createElement("line", _extends$e({}, props, {
          key: "line-".concat(i) // eslint-disable-line react/no-array-index-key
          ,
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        }));
      }));
    }
    /**
     * Draw concentric circles
     * @param {Number} radius The radius of circle
     * @param {Number} index  The index of circle
     * @param {Object} extraProps Extra props
     * @return {ReactElement} circle
     */

  }, {
    key: "renderConcentricCircle",
    value: function renderConcentricCircle(radius, index, extraProps) {
      var _this$props3 = this.props,
          cx = _this$props3.cx,
          cy = _this$props3.cy;

      var props = _objectSpread$j({
        stroke: '#ccc'
      }, getPresentationAttributes(this.props), {
        fill: 'none'
      }, extraProps);

      return react.createElement("circle", _extends$e({}, props, {
        className: "recharts-polar-grid-concentric-circle",
        key: "circle-".concat(index),
        cx: cx,
        cy: cy,
        r: radius
      }));
    }
    /**
     * Draw concentric polygons
     * @param {Number} radius     The radius of polygon
     * @param {Number} index      The index of polygon
     * @param {Object} extraProps Extra props
     * @return {ReactElement} polygon
     */

  }, {
    key: "renderConcentricPolygon",
    value: function renderConcentricPolygon(radius, index, extraProps) {
      var props = _objectSpread$j({
        stroke: '#ccc'
      }, getPresentationAttributes(this.props), {
        fill: 'none'
      }, extraProps);

      return react.createElement("path", _extends$e({}, props, {
        className: "recharts-polar-grid-concentric-polygon",
        key: "path-".concat(index),
        d: this.getPolygonPath(radius)
      }));
    }
    /**
     * Draw concentric axis
     * @return {ReactElement} Concentric axis
     * @todo Optimize the name
     */

  }, {
    key: "renderConcentricPath",
    value: function renderConcentricPath() {
      var _this = this;

      var _this$props4 = this.props,
          polarRadius = _this$props4.polarRadius,
          gridType = _this$props4.gridType;

      if (!polarRadius || !polarRadius.length) {
        return null;
      }

      return react.createElement("g", {
        className: "recharts-polar-grid-concentric"
      }, polarRadius.map(function (entry, i) {
        return gridType === 'circle' ? _this.renderConcentricCircle(entry, i) : _this.renderConcentricPolygon(entry, i);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var outerRadius = this.props.outerRadius;

      if (outerRadius <= 0) {
        return null;
      }

      return react.createElement("g", {
        className: "recharts-polar-grid"
      }, this.renderPolarAngles(), this.renderConcentricPath());
    }
  }]);

  return PolarGrid;
}(react.PureComponent);

PolarGrid.displayName = 'PolarGrid';
PolarGrid.propTypes = _objectSpread$j({}, PRESENTATION_ATTRIBUTES, {
  cx: propTypes.number,
  cy: propTypes.number,
  innerRadius: propTypes.number,
  outerRadius: propTypes.number,
  polarAngles: propTypes.arrayOf(propTypes.number),
  polarRadius: propTypes.arrayOf(propTypes.number),
  gridType: propTypes.oneOf(['polygon', 'circle'])
});
PolarGrid.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  gridType: 'polygon'
};

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, _baseIteratee(iteratee), _baseLt)
    : undefined;
}

var minBy_1 = minBy;

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? _baseExtremum(array, _baseIteratee(iteratee), _baseGt)
    : undefined;
}

var maxBy_1 = maxBy;

function _typeof$g(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$g = function _typeof(obj) { return typeof obj; }; } else { _typeof$g = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$g(obj); }

function _extends$f() { _extends$f = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(source, true).forEach(function (key) { _defineProperty$m(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$m(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$f(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$f(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$f(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$f(Constructor.prototype, protoProps); if (staticProps) _defineProperties$f(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$f(self, call) { if (call && (_typeof$g(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$f(self); }

function _assertThisInitialized$f(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$f(o) { _getPrototypeOf$f = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$f(o); }

function _inherits$f(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$f(subClass, superClass); }

function _setPrototypeOf$f(o, p) { _setPrototypeOf$f = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$f(o, p); }

var PolarRadiusAxis =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$f(PolarRadiusAxis, _PureComponent);

  function PolarRadiusAxis() {
    _classCallCheck$f(this, PolarRadiusAxis);

    return _possibleConstructorReturn$f(this, _getPrototypeOf$f(PolarRadiusAxis).apply(this, arguments));
  }

  _createClass$f(PolarRadiusAxis, [{
    key: "getTickValueCoord",

    /**
     * Calculate the coordinate of tick
     * @param  {Number} coordinate The radius of tick
     * @return {Object} (x, y)
     */
    value: function getTickValueCoord(_ref) {
      var coordinate = _ref.coordinate;
      var _this$props = this.props,
          angle = _this$props.angle,
          cx = _this$props.cx,
          cy = _this$props.cy;
      return polarToCartesian(cx, cy, coordinate, angle);
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var orientation = this.props.orientation;
      var textAnchor;

      switch (orientation) {
        case 'left':
          textAnchor = 'end';
          break;

        case 'right':
          textAnchor = 'start';
          break;

        default:
          textAnchor = 'middle';
          break;
      }

      return textAnchor;
    }
  }, {
    key: "getViewBox",
    value: function getViewBox() {
      var _this$props2 = this.props,
          cx = _this$props2.cx,
          cy = _this$props2.cy,
          angle = _this$props2.angle,
          ticks = _this$props2.ticks;

      var maxRadiusTick = maxBy_1(ticks, function (entry) {
        return entry.coordinate || 0;
      });

      var minRadiusTick = minBy_1(ticks, function (entry) {
        return entry.coordinate || 0;
      });

      return {
        cx: cx,
        cy: cy,
        startAngle: angle,
        endAngle: angle,
        innerRadius: minRadiusTick.coordinate || 0,
        outerRadius: maxRadiusTick.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props3 = this.props,
          cx = _this$props3.cx,
          cy = _this$props3.cy,
          angle = _this$props3.angle,
          ticks = _this$props3.ticks,
          axisLine = _this$props3.axisLine,
          others = _objectWithoutProperties$7(_this$props3, ["cx", "cy", "angle", "ticks", "axisLine"]);

      var extent = ticks.reduce(function (result, entry) {
        return [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)];
      }, [Infinity, -Infinity]);
      var point0 = polarToCartesian(cx, cy, extent[0], angle);
      var point1 = polarToCartesian(cx, cy, extent[1], angle);

      var props = _objectSpread$k({}, getPresentationAttributes(others), {
        fill: 'none'
      }, getPresentationAttributes(axisLine), {
        x1: point0.x,
        y1: point0.y,
        x2: point1.x,
        y2: point1.y
      });

      return react.createElement("line", _extends$f({
        className: "recharts-polar-radius-axis-line"
      }, props));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;

      var _this$props4 = this.props,
          ticks = _this$props4.ticks,
          tick = _this$props4.tick,
          angle = _this$props4.angle,
          tickFormatter = _this$props4.tickFormatter,
          stroke = _this$props4.stroke,
          others = _objectWithoutProperties$7(_this$props4, ["ticks", "tick", "angle", "tickFormatter", "stroke"]);

      var textAnchor = this.getTickTextAnchor();
      var axisProps = getPresentationAttributes(others);
      var customTickProps = getPresentationAttributes(tick);
      var items = ticks.map(function (entry, i) {
        var coord = _this.getTickValueCoord(entry);

        var tickProps = _objectSpread$k({
          textAnchor: textAnchor,
          transform: "rotate(".concat(90 - angle, ", ").concat(coord.x, ", ").concat(coord.y, ")")
        }, axisProps, {
          stroke: 'none',
          fill: stroke
        }, customTickProps, {
          index: i
        }, coord, {
          payload: entry
        });

        return react.createElement(Layer, _extends$f({
          className: "recharts-polar-radius-axis-tick",
          key: "tick-".concat(i) // eslint-disable-line react/no-array-index-key

        }, filterEventsOfChild(_this.props, entry, i)), _this.constructor.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value));
      });
      return react.createElement(Layer, {
        className: "recharts-polar-radius-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          ticks = _this$props5.ticks,
          axisLine = _this$props5.axisLine,
          tick = _this$props5.tick;

      if (!ticks || !ticks.length) {
        return null;
      }

      return react.createElement(Layer, {
        className: "recharts-polar-radius-axis"
      }, axisLine && this.renderAxisLine(), tick && this.renderTicks(), Label.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;

      if (react.isValidElement(option)) {
        tickItem = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        tickItem = option(props);
      } else {
        tickItem = react.createElement(Text, _extends$f({}, props, {
          className: "recharts-polar-radius-axis-tick-value"
        }), value);
      }

      return tickItem;
    }
  }]);

  return PolarRadiusAxis;
}(react.PureComponent);

PolarRadiusAxis.displayName = 'PolarRadiusAxis';
PolarRadiusAxis.axisType = 'radiusAxis';
PolarRadiusAxis.propTypes = _objectSpread$k({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  type: propTypes.oneOf(['number', 'category']),
  cx: propTypes.number,
  cy: propTypes.number,
  hide: propTypes.bool,
  radiusAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  angle: propTypes.number,
  tickCount: propTypes.number,
  ticks: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    coordinate: propTypes.number
  })),
  orientation: propTypes.oneOf(['left', 'right', 'middle']),
  axisLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  tick: propTypes.oneOfType([propTypes.bool, propTypes.object, propTypes.element, propTypes.func]),
  stroke: propTypes.string,
  tickFormatter: propTypes.func,
  domain: propTypes.arrayOf(propTypes.oneOfType([propTypes.number, propTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
  scale: propTypes.oneOfType([propTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold']), propTypes.func]),
  allowDataOverflow: propTypes.bool,
  allowDuplicatedCategory: propTypes.bool
});
PolarRadiusAxis.defaultProps = {
  type: 'number',
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: 'right',
  stroke: '#ccc',
  axisLine: true,
  tick: true,
  tickCount: 5,
  domain: [0, 'auto'],
  allowDataOverflow: false,
  scale: 'auto',
  allowDuplicatedCategory: true
};

function _typeof$h(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$h = function _typeof(obj) { return typeof obj; }; } else { _typeof$h = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$h(obj); }

function _extends$g() { _extends$g = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(source, true).forEach(function (key) { _defineProperty$n(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$n(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$g(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$g(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$g(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$g(Constructor.prototype, protoProps); if (staticProps) _defineProperties$g(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$g(self, call) { if (call && (_typeof$h(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$g(self); }

function _assertThisInitialized$g(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$g(o) { _getPrototypeOf$g = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$g(o); }

function _inherits$g(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$g(subClass, superClass); }

function _setPrototypeOf$g(o, p) { _setPrototypeOf$g = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$g(o, p); }
var RADIAN$2 = Math.PI / 180;
var eps = 1e-5;

var PolarAngleAxis =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$g(PolarAngleAxis, _PureComponent);

  function PolarAngleAxis() {
    _classCallCheck$g(this, PolarAngleAxis);

    return _possibleConstructorReturn$g(this, _getPrototypeOf$g(PolarAngleAxis).apply(this, arguments));
  }

  _createClass$g(PolarAngleAxis, [{
    key: "getTickLineCoord",

    /**
     * Calculate the coordinate of line endpoint
     * @param  {Object} data The Data if ticks
     * @return {Object} (x0, y0): The start point of text,
     *                  (x1, y1): The end point close to text,
     *                  (x2, y2): The end point close to axis
     */
    value: function getTickLineCoord(data) {
      var _this$props = this.props,
          cx = _this$props.cx,
          cy = _this$props.cy,
          radius = _this$props.radius,
          orientation = _this$props.orientation,
          tickLine = _this$props.tickLine;
      var tickLineSize = tickLine && tickLine.size || 8;
      var p1 = polarToCartesian(cx, cy, radius, data.coordinate);
      var p2 = polarToCartesian(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);
      return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y
      };
    }
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */

  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor(data) {
      var orientation = this.props.orientation;
      var cos = Math.cos(-data.coordinate * RADIAN$2);
      var textAnchor;

      if (cos > eps) {
        textAnchor = orientation === 'outer' ? 'start' : 'end';
      } else if (cos < -eps) {
        textAnchor = orientation === 'outer' ? 'end' : 'start';
      } else {
        textAnchor = 'middle';
      }

      return textAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props2 = this.props,
          cx = _this$props2.cx,
          cy = _this$props2.cy,
          radius = _this$props2.radius,
          axisLine = _this$props2.axisLine,
          axisLineType = _this$props2.axisLineType;

      var props = _objectSpread$l({}, getPresentationAttributes(this.props), {
        fill: 'none'
      }, getPresentationAttributes(axisLine));

      if (axisLineType === 'circle') {
        return react.createElement(Dot, _extends$g({
          className: "recharts-polar-angle-axis-line"
        }, props, {
          cx: cx,
          cy: cy,
          r: radius
        }));
      }

      var ticks = this.props.ticks;
      var points = ticks.map(function (entry) {
        return polarToCartesian(cx, cy, radius, entry.coordinate);
      });
      return react.createElement(Polygon, _extends$g({
        className: "recharts-polar-angle-axis-line"
      }, props, {
        points: points
      }));
    }
  }, {
    key: "renderTicks",
    value: function renderTicks() {
      var _this = this;

      var _this$props3 = this.props,
          ticks = _this$props3.ticks,
          tick = _this$props3.tick,
          tickLine = _this$props3.tickLine,
          tickFormatter = _this$props3.tickFormatter,
          stroke = _this$props3.stroke;
      var axisProps = getPresentationAttributes(this.props);
      var customTickProps = getPresentationAttributes(tick);

      var tickLineProps = _objectSpread$l({}, axisProps, {
        fill: 'none'
      }, getPresentationAttributes(tickLine));

      var items = ticks.map(function (entry, i) {
        var lineCoord = _this.getTickLineCoord(entry);

        var textAnchor = _this.getTickTextAnchor(entry);

        var tickProps = _objectSpread$l({
          textAnchor: textAnchor
        }, axisProps, {
          stroke: 'none',
          fill: stroke
        }, customTickProps, {
          index: i,
          payload: entry,
          x: lineCoord.x2,
          y: lineCoord.y2
        });

        return react.createElement(Layer, _extends$g({
          className: "recharts-polar-angle-axis-tick",
          key: "tick-".concat(i) // eslint-disable-line react/no-array-index-key

        }, filterEventsOfChild(_this.props, entry, i)), tickLine && react.createElement("line", _extends$g({
          className: "recharts-polar-angle-axis-tick-line"
        }, tickLineProps, lineCoord)), tick && _this.constructor.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value) : entry.value));
      });
      return react.createElement(Layer, {
        className: "recharts-polar-angle-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          ticks = _this$props4.ticks,
          radius = _this$props4.radius,
          axisLine = _this$props4.axisLine;

      if (radius <= 0 || !ticks || !ticks.length) {
        return null;
      }

      return react.createElement(Layer, {
        className: "recharts-polar-angle-axis"
      }, axisLine && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;

      if (react.isValidElement(option)) {
        tickItem = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        tickItem = option(props);
      } else {
        tickItem = react.createElement(Text, _extends$g({}, props, {
          className: "recharts-polar-angle-axis-tick-value"
        }), value);
      }

      return tickItem;
    }
  }]);

  return PolarAngleAxis;
}(react.PureComponent);

PolarAngleAxis.displayName = 'PolarAngleAxis';
PolarAngleAxis.axisType = 'angleAxis';
PolarAngleAxis.propTypes = _objectSpread$l({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  type: propTypes.oneOf(['number', 'category']),
  angleAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  dataKey: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]),
  cx: propTypes.number,
  cy: propTypes.number,
  radius: propTypes.oneOfType([propTypes.number, propTypes.string]),
  hide: propTypes.bool,
  scale: propTypes.oneOfType([propTypes.oneOf(SCALE_TYPES), propTypes.func]),
  axisLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  axisLineType: propTypes.oneOf(['polygon', 'circle']),
  tickLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  tick: propTypes.oneOfType([propTypes.bool, propTypes.func, propTypes.object, propTypes.element]),
  ticks: propTypes.arrayOf(propTypes.shape({
    value: propTypes.any,
    coordinate: propTypes.number
  })),
  stroke: propTypes.string,
  orientation: propTypes.oneOf(['inner', 'outer']),
  tickFormatter: propTypes.func,
  allowDuplicatedCategory: propTypes.bool
});
PolarAngleAxis.defaultProps = {
  type: 'category',
  angleAxisId: 0,
  scale: 'auto',
  cx: 0,
  cy: 0,
  domain: [0, 'auto'],
  orientation: 'outer',
  axisLine: true,
  tickLine: true,
  tick: true,
  hide: false,
  allowDuplicatedCategory: true
};

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$c = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$c.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$a.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

function _typeof$i(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$i = function _typeof(obj) { return typeof obj; }; } else { _typeof$i = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$i(obj); }

function _extends$h() { _extends$h = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }

function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$j(source, true).forEach(function (key) { _defineProperty$o(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$j(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$o(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$h(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$h(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$h(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$h(Constructor.prototype, protoProps); if (staticProps) _defineProperties$h(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$h(self, call) { if (call && (_typeof$i(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$h(self); }

function _assertThisInitialized$h(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$h(o) { _getPrototypeOf$h = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$h(o); }

function _inherits$h(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$h(subClass, superClass); }

function _setPrototypeOf$h(o, p) { _setPrototypeOf$h = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$h(o, p); }

var Pie =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$h(Pie, _PureComponent);

  function Pie() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$h(this, Pie);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$h(this, (_getPrototypeOf2 = _getPrototypeOf$h(Pie)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isAnimationFinished: false
    };
    _this.id = uniqueId('recharts-pie-');

    _this.cachePrevData = function (sectors) {
      _this.setState({
        prevSectors: sectors
      });
    };

    _this.handleAnimationEnd = function () {
      var onAnimationEnd = _this.props.onAnimationEnd;

      _this.setState({
        isAnimationFinished: true
      });

      if (isFunction_1(onAnimationEnd)) {
        onAnimationEnd();
      }
    };

    _this.handleAnimationStart = function () {
      var onAnimationStart = _this.props.onAnimationStart;

      _this.setState({
        isAnimationFinished: false
      });

      if (isFunction_1(onAnimationStart)) {
        onAnimationStart();
      }
    };

    return _this;
  }

  _createClass$h(Pie, [{
    key: "componentWillReceiveProps",
    // eslint-disable-next-line camelcase
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          animationId = _this$props.animationId,
          sectors = _this$props.sectors;

      if (nextProps.isAnimationActive !== this.props.isAnimationActive) {
        this.cachePrevData([]);
      } else if (nextProps.animationId !== animationId) {
        this.cachePrevData(sectors);
      }
    }
  }, {
    key: "isActiveIndex",
    value: function isActiveIndex(i) {
      var activeIndex = this.props.activeIndex;

      if (Array.isArray(activeIndex)) {
        return activeIndex.indexOf(i) !== -1;
      }

      return i === activeIndex;
    }
  }, {
    key: "renderLabels",
    value: function renderLabels(sectors) {
      var _this2 = this;

      var isAnimationActive = this.props.isAnimationActive;

      if (isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props2 = this.props,
          label = _this$props2.label,
          labelLine = _this$props2.labelLine,
          dataKey = _this$props2.dataKey,
          valueKey = _this$props2.valueKey;
      var pieProps = getPresentationAttributes(this.props);
      var customLabelProps = getPresentationAttributes(label);
      var customLabelLineProps = getPresentationAttributes(labelLine);
      var offsetRadius = label && label.offsetRadius || 20;
      var labels = sectors.map(function (entry, i) {
        var midAngle = (entry.startAngle + entry.endAngle) / 2;
        var endPoint = polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);

        var labelProps = _objectSpread$m({}, pieProps, {}, entry, {
          stroke: 'none'
        }, customLabelProps, {
          index: i,
          textAnchor: _this2.constructor.getTextAnchor(endPoint.x, entry.cx)
        }, endPoint);

        var lineProps = _objectSpread$m({}, pieProps, {}, entry, {
          fill: 'none',
          stroke: entry.fill
        }, customLabelLineProps, {
          index: i,
          points: [polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint],
          key: 'line'
        });

        var realDataKey = dataKey; // TODO: compatible to lower versions

        if (isNil_1(dataKey) && isNil_1(valueKey)) {
          realDataKey = 'value';
        } else if (isNil_1(dataKey)) {
          realDataKey = valueKey;
        }

        return (// eslint-disable-next-line react/no-array-index-key
          react.createElement(Layer, {
            key: "label-".concat(i)
          }, labelLine && _this2.constructor.renderLabelLineItem(labelLine, lineProps), _this2.constructor.renderLabelItem(label, labelProps, getValueByDataKey(entry, realDataKey)))
        );
      });
      return react.createElement(Layer, {
        className: "recharts-pie-labels"
      }, labels);
    }
  }, {
    key: "renderSectorsStatically",
    value: function renderSectorsStatically(sectors) {
      var _this3 = this;

      var _this$props3 = this.props,
          activeShape = _this$props3.activeShape,
          blendStroke = _this$props3.blendStroke;
      return sectors.map(function (entry, i) {
        var sectorOptions = _this3.isActiveIndex(i) ? activeShape : null;

        var sectorProps = _objectSpread$m({}, entry, {
          stroke: blendStroke ? entry.fill : entry.stroke
        });

        return react.createElement(Layer, _extends$h({
          className: "recharts-pie-sector"
        }, filterEventsOfChild(_this3.props, entry, i), {
          key: "sector-".concat(i) // eslint-disable-line react/no-array-index-key

        }), _this3.constructor.renderSectorItem(sectorOptions, sectorProps));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function renderSectorsWithAnimation() {
      var _this4 = this;

      var _this$props4 = this.props,
          sectors = _this$props4.sectors,
          isAnimationActive = _this$props4.isAnimationActive,
          animationBegin = _this$props4.animationBegin,
          animationDuration = _this$props4.animationDuration,
          animationEasing = _this$props4.animationEasing,
          animationId = _this$props4.animationId;
      var prevSectors = this.state.prevSectors;
      return react.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(animationId),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function (_ref) {
        var t = _ref.t;
        var stepData = [];
        var first = sectors && sectors[0];
        var curAngle = first.startAngle;
        sectors.forEach(function (entry, index) {
          var prev = prevSectors && prevSectors[index];
          var paddingAngle = index > 0 ? get_1(entry, 'paddingAngle', 0) : 0;

          if (prev) {
            var angleIp = interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);

            var latest = _objectSpread$m({}, entry, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + angleIp(t) + paddingAngle
            });

            stepData.push(latest);
            curAngle = latest.endAngle;
          } else {
            var endAngle = entry.endAngle,
                startAngle = entry.startAngle;
            var interpolatorAngle = interpolateNumber(0, endAngle - startAngle);
            var deltaAngle = interpolatorAngle(t);

            var _latest = _objectSpread$m({}, entry, {
              startAngle: curAngle + paddingAngle,
              endAngle: curAngle + deltaAngle + paddingAngle
            });

            stepData.push(_latest);
            curAngle = _latest.endAngle;
          }
        });
        return react.createElement(Layer, null, _this4.renderSectorsStatically(stepData));
      });
    }
  }, {
    key: "renderSectors",
    value: function renderSectors() {
      var _this$props5 = this.props,
          sectors = _this$props5.sectors,
          isAnimationActive = _this$props5.isAnimationActive;
      var prevSectors = this.state.prevSectors;

      if (isAnimationActive && sectors && sectors.length && (!prevSectors || !isEqual_1(prevSectors, sectors))) {
        return this.renderSectorsWithAnimation();
      }

      return this.renderSectorsStatically(sectors);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          hide = _this$props6.hide,
          sectors = _this$props6.sectors,
          className = _this$props6.className,
          label = _this$props6.label,
          cx = _this$props6.cx,
          cy = _this$props6.cy,
          innerRadius = _this$props6.innerRadius,
          outerRadius = _this$props6.outerRadius,
          isAnimationActive = _this$props6.isAnimationActive,
          prevSectors = _this$props6.prevSectors;

      if (hide || !sectors || !sectors.length || !isNumber$1(cx) || !isNumber$1(cy) || !isNumber$1(innerRadius) || !isNumber$1(outerRadius)) {
        return null;
      }

      var layerClass = classnames('recharts-pie', className);
      return react.createElement(Layer, {
        className: layerClass
      }, this.renderSectors(), label && this.renderLabels(sectors), Label.renderCallByParent(this.props, null, false), (!isAnimationActive || prevSectors && isEqual_1(prevSectors, sectors)) && LabelList.renderCallByParent(this.props, sectors, false));
    }
  }], [{
    key: "getTextAnchor",
    value: function getTextAnchor(x, cx) {
      if (x > cx) {
        return 'start';
      }

      if (x < cx) {
        return 'end';
      }

      return 'middle';
    }
  }, {
    key: "renderLabelLineItem",
    value: function renderLabelLineItem(option, props) {
      if (react.isValidElement(option)) {
        return react.cloneElement(option, props);
      }

      if (isFunction_1(option)) {
        return option(props);
      }

      return react.createElement(Curve, _extends$h({}, props, {
        type: "linear",
        className: "recharts-pie-label-line"
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function renderLabelItem(option, props, value) {
      if (react.isValidElement(option)) {
        return react.cloneElement(option, props);
      }

      var label = value;

      if (isFunction_1(option)) {
        label = option(props);

        if (react.isValidElement(label)) {
          return label;
        }
      }

      return react.createElement(Text, _extends$h({}, props, {
        alignmentBaseline: "middle",
        className: "recharts-pie-label-text"
      }), label);
    }
  }, {
    key: "renderSectorItem",
    value: function renderSectorItem(option, props) {
      if (react.isValidElement(option)) {
        return react.cloneElement(option, props);
      }

      if (isFunction_1(option)) {
        return option(props);
      }

      if (isPlainObject_1(option)) {
        return react.createElement(Sector, _extends$h({}, props, option));
      }

      return react.createElement(Sector, props);
    }
  }]);

  return Pie;
}(react.PureComponent);

Pie.displayName = 'Pie';
Pie.propTypes = _objectSpread$m({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  className: propTypes.string,
  animationId: propTypes.number,
  cx: propTypes.oneOfType([propTypes.number, propTypes.string]),
  cy: propTypes.oneOfType([propTypes.number, propTypes.string]),
  startAngle: propTypes.number,
  endAngle: propTypes.number,
  paddingAngle: propTypes.number,
  innerRadius: propTypes.oneOfType([propTypes.number, propTypes.string]),
  outerRadius: propTypes.oneOfType([propTypes.number, propTypes.string]),
  cornerRadius: propTypes.oneOfType([propTypes.number, propTypes.string]),
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]).isRequired,
  nameKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]),
  valueKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]),
  data: propTypes.arrayOf(propTypes.object),
  blendStroke: propTypes.bool,
  minAngle: propTypes.number,
  legendType: propTypes.oneOf(LEGEND_TYPES),
  tooltipType: propTypes.oneOf(TOOLTIP_TYPES),
  maxRadius: propTypes.number,
  sectors: propTypes.arrayOf(propTypes.object),
  hide: propTypes.bool,
  labelLine: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.element, propTypes.bool]),
  label: propTypes.oneOfType([propTypes.shape({
    offsetRadius: propTypes.number
  }), propTypes.func, propTypes.element, propTypes.bool]),
  activeShape: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.element]),
  activeIndex: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  onAnimationStart: propTypes.func,
  onAnimationEnd: propTypes.func,
  isAnimationActive: propTypes.bool,
  animationBegin: propTypes.number,
  animationDuration: propTypes.number,
  animationEasing: propTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'spring', 'linear']),
  id: propTypes.string
});
Pie.defaultProps = {
  stroke: '#fff',
  fill: '#808080',
  legendType: 'rect',
  // The abscissa of pole
  cx: '50%',
  // The ordinate of pole
  cy: '50%',
  // The start angle of first sector
  startAngle: 0,
  // The direction of drawing sectors
  endAngle: 360,
  // The inner radius of sectors
  innerRadius: 0,
  // The outer radius of sectors
  outerRadius: '80%',
  paddingAngle: 0,
  labelLine: true,
  hide: false,
  minAngle: 0,
  isAnimationActive: !isSsr(),
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: 'ease',
  nameKey: 'name',
  // Match each sector's stroke color to it's fill color
  blendStroke: false
};

Pie.parseDeltaAngle = function (_ref2) {
  var startAngle = _ref2.startAngle,
      endAngle = _ref2.endAngle;
  var sign = mathSign(endAngle - startAngle);
  var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
  return sign * deltaAngle;
};

Pie.getRealPieData = function (item) {
  var _item$props = item.props,
      data = _item$props.data,
      children = _item$props.children;
  var presentationProps = getPresentationAttributes(item.props);
  var cells = findAllByType(children, Cell);

  if (data && data.length) {
    return data.map(function (entry, index) {
      return _objectSpread$m({
        payload: entry
      }, presentationProps, {}, entry, {}, cells && cells[index] && cells[index].props);
    });
  }

  if (cells && cells.length) {
    return cells.map(function (cell) {
      return _objectSpread$m({}, presentationProps, {}, cell.props);
    });
  }

  return [];
};

Pie.parseCoordinateOfPie = function (item, offset) {
  var top = offset.top,
      left = offset.left,
      width = offset.width,
      height = offset.height;
  var maxPieRadius = getMaxRadius(width, height);
  var cx = left + getPercentValue(item.props.cx, width, width / 2);
  var cy = top + getPercentValue(item.props.cy, height, height / 2);
  var innerRadius = getPercentValue(item.props.innerRadius, maxPieRadius, 0);
  var outerRadius = getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
  var maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;
  return {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    maxRadius: maxRadius
  };
};

Pie.getComposedData = function (_ref3) {
  var item = _ref3.item,
      offset = _ref3.offset,
      onItemMouseLeave = _ref3.onItemMouseLeave,
      onItemMouseEnter = _ref3.onItemMouseEnter;
  var pieData = Pie.getRealPieData(item);

  if (!pieData || !pieData.length) {
    return [];
  }

  var _item$props2 = item.props,
      cornerRadius = _item$props2.cornerRadius,
      startAngle = _item$props2.startAngle,
      endAngle = _item$props2.endAngle,
      paddingAngle = _item$props2.paddingAngle,
      dataKey = _item$props2.dataKey,
      nameKey = _item$props2.nameKey,
      valueKey = _item$props2.valueKey,
      tooltipType = _item$props2.tooltipType;
  var minAngle = Math.abs(item.props.minAngle);
  var coordinate = Pie.parseCoordinateOfPie(item, offset);
  var len = pieData.length;
  var deltaAngle = Pie.parseDeltaAngle({
    startAngle: startAngle,
    endAngle: endAngle
  });
  var absDeltaAngle = Math.abs(deltaAngle);
  var totalPadingAngle = (absDeltaAngle >= 360 ? len : len - 1) * paddingAngle;
  var realTotalAngle = absDeltaAngle - len * minAngle - totalPadingAngle;
  var realDataKey = dataKey;

  if (isNil_1(dataKey) && isNil_1(valueKey)) {
    realDataKey = 'value';
  } else if (isNil_1(dataKey)) {
    realDataKey = valueKey;
  }

  var sum = pieData.reduce(function (result, entry) {
    var val = getValueByDataKey(entry, realDataKey, 0);
    return result + (isNumber$1(val) ? val : 0);
  }, 0);
  var sectors;

  if (sum > 0) {
    var prev;
    sectors = pieData.map(function (entry, i) {
      var val = getValueByDataKey(entry, realDataKey, 0);
      var name = getValueByDataKey(entry, nameKey, i);
      var percent = (isNumber$1(val) ? val : 0) / sum;
      var tempStartAngle;

      if (i) {
        tempStartAngle = prev.endAngle + mathSign(deltaAngle) * paddingAngle;
      } else {
        tempStartAngle = startAngle;
      }

      var tempEndAngle = tempStartAngle + mathSign(deltaAngle) * (minAngle + percent * realTotalAngle);
      var midAngle = (tempStartAngle + tempEndAngle) / 2;
      var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
      var tooltipPayload = [{
        name: name,
        value: val,
        payload: entry,
        dataKey: realDataKey,
        type: tooltipType
      }];
      var tooltipPosition = polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
      prev = _objectSpread$m({
        percent: percent,
        cornerRadius: cornerRadius,
        name: name,
        tooltipPayload: tooltipPayload,
        midAngle: midAngle,
        middleRadius: middleRadius,
        tooltipPosition: tooltipPosition
      }, entry, {}, coordinate, {
        value: getValueByDataKey(entry, realDataKey),
        startAngle: tempStartAngle,
        endAngle: tempEndAngle,
        payload: entry,
        paddingAngle: mathSign(deltaAngle) * paddingAngle
      });
      return prev;
    });
  }

  return _objectSpread$m({}, coordinate, {
    sectors: sectors,
    data: pieData,
    onMouseLeave: onItemMouseLeave,
    onMouseEnter: onItemMouseEnter
  });
};

function _typeof$j(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$j = function _typeof(obj) { return typeof obj; }; } else { _typeof$j = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$j(obj); }

function _extends$i() { _extends$i = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }

function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$n(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$k(source, true).forEach(function (key) { _defineProperty$p(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$k(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$p(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$i(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$i(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$i(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$i(Constructor.prototype, protoProps); if (staticProps) _defineProperties$i(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$i(self, call) { if (call && (_typeof$j(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$i(self); }

function _assertThisInitialized$i(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$i(o) { _getPrototypeOf$i = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$i(o); }

function _inherits$i(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$i(subClass, superClass); }

function _setPrototypeOf$i(o, p) { _setPrototypeOf$i = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$i(o, p); }

var Radar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$i(Radar, _PureComponent);

  function Radar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$i(this, Radar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$i(this, (_getPrototypeOf2 = _getPrototypeOf$i(Radar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isAnimationFinished: false
    };

    _this.cachePrevData = function (points) {
      _this.setState({
        prevPoints: points
      });
    };

    _this.handleAnimationEnd = function () {
      var onAnimationEnd = _this.props.onAnimationEnd;

      _this.setState({
        isAnimationFinished: true
      });

      if (isFunction_1(onAnimationEnd)) {
        onAnimationEnd();
      }
    };

    _this.handleAnimationStart = function () {
      var onAnimationStart = _this.props.onAnimationStart;

      _this.setState({
        isAnimationFinished: false
      });

      if (isFunction_1(onAnimationStart)) {
        onAnimationStart();
      }
    };

    _this.handleMouseEnter = function (e) {
      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter(_this.props, e);
      }
    };

    _this.handleMouseLeave = function (e) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (onMouseLeave) {
        onMouseLeave(_this.props, e);
      }
    };

    return _this;
  }

  _createClass$i(Radar, [{
    key: "componentWillReceiveProps",
    // eslint-disable-next-line camelcase
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          animationId = _this$props.animationId,
          points = _this$props.points;

      if (nextProps.animationId !== animationId) {
        this.cachePrevData(points);
      }
    }
  }, {
    key: "renderDots",
    value: function renderDots(points) {
      var _this2 = this;

      var _this$props2 = this.props,
          dot = _this$props2.dot,
          dataKey = _this$props2.dataKey;
      var baseProps = getPresentationAttributes(this.props);
      var customDotProps = getPresentationAttributes(dot);
      var dots = points.map(function (entry, i) {
        var dotProps = _objectSpread$n({
          key: "dot-".concat(i),
          r: 3
        }, baseProps, {}, customDotProps, {
          dataKey: dataKey,
          cx: entry.x,
          cy: entry.y,
          index: i,
          payload: entry
        });

        return _this2.constructor.renderDotItem(dot, dotProps);
      });
      return react.createElement(Layer, {
        className: "recharts-radar-dots"
      }, dots);
    }
  }, {
    key: "renderPolygonStatically",
    value: function renderPolygonStatically(points) {
      var _this$props3 = this.props,
          shape = _this$props3.shape,
          dot = _this$props3.dot;
      var radar;

      if (react.isValidElement(shape)) {
        radar = react.cloneElement(shape, _objectSpread$n({}, this.props, {
          points: points
        }));
      } else if (isFunction_1(shape)) {
        radar = shape(_objectSpread$n({}, this.props, {
          points: points
        }));
      } else {
        radar = react.createElement(Polygon, _extends$i({}, filterEventAttributes(this.props), {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }, getPresentationAttributes(this.props), {
          points: points
        }));
      }

      return react.createElement(Layer, {
        className: "recharts-radar-polygon"
      }, radar, dot ? this.renderDots(points) : null);
    }
  }, {
    key: "renderPolygonWithAnimation",
    value: function renderPolygonWithAnimation() {
      var _this3 = this;

      var _this$props4 = this.props,
          points = _this$props4.points,
          isAnimationActive = _this$props4.isAnimationActive,
          animationBegin = _this$props4.animationBegin,
          animationDuration = _this$props4.animationDuration,
          animationEasing = _this$props4.animationEasing,
          animationId = _this$props4.animationId;
      var prevPoints = this.state.prevPoints;
      return react.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "radar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        var prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
        var stepData = points.map(function (entry, index) {
          var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];

          if (prev) {
            var _interpolatorX = interpolateNumber(prev.x, entry.x);

            var _interpolatorY = interpolateNumber(prev.y, entry.y);

            return _objectSpread$n({}, entry, {
              x: _interpolatorX(t),
              y: _interpolatorY(t)
            });
          }

          var interpolatorX = interpolateNumber(entry.cx, entry.x);
          var interpolatorY = interpolateNumber(entry.cy, entry.y);
          return _objectSpread$n({}, entry, {
            x: interpolatorX(t),
            y: interpolatorY(t)
          });
        });
        return _this3.renderPolygonStatically(stepData);
      });
    }
  }, {
    key: "renderPolygon",
    value: function renderPolygon() {
      var _this$props5 = this.props,
          points = _this$props5.points,
          isAnimationActive = _this$props5.isAnimationActive;
      var prevPoints = this.state.prevPoints;

      if (isAnimationActive && points && points.length && (!prevPoints || !isEqual_1(prevPoints, points))) {
        return this.renderPolygonWithAnimation();
      }

      return this.renderPolygonStatically(points);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          hide = _this$props6.hide,
          className = _this$props6.className,
          points = _this$props6.points,
          isAnimationActive = _this$props6.isAnimationActive;

      if (hide || !points || !points.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = classnames('recharts-radar', className);
      return react.createElement(Layer, {
        className: layerClass
      }, this.renderPolygon(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, points));
    }
  }], [{
    key: "renderDotItem",
    value: function renderDotItem(option, props) {
      var dotItem;

      if (react.isValidElement(option)) {
        dotItem = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        dotItem = option(props);
      } else {
        dotItem = react.createElement(Dot, _extends$i({}, props, {
          className: "recharts-radar-dot"
        }));
      }

      return dotItem;
    }
  }]);

  return Radar;
}(react.PureComponent);

Radar.displayName = 'Radar';
Radar.propTypes = _objectSpread$n({}, PRESENTATION_ATTRIBUTES, {
  className: propTypes.string,
  dataKey: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.func]).isRequired,
  angleAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  radiusAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  points: propTypes.arrayOf(propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    cx: propTypes.number,
    cy: propTypes.number,
    angle: propTypes.number,
    radius: propTypes.number,
    value: propTypes.number,
    payload: propTypes.object
  })),
  shape: propTypes.oneOfType([propTypes.element, propTypes.func]),
  activeDot: propTypes.oneOfType([propTypes.object, propTypes.element, propTypes.func, propTypes.bool]),
  // whether have dot in poly line
  dot: propTypes.oneOfType([propTypes.object, propTypes.element, propTypes.func, propTypes.bool]),
  label: propTypes.oneOfType([propTypes.element, propTypes.func, propTypes.object, propTypes.bool]),
  legendType: propTypes.oneOf(LEGEND_TYPES),
  tooltipType: propTypes.oneOf(TOOLTIP_TYPES),
  hide: propTypes.bool,
  onAnimationStart: propTypes.func,
  onAnimationEnd: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
  onClick: propTypes.func,
  isAnimationActive: propTypes.bool,
  animationId: propTypes.number,
  animationBegin: propTypes.number,
  animationDuration: propTypes.number,
  animationEasing: propTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'])
});
Radar.defaultProps = {
  angleAxisId: 0,
  radiusAxisId: 0,
  hide: false,
  activeDot: true,
  dot: false,
  legendType: 'rect',
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease'
};

Radar.getComposedData = function (_ref2) {
  var radiusAxis = _ref2.radiusAxis,
      angleAxis = _ref2.angleAxis,
      displayedData = _ref2.displayedData,
      dataKey = _ref2.dataKey,
      bandSize = _ref2.bandSize;
  var cx = angleAxis.cx,
      cy = angleAxis.cy;
  var points = displayedData.map(function (entry, i) {
    var name = getValueByDataKey(entry, angleAxis.dataKey, i);
    var value = getValueByDataKey(entry, dataKey, 0);
    var angle = angleAxis.scale(name) + (bandSize || 0);
    var radius = radiusAxis.scale(value);
    return _objectSpread$n({}, polarToCartesian(cx, cy, radius, angle), {
      name: name,
      value: value,
      cx: cx,
      cy: cy,
      radius: radius,
      angle: angle,
      payload: entry
    });
  });
  return {
    points: points
  };
};

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax$2 = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax$2(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

var _baseRange = baseRange;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$3 || value === -INFINITY$3) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && _isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite_1(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite_1(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite_1(step);
    return _baseRange(start, end, step, fromRight);
  };
}

var _createRange = createRange;

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range$3 = _createRange();

var range_1 = range$3;

function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$o(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$l(source, true).forEach(function (key) { _defineProperty$q(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$l(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$q(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PREFIX_LIST$1 = ['Webkit', 'Moz', 'O', 'ms'];
var generatePrefixStyle$1 = function generatePrefixStyle(name, value) {
  if (!name) {
    return null;
  }

  var camelName = name.replace(/(\w)/, function (v) {
    return v.toUpperCase();
  });
  var result = PREFIX_LIST$1.reduce(function (res, entry) {
    return _objectSpread$o({}, res, _defineProperty$q({}, entry + camelName, value));
  }, {});
  result[name] = value;
  return result;
};

function _typeof$k(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$k = function _typeof(obj) { return typeof obj; }; } else { _typeof$k = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$k(obj); }

function _extends$j() { _extends$j = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }

function _defineProperty$r(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$j(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$j(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$j(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$j(Constructor.prototype, protoProps); if (staticProps) _defineProperties$j(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$j(self, call) { if (call && (_typeof$k(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$j(self); }

function _getPrototypeOf$j(o) { _getPrototypeOf$j = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$j(o); }

function _assertThisInitialized$j(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$j(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$j(subClass, superClass); }

function _setPrototypeOf$j(o, p) { _setPrototypeOf$j = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$j(o, p); }

var Brush =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$j(Brush, _PureComponent);

  function Brush(props) {
    var _this;

    _classCallCheck$j(this, Brush);

    _this = _possibleConstructorReturn$j(this, _getPrototypeOf$j(Brush).call(this, props));

    _this.handleDrag = function (e) {
      if (_this.leaveTimer) {
        clearTimeout(_this.leaveTimer);
        _this.leaveTimer = null;
      }

      if (_this.state.isTravellerMoving) {
        _this.handleTravellerMove(e);
      } else if (_this.state.isSlideMoving) {
        _this.handleSlideDrag(e);
      }
    };

    _this.handleTouchMove = function (e) {
      if (e.changedTouches != null && e.changedTouches.length > 0) {
        _this.handleDrag(e.changedTouches[0]);
      }
    };

    _this.handleDragEnd = function () {
      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: false
      });
    };

    _this.handleLeaveWrapper = function () {
      if (_this.state.isTravellerMoving || _this.state.isSlideMoving) {
        _this.leaveTimer = setTimeout(_this.handleDragEnd, _this.props.leaveTimeOut);
      }
    };

    _this.handleEnterSlideOrTraveller = function () {
      _this.setState({
        isTextActive: true
      });
    };

    _this.handleLeaveSlideOrTraveller = function () {
      _this.setState({
        isTextActive: false
      });
    };

    _this.handleSlideDragStart = function (e) {
      var event = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;

      _this.setState({
        isTravellerMoving: false,
        isSlideMoving: true,
        slideMoveStartX: event.pageX
      });
    };

    _this.travellerDragStartHandlers = {
      startX: _this.handleTravellerDragStart.bind(_assertThisInitialized$j(_this), 'startX'),
      endX: _this.handleTravellerDragStart.bind(_assertThisInitialized$j(_this), 'endX')
    };
    _this.state = props.data && props.data.length ? _this.updateScale(props) : {};
    return _this;
  } // eslint-disable-next-line camelcase


  _createClass$j(Brush, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          width = _this$props.width,
          x = _this$props.x,
          travellerWidth = _this$props.travellerWidth,
          updateId = _this$props.updateId;

      if ((nextProps.data !== data || nextProps.updateId !== updateId) && nextProps.data && nextProps.data.length) {
        this.setState(this.updateScale(nextProps));
      } else if (nextProps.width !== width || nextProps.x !== x || nextProps.travellerWidth !== travellerWidth) {
        this.scale.range([nextProps.x, nextProps.x + nextProps.width - nextProps.travellerWidth]);
        this.scaleValues = this.scale.domain().map(function (entry) {
          return _this2.scale(entry);
        });
        this.setState({
          startX: this.scale(nextProps.startIndex),
          endX: this.scale(nextProps.endIndex)
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.scale = null;
      this.scaleValues = null;

      if (this.leaveTimer) {
        clearTimeout(this.leaveTimer);
        this.leaveTimer = null;
      }
    }
  }, {
    key: "getIndex",
    value: function getIndex(_ref) {
      var startX = _ref.startX,
          endX = _ref.endX;
      var _this$props2 = this.props,
          gap = _this$props2.gap,
          data = _this$props2.data;
      var lastIndex = data.length - 1;
      var min = Math.min(startX, endX);
      var max = Math.max(startX, endX);
      var minIndex = this.constructor.getIndexInRange(this.scaleValues, min);
      var maxIndex = this.constructor.getIndexInRange(this.scaleValues, max);
      return {
        startIndex: minIndex - minIndex % gap,
        endIndex: maxIndex === lastIndex ? lastIndex : maxIndex - maxIndex % gap
      };
    }
  }, {
    key: "getTextOfTick",
    value: function getTextOfTick(index) {
      var _this$props3 = this.props,
          data = _this$props3.data,
          tickFormatter = _this$props3.tickFormatter,
          dataKey = _this$props3.dataKey;
      var text = getValueByDataKey(data[index], dataKey, index);
      return isFunction_1(tickFormatter) ? tickFormatter(text) : text;
    }
  }, {
    key: "handleSlideDrag",
    value: function handleSlideDrag(e) {
      var _this$state = this.state,
          slideMoveStartX = _this$state.slideMoveStartX,
          startX = _this$state.startX,
          endX = _this$state.endX;
      var _this$props4 = this.props,
          x = _this$props4.x,
          width = _this$props4.width,
          travellerWidth = _this$props4.travellerWidth,
          startIndex = _this$props4.startIndex,
          endIndex = _this$props4.endIndex,
          onChange = _this$props4.onChange;
      var delta = e.pageX - slideMoveStartX;

      if (delta > 0) {
        delta = Math.min(delta, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
      } else if (delta < 0) {
        delta = Math.max(delta, x - startX, x - endX);
      }

      var newIndex = this.getIndex({
        startX: startX + delta,
        endX: endX + delta
      });

      if ((newIndex.startIndex !== startIndex || newIndex.endIndex !== endIndex) && onChange) {
        onChange(newIndex);
      }

      this.setState({
        startX: startX + delta,
        endX: endX + delta,
        slideMoveStartX: e.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function handleTravellerDragStart(id, e) {
      var event = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
      this.setState({
        isSlideMoving: false,
        isTravellerMoving: true,
        movingTravellerId: id,
        brushMoveStartX: event.pageX
      });
    }
  }, {
    key: "handleTravellerMove",
    value: function handleTravellerMove(e) {
      var _this$setState;

      var _this$state2 = this.state,
          brushMoveStartX = _this$state2.brushMoveStartX,
          movingTravellerId = _this$state2.movingTravellerId,
          endX = _this$state2.endX,
          startX = _this$state2.startX;
      var prevValue = this.state[movingTravellerId];
      var _this$props5 = this.props,
          x = _this$props5.x,
          width = _this$props5.width,
          travellerWidth = _this$props5.travellerWidth,
          onChange = _this$props5.onChange,
          gap = _this$props5.gap,
          data = _this$props5.data;
      var params = {
        startX: this.state.startX,
        endX: this.state.endX
      };
      var delta = e.pageX - brushMoveStartX;

      if (delta > 0) {
        delta = Math.min(delta, x + width - travellerWidth - prevValue);
      } else if (delta < 0) {
        delta = Math.max(delta, x - prevValue);
      }

      params[movingTravellerId] = prevValue + delta;
      var newIndex = this.getIndex(params);
      var startIndex = newIndex.startIndex,
          endIndex = newIndex.endIndex;

      var isFullGap = function isFullGap() {
        var lastIndex = data.length - 1;

        if (movingTravellerId === 'startX' && (endX > startX ? startIndex % gap === 0 : endIndex % gap === 0) || endX < startX && endIndex === lastIndex || movingTravellerId === 'endX' && (endX > startX ? endIndex % gap === 0 : startIndex % gap === 0) || endX > startX && endIndex === lastIndex) {
          return true;
        }

        return false;
      };

      this.setState((_this$setState = {}, _defineProperty$r(_this$setState, movingTravellerId, prevValue + delta), _defineProperty$r(_this$setState, "brushMoveStartX", e.pageX), _this$setState), function () {
        if (onChange) {
          if (isFullGap()) {
            onChange(newIndex);
          }
        }
      });
    }
  }, {
    key: "updateScale",
    value: function updateScale(props) {
      var _this3 = this;

      var data = props.data,
          startIndex = props.startIndex,
          endIndex = props.endIndex,
          x = props.x,
          width = props.width,
          travellerWidth = props.travellerWidth;
      var len = data.length;
      this.scale = point$2().domain(range_1(0, len)).range([x, x + width - travellerWidth]);
      this.scaleValues = this.scale.domain().map(function (entry) {
        return _this3.scale(entry);
      });
      return {
        isTextActive: false,
        isSlideMoving: false,
        isTravellerMoving: false,
        startX: this.scale(startIndex),
        endX: this.scale(endIndex)
      };
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this$props6 = this.props,
          x = _this$props6.x,
          y = _this$props6.y,
          width = _this$props6.width,
          height = _this$props6.height,
          fill = _this$props6.fill,
          stroke = _this$props6.stroke;
      return react.createElement("rect", {
        stroke: stroke,
        fill: fill,
        x: x,
        y: y,
        width: width,
        height: height
      });
    }
  }, {
    key: "renderPanorama",
    value: function renderPanorama() {
      var _this$props7 = this.props,
          x = _this$props7.x,
          y = _this$props7.y,
          width = _this$props7.width,
          height = _this$props7.height,
          data = _this$props7.data,
          children = _this$props7.children,
          padding = _this$props7.padding;
      var chartElement = react.Children.only(children);

      if (!chartElement) {
        return null;
      }

      return react.cloneElement(chartElement, {
        x: x,
        y: y,
        width: width,
        height: height,
        margin: padding,
        compact: true,
        data: data
      });
    }
  }, {
    key: "renderTraveller",
    value: function renderTraveller(travellerX, id) {
      var _this$props8 = this.props,
          y = _this$props8.y,
          travellerWidth = _this$props8.travellerWidth,
          height = _this$props8.height,
          stroke = _this$props8.stroke;
      var lineY = Math.floor(y + height / 2) - 1;
      var x = Math.max(travellerX, this.props.x);
      return react.createElement(Layer, {
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[id],
        onTouchStart: this.travellerDragStartHandlers[id],
        style: {
          cursor: 'col-resize'
        }
      }, react.createElement("rect", {
        x: x,
        y: y,
        width: travellerWidth,
        height: height,
        fill: stroke,
        stroke: "none"
      }), react.createElement("line", {
        x1: x + 1,
        y1: lineY,
        x2: x + travellerWidth - 1,
        y2: lineY,
        fill: "none",
        stroke: "#fff"
      }), react.createElement("line", {
        x1: x + 1,
        y1: lineY + 2,
        x2: x + travellerWidth - 1,
        y2: lineY + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderSlide",
    value: function renderSlide(startX, endX) {
      var _this$props9 = this.props,
          y = _this$props9.y,
          height = _this$props9.height,
          stroke = _this$props9.stroke;
      return react.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: 'move'
        },
        stroke: "none",
        fill: stroke,
        fillOpacity: 0.2,
        x: Math.min(startX, endX),
        y: y,
        width: Math.abs(endX - startX),
        height: height
      });
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var _this$props10 = this.props,
          startIndex = _this$props10.startIndex,
          endIndex = _this$props10.endIndex,
          y = _this$props10.y,
          height = _this$props10.height,
          travellerWidth = _this$props10.travellerWidth,
          stroke = _this$props10.stroke;
      var _this$state3 = this.state,
          startX = _this$state3.startX,
          endX = _this$state3.endX;
      var offset = 5;
      var attrs = {
        pointerEvents: 'none',
        fill: stroke
      };
      return react.createElement(Layer, {
        className: "recharts-brush-texts"
      }, react.createElement(Text, _extends$j({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(startX, endX) - offset,
        y: y + height / 2
      }, attrs), this.getTextOfTick(startIndex)), react.createElement(Text, _extends$j({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(startX, endX) + travellerWidth + offset,
        y: y + height / 2
      }, attrs), this.getTextOfTick(endIndex)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          data = _this$props11.data,
          className = _this$props11.className,
          children = _this$props11.children,
          x = _this$props11.x,
          y = _this$props11.y,
          width = _this$props11.width,
          height = _this$props11.height,
          alwaysShowText = _this$props11.alwaysShowText;
      var _this$state4 = this.state,
          startX = _this$state4.startX,
          endX = _this$state4.endX,
          isTextActive = _this$state4.isTextActive,
          isSlideMoving = _this$state4.isSlideMoving,
          isTravellerMoving = _this$state4.isTravellerMoving;

      if (!data || !data.length || !isNumber$1(x) || !isNumber$1(y) || !isNumber$1(width) || !isNumber$1(height) || width <= 0 || height <= 0) {
        return null;
      }

      var layerClass = classnames('recharts-brush', className);
      var isPanoramic = react.Children.count(children) === 1;
      var style = generatePrefixStyle$1('userSelect', 'none');
      return react.createElement(Layer, {
        className: layerClass,
        onMouseMove: this.handleDrag,
        onMouseLeave: this.handleLeaveWrapper,
        onMouseUp: this.handleDragEnd,
        onTouchEnd: this.handleDragEnd,
        onTouchMove: this.handleTouchMove,
        style: style
      }, this.renderBackground(), isPanoramic && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTraveller(startX, 'startX'), this.renderTraveller(endX, 'endX'), (isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) && this.renderText());
    }
  }], [{
    key: "getIndexInRange",
    value: function getIndexInRange(range, x) {
      var len = range.length;
      var start = 0;
      var end = len - 1;

      while (end - start > 1) {
        var middle = Math.floor((start + end) / 2);

        if (range[middle] > x) {
          end = middle;
        } else {
          start = middle;
        }
      }

      return x >= range[end] ? end : start;
    }
  }]);

  return Brush;
}(react.PureComponent);

Brush.displayName = 'Brush';
Brush.propTypes = {
  className: propTypes.string,
  fill: propTypes.string,
  stroke: propTypes.string,
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number.isRequired,
  travellerWidth: propTypes.number,
  gap: propTypes.number,
  padding: propTypes.shape({
    top: propTypes.number,
    right: propTypes.number,
    bottom: propTypes.number,
    left: propTypes.number
  }),
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]),
  data: propTypes.array,
  startIndex: propTypes.number,
  endIndex: propTypes.number,
  tickFormatter: propTypes.func,
  children: propTypes.node,
  onChange: propTypes.func,
  updateId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  leaveTimeOut: propTypes.number,
  alwaysShowText: propTypes.bool
};
Brush.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1000,
  alwaysShowText: false
};

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  _baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

var _baseSome = baseSome;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray_1(collection) ? _arraySome : _baseSome;
  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, _baseIteratee(predicate));
}

var some_1 = some;

var ifOverflowMatches = function ifOverflowMatches(props, value) {
  var alwaysShow = props.alwaysShow;
  var ifOverflow = props.ifOverflow;

  if (alwaysShow) {
    ifOverflow = 'extendDomain';
  }

  return ifOverflow === value;
};

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

var _arrayEvery = arrayEvery;

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  _baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

var _baseEvery = baseEvery;

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray_1(collection) ? _arrayEvery : _baseEvery;
  if (guard && _isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, _baseIteratee(predicate));
}

var every_1 = every;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$3) {
    _defineProperty$3(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee);

  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var mapValues_1 = mapValues;

function _classCallCheck$k(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$k(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$k(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$k(Constructor.prototype, protoProps); if (staticProps) _defineProperties$k(Constructor, staticProps); return Constructor; }

function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$p(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$m(source, true).forEach(function (key) { _defineProperty$s(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$m(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$s(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Calculate the scale function, position, width, height of axes
 * @param  {Object} props     Latest props
 * @param  {Object} axisMap   The configuration of axes
 * @param  {Object} offset    The offset of main part in the svg element
 * @param  {String} axisType  The type of axes, x-axis or y-axis
 * @param  {String} chartName The name of chart
 * @return {Object} Configuration
 */

var formatAxisMap$1 = function formatAxisMap(props, axisMap, offset, axisType, chartName) {
  var width = props.width,
      height = props.height,
      layout = props.layout;
  var ids = Object.keys(axisMap);
  var steps = {
    left: offset.left,
    leftMirror: offset.left,
    right: width - offset.right,
    rightMirror: width - offset.right,
    top: offset.top,
    topMirror: offset.top,
    bottom: height - offset.bottom,
    bottomMirror: height - offset.bottom
  };
  return ids.reduce(function (result, id) {
    var axis = axisMap[id];
    var orientation = axis.orientation,
        domain = axis.domain,
        _axis$padding = axis.padding,
        padding = _axis$padding === void 0 ? {} : _axis$padding,
        mirror = axis.mirror,
        reversed = axis.reversed;
    var offsetKey = "".concat(orientation).concat(mirror ? 'Mirror' : '');
    var range, x, y, needSpace;

    if (axisType === 'xAxis') {
      range = [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)];
    } else if (axisType === 'yAxis') {
      range = layout === 'horizontal' ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)] : [offset.top + (padding.top || 0), offset.top + offset.height - (padding.bottom || 0)];
    } else {
      range = axis.range;
    }

    if (reversed) {
      range = [range[1], range[0]];
    }

    var _parseScale = parseScale(axis, chartName),
        scale = _parseScale.scale,
        realScaleType = _parseScale.realScaleType;

    scale.domain(domain).range(range);
    checkDomainOfScale(scale);
    var ticks = getTicksOfScale(scale, _objectSpread$p({}, axis, {
      realScaleType: realScaleType
    }));

    if (axisType === 'xAxis') {
      needSpace = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
      x = offset.left;
      y = steps[offsetKey] - needSpace * axis.height;
    } else if (axisType === 'yAxis') {
      needSpace = orientation === 'left' && !mirror || orientation === 'right' && mirror;
      x = steps[offsetKey] - needSpace * axis.width;
      y = offset.top;
    }

    var finalAxis = _objectSpread$p({}, axis, {}, ticks, {
      realScaleType: realScaleType,
      x: x,
      y: y,
      scale: scale,
      width: axisType === 'xAxis' ? offset.width : axis.width,
      height: axisType === 'yAxis' ? offset.height : axis.height
    });

    finalAxis.bandSize = getBandSizeOfAxis(finalAxis, ticks);

    if (!axis.hide && axisType === 'xAxis') {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
    } else if (!axis.hide) {
      steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
    }

    return _objectSpread$p({}, result, _defineProperty$s({}, id, finalAxis));
  }, {});
};
var rectWithPoints = function rectWithPoints(_ref, _ref2) {
  var x1 = _ref.x,
      y1 = _ref.y;
  var x2 = _ref2.x,
      y2 = _ref2.y;
  return {
    x: Math.min(x1, x2),
    y: Math.min(y1, y2),
    width: Math.abs(x2 - x1),
    height: Math.abs(y2 - y1)
  };
};
/**
 * Compute the x, y, width, and height of a box from two reference points.
 * @param  {Object} coords     x1, x2, y1, and y2
 * @return {Object} object
 */

var rectWithCoords = function rectWithCoords(_ref3) {
  var x1 = _ref3.x1,
      y1 = _ref3.y1,
      x2 = _ref3.x2,
      y2 = _ref3.y2;
  return rectWithPoints({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  });
};
var ScaleHelper =
/*#__PURE__*/
function () {
  _createClass$k(ScaleHelper, null, [{
    key: "create",
    value: function create(obj) {
      return new ScaleHelper(obj);
    }
  }]);

  function ScaleHelper(scale) {
    _classCallCheck$k(this, ScaleHelper);

    this.scale = scale;
  }

  _createClass$k(ScaleHelper, [{
    key: "apply",
    value: function apply(value) {
      var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          bandAware = _ref4.bandAware,
          position = _ref4.position;

      if (value === undefined) {
        return undefined;
      }

      if (position) {
        switch (position) {
          case 'start':
            {
              return this.scale(value);
            }

          case 'middle':
            {
              var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(value) + offset;
            }

          case 'end':
            {
              var _offset = this.bandwidth ? this.bandwidth() : 0;

              return this.scale(value) + _offset;
            }

          default:
            {
              return this.scale(value);
            }
        }
      }

      if (bandAware) {
        var _offset2 = this.bandwidth ? this.bandwidth() / 2 : 0;

        return this.scale(value) + _offset2;
      }

      return this.scale(value);
    }
  }, {
    key: "isInRange",
    value: function isInRange(value) {
      var range = this.range();
      var first = range[0];
      var last = range[range.length - 1];
      return first <= last ? value >= first && value <= last : value >= last && value <= first;
    }
  }, {
    key: "domain",
    get: function get() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function get() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function get() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function get() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function get() {
      return this.scale.bandwidth;
    }
  }]);

  return ScaleHelper;
}();
ScaleHelper.EPS = 1e-4;
var LabeledScaleHelper =
/*#__PURE__*/
function () {
  _createClass$k(LabeledScaleHelper, null, [{
    key: "create",
    value: function create(obj) {
      return new this(obj);
    }
  }]);

  function LabeledScaleHelper(scales) {
    _classCallCheck$k(this, LabeledScaleHelper);

    this.scales = mapValues_1(scales, ScaleHelper.create);
    Object.assign(this, this.scales);
  }

  _createClass$k(LabeledScaleHelper, [{
    key: "apply",
    value: function apply(coords) {
      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          bandAware = _ref5.bandAware;

      var scales = this.scales;
      return mapValues_1(coords, function (value, label) {
        return scales[label].apply(value, {
          bandAware: bandAware
        });
      });
    }
  }, {
    key: "isInRange",
    value: function isInRange(coords) {
      var scales = this.scales;
      return every_1(coords, function (value, label) {
        return scales[label].isInRange(value);
      });
    }
  }]);

  return LabeledScaleHelper;
}();

function _typeof$l(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$l = function _typeof(obj) { return typeof obj; }; } else { _typeof$l = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$l(obj); }

function ownKeys$n(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$q(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$n(source, true).forEach(function (key) { _defineProperty$t(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$n(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$t(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$6(arr, i) { return _arrayWithHoles$7(arr) || _iterableToArrayLimit$6(arr, i) || _nonIterableRest$7(); }

function _nonIterableRest$7() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$6(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$7(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck$l(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$l(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$l(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$l(Constructor.prototype, protoProps); if (staticProps) _defineProperties$l(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$k(self, call) { if (call && (_typeof$l(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$k(self); }

function _assertThisInitialized$k(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$k(o) { _getPrototypeOf$k = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$k(o); }

function _inherits$k(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$k(subClass, superClass); }

function _setPrototypeOf$k(o, p) { _setPrototypeOf$k = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$k(o, p); }

function _extends$k() { _extends$k = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }

var renderLine = function renderLine(option, props) {
  var line;

  if (react.isValidElement(option)) {
    line = react.cloneElement(option, props);
  } else if (isFunction_1(option)) {
    line = option(props);
  } else {
    line = react.createElement("line", _extends$k({}, props, {
      className: "recharts-reference-line-line"
    }));
  }

  return line;
};

var ReferenceLine =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$k(ReferenceLine, _PureComponent);

  function ReferenceLine() {
    _classCallCheck$l(this, ReferenceLine);

    return _possibleConstructorReturn$k(this, _getPrototypeOf$k(ReferenceLine).apply(this, arguments));
  }

  _createClass$l(ReferenceLine, [{
    key: "getEndPoints",
    value: function getEndPoints(scales, isFixedX, isFixedY, isSegment) {
      var _this$props = this.props,
          _this$props$viewBox = _this$props.viewBox,
          x = _this$props$viewBox.x,
          y = _this$props$viewBox.y,
          width = _this$props$viewBox.width,
          height = _this$props$viewBox.height,
          position = _this$props.position;

      if (isFixedY) {
        var _this$props2 = this.props,
            yCoord = _this$props2.y,
            orientation = _this$props2.yAxis.orientation;
        var coord = scales.y.apply(yCoord, {
          position: position
        });

        if (ifOverflowMatches(this.props, 'discard') && !scales.y.isInRange(coord)) {
          return null;
        }

        var points = [{
          x: x + width,
          y: coord
        }, {
          x: x,
          y: coord
        }];
        return orientation === 'left' ? points.reverse() : points;
      }

      if (isFixedX) {
        var _this$props3 = this.props,
            xCoord = _this$props3.x,
            _orientation = _this$props3.xAxis.orientation;

        var _coord = scales.x.apply(xCoord, {
          position: position
        });

        if (ifOverflowMatches(this.props, 'discard') && !scales.x.isInRange(_coord)) {
          return null;
        }

        var _points = [{
          x: _coord,
          y: y + height
        }, {
          x: _coord,
          y: y
        }];
        return _orientation === 'top' ? _points.reverse() : _points;
      }

      if (isSegment) {
        var segment = this.props.segment;

        var _points2 = segment.map(function (p) {
          return scales.apply(p, {
            position: position
          });
        });

        if (ifOverflowMatches(this.props, 'discard') && some_1(_points2, function (p) {
          return !scales.isInRange(p);
        })) {
          return null;
        }

        return _points2;
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          fixedX = _this$props4.x,
          fixedY = _this$props4.y,
          segment = _this$props4.segment,
          xAxis = _this$props4.xAxis,
          yAxis = _this$props4.yAxis,
          shape = _this$props4.shape,
          className = _this$props4.className,
          alwaysShow = _this$props4.alwaysShow,
          clipPathId = _this$props4.clipPathId;
      var scales = LabeledScaleHelper.create({
        x: xAxis.scale,
        y: yAxis.scale
      });
      var isX = isNumOrStr(fixedX);
      var isY = isNumOrStr(fixedY);
      var isSegment = segment && segment.length === 2;
      var endPoints = this.getEndPoints(scales, isX, isY, isSegment);

      if (!endPoints) {
        return null;
      }

      var _endPoints = _slicedToArray$6(endPoints, 2),
          _endPoints$ = _endPoints[0],
          x1 = _endPoints$.x,
          y1 = _endPoints$.y,
          _endPoints$2 = _endPoints[1],
          x2 = _endPoints$2.x,
          y2 = _endPoints$2.y;

      var clipPath = ifOverflowMatches(this.props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;

      var props = _objectSpread$q({
        clipPath: clipPath
      }, getPresentationAttributes(this.props), {}, filterEventAttributes(this.props), {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      });

      return react.createElement(Layer, {
        className: classnames('recharts-reference-line', className)
      }, renderLine(shape, props), Label.renderCallByParent(this.props, rectWithCoords({
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      })));
    }
  }]);

  return ReferenceLine;
}(react.PureComponent);

ReferenceLine.displayName = 'ReferenceLine';
ReferenceLine.propTypes = _objectSpread$q({}, PRESENTATION_ATTRIBUTES, {
  viewBox: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
  }),
  xAxis: propTypes.object,
  yAxis: propTypes.object,
  isFront: propTypes.bool,
  alwaysShow: propTypes.bool,
  ifOverflow: propTypes.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
  x: propTypes.oneOfType([propTypes.number, propTypes.string]),
  y: propTypes.oneOfType([propTypes.number, propTypes.string]),
  segment: propTypes.arrayOf(propTypes.shape({
    x: propTypes.oneOfType([propTypes.number, propTypes.string]),
    y: propTypes.oneOfType([propTypes.number, propTypes.string])
  })),
  position: propTypes.oneOf(['middle', 'start', 'end']),
  className: propTypes.oneOfType([propTypes.number, propTypes.string]),
  yAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  xAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  shape: propTypes.func
});
ReferenceLine.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle'
};

function _typeof$m(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$m = function _typeof(obj) { return typeof obj; }; } else { _typeof$m = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$m(obj); }

function _extends$l() { _extends$l = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }

function ownKeys$o(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$r(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$o(source, true).forEach(function (key) { _defineProperty$u(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$o(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$u(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$m(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$m(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$m(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$m(Constructor.prototype, protoProps); if (staticProps) _defineProperties$m(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$l(self, call) { if (call && (_typeof$m(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$l(self); }

function _assertThisInitialized$l(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$l(o) { _getPrototypeOf$l = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$l(o); }

function _inherits$l(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$l(subClass, superClass); }

function _setPrototypeOf$l(o, p) { _setPrototypeOf$l = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$l(o, p); }

var ReferenceDot =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$l(ReferenceDot, _PureComponent);

  function ReferenceDot() {
    _classCallCheck$m(this, ReferenceDot);

    return _possibleConstructorReturn$l(this, _getPrototypeOf$l(ReferenceDot).apply(this, arguments));
  }

  _createClass$m(ReferenceDot, [{
    key: "getCoordinate",
    value: function getCoordinate() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          xAxis = _this$props.xAxis,
          yAxis = _this$props.yAxis;
      var scales = LabeledScaleHelper.create({
        x: xAxis.scale,
        y: yAxis.scale
      });
      var result = scales.apply({
        x: x,
        y: y
      }, {
        bandAware: true
      });

      if (ifOverflowMatches(this.props, 'discard') && !scales.isInRange(result)) {
        return null;
      }

      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          x = _this$props2.x,
          y = _this$props2.y,
          r = _this$props2.r,
          alwaysShow = _this$props2.alwaysShow,
          clipPathId = _this$props2.clipPathId;
      var isX = isNumOrStr(x);
      var isY = isNumOrStr(y);

      if (!isX || !isY) {
        return null;
      }

      var coordinate = this.getCoordinate();

      if (!coordinate) {
        return null;
      }

      var cx = coordinate.x,
          cy = coordinate.y;
      var _this$props3 = this.props,
          shape = _this$props3.shape,
          className = _this$props3.className;
      var clipPath = ifOverflowMatches(this.props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;

      var dotProps = _objectSpread$r({
        clipPath: clipPath
      }, getPresentationAttributes(this.props), {}, filterEventAttributes(this.props), {
        cx: cx,
        cy: cy
      });

      return react.createElement(Layer, {
        className: classnames('recharts-reference-dot', className)
      }, this.constructor.renderDot(shape, dotProps), Label.renderCallByParent(this.props, {
        x: cx - r,
        y: cy - r,
        width: 2 * r,
        height: 2 * r
      }));
    }
  }], [{
    key: "renderDot",
    value: function renderDot(option, props) {
      var dot;

      if (react.isValidElement(option)) {
        dot = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        dot = option(props);
      } else {
        dot = react.createElement(Dot, _extends$l({}, props, {
          cx: props.cx,
          cy: props.cy,
          className: "recharts-reference-dot-dot"
        }));
      }

      return dot;
    }
  }]);

  return ReferenceDot;
}(react.PureComponent);

ReferenceDot.displayName = 'ReferenceDot';
ReferenceDot.propTypes = _objectSpread$r({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  r: propTypes.number,
  xAxis: propTypes.shape({
    scale: propTypes.func
  }),
  yAxis: propTypes.shape({
    scale: propTypes.func
  }),
  isFront: propTypes.bool,
  alwaysShow: propTypes.bool,
  ifOverflow: propTypes.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
  x: propTypes.oneOfType([propTypes.number, propTypes.string]),
  y: propTypes.oneOfType([propTypes.number, propTypes.string]),
  className: propTypes.oneOfType([propTypes.number, propTypes.string]),
  yAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  xAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  shape: propTypes.oneOfType([propTypes.func, propTypes.element]),
  clipPathId: propTypes.string
});
ReferenceDot.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1
};

function _typeof$n(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$n = function _typeof(obj) { return typeof obj; }; } else { _typeof$n = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$n(obj); }

function _extends$m() { _extends$m = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }

function ownKeys$p(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$s(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$p(source, true).forEach(function (key) { _defineProperty$v(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$p(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$v(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$n(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$n(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$n(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$n(Constructor.prototype, protoProps); if (staticProps) _defineProperties$n(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$m(self, call) { if (call && (_typeof$n(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$m(self); }

function _assertThisInitialized$m(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$m(o) { _getPrototypeOf$m = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$m(o); }

function _inherits$m(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$m(subClass, superClass); }

function _setPrototypeOf$m(o, p) { _setPrototypeOf$m = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$m(o, p); }

var ReferenceArea =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$m(ReferenceArea, _PureComponent);

  function ReferenceArea() {
    _classCallCheck$n(this, ReferenceArea);

    return _possibleConstructorReturn$m(this, _getPrototypeOf$m(ReferenceArea).apply(this, arguments));
  }

  _createClass$n(ReferenceArea, [{
    key: "getRect",
    value: function getRect(hasX1, hasX2, hasY1, hasY2) {
      var _this$props = this.props,
          xValue1 = _this$props.x1,
          xValue2 = _this$props.x2,
          yValue1 = _this$props.y1,
          yValue2 = _this$props.y2,
          xAxis = _this$props.xAxis,
          yAxis = _this$props.yAxis;
      var scale = LabeledScaleHelper.create({
        x: xAxis.scale,
        y: yAxis.scale
      });
      var p1 = {
        x: hasX1 ? scale.x.apply(xValue1) : scale.x.rangeMin,
        y: hasY1 ? scale.y.apply(yValue1) : scale.y.rangeMin
      };
      var p2 = {
        x: hasX2 ? scale.x.apply(xValue2) : scale.x.rangeMax,
        y: hasY2 ? scale.y.apply(yValue2) : scale.y.rangeMax
      };

      if (ifOverflowMatches(this.props, 'discard') && (!scale.isInRange(p1) || !scale.isInRange(p2))) {
        return null;
      }

      return rectWithPoints(p1, p2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          x1 = _this$props2.x1,
          x2 = _this$props2.x2,
          y1 = _this$props2.y1,
          y2 = _this$props2.y2,
          className = _this$props2.className,
          alwaysShow = _this$props2.alwaysShow,
          clipPathId = _this$props2.clipPathId;
      var hasX1 = isNumOrStr(x1);
      var hasX2 = isNumOrStr(x2);
      var hasY1 = isNumOrStr(y1);
      var hasY2 = isNumOrStr(y2);
      var shape = this.props.shape;

      if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
        return null;
      }

      var rect = this.getRect(hasX1, hasX2, hasY1, hasY2);

      if (!rect && !shape) {
        return null;
      }

      var clipPath = ifOverflowMatches(this.props, 'hidden') ? "url(#".concat(clipPathId, ")") : undefined;
      return react.createElement(Layer, {
        className: classnames('recharts-reference-area', className)
      }, this.constructor.renderRect(shape, _objectSpread$s({
        clipPath: clipPath
      }, this.props, {}, rect)), Label.renderCallByParent(this.props, rect));
    }
  }], [{
    key: "renderRect",
    value: function renderRect(option, props) {
      var rect;

      if (react.isValidElement(option)) {
        rect = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        rect = option(props);
      } else {
        rect = react.createElement(Rectangle, _extends$m({}, props, {
          className: "recharts-reference-area-rect"
        }));
      }

      return rect;
    }
  }]);

  return ReferenceArea;
}(react.PureComponent);

ReferenceArea.displayName = 'ReferenceArea';
ReferenceArea.propTypes = _objectSpread$s({}, PRESENTATION_ATTRIBUTES, {
  viewBox: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
  }),
  xAxis: propTypes.object,
  yAxis: propTypes.object,
  isFront: propTypes.bool,
  alwaysShow: propTypes.bool,
  ifOverflow: propTypes.oneOf(['hidden', 'visible', 'discard', 'extendDomain']),
  x1: propTypes.oneOfType([propTypes.number, propTypes.string]),
  x2: propTypes.oneOfType([propTypes.number, propTypes.string]),
  y1: propTypes.oneOfType([propTypes.number, propTypes.string]),
  y2: propTypes.oneOfType([propTypes.number, propTypes.string]),
  className: propTypes.oneOfType([propTypes.number, propTypes.string]),
  yAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  xAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  shape: propTypes.oneOfType([propTypes.func, propTypes.element])
});
ReferenceArea.defaultProps = {
  isFront: false,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1
};

function _typeof$o(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$o = function _typeof(obj) { return typeof obj; }; } else { _typeof$o = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$o(obj); }

function _extends$n() { _extends$n = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }

function ownKeys$q(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$t(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$q(source, true).forEach(function (key) { _defineProperty$w(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$q(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$w(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck$o(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$o(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$o(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$o(Constructor.prototype, protoProps); if (staticProps) _defineProperties$o(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$n(self, call) { if (call && (_typeof$o(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$n(self); }

function _assertThisInitialized$n(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$n(o) { _getPrototypeOf$n = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$n(o); }

function _inherits$n(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$n(subClass, superClass); }

function _setPrototypeOf$n(o, p) { _setPrototypeOf$n = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$n(o, p); }

var CartesianAxis =
/*#__PURE__*/
function (_Component) {
  _inherits$n(CartesianAxis, _Component);

  function CartesianAxis() {
    _classCallCheck$o(this, CartesianAxis);

    return _possibleConstructorReturn$n(this, _getPrototypeOf$n(CartesianAxis).apply(this, arguments));
  }

  _createClass$o(CartesianAxis, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_ref, state) {
      var viewBox = _ref.viewBox,
          restProps = _objectWithoutProperties$8(_ref, ["viewBox"]);

      // props.viewBox is sometimes generated every time -
      // check that specially as object equality is likely to fail
      var _this$props = this.props,
          viewBoxOld = _this$props.viewBox,
          restPropsOld = _objectWithoutProperties$8(_this$props, ["viewBox"]);

      return !shallowEqual(viewBox, viewBoxOld) || !shallowEqual(restProps, restPropsOld) || !shallowEqual(state, this.state);
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */

  }, {
    key: "getTickLineCoord",
    value: function getTickLineCoord(data) {
      var _this$props2 = this.props,
          x = _this$props2.x,
          y = _this$props2.y,
          width = _this$props2.width,
          height = _this$props2.height,
          orientation = _this$props2.orientation,
          tickSize = _this$props2.tickSize,
          mirror = _this$props2.mirror,
          tickMargin = _this$props2.tickMargin;
      var x1, x2, y1, y2, tx, ty;
      var sign = mirror ? -1 : 1;
      var finalTickSize = data.tickSize || tickSize;
      var tickCoord = isNumber$1(data.tickCoord) ? data.tickCoord : data.coordinate;

      switch (orientation) {
        case 'top':
          x1 = x2 = data.coordinate;
          y2 = y + !mirror * height;
          y1 = y2 - sign * finalTickSize;
          ty = y1 - sign * tickMargin;
          tx = tickCoord;
          break;

        case 'left':
          y1 = y2 = data.coordinate;
          x2 = x + !mirror * width;
          x1 = x2 - sign * finalTickSize;
          tx = x1 - sign * tickMargin;
          ty = tickCoord;
          break;

        case 'right':
          y1 = y2 = data.coordinate;
          x2 = x + mirror * width;
          x1 = x2 + sign * finalTickSize;
          tx = x1 + sign * tickMargin;
          ty = tickCoord;
          break;

        default:
          x1 = x2 = data.coordinate;
          y2 = y + mirror * height;
          y1 = y2 + sign * finalTickSize;
          ty = y1 + sign * tickMargin;
          tx = tickCoord;
          break;
      }

      return {
        line: {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        },
        tick: {
          x: tx,
          y: ty
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function getTickTextAnchor() {
      var _this$props3 = this.props,
          orientation = _this$props3.orientation,
          mirror = _this$props3.mirror;
      var textAnchor;

      switch (orientation) {
        case 'left':
          textAnchor = mirror ? 'start' : 'end';
          break;

        case 'right':
          textAnchor = mirror ? 'end' : 'start';
          break;

        default:
          textAnchor = 'middle';
          break;
      }

      return textAnchor;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function getTickVerticalAnchor() {
      var _this$props4 = this.props,
          orientation = _this$props4.orientation,
          mirror = _this$props4.mirror;
      var verticalAnchor = 'end';

      switch (orientation) {
        case 'left':
        case 'right':
          verticalAnchor = 'middle';
          break;

        case 'top':
          verticalAnchor = mirror ? 'start' : 'end';
          break;

        default:
          verticalAnchor = mirror ? 'end' : 'start';
          break;
      }

      return verticalAnchor;
    }
  }, {
    key: "renderAxisLine",
    value: function renderAxisLine() {
      var _this$props5 = this.props,
          x = _this$props5.x,
          y = _this$props5.y,
          width = _this$props5.width,
          height = _this$props5.height,
          orientation = _this$props5.orientation,
          axisLine = _this$props5.axisLine,
          mirror = _this$props5.mirror;

      var props = _objectSpread$t({}, getPresentationAttributes(this.props), {
        fill: 'none'
      }, getPresentationAttributes(axisLine));

      if (orientation === 'top' || orientation === 'bottom') {
        var needHeight = orientation === 'top' && !mirror || orientation === 'bottom' && mirror;
        props = _objectSpread$t({}, props, {
          x1: x,
          y1: y + needHeight * height,
          x2: x + width,
          y2: y + needHeight * height
        });
      } else {
        var needWidth = orientation === 'left' && !mirror || orientation === 'right' && mirror;
        props = _objectSpread$t({}, props, {
          x1: x + needWidth * width,
          y1: y,
          x2: x + needWidth * width,
          y2: y + height
        });
      }

      return react.createElement("line", _extends$n({
        className: "recharts-cartesian-axis-line"
      }, props));
    }
  }, {
    key: "renderTicks",

    /**
     * render the ticks
     * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
     * @return {ReactComponent} renderedTicks
     */
    value: function renderTicks(ticks) {
      var _this = this;

      var _this$props6 = this.props,
          tickLine = _this$props6.tickLine,
          stroke = _this$props6.stroke,
          tick = _this$props6.tick,
          tickFormatter = _this$props6.tickFormatter,
          unit = _this$props6.unit;
      var finalTicks = CartesianAxis.getTicks(_objectSpread$t({}, this.props, {
        ticks: ticks
      }));
      var textAnchor = this.getTickTextAnchor();
      var verticalAnchor = this.getTickVerticalAnchor();
      var axisProps = getPresentationAttributes(this.props);
      var customTickProps = getPresentationAttributes(tick);

      var tickLineProps = _objectSpread$t({}, axisProps, {
        fill: 'none'
      }, getPresentationAttributes(tickLine));

      var items = finalTicks.map(function (entry, i) {
        var _this$getTickLineCoor = _this.getTickLineCoord(entry),
            lineCoord = _this$getTickLineCoor.line,
            tickCoord = _this$getTickLineCoor.tick;

        var tickProps = _objectSpread$t({
          textAnchor: textAnchor,
          verticalAnchor: verticalAnchor
        }, axisProps, {
          stroke: 'none',
          fill: stroke
        }, customTickProps, {}, tickCoord, {
          index: i,
          payload: entry,
          visibleTicksCount: finalTicks.length
        });

        return react.createElement(Layer, _extends$n({
          className: "recharts-cartesian-axis-tick",
          key: "tick-".concat(i) // eslint-disable-line react/no-array-index-key

        }, filterEventsOfChild(_this.props, entry, i)), tickLine && react.createElement("line", _extends$n({
          className: "recharts-cartesian-axis-tick-line"
        }, tickLineProps, lineCoord)), tick && _this.constructor.renderTickItem(tick, tickProps, "".concat(isFunction_1(tickFormatter) ? tickFormatter(entry.value) : entry.value).concat(unit || '')));
      });
      return react.createElement("g", {
        className: "recharts-cartesian-axis-ticks"
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props7 = this.props,
          axisLine = _this$props7.axisLine,
          width = _this$props7.width,
          height = _this$props7.height,
          ticksGenerator = _this$props7.ticksGenerator,
          className = _this$props7.className,
          hide = _this$props7.hide;

      if (hide) {
        return null;
      }

      var _this$props8 = this.props,
          ticks = _this$props8.ticks,
          noTicksProps = _objectWithoutProperties$8(_this$props8, ["ticks"]);

      var finalTicks = ticks;

      if (isFunction_1(ticksGenerator)) {
        finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
      }

      if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
        return null;
      }

      return react.createElement(Layer, {
        className: classnames('recharts-cartesian-axis', className)
      }, axisLine && this.renderAxisLine(), this.renderTicks(finalTicks), Label.renderCallByParent(this.props));
    }
  }], [{
    key: "getTicks",
    value: function getTicks(props) {
      var tick = props.tick,
          ticks = props.ticks,
          viewBox = props.viewBox,
          minTickGap = props.minTickGap,
          orientation = props.orientation,
          interval = props.interval,
          tickFormatter = props.tickFormatter,
          unit = props.unit;

      if (!ticks || !ticks.length || !tick) {
        return [];
      }

      if (isNumber$1(interval) || isSsr()) {
        return CartesianAxis.getNumberIntervalTicks(ticks, isNumber$1(interval) ? interval : 0);
      }

      if (interval === 'preserveStartEnd') {
        return CartesianAxis.getTicksStart({
          ticks: ticks,
          tickFormatter: tickFormatter,
          viewBox: viewBox,
          orientation: orientation,
          minTickGap: minTickGap,
          unit: unit
        }, true);
      }

      if (interval === 'preserveStart') {
        return CartesianAxis.getTicksStart({
          ticks: ticks,
          tickFormatter: tickFormatter,
          viewBox: viewBox,
          orientation: orientation,
          minTickGap: minTickGap,
          unit: unit
        });
      }

      return CartesianAxis.getTicksEnd({
        ticks: ticks,
        tickFormatter: tickFormatter,
        viewBox: viewBox,
        orientation: orientation,
        minTickGap: minTickGap,
        unit: unit
      });
    }
  }, {
    key: "getNumberIntervalTicks",
    value: function getNumberIntervalTicks(ticks, interval) {
      return ticks.filter(function (entry, i) {
        return i % (interval + 1) === 0;
      });
    }
  }, {
    key: "getTicksStart",
    value: function getTicksStart(_ref2, preserveEnd) {
      var ticks = _ref2.ticks,
          tickFormatter = _ref2.tickFormatter,
          viewBox = _ref2.viewBox,
          orientation = _ref2.orientation,
          minTickGap = _ref2.minTickGap,
          unit = _ref2.unit;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;
      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
      var result = (ticks || []).slice(); // we need add the width of 'unit' only when sizeKey === 'width'

      var unitSize = unit && sizeKey === 'width' ? getStringSize(unit)[sizeKey] : 0;
      var len = result.length;
      var sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;
      var start, end;

      if (sign === 1) {
        start = sizeKey === 'width' ? x : y;
        end = sizeKey === 'width' ? x + width : y + height;
      } else {
        start = sizeKey === 'width' ? x + width : y + height;
        end = sizeKey === 'width' ? x : y;
      }

      if (preserveEnd) {
        // Try to guarantee the tail to be displayed
        var tail = ticks[len - 1];
        var tailContent = isFunction_1(tickFormatter) ? tickFormatter(tail.value) : tail.value;
        var tailSize = getStringSize(tailContent)[sizeKey] + unitSize;
        var tailGap = sign * (tail.coordinate + sign * tailSize / 2 - end);
        result[len - 1] = tail = _objectSpread$t({}, tail, {
          tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate
        });
        var isTailShow = sign * (tail.tickCoord - sign * tailSize / 2 - start) >= 0 && sign * (tail.tickCoord + sign * tailSize / 2 - end) <= 0;

        if (isTailShow) {
          end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
          result[len - 1] = _objectSpread$t({}, tail, {
            isShow: true
          });
        }
      }

      var count = preserveEnd ? len - 1 : len;

      for (var _i = 0; _i < count; _i++) {
        var entry = result[_i];
        var content = isFunction_1(tickFormatter) ? tickFormatter(entry.value) : entry.value;
        var size = getStringSize(content)[sizeKey] + unitSize;

        if (_i === 0) {
          var gap = sign * (entry.coordinate - sign * size / 2 - start);
          result[_i] = entry = _objectSpread$t({}, entry, {
            tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate
          });
        } else {
          result[_i] = entry = _objectSpread$t({}, entry, {
            tickCoord: entry.coordinate
          });
        }

        var isShow = sign * (entry.tickCoord - sign * size / 2 - start) >= 0 && sign * (entry.tickCoord + sign * size / 2 - end) <= 0;

        if (isShow) {
          start = entry.tickCoord + sign * (size / 2 + minTickGap);
          result[_i] = _objectSpread$t({}, entry, {
            isShow: true
          });
        }
      }

      return result.filter(function (entry) {
        return entry.isShow;
      });
    }
  }, {
    key: "getTicksEnd",
    value: function getTicksEnd(_ref3) {
      var ticks = _ref3.ticks,
          tickFormatter = _ref3.tickFormatter,
          viewBox = _ref3.viewBox,
          orientation = _ref3.orientation,
          minTickGap = _ref3.minTickGap,
          unit = _ref3.unit;
      var x = viewBox.x,
          y = viewBox.y,
          width = viewBox.width,
          height = viewBox.height;
      var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height'; // we need add the width of 'unit' only when sizeKey === 'width'

      var unitSize = unit && sizeKey === 'width' ? getStringSize(unit)[sizeKey] : 0;
      var result = (ticks || []).slice();
      var len = result.length;
      var sign = len >= 2 ? mathSign(result[1].coordinate - result[0].coordinate) : 1;
      var start, end;

      if (sign === 1) {
        start = sizeKey === 'width' ? x : y;
        end = sizeKey === 'width' ? x + width : y + height;
      } else {
        start = sizeKey === 'width' ? x + width : y + height;
        end = sizeKey === 'width' ? x : y;
      }

      for (var _i2 = len - 1; _i2 >= 0; _i2--) {
        var entry = result[_i2];
        var content = isFunction_1(tickFormatter) ? tickFormatter(entry.value) : entry.value;
        var size = getStringSize(content)[sizeKey] + unitSize;

        if (_i2 === len - 1) {
          var gap = sign * (entry.coordinate + sign * size / 2 - end);
          result[_i2] = entry = _objectSpread$t({}, entry, {
            tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate
          });
        } else {
          result[_i2] = entry = _objectSpread$t({}, entry, {
            tickCoord: entry.coordinate
          });
        }

        var isShow = sign * (entry.tickCoord - sign * size / 2 - start) >= 0 && sign * (entry.tickCoord + sign * size / 2 - end) <= 0;

        if (isShow) {
          end = entry.tickCoord - sign * (size / 2 + minTickGap);
          result[_i2] = _objectSpread$t({}, entry, {
            isShow: true
          });
        }
      }

      return result.filter(function (entry) {
        return entry.isShow;
      });
    }
  }, {
    key: "renderTickItem",
    value: function renderTickItem(option, props, value) {
      var tickItem;

      if (react.isValidElement(option)) {
        tickItem = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        tickItem = option(props);
      } else {
        tickItem = react.createElement(Text, _extends$n({}, props, {
          className: "recharts-cartesian-axis-tick-value"
        }), value);
      }

      return tickItem;
    }
  }]);

  return CartesianAxis;
}(react.Component);

CartesianAxis.displayName = 'CartesianAxis';
CartesianAxis.propTypes = _objectSpread$t({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  className: propTypes.string,
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  orientation: propTypes.oneOf(['top', 'bottom', 'left', 'right']),
  // The viewBox of svg
  viewBox: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number
  }),
  tick: propTypes.oneOfType([propTypes.bool, propTypes.func, propTypes.object, propTypes.element]),
  axisLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  tickLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  mirror: propTypes.bool,
  tickMargin: propTypes.number.isRequired,
  minTickGap: propTypes.number,
  ticks: propTypes.array,
  tickSize: propTypes.number,
  stroke: propTypes.string,
  tickFormatter: propTypes.func,
  ticksGenerator: propTypes.func,
  interval: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['preserveStart', 'preserveEnd', 'preserveStartEnd'])])
});
CartesianAxis.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: 'bottom',
  // The ticks
  ticks: [],
  stroke: '#666',
  tickLine: true,
  axisLine: true,
  tick: true,
  mirror: false,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd'
};

function _typeof$p(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$p = function _typeof(obj) { return typeof obj; }; } else { _typeof$p = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$p(obj); }

function _extends$o() { _extends$o = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }

function _objectWithoutProperties$9(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$9(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$9(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys$r(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$u(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$r(source, true).forEach(function (key) { _defineProperty$x(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$r(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$x(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$p(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$p(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$p(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$p(Constructor.prototype, protoProps); if (staticProps) _defineProperties$p(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$o(self, call) { if (call && (_typeof$p(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$o(self); }

function _assertThisInitialized$o(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$o(o) { _getPrototypeOf$o = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$o(o); }

function _inherits$o(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$o(subClass, superClass); }

function _setPrototypeOf$o(o, p) { _setPrototypeOf$o = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$o(o, p); }

var CartesianGrid =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$o(CartesianGrid, _PureComponent);

  function CartesianGrid() {
    _classCallCheck$p(this, CartesianGrid);

    return _possibleConstructorReturn$o(this, _getPrototypeOf$o(CartesianGrid).apply(this, arguments));
  }

  _createClass$p(CartesianGrid, [{
    key: "renderHorizontal",

    /**
     * Draw the horizontal grid lines
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal lines
     */
    value: function renderHorizontal(horizontalPoints) {
      var _this = this;

      var _this$props = this.props,
          x = _this$props.x,
          width = _this$props.width,
          horizontal = _this$props.horizontal;

      if (!horizontalPoints || !horizontalPoints.length) {
        return null;
      }

      var items = horizontalPoints.map(function (entry, i) {
        var props = _objectSpread$u({}, _this.props, {
          x1: x,
          y1: entry,
          x2: x + width,
          y2: entry,
          key: "line-".concat(i),
          index: i
        });

        return _this.constructor.renderLineItem(horizontal, props);
      });
      return react.createElement("g", {
        className: "recharts-cartesian-grid-horizontal"
      }, items);
    }
    /**
     * Draw vertical grid lines
     * @param {Array} verticalPoints either passed in as props or generated from function
     * @return {Group} Vertical lines
     */

  }, {
    key: "renderVertical",
    value: function renderVertical(verticalPoints) {
      var _this2 = this;

      var _this$props2 = this.props,
          y = _this$props2.y,
          height = _this$props2.height,
          vertical = _this$props2.vertical;

      if (!verticalPoints || !verticalPoints.length) {
        return null;
      }

      var items = verticalPoints.map(function (entry, i) {
        var props = _objectSpread$u({}, _this2.props, {
          x1: entry,
          y1: y,
          x2: entry,
          y2: y + height,
          key: "line-".concat(i),
          index: i
        });

        return _this2.constructor.renderLineItem(vertical, props);
      });
      return react.createElement("g", {
        className: "recharts-cartesian-grid-vertical"
      }, items);
    }
    /**
     * Draw vertical grid stripes filled by colors
     * @param {Array} verticalPoints either passed in as props or generated from function
     * @return {Group} Vertical stripes
     */

  }, {
    key: "renderVerticalStripes",
    value: function renderVerticalStripes(verticalPoints) {
      var verticalFill = this.props.verticalFill;

      if (!verticalFill || !verticalFill.length) {
        return null;
      }

      var _this$props3 = this.props,
          fillOpacity = _this$props3.fillOpacity,
          x = _this$props3.x,
          y = _this$props3.y,
          width = _this$props3.width,
          height = _this$props3.height;
      var verticalPointsUpdated = verticalPoints.slice().sort(function (a, b) {
        return a - b;
      });

      if (x !== verticalPointsUpdated[0]) {
        verticalPointsUpdated.unshift(0);
      }

      var items = verticalPointsUpdated.map(function (entry, i) {
        var lineWidth = verticalPointsUpdated[i + 1] ? verticalPointsUpdated[i + 1] - entry : x + width - entry;

        if (lineWidth <= 0) {
          return null;
        }

        var colorIndex = i % verticalFill.length;
        return react.createElement("rect", {
          key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
          ,
          x: Math.round(entry + x - x),
          y: y,
          width: lineWidth,
          height: height,
          stroke: "none",
          fill: verticalFill[colorIndex],
          fillOpacity: fillOpacity,
          className: "recharts-cartesian-grid-bg"
        });
      });
      return react.createElement("g", {
        className: "recharts-cartesian-gridstripes-vertical"
      }, items);
    }
    /**
     * Draw horizontal grid stripes filled by colors
     * @param {Array} horizontalPoints either passed in as props or generated from function
     * @return {Group} Horizontal stripes
     */

  }, {
    key: "renderHorizontalStripes",
    value: function renderHorizontalStripes(horizontalPoints) {
      var horizontalFill = this.props.horizontalFill;

      if (!horizontalFill || !horizontalFill.length) {
        return null;
      }

      var _this$props4 = this.props,
          fillOpacity = _this$props4.fillOpacity,
          x = _this$props4.x,
          y = _this$props4.y,
          width = _this$props4.width,
          height = _this$props4.height;
      var horizontalPointsUpdated = horizontalPoints.slice().sort(function (a, b) {
        return a - b;
      });

      if (y !== horizontalPointsUpdated[0]) {
        horizontalPointsUpdated.unshift(0);
      }

      var items = horizontalPointsUpdated.map(function (entry, i) {
        var lineHeight = horizontalPointsUpdated[i + 1] ? horizontalPointsUpdated[i + 1] - entry : y + height - entry;

        if (lineHeight <= 0) {
          return null;
        }

        var colorIndex = i % horizontalFill.length;
        return react.createElement("rect", {
          key: "react-".concat(i) // eslint-disable-line react/no-array-index-key
          ,
          y: Math.round(entry + y - y),
          x: x,
          height: lineHeight,
          width: width,
          stroke: "none",
          fill: horizontalFill[colorIndex],
          fillOpacity: fillOpacity,
          className: "recharts-cartesian-grid-bg"
        });
      });
      return react.createElement("g", {
        className: "recharts-cartesian-gridstripes-horizontal"
      }, items);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var fill = this.props.fill;

      if (!fill || fill === 'none') {
        return null;
      }

      var _this$props5 = this.props,
          fillOpacity = _this$props5.fillOpacity,
          x = _this$props5.x,
          y = _this$props5.y,
          width = _this$props5.width,
          height = _this$props5.height;
      return react.createElement("rect", {
        x: x,
        y: y,
        width: width,
        height: height,
        stroke: "none",
        fill: fill,
        fillOpacity: fillOpacity,
        className: "recharts-cartesian-grid-bg"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          x = _this$props6.x,
          y = _this$props6.y,
          width = _this$props6.width,
          height = _this$props6.height,
          horizontal = _this$props6.horizontal,
          vertical = _this$props6.vertical,
          horizontalCoordinatesGenerator = _this$props6.horizontalCoordinatesGenerator,
          verticalCoordinatesGenerator = _this$props6.verticalCoordinatesGenerator,
          xAxis = _this$props6.xAxis,
          yAxis = _this$props6.yAxis,
          offset = _this$props6.offset,
          chartWidth = _this$props6.chartWidth,
          chartHeight = _this$props6.chartHeight;

      if (!isNumber$1(width) || width <= 0 || !isNumber$1(height) || height <= 0 || !isNumber$1(x) || x !== +x || !isNumber$1(y) || y !== +y) {
        return null;
      }

      var _this$props7 = this.props,
          horizontalPoints = _this$props7.horizontalPoints,
          verticalPoints = _this$props7.verticalPoints; // No horizontal points are specified

      if ((!horizontalPoints || !horizontalPoints.length) && isFunction_1(horizontalCoordinatesGenerator)) {
        horizontalPoints = horizontalCoordinatesGenerator({
          yAxis: yAxis,
          width: chartWidth,
          height: chartHeight,
          offset: offset
        });
      } // No vertical points are specified


      if ((!verticalPoints || !verticalPoints.length) && isFunction_1(verticalCoordinatesGenerator)) {
        verticalPoints = verticalCoordinatesGenerator({
          xAxis: xAxis,
          width: chartWidth,
          height: chartHeight,
          offset: offset
        });
      }

      return react.createElement("g", {
        className: "recharts-cartesian-grid"
      }, this.renderBackground(), horizontal && this.renderHorizontal(horizontalPoints), vertical && this.renderVertical(verticalPoints), horizontal && this.renderHorizontalStripes(horizontalPoints), vertical && this.renderVerticalStripes(verticalPoints));
    }
  }], [{
    key: "renderLineItem",
    value: function renderLineItem(option, props) {
      var lineItem;

      if (react.isValidElement(option)) {
        lineItem = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        lineItem = option(props);
      } else {
        var x1 = props.x1,
            y1 = props.y1,
            x2 = props.x2,
            y2 = props.y2,
            key = props.key,
            others = _objectWithoutProperties$9(props, ["x1", "y1", "x2", "y2", "key"]);

        lineItem = react.createElement("line", _extends$o({}, getPresentationAttributes(others), {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          fill: "none",
          key: key
        }));
      }

      return lineItem;
    }
  }]);

  return CartesianGrid;
}(react.PureComponent);

CartesianGrid.displayName = 'CartesianGrid';
CartesianGrid.propTypes = _objectSpread$u({}, PRESENTATION_ATTRIBUTES, {
  x: propTypes.number,
  y: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  horizontal: propTypes.oneOfType([propTypes.object, propTypes.element, propTypes.func, propTypes.bool]),
  vertical: propTypes.oneOfType([propTypes.object, propTypes.element, propTypes.func, propTypes.bool]),
  horizontalPoints: propTypes.arrayOf(propTypes.number),
  verticalPoints: propTypes.arrayOf(propTypes.number),
  horizontalCoordinatesGenerator: propTypes.func,
  verticalCoordinatesGenerator: propTypes.func,
  xAxis: propTypes.object,
  yAxis: propTypes.object,
  offset: propTypes.object,
  chartWidth: propTypes.number,
  chartHeight: propTypes.number,
  verticalFill: propTypes.arrayOf(propTypes.string),
  horizontalFill: propTypes.arrayOf(propTypes.string)
});
CartesianGrid.defaultProps = {
  horizontal: true,
  vertical: true,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: '#ccc',
  fill: 'none',
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};

function _typeof$q(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$q = function _typeof(obj) { return typeof obj; }; } else { _typeof$q = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$q(obj); }

function _objectWithoutProperties$a(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$a(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$a(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$p() { _extends$p = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }

function ownKeys$s(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$v(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$s(source, true).forEach(function (key) { _defineProperty$y(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$s(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$y(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$q(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$q(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$q(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$q(Constructor.prototype, protoProps); if (staticProps) _defineProperties$q(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$p(self, call) { if (call && (_typeof$q(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$p(self); }

function _assertThisInitialized$p(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$p(o) { _getPrototypeOf$p = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$p(o); }

function _inherits$p(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$p(subClass, superClass); }

function _setPrototypeOf$p(o, p) { _setPrototypeOf$p = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$p(o, p); }

var Bar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$p(Bar, _PureComponent);

  function Bar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$q(this, Bar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$p(this, (_getPrototypeOf2 = _getPrototypeOf$p(Bar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isAnimationFinished: false
    };
    _this.id = uniqueId('recharts-bar-');

    _this.cachePrevData = function (data) {
      _this.setState({
        prevData: data
      });
    };

    _this.handleAnimationEnd = function () {
      _this.setState({
        isAnimationFinished: true
      });

      _this.props.onAnimationEnd();
    };

    _this.handleAnimationStart = function () {
      _this.setState({
        isAnimationFinished: false
      });

      _this.props.onAnimationStart();
    };

    return _this;
  }

  _createClass$q(Bar, [{
    key: "componentWillReceiveProps",
    // eslint-disable-next-line camelcase
    value: function componentWillReceiveProps(nextProps) {
      var _this$props = this.props,
          animationId = _this$props.animationId,
          data = _this$props.data;

      if (nextProps.animationId !== animationId) {
        this.cachePrevData(data);
      }
    }
  }, {
    key: "renderRectanglesStatically",
    value: function renderRectanglesStatically(data) {
      var _this2 = this;

      var shape = this.props.shape;
      var baseProps = getPresentationAttributes(this.props);
      return data && data.map(function (entry, i) {
        var props = _objectSpread$v({}, baseProps, {}, entry, {
          index: i
        });

        return react.createElement(Layer, _extends$p({
          className: "recharts-bar-rectangle"
        }, filterEventsOfChild(_this2.props, entry, i), {
          key: "rectangle-".concat(i) // eslint-disable-line react/no-array-index-key

        }), _this2.constructor.renderRectangle(shape, props));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function renderRectanglesWithAnimation() {
      var _this3 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          layout = _this$props2.layout,
          isAnimationActive = _this$props2.isAnimationActive,
          animationBegin = _this$props2.animationBegin,
          animationDuration = _this$props2.animationDuration,
          animationEasing = _this$props2.animationEasing,
          animationId = _this$props2.animationId;
      var prevData = this.state.prevData;
      return react.createElement(Animate, {
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(animationId),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function (_ref) {
        var t = _ref.t;
        var stepData = data.map(function (entry, index) {
          var prev = prevData && prevData[index];

          if (prev) {
            var interpolatorX = interpolateNumber(prev.x, entry.x);
            var interpolatorY = interpolateNumber(prev.y, entry.y);
            var interpolatorWidth = interpolateNumber(prev.width, entry.width);
            var interpolatorHeight = interpolateNumber(prev.height, entry.height);
            return _objectSpread$v({}, entry, {
              x: interpolatorX(t),
              y: interpolatorY(t),
              width: interpolatorWidth(t),
              height: interpolatorHeight(t)
            });
          }

          if (layout === 'horizontal') {
            var _interpolatorHeight = interpolateNumber(0, entry.height);

            var h = _interpolatorHeight(t);

            return _objectSpread$v({}, entry, {
              y: entry.y + entry.height - h,
              height: h
            });
          }

          var interpolator = interpolateNumber(0, entry.width);
          var w = interpolator(t);
          return _objectSpread$v({}, entry, {
            width: w
          });
        });
        return react.createElement(Layer, null, _this3.renderRectanglesStatically(stepData));
      });
    }
  }, {
    key: "renderRectangles",
    value: function renderRectangles() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          isAnimationActive = _this$props3.isAnimationActive;
      var prevData = this.state.prevData;

      if (isAnimationActive && data && data.length && (!prevData || !isEqual_1(prevData, data))) {
        return this.renderRectanglesWithAnimation();
      }

      return this.renderRectanglesStatically(data);
    }
  }, {
    key: "renderBackground",
    value: function renderBackground() {
      var _this4 = this;

      var data = this.props.data;
      var backgroundProps = getPresentationAttributes(this.props.background);
      return data.map(function (entry, i) {
        // eslint-disable-next-line no-unused-vars
        var value = entry.value,
            background = entry.background,
            rest = _objectWithoutProperties$a(entry, ["value", "background"]);

        if (!background) {
          return null;
        }

        var props = _objectSpread$v({}, rest, {
          fill: '#eee'
        }, background, {}, backgroundProps, {}, filterEventsOfChild(_this4.props, entry, i), {
          index: i,
          key: "background-bar-".concat(i),
          className: 'recharts-bar-background-rectangle'
        });

        return _this4.constructor.renderRectangle(_this4.props.background, props);
      });
    }
  }, {
    key: "renderErrorBar",
    value: function renderErrorBar() {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
        return null;
      }

      var _this$props4 = this.props,
          data = _this$props4.data,
          xAxis = _this$props4.xAxis,
          yAxis = _this$props4.yAxis,
          layout = _this$props4.layout,
          children = _this$props4.children;
      var errorBarItems = findAllByType(children, ErrorBar);

      if (!errorBarItems) {
        return null;
      }

      var offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;

      function dataPointFormatter(dataPoint, dataKey) {
        return {
          x: dataPoint.x,
          y: dataPoint.y,
          value: dataPoint.value,
          errorVal: getValueByDataKey(dataPoint, dataKey)
        };
      }

      return errorBarItems.map(function (item, i) {
        return react.cloneElement(item, {
          key: "error-bar-".concat(i),
          // eslint-disable-line react/no-array-index-key
          data: data,
          xAxis: xAxis,
          yAxis: yAxis,
          layout: layout,
          offset: offset,
          dataPointFormatter: dataPointFormatter
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          hide = _this$props5.hide,
          data = _this$props5.data,
          className = _this$props5.className,
          xAxis = _this$props5.xAxis,
          yAxis = _this$props5.yAxis,
          left = _this$props5.left,
          top = _this$props5.top,
          width = _this$props5.width,
          height = _this$props5.height,
          isAnimationActive = _this$props5.isAnimationActive,
          background = _this$props5.background,
          id = _this$props5.id;

      if (hide || !data || !data.length) {
        return null;
      }

      var isAnimationFinished = this.state.isAnimationFinished;
      var layerClass = classnames('recharts-bar', className);
      var needClip = xAxis && xAxis.allowDataOverflow || yAxis && yAxis.allowDataOverflow;
      var clipPathId = isNil_1(id) ? this.id : id;
      return react.createElement(Layer, {
        className: layerClass
      }, needClip ? react.createElement("defs", null, react.createElement("clipPath", {
        id: "clipPath-".concat(clipPathId)
      }, react.createElement("rect", {
        x: left,
        y: top,
        width: width,
        height: height
      }))) : null, react.createElement(Layer, {
        className: "recharts-bar-rectangles",
        clipPath: needClip ? "url(#clipPath-".concat(clipPathId, ")") : null
      }, background ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!isAnimationActive || isAnimationFinished) && LabelList.renderCallByParent(this.props, data));
    }
  }], [{
    key: "renderRectangle",
    value: function renderRectangle(option, props) {
      var rectangle;

      if (react.isValidElement(option)) {
        rectangle = react.cloneElement(option, props);
      } else if (isFunction_1(option)) {
        rectangle = option(props);
      } else {
        rectangle = react.createElement(Rectangle, props);
      }

      return rectangle;
    }
  }]);

  return Bar;
}(react.PureComponent);

Bar.displayName = 'Bar';
Bar.propTypes = _objectSpread$v({}, PRESENTATION_ATTRIBUTES, {}, EVENT_ATTRIBUTES, {
  className: propTypes.string,
  layout: propTypes.oneOf(['vertical', 'horizontal']),
  xAxisId: propTypes.oneOfType([propTypes.number, propTypes.string]),
  yAxisId: propTypes.oneOfType([propTypes.number, propTypes.string]),
  yAxis: propTypes.object,
  xAxis: propTypes.object,
  stackId: propTypes.oneOfType([propTypes.number, propTypes.string]),
  barSize: propTypes.number,
  unit: propTypes.oneOfType([propTypes.string, propTypes.number]),
  name: propTypes.oneOfType([propTypes.string, propTypes.number]),
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]).isRequired,
  legendType: propTypes.oneOf(LEGEND_TYPES),
  tooltipType: propTypes.oneOf(TOOLTIP_TYPES),
  minPointSize: propTypes.number,
  maxBarSize: propTypes.number,
  hide: propTypes.bool,
  shape: propTypes.oneOfType([propTypes.func, propTypes.element]),
  data: propTypes.arrayOf(propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    radius: propTypes.oneOfType([propTypes.number, propTypes.array]),
    value: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.array])
  })),
  onAnimationStart: propTypes.func,
  onAnimationEnd: propTypes.func,
  animationId: propTypes.number,
  isAnimationActive: propTypes.bool,
  animationBegin: propTypes.number,
  animationDuration: propTypes.number,
  animationEasing: propTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
  id: propTypes.string
});
Bar.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: false,
  // data of bar
  data: [],
  layout: 'vertical',
  isAnimationActive: !isSsr(),
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
  onAnimationStart: function onAnimationStart() {},
  onAnimationEnd: function onAnimationEnd() {}
};

Bar.getComposedData = function (_ref2) {
  var props = _ref2.props,
      item = _ref2.item,
      barPosition = _ref2.barPosition,
      bandSize = _ref2.bandSize,
      xAxis = _ref2.xAxis,
      yAxis = _ref2.yAxis,
      xAxisTicks = _ref2.xAxisTicks,
      yAxisTicks = _ref2.yAxisTicks,
      stackedData = _ref2.stackedData,
      dataStartIndex = _ref2.dataStartIndex,
      displayedData = _ref2.displayedData,
      offset = _ref2.offset;
  var pos = findPositionOfBar(barPosition, item);

  if (!pos) {
    return [];
  }

  var layout = props.layout;
  var _item$props = item.props,
      dataKey = _item$props.dataKey,
      children = _item$props.children,
      minPointSize = _item$props.minPointSize;
  var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
  var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
  var baseValue = getBaseValueOfBar({
    props: props,
    numericAxis: numericAxis
  });
  var cells = findAllByType(children, Cell);
  var rects = displayedData.map(function (entry, index) {
    var value, x, y, width, height, background;

    if (stackedData) {
      value = truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
    } else {
      value = getValueByDataKey(entry, dataKey);

      if (!isArray_1(value)) {
        value = [baseValue, value];
      }
    }

    if (layout === 'horizontal') {
      x = getCateCoordinateOfBar({
        axis: xAxis,
        ticks: xAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      y = yAxis.scale(value[1]);
      width = pos.size;
      height = yAxis.scale(value[0]) - yAxis.scale(value[1]);
      background = {
        x: x,
        y: yAxis.y,
        width: width,
        height: yAxis.height
      };

      if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
        var delta = mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
        y -= delta;
        height += delta;
      }
    } else {
      x = xAxis.scale(value[0]);
      y = getCateCoordinateOfBar({
        axis: yAxis,
        ticks: yAxisTicks,
        bandSize: bandSize,
        offset: pos.offset,
        entry: entry,
        index: index
      });
      width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
      height = pos.size;
      background = {
        x: xAxis.x,
        y: y,
        width: xAxis.width,
        height: height
      };

      if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
        var _delta = mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));

        width += _delta;
      }
    }

    return _objectSpread$v({}, entry, {
      x: x,
      y: y,
      width: width,
      height: height,
      value: stackedData ? value : value[1],
      payload: entry,
      background: background
    }, cells && cells[index] && cells[index].props);
  });
  return _objectSpread$v({
    data: rects,
    layout: layout
  }, offset);
};

function _typeof$r(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$r = function _typeof(obj) { return typeof obj; }; } else { _typeof$r = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$r(obj); }

function _classCallCheck$r(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$r(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$r(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$r(Constructor.prototype, protoProps); if (staticProps) _defineProperties$r(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$q(self, call) { if (call && (_typeof$r(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$q(self); }

function _assertThisInitialized$q(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$q(o) { _getPrototypeOf$q = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$q(o); }

function _inherits$q(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$q(subClass, superClass); }

function _setPrototypeOf$q(o, p) { _setPrototypeOf$q = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$q(o, p); }

var XAxis =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$q(XAxis, _PureComponent);

  function XAxis() {
    _classCallCheck$r(this, XAxis);

    return _possibleConstructorReturn$q(this, _getPrototypeOf$q(XAxis).apply(this, arguments));
  }

  _createClass$r(XAxis, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return XAxis;
}(react.PureComponent);

XAxis.displayName = 'XAxis';
XAxis.propTypes = {
  allowDecimals: propTypes.bool,
  allowDuplicatedCategory: propTypes.bool,
  hide: propTypes.bool,
  // The name of data displayed in the axis
  name: propTypes.oneOfType([propTypes.string, propTypes.number]),
  // The unit of data displayed in the axis
  unit: propTypes.oneOfType([propTypes.string, propTypes.number]),
  // The unique id of x-axis
  xAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  domain: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func, propTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
  // The key of data displayed in the axis
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]),
  // The width of axis which is usually calculated internally
  width: propTypes.number,
  // The height of axis, which need to be setted by user
  height: propTypes.number,
  mirror: propTypes.bool,
  // The orientation of axis
  orientation: propTypes.oneOf(['top', 'bottom']),
  type: propTypes.oneOf(['number', 'category']),
  // Ticks can be any type when the axis is the type of category
  // Ticks must be numbers when the axis is the type of number
  ticks: propTypes.array,
  // The count of ticks
  tickCount: propTypes.number,
  // The formatter function of tick
  tickFormatter: propTypes.func,
  padding: propTypes.shape({
    left: propTypes.number,
    right: propTypes.number
  }),
  allowDataOverflow: propTypes.bool,
  scale: propTypes.oneOfType([propTypes.oneOf(SCALE_TYPES), propTypes.func]),
  tick: propTypes.oneOfType([propTypes.bool, propTypes.func, propTypes.object, propTypes.element]),
  axisLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  tickLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  minTickGap: propTypes.number,
  tickSize: propTypes.number,
  interval: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['preserveStart', 'preserveEnd', 'preserveStartEnd'])]),
  reversed: propTypes.bool
};
XAxis.defaultProps = {
  allowDecimals: true,
  hide: false,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: false,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false,
  allowDuplicatedCategory: true
};

function _typeof$s(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$s = function _typeof(obj) { return typeof obj; }; } else { _typeof$s = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$s(obj); }

function _classCallCheck$s(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$s(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$s(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$s(Constructor.prototype, protoProps); if (staticProps) _defineProperties$s(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$r(self, call) { if (call && (_typeof$s(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$r(self); }

function _assertThisInitialized$r(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf$r(o) { _getPrototypeOf$r = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$r(o); }

function _inherits$r(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$r(subClass, superClass); }

function _setPrototypeOf$r(o, p) { _setPrototypeOf$r = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$r(o, p); }

var YAxis =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$r(YAxis, _PureComponent);

  function YAxis() {
    _classCallCheck$s(this, YAxis);

    return _possibleConstructorReturn$r(this, _getPrototypeOf$r(YAxis).apply(this, arguments));
  }

  _createClass$s(YAxis, [{
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return YAxis;
}(react.PureComponent);

YAxis.displayName = 'YAxis';
YAxis.propTypes = {
  allowDecimals: propTypes.bool,
  allowDuplicatedCategory: propTypes.bool,
  hide: propTypes.bool,
  // The name of data displayed in the axis
  name: propTypes.oneOfType([propTypes.string, propTypes.number]),
  // The unit of data displayed in the axis
  unit: propTypes.oneOfType([propTypes.string, propTypes.number]),
  // The unique id of y-axis
  yAxisId: propTypes.oneOfType([propTypes.string, propTypes.number]),
  domain: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func, propTypes.oneOf(['auto', 'dataMin', 'dataMax'])])),
  // The key of data displayed in the axis
  dataKey: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func]),
  // Ticks can be any type when the axis is the type of category
  // Ticks must be numbers when the axis is the type of number
  ticks: propTypes.array,
  // The count of ticks
  tickCount: propTypes.number,
  // The formatter function of tick
  tickFormatter: propTypes.func,
  // The width of axis, which need to be setted by user
  width: propTypes.number,
  // The height of axis which is usually calculated in Chart
  height: propTypes.number,
  mirror: propTypes.bool,
  // The orientation of axis
  orientation: propTypes.oneOf(['left', 'right']),
  type: propTypes.oneOf(['number', 'category']),
  padding: propTypes.shape({
    top: propTypes.number,
    bottom: propTypes.number
  }),
  allowDataOverflow: propTypes.bool,
  scale: propTypes.oneOfType([propTypes.oneOf(['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold']), propTypes.func]),
  tick: propTypes.oneOfType([propTypes.bool, propTypes.func, propTypes.object, propTypes.element]),
  axisLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  tickLine: propTypes.oneOfType([propTypes.bool, propTypes.object]),
  minTickGap: propTypes.number,
  tickSize: propTypes.number,
  interval: propTypes.oneOfType([propTypes.number, propTypes.oneOf(['preserveStart', 'preserveEnd', 'preserveStartEnd'])]),
  reversed: propTypes.bool
};
YAxis.defaultProps = {
  allowDuplicatedCategory: true,
  allowDecimals: true,
  hide: false,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: false,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: false,
  scale: 'auto',
  reversed: false
};

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_1(collection)) {
      var iteratee = _baseIteratee(predicate);
      collection = keys_1(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
  if (index < 0) {
    index = nativeMax$3(length + index, 0);
  }
  return _baseFindIndex(array, _baseIteratee(predicate), index);
}

var findIndex_1 = findIndex;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = _createFind(findIndex_1);

var find_1 = find;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

var detectReferenceElementsDomain = function detectReferenceElementsDomain(children, domain, axisId, axisType, specifiedTicks) {
  var lines = findAllByType(children, ReferenceLine);
  var dots = findAllByType(children, ReferenceDot);
  var elements = lines.concat(dots);
  var areas = findAllByType(children, ReferenceArea);
  var idKey = "".concat(axisType, "Id");
  var valueKey = axisType[0];
  var finalDomain = domain;

  if (elements.length) {
    finalDomain = elements.reduce(function (result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber$1(el.props[valueKey])) {
        var value = el.props[valueKey];
        return [Math.min(result[0], value), Math.max(result[1], value)];
      }

      return result;
    }, finalDomain);
  }

  if (areas.length) {
    var key1 = "".concat(valueKey, "1");
    var key2 = "".concat(valueKey, "2");
    finalDomain = areas.reduce(function (result, el) {
      if (el.props[idKey] === axisId && ifOverflowMatches(el.props, 'extendDomain') && isNumber$1(el.props[key1]) && isNumber$1(el.props[key2])) {
        var value1 = el.props[key1];
        var value2 = el.props[key2];
        return [Math.min(result[0], value1, value2), Math.max(result[1], value1, value2)];
      }

      return result;
    }, finalDomain);
  }

  if (specifiedTicks && specifiedTicks.length) {
    finalDomain = specifiedTicks.reduce(function (result, tick) {
      if (isNumber$1(tick)) {
        return [Math.min(result[0], tick), Math.max(result[1], tick)];
      }

      return result;
    }, finalDomain);
  }

  return finalDomain;
};

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}

// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active ) ;
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };
    
// Alias for removeListener added in NodeJS 10.0
// https://nodejs.org/api/events.html#events_emitter_off_eventname_listener
EventEmitter.prototype.off = function(type, listener){
    return this.removeListener(type, listener);
};

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

var eventCenter = new EventEmitter();

if (eventCenter.setMaxListeners) {
  eventCenter.setMaxListeners(10);
}
var SYNC_EVENT = 'recharts.syncMouseEvents';

function _typeof$t(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$t = function _typeof(obj) { return typeof obj; }; } else { _typeof$t = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$t(obj); }

function _objectWithoutProperties$b(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$b(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$b(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends$q() { _extends$q = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }

function _toConsumableArray$a(arr) { return _arrayWithoutHoles$a(arr) || _iterableToArray$b(arr) || _nonIterableSpread$a(); }

function _nonIterableSpread$a() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray$b(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles$a(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys$t(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$w(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$t(source, true).forEach(function (key) { _defineProperty$z(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$t(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$z(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$t(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$t(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$t(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$t(Constructor.prototype, protoProps); if (staticProps) _defineProperties$t(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn$s(self, call) { if (call && (_typeof$t(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized$s(self); }

function _getPrototypeOf$s(o) { _getPrototypeOf$s = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$s(o); }

function _assertThisInitialized$s(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits$s(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$s(subClass, superClass); }

function _setPrototypeOf$s(o, p) { _setPrototypeOf$s = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$s(o, p); }
var ORIENT_MAP = {
  xAxis: ['bottom', 'top'],
  yAxis: ['left', 'right']
};
var originCoordinate = {
  x: 0,
  y: 0
};

var generateCategoricalChart = function generateCategoricalChart(_ref) {
  var chartName = _ref.chartName,
      GraphicalChild = _ref.GraphicalChild,
      _ref$eventType = _ref.eventType,
      eventType = _ref$eventType === void 0 ? 'axis' : _ref$eventType,
      axisComponents = _ref.axisComponents,
      legendContent = _ref.legendContent,
      formatAxisMap = _ref.formatAxisMap,
      defaultProps = _ref.defaultProps,
      propTypes$1 = _ref.propTypes;

  var CategoricalChartWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits$s(CategoricalChartWrapper, _Component);

    /**
     * Returns default, reset state for the categorical chart.
     * @param {Object} props Props object to use when creating the default state
     * @return {Object} Whole new state
     */
    function CategoricalChartWrapper(_props) {
      var _this;

      _classCallCheck$t(this, CategoricalChartWrapper);

      _this = _possibleConstructorReturn$s(this, _getPrototypeOf$s(CategoricalChartWrapper).call(this, _props));

      _this.handleLegendBBoxUpdate = function (box) {
        if (box && _this.legendInstance) {
          var _this$state = _this.state,
              dataStartIndex = _this$state.dataStartIndex,
              dataEndIndex = _this$state.dataEndIndex,
              updateId = _this$state.updateId;

          _this.setState(_this.updateStateOfAxisMapsOffsetAndStackGroups({
            props: _this.props,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId
          }));
        }
      };

      _this.handleReceiveSyncEvent = function (cId, chartId, data) {
        var _this$props = _this.props,
            syncId = _this$props.syncId,
            layout = _this$props.layout;
        var updateId = _this.state.updateId;

        if (syncId === cId && chartId !== _this.uniqueChartId) {
          var dataStartIndex = data.dataStartIndex,
              dataEndIndex = data.dataEndIndex;

          if (!isNil_1(data.dataStartIndex) || !isNil_1(data.dataEndIndex)) {
            _this.setState(_objectSpread$w({
              dataStartIndex: dataStartIndex,
              dataEndIndex: dataEndIndex
            }, _this.updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: dataStartIndex,
              dataEndIndex: dataEndIndex,
              updateId: updateId
            })));
          } else if (!isNil_1(data.activeTooltipIndex)) {
            var chartX = data.chartX,
                chartY = data.chartY,
                activeTooltipIndex = data.activeTooltipIndex;
            var _this$state2 = _this.state,
                offset = _this$state2.offset,
                tooltipTicks = _this$state2.tooltipTicks;

            if (!offset) {
              return;
            }

            var viewBox = _objectSpread$w({}, offset, {
              x: offset.left,
              y: offset.top
            }); // When a categotical chart is combined with another chart, the value of chartX
            // and chartY may beyond the boundaries.


            var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
            var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
            var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;

            var activePayload = _this.getTooltipContent(activeTooltipIndex);

            var activeCoordinate = tooltipTicks[activeTooltipIndex] ? {
              x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
              y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate
            } : originCoordinate;

            _this.setState(_objectSpread$w({}, data, {
              activeLabel: activeLabel,
              activeCoordinate: activeCoordinate,
              activePayload: activePayload
            }));
          } else {
            _this.setState(data);
          }
        }
      };

      _this.handleBrushChange = function (_ref2) {
        var startIndex = _ref2.startIndex,
            endIndex = _ref2.endIndex;

        // Only trigger changes if the extents of the brush have actually changed
        if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
          var updateId = _this.state.updateId;

          _this.setState(function () {
            return _objectSpread$w({
              dataStartIndex: startIndex,
              dataEndIndex: endIndex
            }, _this.updateStateOfAxisMapsOffsetAndStackGroups({
              props: _this.props,
              dataStartIndex: startIndex,
              dataEndIndex: endIndex,
              updateId: updateId
            }));
          });

          _this.triggerSyncEvent({
            dataStartIndex: startIndex,
            dataEndIndex: endIndex
          });
        }
      };

      _this.handleMouseEnter = function (e) {
        var onMouseEnter = _this.props.onMouseEnter;

        var mouse = _this.getMouseInfo(e);

        if (mouse) {
          var nextState = _objectSpread$w({}, mouse, {
            isTooltipActive: true
          });

          _this.setState(nextState);

          _this.triggerSyncEvent(nextState);

          if (isFunction_1(onMouseEnter)) {
            onMouseEnter(nextState, e);
          }
        }
      };

      _this.triggeredAfterMouseMove = function (e) {
        var onMouseMove = _this.props.onMouseMove;

        var mouse = _this.getMouseInfo(e);

        var nextState = mouse ? _objectSpread$w({}, mouse, {
          isTooltipActive: true
        }) : {
          isTooltipActive: false
        };

        _this.setState(nextState);

        _this.triggerSyncEvent(nextState);

        if (isFunction_1(onMouseMove)) {
          onMouseMove(nextState, e);
        }
      };

      _this.handleItemMouseEnter = function (el) {
        _this.setState(function () {
          return {
            isTooltipActive: true,
            activeItem: el,
            activePayload: el.tooltipPayload,
            activeCoordinate: el.tooltipPosition || {
              x: el.cx,
              y: el.cy
            }
          };
        });
      };

      _this.handleItemMouseLeave = function () {
        _this.setState(function () {
          return {
            isTooltipActive: false
          };
        });
      };

      _this.handleMouseMove = function (e) {
        if (e && isFunction_1(e.persist)) {
          e.persist();
        }

        _this.triggeredAfterMouseMove(e);
      };

      _this.handleMouseLeave = function (e) {
        var onMouseLeave = _this.props.onMouseLeave;
        var nextState = {
          isTooltipActive: false
        };

        _this.setState(nextState);

        _this.triggerSyncEvent(nextState);

        if (isFunction_1(onMouseLeave)) {
          onMouseLeave(nextState, e);
        }
      };

      _this.handleOuterEvent = function (e) {
        var eventName = getReactEventByType(e);

        if (eventName && isFunction_1(_this.props[eventName])) {
          var mouse = _this.getMouseInfo(e);

          var handler = _this.props[eventName];
          handler(mouse, e);
        }
      };

      _this.handleClick = function (e) {
        var onClick = _this.props.onClick;

        if (isFunction_1(onClick)) {
          var mouse = _this.getMouseInfo(e);

          onClick(mouse, e);
        }
      };

      _this.handleMouseDown = function (e) {
        var onMouseDown = _this.props.onMouseDown;

        if (isFunction_1(onMouseDown)) {
          var mouse = _this.getMouseInfo(e);

          onMouseDown(mouse, e);
        }
      };

      _this.handleMouseUp = function (e) {
        var onMouseUp = _this.props.onMouseUp;

        if (isFunction_1(onMouseUp)) {
          var mouse = _this.getMouseInfo(e);

          onMouseUp(mouse, e);
        }
      };

      _this.handleTouchMove = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseMove(e.changedTouches[0]);
        }
      };

      _this.handleTouchStart = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseDown(e.changedTouches[0]);
        }
      };

      _this.handleTouchEnd = function (e) {
        if (e.changedTouches != null && e.changedTouches.length > 0) {
          _this.handleMouseUp(e.changedTouches[0]);
        }
      };

      _this.verticalCoordinatesGenerator = function (_ref3) {
        var xAxis = _ref3.xAxis,
            width = _ref3.width,
            height = _ref3.height,
            offset = _ref3.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread$w({}, CartesianAxis.defaultProps, {}, xAxis, {
          ticks: getTicksOfAxis(xAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          }
        })), offset.left, offset.left + offset.width);
      };

      _this.horizontalCoordinatesGenerator = function (_ref4) {
        var yAxis = _ref4.yAxis,
            width = _ref4.width,
            height = _ref4.height,
            offset = _ref4.offset;
        return getCoordinatesOfGrid(CartesianAxis.getTicks(_objectSpread$w({}, CartesianAxis.defaultProps, {}, yAxis, {
          ticks: getTicksOfAxis(yAxis, true),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          }
        })), offset.top, offset.top + offset.height);
      };

      _this.axesTicksGenerator = function (axis) {
        return getTicksOfAxis(axis, true);
      };

      _this.tooltipTicksGenerator = function (axisMap) {
        var axis = getAnyElementOfObject(axisMap);
        var tooltipTicks = getTicksOfAxis(axis, false, true);
        return {
          tooltipTicks: tooltipTicks,
          orderedTooltipTicks: sortBy_1(tooltipTicks, function (o) {
            return o.coordinate;
          }),
          tooltipAxis: axis,
          tooltipAxisBandSize: getBandSizeOfAxis(axis)
        };
      };

      _this.renderCursor = function (element) {
        var _this$state3 = _this.state,
            isTooltipActive = _this$state3.isTooltipActive,
            activeCoordinate = _this$state3.activeCoordinate,
            activePayload = _this$state3.activePayload,
            offset = _this$state3.offset;

        if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate) {
          return null;
        }

        var layout = _this.props.layout;
        var restProps;
        var cursorComp = Curve;

        if (chartName === 'ScatterChart') {
          restProps = activeCoordinate;
          cursorComp = Cross;
        } else if (chartName === 'BarChart') {
          restProps = _this.getCursorRectangle();
          cursorComp = Rectangle;
        } else if (layout === 'radial') {
          var _this$getCursorPoints = _this.getCursorPoints(),
              cx = _this$getCursorPoints.cx,
              cy = _this$getCursorPoints.cy,
              radius = _this$getCursorPoints.radius,
              startAngle = _this$getCursorPoints.startAngle,
              endAngle = _this$getCursorPoints.endAngle;

          restProps = {
            cx: cx,
            cy: cy,
            startAngle: startAngle,
            endAngle: endAngle,
            innerRadius: radius,
            outerRadius: radius
          };
          cursorComp = Sector;
        } else {
          restProps = {
            points: _this.getCursorPoints()
          };
          cursorComp = Curve;
        }

        var key = element.key || '_recharts-cursor';

        var cursorProps = _objectSpread$w({
          stroke: '#ccc',
          pointerEvents: 'none'
        }, offset, {}, restProps, {}, getPresentationAttributes(element.props.cursor), {
          payload: activePayload,
          key: key,
          className: 'recharts-tooltip-cursor'
        });

        return react.isValidElement(element.props.cursor) ? react.cloneElement(element.props.cursor, cursorProps) : react.createElement(cursorComp, cursorProps);
      };

      _this.renderPolarAxis = function (element, displayName, index) {
        var axisType = element.type.axisType;

        var axisMap = _this.state["".concat(axisType, "Map")];

        var axisOption = axisMap[element.props["".concat(axisType, "Id")]];
        return react.cloneElement(element, _objectSpread$w({}, axisOption, {
          className: axisType,
          key: element.key || "".concat(displayName, "-").concat(index),
          ticks: getTicksOfAxis(axisOption, true)
        }));
      };

      _this.renderXAxis = function (element, displayName, index) {
        var xAxisMap = _this.state.xAxisMap;
        var axisObj = xAxisMap[element.props.xAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };

      _this.renderYAxis = function (element, displayName, index) {
        var yAxisMap = _this.state.yAxisMap;
        var axisObj = yAxisMap[element.props.yAxisId];
        return _this.renderAxis(axisObj, element, displayName, index);
      };

      _this.renderGrid = function (element) {
        var _this$state4 = _this.state,
            xAxisMap = _this$state4.xAxisMap,
            yAxisMap = _this$state4.yAxisMap,
            offset = _this$state4.offset;
        var _this$props2 = _this.props,
            width = _this$props2.width,
            height = _this$props2.height;
        var xAxis = getAnyElementOfObject(xAxisMap);

        var yAxisWithFiniteDomain = find_1(yAxisMap, function (axis) {
          return every_1(axis.domain, Number.isFinite);
        });

        var yAxis = yAxisWithFiniteDomain || getAnyElementOfObject(yAxisMap);
        var props = element.props || {};
        return react.cloneElement(element, {
          key: element.key || 'grid',
          x: isNumber$1(props.x) ? props.x : offset.left,
          y: isNumber$1(props.y) ? props.y : offset.top,
          width: isNumber$1(props.width) ? props.width : offset.width,
          height: isNumber$1(props.height) ? props.height : offset.height,
          xAxis: xAxis,
          yAxis: yAxis,
          offset: offset,
          chartWidth: width,
          chartHeight: height,
          verticalCoordinatesGenerator: props.verticalCoordinatesGenerator || _this.verticalCoordinatesGenerator,
          horizontalCoordinatesGenerator: props.horizontalCoordinatesGenerator || _this.horizontalCoordinatesGenerator
        });
      };

      _this.renderPolarGrid = function (element) {
        var _this$state5 = _this.state,
            radiusAxisMap = _this$state5.radiusAxisMap,
            angleAxisMap = _this$state5.angleAxisMap;
        var radiusAxis = getAnyElementOfObject(radiusAxisMap);
        var angleAxis = getAnyElementOfObject(angleAxisMap);
        var cx = angleAxis.cx,
            cy = angleAxis.cy,
            innerRadius = angleAxis.innerRadius,
            outerRadius = angleAxis.outerRadius;
        return react.cloneElement(element, {
          polarAngles: getTicksOfAxis(angleAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          polarRadius: getTicksOfAxis(radiusAxis, true).map(function (entry) {
            return entry.coordinate;
          }),
          cx: cx,
          cy: cy,
          innerRadius: innerRadius,
          outerRadius: outerRadius,
          key: element.key || 'polar-grid'
        });
      };

      _this.renderBrush = function (element) {
        var _this$props3 = _this.props,
            margin = _this$props3.margin,
            data = _this$props3.data;
        var _this$state6 = _this.state,
            offset = _this$state6.offset,
            dataStartIndex = _this$state6.dataStartIndex,
            dataEndIndex = _this$state6.dataEndIndex,
            updateId = _this$state6.updateId; // TODO: update brush when children update

        return react.cloneElement(element, {
          key: element.key || '_recharts-brush',
          onChange: combineEventHandlers(_this.handleBrushChange, null, element.props.onChange),
          data: data,
          x: isNumber$1(element.props.x) ? element.props.x : offset.left,
          y: isNumber$1(element.props.y) ? element.props.y : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
          width: isNumber$1(element.props.width) ? element.props.width : offset.width,
          startIndex: dataStartIndex,
          endIndex: dataEndIndex,
          updateId: "brush-".concat(updateId)
        });
      };

      _this.renderReferenceElement = function (element, displayName, index) {
        if (!element) {
          return null;
        }

        var _assertThisInitialize = _assertThisInitialized$s(_this),
            clipPathId = _assertThisInitialize.clipPathId;

        var _this$state7 = _this.state,
            xAxisMap = _this$state7.xAxisMap,
            yAxisMap = _this$state7.yAxisMap,
            offset = _this$state7.offset;
        var _element$props = element.props,
            xAxisId = _element$props.xAxisId,
            yAxisId = _element$props.yAxisId;
        return react.cloneElement(element, {
          key: element.key || "".concat(displayName, "-").concat(index),
          xAxis: xAxisMap[xAxisId],
          yAxis: yAxisMap[yAxisId],
          viewBox: {
            x: offset.left,
            y: offset.top,
            width: offset.width,
            height: offset.height
          },
          clipPathId: clipPathId
        });
      };

      _this.renderGraphicChild = function (element, displayName, index) {
        var item = _this.filterFormatItem(element, displayName, index);

        if (!item) {
          return null;
        }

        var graphicalItem = react.cloneElement(element, item.props);
        var _this$state8 = _this.state,
            isTooltipActive = _this$state8.isTooltipActive,
            tooltipAxis = _this$state8.tooltipAxis,
            activeTooltipIndex = _this$state8.activeTooltipIndex,
            activeLabel = _this$state8.activeLabel;
        var children = _this.props.children;
        var tooltipItem = findChildByType(children, Tooltip);
        var _item$props = item.props,
            points = _item$props.points,
            isRange = _item$props.isRange,
            baseLine = _item$props.baseLine;
        var _item$item$props = item.item.props,
            activeDot = _item$item$props.activeDot,
            hide = _item$item$props.hide;
        var hasActive = !hide && isTooltipActive && tooltipItem && activeDot && activeTooltipIndex >= 0;

        function findWithPayload(entry) {
          return tooltipAxis.dataKey(entry.payload);
        }

        if (hasActive) {
          var activePoint, basePoint;

          if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            var specifiedKey = typeof tooltipAxis.dataKey === 'function' ? findWithPayload : 'payload.'.concat(tooltipAxis.dataKey);
            activePoint = findEntryInArray(points, specifiedKey, activeLabel);
            basePoint = isRange && baseLine && findEntryInArray(baseLine, specifiedKey, activeLabel);
          } else {
            activePoint = points[activeTooltipIndex];
            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
          }

          if (!isNil_1(activePoint)) {
            return [graphicalItem].concat(_toConsumableArray$a(_this.renderActivePoints({
              item: item,
              activePoint: activePoint,
              basePoint: basePoint,
              childIndex: activeTooltipIndex,
              isRange: isRange
            })));
          }
        }

        if (isRange) {
          return [graphicalItem, null, null];
        }

        return [graphicalItem, null];
      };

      _this.renderCustomized = function (element) {
        return react.cloneElement(element, _objectSpread$w({}, _this.props, {}, _this.state));
      };

      var defaultState = _this.constructor.createDefaultState(_props);

      var _updateId = 0;
      _this.state = _objectSpread$w({}, defaultState, {
        updateId: 0
      }, _this.updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread$w({
        props: _props
      }, defaultState, {
        updateId: _updateId
      })));
      _this.uniqueChartId = isNil_1(_props.id) ? uniqueId('recharts') : _props.id;
      _this.clipPathId = "".concat(_this.uniqueChartId, "-clip");

      if (_props.throttleDelay) {
        _this.triggeredAfterMouseMove = throttle_1(_this.triggeredAfterMouseMove, _props.throttleDelay);
      }

      return _this;
    }
    /* eslint-disable  react/no-did-mount-set-state */


    _createClass$t(CategoricalChartWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!isNil_1(this.props.syncId)) {
          this.addListener();
        }
      } // eslint-disable-next-line camelcase

    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var _this$props4 = this.props,
            data = _this$props4.data,
            children = _this$props4.children,
            width = _this$props4.width,
            height = _this$props4.height,
            layout = _this$props4.layout,
            stackOffset = _this$props4.stackOffset,
            margin = _this$props4.margin;
        var updateId = this.state.updateId;

        if (nextProps.data !== data || nextProps.width !== width || nextProps.height !== height || nextProps.layout !== layout || nextProps.stackOffset !== stackOffset || !shallowEqual(nextProps.margin, margin)) {
          var defaultState = this.constructor.createDefaultState(nextProps);
          this.setState(_objectSpread$w({}, defaultState, {
            updateId: updateId + 1
          }, this.updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread$w({
            props: nextProps
          }, defaultState, {
            updateId: updateId + 1
          }))));
        } else if (!isChildrenEqual(nextProps.children, children)) {
          // update configuration in chilren
          var hasGlobalData = !isNil_1(nextProps.data);
          var newUpdateId = hasGlobalData ? updateId : updateId + 1;
          this.setState(function (prevState) {
            return _objectSpread$w({
              updateId: newUpdateId
            }, _this2.updateStateOfAxisMapsOffsetAndStackGroups(_objectSpread$w({
              props: nextProps
            }, prevState, {
              updateId: newUpdateId
            })));
          });
        } // add syncId


        if (isNil_1(this.props.syncId) && !isNil_1(nextProps.syncId)) {
          this.addListener();
        } // remove syncId


        if (!isNil_1(this.props.syncId) && isNil_1(nextProps.syncId)) {
          this.removeListener();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (!isNil_1(this.props.syncId)) {
          this.removeListener();
        }

        if (typeof this.triggeredAfterMouseMove.cancel === 'function') {
          this.triggeredAfterMouseMove.cancel();
        }
      }
      /**
      * Get the configuration of all x-axis or y-axis
      * @param  {Object} props          Latest props
      * @param  {String} axisType       The type of axis
      * @param  {Array}  graphicalItems The instances of item
      * @param  {Object} stackGroups    The items grouped by axisId and stackId
      * @param {Number} dataStartIndex  The start index of the data series when a brush is applied
      * @param {Number} dataEndIndex    The end index of the data series when a brush is applied
      * @return {Object}          Configuration
      */

    }, {
      key: "getAxisMap",
      value: function getAxisMap(props, _ref5) {
        var _ref5$axisType = _ref5.axisType,
            axisType = _ref5$axisType === void 0 ? 'xAxis' : _ref5$axisType,
            AxisComp = _ref5.AxisComp,
            graphicalItems = _ref5.graphicalItems,
            stackGroups = _ref5.stackGroups,
            dataStartIndex = _ref5.dataStartIndex,
            dataEndIndex = _ref5.dataEndIndex;
        var children = props.children;
        var axisIdKey = "".concat(axisType, "Id"); // Get all the instance of Axis

        var axes = findAllByType(children, AxisComp);
        var axisMap = {};

        if (axes && axes.length) {
          axisMap = this.getAxisMapByAxes(props, {
            axes: axes,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          });
        } else if (graphicalItems && graphicalItems.length) {
          axisMap = this.getAxisMapByItems(props, {
            Axis: AxisComp,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          });
        }

        return axisMap;
      }
      /**
       * Get the configuration of axis by the options of axis instance
       * @param  {Object} props         Latest props
       * @param {Array}  axes           The instance of axes
       * @param  {Array} graphicalItems The instances of item
       * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
       * @param  {String} axisIdKey     The unique id of an axis
       * @param  {Object} stackGroups   The items grouped by axisId and stackId
       * @param {Number} dataStartIndex The start index of the data series when a brush is applied
       * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
       * @return {Object}      Configuration
       */

    }, {
      key: "getAxisMapByAxes",
      value: function getAxisMapByAxes(props, _ref6) {
        var _this3 = this;

        var axes = _ref6.axes,
            graphicalItems = _ref6.graphicalItems,
            axisType = _ref6.axisType,
            axisIdKey = _ref6.axisIdKey,
            stackGroups = _ref6.stackGroups,
            dataStartIndex = _ref6.dataStartIndex,
            dataEndIndex = _ref6.dataEndIndex;
        var layout = props.layout,
            children = props.children,
            stackOffset = props.stackOffset;
        var isCategorial = isCategorialAxis(layout, axisType); // Eliminate duplicated axes

        var axisMap = axes.reduce(function (result, child) {
          var _child$props = child.props,
              type = _child$props.type,
              dataKey = _child$props.dataKey,
              allowDataOverflow = _child$props.allowDataOverflow,
              allowDuplicatedCategory = _child$props.allowDuplicatedCategory,
              scale = _child$props.scale,
              ticks = _child$props.ticks;
          var axisId = child.props[axisIdKey];

          var displayedData = _this3.constructor.getDisplayedData(props, {
            graphicalItems: graphicalItems.filter(function (item) {
              return item.props[axisIdKey] === axisId;
            }),
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          });

          var len = displayedData.length;

          if (!result[axisId]) {
            var domain, duplicateDomain, categoricalDomain;

            if (dataKey) {
              domain = getDomainOfDataByKey(displayedData, dataKey, type);

              if (type === 'category' && isCategorial) {
                var duplicate = hasDuplicate(domain);

                if (allowDuplicatedCategory && duplicate) {
                  duplicateDomain = domain; // When category axis has duplicated text, serial numbers are used to generate scale

                  domain = range_1(0, len);
                } else if (!allowDuplicatedCategory) {
                  // remove duplicated category
                  domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
                    return finalDomain.indexOf(entry) >= 0 ? finalDomain : [].concat(_toConsumableArray$a(finalDomain), [entry]);
                  }, []);
                }
              } else if (type === 'category') {
                if (!allowDuplicatedCategory) {
                  domain = parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
                    return finalDomain.indexOf(entry) >= 0 || entry === '' || isNil_1(entry) ? finalDomain : [].concat(_toConsumableArray$a(finalDomain), [entry]);
                  }, []);
                } else {
                  // eliminate undefined or null or empty string
                  domain = domain.filter(function (entry) {
                    return entry !== '' && !isNil_1(entry);
                  });
                }
              } else if (type === 'number') {
                var errorBarsDomain = parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function (item) {
                  return item.props[axisIdKey] === axisId && !item.props.hide;
                }), dataKey, axisType);

                if (errorBarsDomain) {
                  domain = errorBarsDomain;
                }
              }

              if (isCategorial && (type === 'number' || scale !== 'auto')) {
                categoricalDomain = getDomainOfDataByKey(displayedData, dataKey, 'category');
              }
            } else if (isCategorial) {
              domain = range_1(0, len);
            } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
              // when stackOffset is 'expand', the domain may be calculated as [0, 1.000000000002]
              domain = stackOffset === 'expand' ? [0, 1] : getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
            } else {
              domain = getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
                return item.props[axisIdKey] === axisId && !item.props.hide;
              }), type, true);
            }

            if (type === 'number') {
              // To detect wether there is any reference lines whose props alwaysShow is true
              domain = detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);

              if (child.props.domain) {
                domain = parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
              }
            }

            return _objectSpread$w({}, result, _defineProperty$z({}, axisId, _objectSpread$w({}, child.props, {
              axisType: axisType,
              domain: domain,
              categoricalDomain: categoricalDomain,
              duplicateDomain: duplicateDomain,
              originalDomain: child.props.domain,
              isCategorial: isCategorial,
              layout: layout
            })));
          }

          return result;
        }, {});
        return axisMap;
      }
      /**
       * Get the configuration of axis by the options of item,
       * this kind of axis does not display in chart
       * @param  {Object} props         Latest props
       * @param  {Array} graphicalItems The instances of item
       * @param  {ReactElement} Axis    Axis Component
       * @param  {String} axisType      The type of axis, xAxis - x-axis, yAxis - y-axis
       * @param  {String} axisIdKey     The unique id of an axis
       * @param  {Object} stackGroups   The items grouped by axisId and stackId
       * @param {Number} dataStartIndex The start index of the data series when a brush is applied
       * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
       * @return {Object}               Configuration
       */

    }, {
      key: "getAxisMapByItems",
      value: function getAxisMapByItems(props, _ref7) {
        var graphicalItems = _ref7.graphicalItems,
            Axis = _ref7.Axis,
            axisType = _ref7.axisType,
            axisIdKey = _ref7.axisIdKey,
            stackGroups = _ref7.stackGroups,
            dataStartIndex = _ref7.dataStartIndex,
            dataEndIndex = _ref7.dataEndIndex;
        var layout = props.layout,
            children = props.children;
        var displayedData = this.constructor.getDisplayedData(props, {
          graphicalItems: graphicalItems,
          dataStartIndex: dataStartIndex,
          dataEndIndex: dataEndIndex
        });
        var len = displayedData.length;
        var isCategorial = isCategorialAxis(layout, axisType);
        var index = -1; // The default type of x-axis is category axis,
        // The default contents of x-axis is the serial numbers of data
        // The default type of y-axis is number axis
        // The default contents of y-axis is the domain of data

        var axisMap = graphicalItems.reduce(function (result, child) {
          var axisId = child.props[axisIdKey];

          if (!result[axisId]) {
            index++;
            var domain;

            if (isCategorial) {
              domain = range_1(0, len);
            } else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
              domain = getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
              domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
            } else {
              domain = parseSpecifiedDomain(Axis.defaultProps.domain, getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) {
                return item.props[axisIdKey] === axisId && !item.props.hide;
              }), 'number'), Axis.defaultProps.allowDataOverflow);
              domain = detectReferenceElementsDomain(children, domain, axisId, axisType);
            }

            return _objectSpread$w({}, result, _defineProperty$z({}, axisId, _objectSpread$w({
              axisType: axisType
            }, Axis.defaultProps, {
              hide: true,
              orientation: ORIENT_MAP[axisType] && ORIENT_MAP[axisType][index % 2],
              domain: domain,
              originalDomain: Axis.defaultProps.domain,
              isCategorial: isCategorial,
              layout: layout // specify scale when no Axis
              // scale: isCategorial ? 'band' : 'linear',

            })));
          }

          return result;
        }, {});
        return axisMap;
      }
    }, {
      key: "getActiveCoordinate",
      value: function getActiveCoordinate(tooltipTicks, activeIndex, rangeObj) {
        var layout = this.props.layout;
        var entry = tooltipTicks.find(function (tick) {
          return tick && tick.index === activeIndex;
        });

        if (entry) {
          if (layout === 'horizontal') {
            return {
              x: entry.coordinate,
              y: rangeObj.y
            };
          }

          if (layout === 'vertical') {
            return {
              x: rangeObj.x,
              y: entry.coordinate
            };
          }

          if (layout === 'centric') {
            var _angle = entry.coordinate;
            var _radius = rangeObj.radius;
            return _objectSpread$w({}, rangeObj, {}, polarToCartesian(rangeObj.cx, rangeObj.cy, _radius, _angle), {
              angle: _angle,
              radius: _radius
            });
          }

          var radius = entry.coordinate;
          var angle = rangeObj.angle;
          return _objectSpread$w({}, rangeObj, {}, polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle), {
            angle: angle,
            radius: radius
          });
        }

        return originCoordinate;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {Object} event    The event object
       * @return {Object}          Mouse data
       */

    }, {
      key: "getMouseInfo",
      value: function getMouseInfo(event) {
        if (!this.container) {
          return null;
        }

        var containerOffset = getOffset(this.container);
        var e = calculateChartCoordinate(event, containerOffset);
        var rangeObj = this.inRange(e.chartX, e.chartY);

        if (!rangeObj) {
          return null;
        }

        var _this$state9 = this.state,
            xAxisMap = _this$state9.xAxisMap,
            yAxisMap = _this$state9.yAxisMap;

        if (eventType !== 'axis' && xAxisMap && yAxisMap) {
          var xScale = getAnyElementOfObject(xAxisMap).scale;
          var yScale = getAnyElementOfObject(yAxisMap).scale;
          var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
          var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
          return _objectSpread$w({}, e, {
            xValue: xValue,
            yValue: yValue
          });
        }

        var _this$state10 = this.state,
            ticks = _this$state10.orderedTooltipTicks,
            axis = _this$state10.tooltipAxis,
            tooltipTicks = _this$state10.tooltipTicks;
        var pos = this.calculateTooltipPos(rangeObj);
        var activeIndex = calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);

        if (activeIndex >= 0 && tooltipTicks) {
          var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
          var activePayload = this.getTooltipContent(activeIndex, activeLabel);
          var activeCoordinate = this.getActiveCoordinate(ticks, activeIndex, rangeObj);
          return _objectSpread$w({}, e, {
            activeTooltipIndex: activeIndex,
            activeLabel: activeLabel,
            activePayload: activePayload,
            activeCoordinate: activeCoordinate
          });
        }

        return null;
      }
      /**
       * Get the content to be displayed in the tooltip
       * @param  {Number} activeIndex    Active index of data
       * @param  {String} activeLabel    Active label of data
       * @return {Array}                 The content of tooltip
       */

    }, {
      key: "getTooltipContent",
      value: function getTooltipContent(activeIndex, activeLabel) {
        var _this$state11 = this.state,
            graphicalItems = _this$state11.graphicalItems,
            tooltipAxis = _this$state11.tooltipAxis;
        var displayedData = this.constructor.getDisplayedData(this.props, this.state);

        if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
          return null;
        } // get data by activeIndex when the axis don't allow duplicated category


        return graphicalItems.reduce(function (result, child) {
          var hide = child.props.hide;

          if (hide) {
            return result;
          }

          var _child$props2 = child.props,
              dataKey = _child$props2.dataKey,
              name = _child$props2.name,
              unit = _child$props2.unit,
              formatter = _child$props2.formatter,
              data = _child$props2.data,
              tooltipType = _child$props2.tooltipType;
          var payload;

          if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            // graphic child has data props
            payload = findEntryInArray(data || displayedData, tooltipAxis.dataKey, activeLabel);
          } else {
            payload = data && data[activeIndex] || displayedData[activeIndex];
          }

          if (!payload) {
            return result;
          }

          return [].concat(_toConsumableArray$a(result), [_objectSpread$w({}, getPresentationAttributes(child), {
            dataKey: dataKey,
            unit: unit,
            formatter: formatter,
            name: name || dataKey,
            color: getMainColorOfGraphicItem(child),
            value: getValueByDataKey(payload, dataKey),
            type: tooltipType,
            payload: payload
          })]);
        }, []);
      }
    }, {
      key: "getFormatItems",
      value: function getFormatItems(props, currentState) {
        var _this4 = this;

        var graphicalItems = currentState.graphicalItems,
            stackGroups = currentState.stackGroups,
            offset = currentState.offset,
            updateId = currentState.updateId,
            dataStartIndex = currentState.dataStartIndex,
            dataEndIndex = currentState.dataEndIndex;
        var barSize = props.barSize,
            layout = props.layout,
            barGap = props.barGap,
            barCategoryGap = props.barCategoryGap,
            globalMaxBarSize = props.maxBarSize;

        var _this$constructor$get = this.constructor.getAxisNameByLayout(layout),
            numericAxisName = _this$constructor$get.numericAxisName,
            cateAxisName = _this$constructor$get.cateAxisName;

        var hasBar = this.constructor.hasBar(graphicalItems);
        var sizeList = hasBar && getBarSizeList({
          barSize: barSize,
          stackGroups: stackGroups
        });
        var formatedItems = [];
        graphicalItems.forEach(function (item, index) {
          var displayedData = _this4.constructor.getDisplayedData(props, {
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }, item);

          var _item$props2 = item.props,
              dataKey = _item$props2.dataKey,
              childMaxBarSize = _item$props2.maxBarSize;
          var numericAxisId = item.props["".concat(numericAxisName, "Id")];
          var cateAxisId = item.props["".concat(cateAxisName, "Id")];
          var axisObj = axisComponents.reduce(function (result, entry) {
            var _objectSpread4;

            var axisMap = currentState["".concat(entry.axisType, "Map")];
            var id = item.props["".concat(entry.axisType, "Id")];
            var axis = axisMap && axisMap[id];
            return _objectSpread$w({}, result, (_objectSpread4 = {}, _defineProperty$z(_objectSpread4, entry.axisType, axis), _defineProperty$z(_objectSpread4, "".concat(entry.axisType, "Ticks"), getTicksOfAxis(axis)), _objectSpread4));
          }, {});
          var cateAxis = axisObj[cateAxisName];
          var cateTicks = axisObj["".concat(cateAxisName, "Ticks")];
          var stackedData = stackGroups && stackGroups[numericAxisId] && stackGroups[numericAxisId].hasStack && getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
          var bandSize = getBandSizeOfAxis(cateAxis, cateTicks);
          var maxBarSize = isNil_1(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
          var barPosition = hasBar && getBarPosition({
            barGap: barGap,
            barCategoryGap: barCategoryGap,
            bandSize: bandSize,
            sizeList: sizeList[cateAxisId],
            maxBarSize: maxBarSize
          });
          var componsedFn = item && item.type && item.type.getComposedData;

          if (componsedFn) {
            var _objectSpread5;

            formatedItems.push({
              props: _objectSpread$w({}, componsedFn(_objectSpread$w({}, axisObj, {
                displayedData: displayedData,
                props: props,
                dataKey: dataKey,
                item: item,
                bandSize: bandSize,
                barPosition: barPosition,
                offset: offset,
                stackedData: stackedData,
                layout: layout,
                dataStartIndex: dataStartIndex,
                dataEndIndex: dataEndIndex,
                onItemMouseLeave: combineEventHandlers(_this4.handleItemMouseLeave, null, item.props.onMouseLeave),
                onItemMouseEnter: combineEventHandlers(_this4.handleItemMouseEnter, null, item.props.onMouseEnter)
              })), (_objectSpread5 = {
                key: item.key || "item-".concat(index)
              }, _defineProperty$z(_objectSpread5, numericAxisName, axisObj[numericAxisName]), _defineProperty$z(_objectSpread5, cateAxisName, axisObj[cateAxisName]), _defineProperty$z(_objectSpread5, "animationId", updateId), _objectSpread5)),
              childIndex: parseChildIndex(item, props.children),
              item: item
            });
          }
        });
        return formatedItems;
      }
    }, {
      key: "getCursorRectangle",
      value: function getCursorRectangle() {
        var layout = this.props.layout;
        var _this$state12 = this.state,
            activeCoordinate = _this$state12.activeCoordinate,
            offset = _this$state12.offset,
            tooltipAxisBandSize = _this$state12.tooltipAxisBandSize;
        var halfSize = tooltipAxisBandSize / 2;
        return {
          stroke: 'none',
          fill: '#ccc',
          x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
          y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
          width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
          height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize
        };
      }
    }, {
      key: "getCursorPoints",
      value: function getCursorPoints() {
        var layout = this.props.layout;
        var _this$state13 = this.state,
            activeCoordinate = _this$state13.activeCoordinate,
            offset = _this$state13.offset;
        var x1, y1, x2, y2;

        if (layout === 'horizontal') {
          x1 = activeCoordinate.x;
          x2 = x1;
          y1 = offset.top;
          y2 = offset.top + offset.height;
        } else if (layout === 'vertical') {
          y1 = activeCoordinate.y;
          y2 = y1;
          x1 = offset.left;
          x2 = offset.left + offset.width;
        } else if (!isNil_1(activeCoordinate.cx) || !isNil_1(activeCoordinate.cy)) {
          if (layout === 'centric') {
            var cx = activeCoordinate.cx,
                cy = activeCoordinate.cy,
                innerRadius = activeCoordinate.innerRadius,
                outerRadius = activeCoordinate.outerRadius,
                angle = activeCoordinate.angle;
            var innerPoint = polarToCartesian(cx, cy, innerRadius, angle);
            var outerPoint = polarToCartesian(cx, cy, outerRadius, angle);
            x1 = innerPoint.x;
            y1 = innerPoint.y;
            x2 = outerPoint.x;
            y2 = outerPoint.y;
          } else {
            var _cx = activeCoordinate.cx,
                _cy = activeCoordinate.cy,
                radius = activeCoordinate.radius,
                startAngle = activeCoordinate.startAngle,
                endAngle = activeCoordinate.endAngle;
            var startPoint = polarToCartesian(_cx, _cy, radius, startAngle);
            var endPoint = polarToCartesian(_cx, _cy, radius, endAngle);
            return {
              points: [startPoint, endPoint],
              cx: _cx,
              cy: _cy,
              radius: radius,
              startAngle: startAngle,
              endAngle: endAngle
            };
          }
        }

        return [{
          x: x1,
          y: y1
        }, {
          x: x2,
          y: y2
        }];
      }
    }, {
      key: "calculateTooltipPos",
      value: function calculateTooltipPos(rangeObj) {
        var layout = this.props.layout;

        if (layout === 'horizontal') {
          return rangeObj.x;
        }

        if (layout === 'vertical') {
          return rangeObj.y;
        }

        if (layout === 'centric') {
          return rangeObj.angle;
        }

        return rangeObj.radius;
      }
    }, {
      key: "inRange",
      value: function inRange(x, y) {
        var layout = this.props.layout;

        if (layout === 'horizontal' || layout === 'vertical') {
          var offset = this.state.offset;
          var isInRange = x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;
          return isInRange ? {
            x: x,
            y: y
          } : null;
        }

        var _this$state14 = this.state,
            angleAxisMap = _this$state14.angleAxisMap,
            radiusAxisMap = _this$state14.radiusAxisMap;

        if (angleAxisMap && radiusAxisMap) {
          var angleAxis = getAnyElementOfObject(angleAxisMap);
          return inRangeOfSector({
            x: x,
            y: y
          }, angleAxis);
        }

        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function parseEventsOfWrapper() {
        var children = this.props.children;
        var tooltipItem = findChildByType(children, Tooltip);
        var tooltipEvents = tooltipItem && eventType === 'axis' ? {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        } : {};
        var outerEvents = filterEventAttributes(this.props, this.handleOuterEvent);
        return _objectSpread$w({}, outerEvents, {}, tooltipEvents);
      }
      /**
       * The AxisMaps are expensive to render on large data sets
       * so provide the ability to store them in state and only update them when necessary
       * they are dependent upon the start and end index of
       * the brush so it's important that this method is called _after_
       * the state is updated with any new start/end indices
       *
       * @param {Object} props          The props object to be used for updating the axismaps
       * @param {Number} dataStartIndex The start index of the data series when a brush is applied
       * @param {Number} dataEndIndex   The end index of the data series when a brush is applied
       * @param {Number} updateId       The update id
       * @return {Object} state New state to set
       */

    }, {
      key: "updateStateOfAxisMapsOffsetAndStackGroups",
      value: function updateStateOfAxisMapsOffsetAndStackGroups(_ref8) {
        var _this5 = this;

        var props = _ref8.props,
            dataStartIndex = _ref8.dataStartIndex,
            dataEndIndex = _ref8.dataEndIndex,
            updateId = _ref8.updateId;

        if (!validateWidthHeight({
          props: props
        })) {
          return null;
        }

        var children = props.children,
            layout = props.layout,
            stackOffset = props.stackOffset,
            data = props.data,
            reverseStackOrder = props.reverseStackOrder;

        var _this$constructor$get2 = this.constructor.getAxisNameByLayout(layout),
            numericAxisName = _this$constructor$get2.numericAxisName,
            cateAxisName = _this$constructor$get2.cateAxisName;

        var graphicalItems = findAllByType(children, GraphicalChild);
        var stackGroups = getStackGroupsByAxisId(data, graphicalItems, "".concat(numericAxisName, "Id"), "".concat(cateAxisName, "Id"), stackOffset, reverseStackOrder);
        var axisObj = axisComponents.reduce(function (result, entry) {
          var name = "".concat(entry.axisType, "Map");
          return _objectSpread$w({}, result, _defineProperty$z({}, name, _this5.getAxisMap(props, _objectSpread$w({}, entry, {
            graphicalItems: graphicalItems,
            stackGroups: entry.axisType === numericAxisName && stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex
          }))));
        }, {});
        var offset = this.calculateOffset(_objectSpread$w({}, axisObj, {
          props: props,
          graphicalItems: graphicalItems
        }));
        Object.keys(axisObj).forEach(function (key) {
          axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
        });
        var cateAxisMap = axisObj["".concat(cateAxisName, "Map")];
        var ticksObj = this.tooltipTicksGenerator(cateAxisMap);
        var formatedGraphicalItems = this.getFormatItems(props, _objectSpread$w({}, axisObj, {
          dataStartIndex: dataStartIndex,
          dataEndIndex: dataEndIndex,
          updateId: updateId,
          graphicalItems: graphicalItems,
          stackGroups: stackGroups,
          offset: offset
        }));
        return _objectSpread$w({
          formatedGraphicalItems: formatedGraphicalItems,
          graphicalItems: graphicalItems,
          offset: offset,
          stackGroups: stackGroups
        }, ticksObj, {}, axisObj);
      }
      /* eslint-disable  no-underscore-dangle */

    }, {
      key: "addListener",
      value: function addListener() {
        eventCenter.on(SYNC_EVENT, this.handleReceiveSyncEvent);

        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners + 1);
        }
      }
    }, {
      key: "removeListener",
      value: function removeListener() {
        eventCenter.removeListener(SYNC_EVENT, this.handleReceiveSyncEvent);

        if (eventCenter.setMaxListeners && eventCenter._maxListeners) {
          eventCenter.setMaxListeners(eventCenter._maxListeners - 1);
        }
      }
      /**
       * Calculate the offset of main part in the svg element
       * @param  {Object} props          Latest props
       * @param  {Array}  graphicalItems The instances of item
       * @param  {Object} xAxisMap       The configuration of x-axis
       * @param  {Object} yAxisMap       The configuration of y-axis
       * @return {Object} The offset of main part in the svg element
       */

    }, {
      key: "calculateOffset",
      value: function calculateOffset(_ref9) {
        var props = _ref9.props,
            graphicalItems = _ref9.graphicalItems,
            _ref9$xAxisMap = _ref9.xAxisMap,
            xAxisMap = _ref9$xAxisMap === void 0 ? {} : _ref9$xAxisMap,
            _ref9$yAxisMap = _ref9.yAxisMap,
            yAxisMap = _ref9$yAxisMap === void 0 ? {} : _ref9$yAxisMap;
        var width = props.width,
            height = props.height,
            children = props.children;
        var margin = props.margin || {};
        var brushItem = findChildByType(children, Brush);
        var legendItem = findChildByType(children, Legend);
        var offsetH = Object.keys(yAxisMap).reduce(function (result, id) {
          var entry = yAxisMap[id];
          var orientation = entry.orientation;

          if (!entry.mirror && !entry.hide) {
            return _objectSpread$w({}, result, _defineProperty$z({}, orientation, result[orientation] + entry.width));
          }

          return result;
        }, {
          left: margin.left || 0,
          right: margin.right || 0
        });
        var offsetV = Object.keys(xAxisMap).reduce(function (result, id) {
          var entry = xAxisMap[id];
          var orientation = entry.orientation;

          if (!entry.mirror && !entry.hide) {
            return _objectSpread$w({}, result, _defineProperty$z({}, orientation, result[orientation] + entry.height));
          }

          return result;
        }, {
          top: margin.top || 0,
          bottom: margin.bottom || 0
        });

        var offset = _objectSpread$w({}, offsetV, {}, offsetH);

        var brushBottom = offset.bottom;

        if (brushItem) {
          offset.bottom += brushItem.props.height || Brush.defaultProps.height;
        }

        if (legendItem && this.legendInstance) {
          var legendBox = this.legendInstance.getBBox();
          offset = appendOffsetOfLegend(offset, graphicalItems, props, legendBox);
        }

        return _objectSpread$w({
          brushBottom: brushBottom
        }, offset, {
          width: width - offset.left - offset.right,
          height: height - offset.top - offset.bottom
        });
      }
    }, {
      key: "triggerSyncEvent",
      value: function triggerSyncEvent(data) {
        var syncId = this.props.syncId;

        if (!isNil_1(syncId)) {
          eventCenter.emit(SYNC_EVENT, syncId, this.uniqueChartId, data);
        }
      }
    }, {
      key: "filterFormatItem",
      value: function filterFormatItem(item, displayName, childIndex) {
        var formatedGraphicalItems = this.state.formatedGraphicalItems;

        for (var i = 0, len = formatedGraphicalItems.length; i < len; i++) {
          var entry = formatedGraphicalItems[i];

          if (entry.item === item || entry.props.key === item.key || displayName === getDisplayName(entry.item.type) && childIndex === entry.childIndex) {
            return entry;
          }
        }

        return null;
      }
    }, {
      key: "renderAxis",

      /**
       * Draw axis
       * @param {Object} axisOptions The options of axis
       * @param {Object} element      The axis element
       * @param {String} displayName  The display name of axis
       * @param {Number} index        The index of element
       * @return {ReactElement}       The instance of x-axes
       */
      value: function renderAxis(axisOptions, element, displayName, index) {
        var _this$props5 = this.props,
            width = _this$props5.width,
            height = _this$props5.height;
        return react.createElement(CartesianAxis, _extends$q({}, axisOptions, {
          className: "recharts-".concat(axisOptions.axisType, " ").concat(axisOptions.axisType),
          key: element.key || "".concat(displayName, "-").concat(index),
          viewBox: {
            x: 0,
            y: 0,
            width: width,
            height: height
          },
          ticksGenerator: this.axesTicksGenerator
        }));
      }
      /**
       * Draw grid
       * @param  {ReactElement} element the grid item
       * @return {ReactElement} The instance of grid
       */

    }, {
      key: "renderLegend",

      /**
       * Draw legend
       * @return {ReactElement}            The instance of Legend
       */
      value: function renderLegend() {
        var _this6 = this;

        var formatedGraphicalItems = this.state.formatedGraphicalItems;
        var _this$props6 = this.props,
            children = _this$props6.children,
            width = _this$props6.width,
            height = _this$props6.height;
        var margin = this.props.margin || {};
        var legendWidth = width - (margin.left || 0) - (margin.right || 0);
        var legendHeight = height - (margin.top || 0) - (margin.bottom || 0);
        var props = getLegendProps({
          children: children,
          formatedGraphicalItems: formatedGraphicalItems,
          legendWidth: legendWidth,
          legendHeight: legendHeight,
          legendContent: legendContent
        });

        if (!props) {
          return null;
        }

        var item = props.item,
            otherProps = _objectWithoutProperties$b(props, ["item"]);

        return react.cloneElement(item, _objectSpread$w({}, otherProps, {
          chartWidth: width,
          chartHeight: height,
          margin: margin,
          ref: function ref(legend) {
            _this6.legendInstance = legend;
          },
          onBBoxUpdate: this.handleLegendBBoxUpdate
        }));
      }
      /**
       * Draw Tooltip
       * @return {ReactElement}  The instance of Tooltip
       */

    }, {
      key: "renderTooltip",
      value: function renderTooltip() {
        var children = this.props.children;
        var tooltipItem = findChildByType(children, Tooltip);

        if (!tooltipItem) {
          return null;
        }

        var _this$state15 = this.state,
            isTooltipActive = _this$state15.isTooltipActive,
            activeCoordinate = _this$state15.activeCoordinate,
            activePayload = _this$state15.activePayload,
            activeLabel = _this$state15.activeLabel,
            offset = _this$state15.offset;
        return react.cloneElement(tooltipItem, {
          viewBox: _objectSpread$w({}, offset, {
            x: offset.left,
            y: offset.top
          }),
          active: isTooltipActive,
          label: activeLabel,
          payload: isTooltipActive ? activePayload : [],
          coordinate: activeCoordinate
        });
      }
    }, {
      key: "renderActivePoints",
      value: function renderActivePoints(_ref10) {
        var item = _ref10.item,
            activePoint = _ref10.activePoint,
            basePoint = _ref10.basePoint,
            childIndex = _ref10.childIndex,
            isRange = _ref10.isRange;
        var result = [];
        var key = item.props.key;
        var _item$item$props2 = item.item.props,
            activeDot = _item$item$props2.activeDot,
            dataKey = _item$item$props2.dataKey;

        var dotProps = _objectSpread$w({
          index: childIndex,
          dataKey: dataKey,
          cx: activePoint.x,
          cy: activePoint.y,
          r: 4,
          fill: getMainColorOfGraphicItem(item.item),
          strokeWidth: 2,
          stroke: '#fff',
          payload: activePoint.payload,
          value: activePoint.value,
          key: "".concat(key, "-activePoint-").concat(childIndex)
        }, getPresentationAttributes(activeDot), {}, filterEventAttributes(activeDot));

        result.push(this.constructor.renderActiveDot(activeDot, dotProps, childIndex));

        if (basePoint) {
          result.push(this.constructor.renderActiveDot(activeDot, _objectSpread$w({}, dotProps, {
            cx: basePoint.x,
            cy: basePoint.y,
            key: "".concat(key, "-basePoint-").concat(childIndex)
          }), childIndex));
        } else if (isRange) {
          result.push(null);
        }

        return result;
      }
    }, {
      key: "renderClipPath",
      value: function renderClipPath() {
        var clipPathId = this.clipPathId;
        var _this$state$offset = this.state.offset,
            left = _this$state$offset.left,
            top = _this$state$offset.top,
            height = _this$state$offset.height,
            width = _this$state$offset.width;
        return react.createElement("defs", null, react.createElement("clipPath", {
          id: clipPathId
        }, react.createElement("rect", {
          x: left,
          y: top,
          height: height,
          width: width
        })));
      }
    }, {
      key: "render",
      value: function render() {
        var _this7 = this;

        if (!validateWidthHeight(this)) {
          return null;
        }

        var _this$props7 = this.props,
            children = _this$props7.children,
            className = _this$props7.className,
            width = _this$props7.width,
            height = _this$props7.height,
            style = _this$props7.style,
            compact = _this$props7.compact,
            others = _objectWithoutProperties$b(_this$props7, ["children", "className", "width", "height", "style", "compact"]);

        var attrs = getPresentationAttributes(others);
        var map = {
          CartesianGrid: {
            handler: this.renderGrid,
            once: true
          },
          ReferenceArea: {
            handler: this.renderReferenceElement
          },
          ReferenceLine: {
            handler: this.renderReferenceElement
          },
          ReferenceDot: {
            handler: this.renderReferenceElement
          },
          XAxis: {
            handler: this.renderXAxis
          },
          YAxis: {
            handler: this.renderYAxis
          },
          Brush: {
            handler: this.renderBrush,
            once: true
          },
          Bar: {
            handler: this.renderGraphicChild
          },
          Line: {
            handler: this.renderGraphicChild
          },
          Area: {
            handler: this.renderGraphicChild
          },
          Radar: {
            handler: this.renderGraphicChild
          },
          RadialBar: {
            handler: this.renderGraphicChild
          },
          Scatter: {
            handler: this.renderGraphicChild
          },
          Pie: {
            handler: this.renderGraphicChild
          },
          Funnel: {
            handler: this.renderGraphicChild
          },
          Tooltip: {
            handler: this.renderCursor,
            once: true
          },
          PolarGrid: {
            handler: this.renderPolarGrid,
            once: true
          },
          PolarAngleAxis: {
            handler: this.renderPolarAxis
          },
          PolarRadiusAxis: {
            handler: this.renderPolarAxis
          },
          Customized: {
            handler: this.renderCustomized
          }
        }; // The "compact" mode is mainly used as the panorama within Brush

        if (compact) {
          return react.createElement(Surface, _extends$q({}, attrs, {
            width: width,
            height: height
          }), this.renderClipPath(), renderByOrder(children, map));
        }

        var events = this.parseEventsOfWrapper();
        return react.createElement("div", _extends$q({
          className: classnames('recharts-wrapper', className),
          style: _objectSpread$w({
            position: 'relative',
            cursor: 'default',
            width: width,
            height: height
          }, style)
        }, events, {
          ref: function ref(node) {
            _this7.container = node;
          }
        }), react.createElement(Surface, _extends$q({}, attrs, {
          width: width,
          height: height
        }), this.renderClipPath(), renderByOrder(children, map)), this.renderLegend(), this.renderTooltip());
      }
    }], [{
      key: "getAxisNameByLayout",
      value: function getAxisNameByLayout(layout) {
        if (layout === 'horizontal') {
          return {
            numericAxisName: 'yAxis',
            cateAxisName: 'xAxis'
          };
        }

        if (layout === 'vertical') {
          return {
            numericAxisName: 'xAxis',
            cateAxisName: 'yAxis'
          };
        }

        if (layout === 'centric') {
          return {
            numericAxisName: 'radiusAxis',
            cateAxisName: 'angleAxis'
          };
        }

        return {
          numericAxisName: 'angleAxis',
          cateAxisName: 'radiusAxis'
        };
      }
    }, {
      key: "renderActiveDot",
      value: function renderActiveDot(option, props) {
        var dot;

        if (react.isValidElement(option)) {
          dot = react.cloneElement(option, props);
        } else if (isFunction_1(option)) {
          dot = option(props);
        } else {
          dot = react.createElement(Dot, props);
        }

        return react.createElement(Layer, {
          className: "recharts-active-dot",
          key: props.key
        }, dot);
      }
    }]);

    return CategoricalChartWrapper;
  }(react.Component);

  CategoricalChartWrapper.displayName = chartName;
  CategoricalChartWrapper.propTypes = _objectSpread$w({
    syncId: propTypes.oneOfType([propTypes.string, propTypes.number]),
    compact: propTypes.bool,
    width: propTypes.number,
    height: propTypes.number,
    data: propTypes.arrayOf(propTypes.object),
    layout: propTypes.oneOf(['horizontal', 'vertical']),
    stackOffset: propTypes.oneOf(['sign', 'expand', 'none', 'wiggle', 'silhouette']),
    throttleDelay: propTypes.number,
    margin: propTypes.shape({
      top: propTypes.number,
      right: propTypes.number,
      bottom: propTypes.number,
      left: propTypes.number
    }),
    barCategoryGap: propTypes.oneOfType([propTypes.number, propTypes.string]),
    barGap: propTypes.oneOfType([propTypes.number, propTypes.string]),
    barSize: propTypes.oneOfType([propTypes.number, propTypes.string]),
    maxBarSize: propTypes.number,
    style: propTypes.object,
    className: propTypes.string,
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    defaultShowTooltip: propTypes.bool,
    onClick: propTypes.func,
    onMouseLeave: propTypes.func,
    onMouseEnter: propTypes.func,
    onMouseMove: propTypes.func,
    onMouseDown: propTypes.func,
    onMouseUp: propTypes.func,
    reverseStackOrder: propTypes.bool,
    id: propTypes.string
  }, propTypes$1);
  CategoricalChartWrapper.defaultProps = _objectSpread$w({
    layout: 'horizontal',
    stackOffset: 'none',
    barCategoryGap: '10%',
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: false
  }, defaultProps);

  CategoricalChartWrapper.createDefaultState = function (props) {
    var children = props.children,
        defaultShowTooltip = props.defaultShowTooltip;
    var brushItem = findChildByType(children, Brush);
    var startIndex = brushItem && brushItem.props && brushItem.props.startIndex || 0;
    var endIndex = brushItem && brushItem.props && brushItem.props.endIndex || props.data && props.data.length - 1 || 0;
    return {
      chartX: 0,
      chartY: 0,
      dataStartIndex: startIndex,
      dataEndIndex: endIndex,
      activeTooltipIndex: -1,
      isTooltipActive: !isNil_1(defaultShowTooltip) ? defaultShowTooltip : false
    };
  };

  CategoricalChartWrapper.hasBar = function (graphicalItems) {
    if (!graphicalItems || !graphicalItems.length) {
      return false;
    }

    return graphicalItems.some(function (item) {
      var name = getDisplayName(item && item.type);
      return name && name.indexOf('Bar') >= 0;
    });
  };

  CategoricalChartWrapper.getDisplayedData = function (props, _ref11, item) {
    var graphicalItems = _ref11.graphicalItems,
        dataStartIndex = _ref11.dataStartIndex,
        dataEndIndex = _ref11.dataEndIndex;
    var itemsData = (graphicalItems || []).reduce(function (result, child) {
      var itemData = child.props.data;

      if (itemData && itemData.length) {
        return [].concat(_toConsumableArray$a(result), _toConsumableArray$a(itemData));
      }

      return result;
    }, []);

    if (itemsData && itemsData.length > 0) {
      return itemsData;
    }

    if (item && item.props && item.props.data && item.props.data.length > 0) {
      return item.props.data;
    }

    var data = props.data;

    if (data && data.length && isNumber$1(dataStartIndex) && isNumber$1(dataEndIndex)) {
      return data.slice(dataStartIndex, dataEndIndex + 1);
    }

    return [];
  };

  return CategoricalChartWrapper;
};

/**
 * @fileOverview Bar Chart
 */
var BarChart = generateCategoricalChart({
  chartName: 'BarChart',
  GraphicalChild: Bar,
  axisComponents: [{
    axisType: 'xAxis',
    AxisComp: XAxis
  }, {
    axisType: 'yAxis',
    AxisComp: YAxis
  }],
  formatAxisMap: formatAxisMap$1
});

/**
 * @fileOverview Pie Chart
 */
var PieChart = generateCategoricalChart({
  chartName: 'PieChart',
  GraphicalChild: Pie,
  eventType: 'item',
  legendContent: 'children',
  axisComponents: [{
    axisType: 'angleAxis',
    AxisComp: PolarAngleAxis
  }, {
    axisType: 'radiusAxis',
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap: formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 0,
    endAngle: 360,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  },
  propTypes: {
    layout: propTypes.oneOf(['centric']),
    startAngle: propTypes.number,
    endAngle: propTypes.number,
    cx: propTypes.oneOfType([propTypes.number, propTypes.string]),
    cy: propTypes.oneOfType([propTypes.number, propTypes.string]),
    innerRadius: propTypes.oneOfType([propTypes.number, propTypes.string]),
    outerRadius: propTypes.oneOfType([propTypes.number, propTypes.string])
  }
});

/**
 * @fileOverview Radar Chart
 */
var RadarChart = generateCategoricalChart({
  chartName: 'RadarChart',
  GraphicalChild: Radar,
  axisComponents: [{
    axisType: 'angleAxis',
    AxisComp: PolarAngleAxis
  }, {
    axisType: 'radiusAxis',
    AxisComp: PolarRadiusAxis
  }],
  formatAxisMap: formatAxisMap,
  defaultProps: {
    layout: 'centric',
    startAngle: 90,
    endAngle: -270,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
  },
  propTypes: {
    layout: propTypes.oneOf(['centric']),
    startAngle: propTypes.number,
    endAngle: propTypes.number,
    cx: propTypes.oneOfType([propTypes.number, propTypes.string]),
    cy: propTypes.oneOfType([propTypes.number, propTypes.string]),
    innerRadius: propTypes.oneOfType([propTypes.number, propTypes.string]),
    outerRadius: propTypes.oneOfType([propTypes.number, propTypes.string])
  }
});

export { Bar, BarChart, Brush, CartesianGrid, Cell, Legend, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ReferenceLine, Tooltip, XAxis, YAxis };
