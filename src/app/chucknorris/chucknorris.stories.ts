import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ChucknorrisComponent} from "./chucknorris.component";
import {HttpClientModule} from '@angular/common/http';
import withMock from 'storybook-addon-mock';
import {action} from '@storybook/addon-actions';
import {BADGE} from '@geometricpanda/storybook-addon-badges';

const metadata = moduleMetadata({
  imports: [
    HttpClientModule
  ],
});
export default {
  title: 'Storybook/ChucknorrisComponent',
  component: ChucknorrisComponent,
  decorators: [metadata, withMock],
  argTypes: { loadJoke: { action: 'Loading joke initiated!' } },
  parameters: {
    actions: {
      handles: ['click button']
    },
    badges: [BADGE.BETA]
  }
} as Meta;

const Template: Story<ChucknorrisComponent> = (args: ChucknorrisComponent) => ({
  props: args
});

export const Standard = Template.bind({});
Standard.parameters = {
  mockData: [
    {
      url: 'https://api.chucknorris.io/jokes/random',
      method: 'GET',
      status: 200,
      response: {
        value: 'Hello storybook-addon-mock!',
      },
    },
  ]
}

export const Category = Template.bind({});
Category.args = {
  category: 'dev'
};
Category.parameters = {
  mockData: [
    {
      url: 'https://api.chucknorris.io/jokes/random?category=',
      method: 'GET',
      status: 200,
      response: {
        value: 'Wow, a dev joke!',
      },
    },
  ]
}

export const Bold = Template.bind({});
Bold.args = {
  bold: true
};
Bold.parameters = {
  mockData: [
    {
      url: 'https://api.chucknorris.io/jokes/random',
      method: 'GET',
      status: 200,
      response: {
        value: 'Hello storybook-addon-mock!',
      },
    },
  ]
}

