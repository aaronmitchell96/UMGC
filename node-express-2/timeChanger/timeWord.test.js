const timeWord = require('./timeWord.js');

test('test1 timeChanger', () => {
  return expect(timeChanger('11:06')).toBe('eleven oh six am')
});