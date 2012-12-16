/**
 * Expose `FrequencyList`
 */

module.exports = FrequencyList;

/**
 * Initialize a new `FrequencyList` with the optional `vals`
 *
 * @param {Array} vals
 * @api public
 */

function FrequencyList(vals) {
  if (!(this instanceof FrequencyList)) return new FrequencyList(vals);
  vals = vals || [];
  this.vals = {};
  for (var i = 0, len = vals.length; i < len; i++) {
    this.add(vals[i]);
  }
}

/**
 * Add a `str`
 *
 * @param {String} str
 * @api public
 */

FrequencyList.prototype.add = function(str) {
  var size = this.vals[str];
  this.vals[str] = (size) ? ++size : 1;
  return this;
};

/**
 * Remove a `str`
 *
 * @param {String} str
 * @api public
 */

FrequencyList.prototype.remove = function(str) {
  var size = this.vals[str];
  this.vals[str] = (size) ? --size : 0;
  return this;
};

/**
 * Check if the list has `str`
 *
 * @param {String} str
 * @return {Boolean}
 * @api public
 */

FrequencyList.prototype.has = function(str) {
  return !!(this.vals[str]);
};

/**
 * Get the number of occurences of a `str`
 *
 * @param {String} str
 * @return {Number}
 * @api public
 */

FrequencyList.prototype.size = function(str) {
  return this.vals[str] || 0;
};

/**
 * Is the given `str` unique?
 *
 * @param {String} str
 * @return {Boolean}
 * @api public
 */

FrequencyList.prototype.unique = function(str) {
  return (this.vals[str] && this.vals[str] === 1);
};

/**
 * Returns the values of the frequency list
 *
 * @return {Object}
 * @api public
 */

FrequencyList.prototype.values =
FrequencyList.prototype.toJSON = function() {
  return this.vals;
};

