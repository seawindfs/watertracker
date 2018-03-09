import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | solutions', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:solutions');
    assert.ok(route);
  });
});
