import * as React from 'react';

import './App.css';

import SelectorFill from './components/SelectorFill/SelectorFill';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selector: '',
  //   }
  // }

  private onSelectorChange = (event: any) => {
    // tslint:disable-next-line:no-console
    window.console.error(event);
  }

  private onValueChange = (event: any) => {
    /// tslint:disable-next-line:no-console
    window.console.error(event);
  }

  public render() {
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
