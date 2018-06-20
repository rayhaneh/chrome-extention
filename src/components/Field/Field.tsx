import * as React from 'react';

interface FieldInterface {
  onChange(): void;
}

const Field: React.SFC<FieldInterface> = (props) => {
  return (
    <input type='text' onChange={props.onChange}/>
  );
}

export default Field;
