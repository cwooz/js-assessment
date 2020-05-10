exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    // let string = 'abcdef abcde abc def';
    // console.log('string split: ', string.split('').reverse().join(''));
    return str.split('').reverse().join('');
  }
};
