import * as React from 'react';

interface ButtonInterface {
  text: string;
  onClick(): void;
}

const Button: React.SFC<ButtonInterface> = (props) => {
  return (
    <button onClick={props.onClick} >
      {props.text}
    </button>
  );
}

export default Button;
