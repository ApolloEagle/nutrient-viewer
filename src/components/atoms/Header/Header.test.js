import React from 'react'
import { shallow } from 'enzyme';
import Header from "./Header";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Header />);

describe("Header", () => {
  it("Renders header", () => {
    expect(wrapper).toMatchSnapshot();
  });
});