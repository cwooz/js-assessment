exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {

  indexOf: function(arr, item) {
    // console.log('ARRAY:', arr, 'ITEM:', item);

    const solution_01 = arr.indexOf(item);
    return solution_01
  },

  sum: function(arr) {
    const solution_02 = arr.reduce((a, b) => a + b, 0);
    return solution_02
  },

  remove: function(arr, item) {
    const solution_03 = arr.filter(num => num !== item);
    return solution_03
  },

  removeWithoutCopy: function(arr, item) {
    // --- MORE RESEARCH --- //
    // array = [ 1, 2, 3, 4 ];

    for( var i = 0; i < arr.length; i++){
      if ( arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    // console.log('test', array);

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    const solution_09 = arr1.concat(arr2);
    return solution_09;
  },

  insert: function(arr, item, index) {
    const solution_10 = arr.splice(index, 0, item);
    // console.log('solution_10', arr);
    return arr;
  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    // array = [ 1, 2, 3, 4 ];
    const result = arr.map(x => x ** 2);
    // console.log('test', result);
    return result;
  },

  findAllOccurrences: function(arr, target) {

  }
};
