(function (exports) {
  'use strict';

  function log(msg) {
     console.log('msg--->',msg); 
  }

  function indexFn() {
     log('hhhhhh');
  }

  exports.indexFn = indexFn;

  return exports;

})({});
