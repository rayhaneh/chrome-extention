import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Field from '../Field/Field';
import SelectorFill from './SelectorFill';

import {
  configure,
  shallow,
  ShallowWrapper,
} from 'enzyme';

import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';

configure({ adapter: new enzymeAdapterReact16() });

let comp: ShallowWrapper;
let mockOnSelectorChange: jest.Mock<() => void>;
let mockOnValueChange: jest.Mock<() => void>;


describe('SelectorFill Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectorFill />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders initial state of the Field component', () => {
    comp = shallow(<SelectorFill />);

    const selectorHTML = '<label>CSS Selector</label><input type="text"/>';
    const valueHTML = '<label>Value</label><input type="text"/>';

    expect(comp.html()).toMatch(`<div>${selectorHTML}${valueHTML}</div>`);
  });

  it('call onSelectorChange', () => {
    mockOnSelectorChange = jest.fn();

    comp = shallow(<SelectorFill onSelectorChange={mockOnSelectorChange}/>);

    expect(comp.find(Field).first().props().onChange).toEqual(mockOnSelectorChange);
  });

  it('call onValueChange', () => {
    mockOnValueChange = jest.fn();

    comp = shallow(<SelectorFill onValueChange={mockOnValueChange}/>);

    expect(comp.find(Field).last().props().onChange).toEqual(mockOnValueChange);
  });
});
