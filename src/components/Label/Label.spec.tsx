import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Label from './Label';

import {
  configure,
  shallow,
  ShallowWrapper,
} from 'enzyme';

import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';

configure({ adapter: new enzymeAdapterReact16() });

let comp: ShallowWrapper;

describe('Label Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label text={'Email'} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders initial state of the label component', () => {
    comp = shallow(<Label text={'Email'} />);
    expect(comp.html()).toMatch('<label>Email</label>');
  });
});
