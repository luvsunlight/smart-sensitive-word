function filter(text, replaceWord = '*') {
  let filtedText = '';
  try {
    filtedText = new Array(String(text).length).fill(replaceWord);
  } catch (e) {
    console.warn(e);
  }
  return filtedText.join('');
}

export { filter };
