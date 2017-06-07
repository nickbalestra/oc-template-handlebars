const getInfo = require('../packages/oc-template-handlebars/getInfo');

describe('getInfo method', () => {
  describe('when invoking the method', () => {
    test('should return the correct info', () => {
      const info = getInfo();
      delete info.version;
      expect(info).toMatchSnapshot();
    });
  });
});
