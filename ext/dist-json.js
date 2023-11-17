(function (exports, _) {
  'use strict';

  function log(msg) {
     console.log('msg--->',msg); 
  }

  var name = "rollup-study";
  var version = "1.0.0";

  const logClone = _.deepClone(log);
  console.log('[ logClone ]-6', logClone);
  function indexFn() {
      
     log('hhhhhh');
     log(name);
     log(version);
  }

  exports.indexFn = indexFn;

  return exports;

})({}, _);
