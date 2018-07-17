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

    const selectorHTML = '<label>CSS Selector</label><input type="text"/>';
    const valueHTML = '<label>Value</label><input type="text"/>';

    expect(comp.html()).toMatch(`<div><div>${selectorHTML}${valueHTML}</div></div>`);
  });

  it('should change the state when selector field value is changed',  () => {
    comp = shallow(<App/>);

    const selectorField = comp.find('input').first();

    selectorField.simulate('change', {target: {value: 'New CSS Selector'}});
  });
});
