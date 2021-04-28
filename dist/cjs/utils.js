/*! sifter.js | https://github.com/orchidjs/sifter.js | Apache License (v2) */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var diacritics = require('./diacritics.js');

// @ts-ignore
/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @return {Object}          The resolved property value
 */

function getAttr(obj, name) {
  if (!obj) return;
  return obj[name];
}
/**
 * A property getter resolving dot-notation
 * @param  {Object}  obj     The root object to fetch property on
 * @param  {String}  name    The optionally dotted property name to fetch
 * @return {Object}          The resolved property value
 */

function getAttrNesting(obj, name) {
  if (!obj) return;
  var names = name.split(".");

  while (names.length && (obj = obj[names.shift()]));

  return obj;
}
/**
 * Calculates how close of a match the
 * given value is against a search token.
 *
 * @param {object} token
 * @return {number}
 */

function scoreValue(value, token, weight) {
  var score, pos;
  if (!value) return 0;
  value = value + '';
  pos = value.search(token.regex);
  if (pos === -1) return 0;
  score = token.string.length / value.length;
  if (pos === 0) score += 0.5;
  return score * weight;
}
function escape_regex(str) {
  return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/**
 * Cast object property to an array if it exists and has a value
 *
 */

function propToArray(obj, key) {
  var value = obj[key];

  if (value && !Array.isArray(value)) {
    obj[key] = [value];
  }
}
/**
 * Iterates over arrays and hashes.
 *
 * ```
 * iterate(this.items, function(item, id) {
 *    // invoked for each item
 * });
 * ```
 *
 * @param {array|object} object
 */

function iterate(object, callback) {
  if (Array.isArray(object)) {
    object.forEach(callback);
  } else {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        callback(object[key], key);
      }
    }
  }
}
function cmp(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  a = diacritics.asciifold(a + '').toLowerCase();
  b = diacritics.asciifold(b + '').toLowerCase();
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
}

exports.cmp = cmp;
exports.escape_regex = escape_regex;
exports.getAttr = getAttr;
exports.getAttrNesting = getAttrNesting;
exports.iterate = iterate;
exports.propToArray = propToArray;
exports.scoreValue = scoreValue;
//# sourceMappingURL=utils.js.map
