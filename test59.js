;(function () {

  var fn = (function () {
    var count = 0;
    return function () {
      return count += 1;
    }
  })();

  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log(fn());
  console.log('--------');

})();

;(function () {

  function fn() {
    if (fn.count === undefined) {
      return (fn.count = 1);
    }
    return fn.count += 1;
  };

  console.log(fn());
  console.log(fn());
  console.log(fn());

})();