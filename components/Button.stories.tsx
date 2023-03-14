import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button"
};
Primary.play = ({canvasElement}) => {
  const canvas = within(canvasElement)
  const buttonText = canvas.getByRole("button").innerText
  expect(buttonText).toEqual("Button")
}
