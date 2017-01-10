const assert = require('assert');
import add from '../../htdocs/js/add';

describe('add関数', () => {
  it('1 + 2 = 3になること', () => {
    assert(add(1, 2) === 3);
  });
});
