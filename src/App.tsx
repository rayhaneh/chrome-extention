import * as React from 'react';

import './App.css';

import SelectorFill from './components/SelectorFill/SelectorFill';

class App extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      selector: '',
      value: '',
    }
    this.onSelectorChange = this.onSelectorChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onSelectorChange = (event: any) => {
    this.setState({selector: event.target.value})
  }

  onValueChange = (event: any) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <SelectorFill
          onSelectorChange={this.onSelectorChange}
          onValueChange={this.onValueChange}
        />
      </div>
    );
  }
}

export default App;
