/* global jQuery */
(function (window, $) {
  $('div').addClass('test');

  // 二重引用符は警告
  var a = "test";
  alert(a);
})(window, jQuery);