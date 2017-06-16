import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';
import toJson from 'enzyme-to-json';
import Chevron from 'react-icons/lib/fa/chevron-right'
import Spinner from 'react-icons/lib/fa/spinner'

function setup(isLoading, type, fullWidth, icon) {
  const props = {
    onClick: jest.fn(),
    type,
    fullWidth,
    icon,
    isLoading
  };
  const button = shallow(<Button {...props}>Monkey</Button>);
  return {
    button,
    props
  };
}

describe('<Button />', () => {
  it('should render children as button text', () => {
      const { button, props } = setup()
      expect(button.text()).toBe('Monkey')
  });

  it('should call the function passed to onClick prop', () => {
      const { button, props } = setup()

      button.simulate('click');

      expect(props.onClick.mock.calls.length).toEqual(1);
  });

  it('should add full-width class when fullWidth prop is true', () => {
      const { button, props } = setup(null, null, true)

      expect(button.find('.button').hasClass('full-width')).toEqual(true);
  });

  it('should add is-loading class when isLoading prop is true', () => {
      const { button, props } = setup(true);

      expect(button.find('.button').hasClass('is-loading')).toEqual(true);
  });

  it('should add loading text and spinner icon when isLoading prop is true', () => {
      const { button, props } = setup(true);

      expect(button.text()).toContain('Loading');
      expect(button.find(Spinner).length).toBe(1);
  });

  test('<Button/> snapshot', () => {
    const button = setup();
    expect(toJson(button)).toMatchSnapshot();
  });
})