import React from 'react'
import { shallow } from 'enzyme';
import SearchIcon from "./SearchIcon";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<SearchIcon />);

describe("Search Icon", () => {
  it("Renders search icon", () => {
    expect(wrapper).toMatchSnapshot();
  });
});