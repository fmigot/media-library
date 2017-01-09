import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

/* Explanation of brackets: {shallow} */
// http://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import/36796281

import App from '../src/containers/App';

describe('Test App', () => {
  const props = ['test1', 'test2'];
  const wrapper = shallow(<App children={props} />);
  it('should render self', () => {
  	expect(wrapper.length).toBe(1);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('div').hasClass('container-fluid')).toBe(true);
  });

  it('should render children', () => {
    expect(typeof wrapper.props().children).toBe('object');
  });
});

