'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
