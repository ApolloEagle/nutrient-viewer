import React from 'react';
import { shallow } from 'enzyme';
import SearchList from './SearchList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<SearchList />);

describe('Search List', () => {
  it('Renders search list', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
