import React from 'react'
import { shallow } from 'enzyme';
import SearchInput from "./SearchInput";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<SearchInput />);

describe("Search Input", () => {
  it("Renders search input", () => {
    expect(wrapper).toMatchSnapshot();
  });
});