/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    const myObject = {
      name: 'Jory'
    };
    return myObject;
  },

  parseInt: function(num) {
    // const test = this.parseInt('12');
    // console.log('test: ', test);
    // console.log('123FU');
    return parseInt(num);
  },

  identity: function(val1, val2) {
    return val1 === val2;
  }
};
