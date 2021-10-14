import React from 'react'
import { shallow } from 'enzyme';
import DeleteIcon from "./DeleteIcon";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = shallow(<DeleteIcon />);

describe("Delete Icon", () => {
  it("Renders delete icon", () => {
    expect(wrapper).toMatchSnapshot();
  });
});