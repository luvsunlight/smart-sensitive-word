(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SmartSensitiveWord = {}));
}(this, (function (exports) { 'use strict';

  function filter(text, replaceWord = '*') {
    let filtedText = '';
    try {
      filtedText = new Array(String(text).length).fill(replaceWord);
    } catch (e) {
      console.warn(e);
    }
    return filtedText.join('');
  }

  exports.filter = filter;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
