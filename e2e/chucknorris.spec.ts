import {Selector} from 'testcafe';

fixture`Das ist ein Test mit Storybook`;

const BASE_URL = 'http://localhost:6006/iframe.html';

test('Show joke on button click', async testController => {
  await testController.navigateTo(BASE_URL + '?id=storybook-chucknorriscomponent--standard');

  await testController.click('app-chucknorris > button');
  const paragraph = await Selector('app-chucknorris > p');

  await testController.expect(paragraph.innerText).eql('Hello storybook-addon-mock!');
});

test('Show a dev joke on button click', async testController => {
  await testController.navigateTo(BASE_URL + '?id=storybook-chucknorriscomponent--category');

  await testController.click('app-chucknorris > button');
  const paragraph = await Selector('app-chucknorris > p');

  await testController.expect(paragraph.innerText).eql('Wow, a dev joke!');
});

test('Show a joke in bold on button click', async testController => {
  await testController.navigateTo(BASE_URL + '?id=storybook-chucknorriscomponent--bold');

  await testController.click('app-chucknorris > button');
  const paragraph = await Selector('app-chucknorris > h1');

  await testController.expect(paragraph.innerText).eql('Hello storybook-addon-mock!');
});
