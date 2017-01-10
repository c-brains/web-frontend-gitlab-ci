/* global global */
(function (global) {
  var add = function (a, b) {
    return a + b;
  };

  if ('process' in global) {
    module.exports = add;
  } else {
    global['add'] = add;
  }
})((this || 0).self || global);
