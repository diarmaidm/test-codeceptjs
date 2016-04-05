
Feature('First test.js');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('Welcome');
});
