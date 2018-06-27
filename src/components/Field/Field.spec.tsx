import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Field from './Field';

import {
  configure,
  shallow,
  ShallowWrapper,
} from 'enzyme';

import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';

configure({ adapter: new enzymeAdapterReact16() });

let comp: ShallowWrapper;
let mockOnChange: jest.Mock<() => void>;

describe('Field Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Field onChange={jest.fn()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders initial state of the Field component', () => {
    comp = shallow(<Field onChange={jest.fn()}/>);
    expect(comp.html()).toMatch('<input type=\"text\"/>');
  });

  it('calls onChange when input text is changed', () => {
    mockOnChange = jest.fn();

    comp = shallow(<Field onChange={mockOnChange}/>);

    comp.simulate('change');
    expect(mockOnChange.mock.calls.length).toBe(1);
  });
});
