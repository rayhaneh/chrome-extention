import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import {
  configure,
  shallow,
  ShallowWrapper,
} from 'enzyme';

import * as enzymeAdapterReact16 from 'enzyme-adapter-react-16';

configure({ adapter: new enzymeAdapterReact16() });

let comp: ShallowWrapper;

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders initial state of the App', () => {
    comp = shallow(<App/>);
    expect(comp.html()).toMatch('<div></div>');
  });
});
