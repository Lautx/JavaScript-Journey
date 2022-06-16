// Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) // should return ["a", "b"].
Passed:steamrollArray([1, [2], [3, [[4]]]]) // should return [1, 2, 3, 4].
Passed:steamrollArray([1, [], [3, [[4]]]]) // should return [1, 3, 4].
Passed:steamrollArray([1, {}, [3, [[4]]]]) // should return [1, {}, 3, 4].
// Passed:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
    }, []);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);