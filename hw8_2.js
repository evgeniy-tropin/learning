let stringArr = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"];

const utils = (function () {
  function filterNegative (arr, strLength) {
    return arr.filter(function (item) {
      return item.length >= strLength
    });
  }
  return {
    filterNegative: filterNegative
  }
})();

console.log(utils.filterNegative(stringArr, 5));
