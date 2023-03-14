---
to: components/<%= name %>.stories.tsx
---
import React from 'react';

import { <%= name %> } from './<%= name %>';

export default {
  title: '<%= name %>',
  component: <%= name %>,
};

const Template = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

