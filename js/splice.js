var should = require('chai').should();

describe('ArrayTest', function() {
  describe('#splice()', function() {
    it('should modify array', function() {
      var arr = [1, 2, 3, 4, 5];
      var result = arr.splice(2, 3);

      arr.should.deep.equal([1, 2]);
    });
    it('should return removed items', function() {
      var arr = [1, 2, 3, 4, 5];
      var result = arr.splice(2, 3);

      result.should.deep.equal([3, 4, 5]);
    })
  });
});
