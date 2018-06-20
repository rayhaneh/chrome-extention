import * as React from 'react';

interface LabelProps {
  text: string;
}

const Label: React.SFC<LabelProps> = (props) => {
  return (
    <label>
      {props.text}
    </label>
  );
}

export default Label;
