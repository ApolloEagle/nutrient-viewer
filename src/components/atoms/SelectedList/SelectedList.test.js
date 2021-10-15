import React from 'react';
import { shallow } from 'enzyme';
import SelectedList from './SelectedList';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<SelectedList />);

describe('Selected List', () => {
  it('Renders selected list', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
