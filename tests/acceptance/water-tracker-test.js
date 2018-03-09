import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | water tracker', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});

test('should show home as the home page', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/home', 'should redirect automatically');
  });
});