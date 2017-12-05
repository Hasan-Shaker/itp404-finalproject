import { test } from 'qunit';
import moduleForAcceptance from 'itp404-finalproject/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | play trigger');

test('trigger audio clip', function(assert) {
  visit('/');
  click("div.playerbutton");
  andThen(function() {
    assert.equal(find("audio").playing, true);
  });
});
