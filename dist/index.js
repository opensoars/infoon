"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

let https = require('https');

let getSource = url => {
  return new Promise((resolve, reject) => {
    (url.indexOf('https') !== -1 ? https : http).get(url, res => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve(b));
    });
  });
};

let getSourceInfo = (function () {
  var ref = _asyncToGenerator(function* (url) {
    try {
      let source = yield getSource(url);
      console.log('source.length:', source.length);
    } catch (e) {
      console.log(e);
    }
  });

  return function getSourceInfo(_x) {
    return ref.apply(this, arguments);
  };
})();

getSourceInfo('https://google.nl');