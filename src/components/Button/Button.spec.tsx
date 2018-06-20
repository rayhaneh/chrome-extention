import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from './Button';

import {
  configure,
  shallow,
  ShallowWrapper,
} from 'enzyme';

import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';

configure({ adapter: new enzymeAdapterReact16() });

let comp: ShallowWrapper;
let mockOnClick: jest.Mock<() => void>;

describe('Field Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button text={'Submit'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders initial state of the label component', () => {
    comp = shallow(<Button text={'Submit'} />);
    expect(comp.html()).toMatch('<button>Submit</button>');
  });

  it('calls onClick when clicked', () => {
    mockOnClick = jest.fn();

    comp = shallow(<Button text={'Submit'} onClick={mockOnClick}/>);
    comp.simulate('click');

    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
