import * as React from 'react';

import Field from '../Field/Field';
import Label from '../Label/Label';

interface SelectorFillInterface {
  onSelectorChange(): void;
  onValueChange(): void;
}

const SelectorFill: React.SFC<SelectorFillInterface> = (props) => {
  return (
    <div>
      <Label text={'CSS Selector'}/>
      <Field onChange={props.onSelectorChange}/>
      <Label text={'Value'}/>
      <Field onChange={props.onValueChange}/>
    </div>
  );
}

export default SelectorFill;
