import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  className: string;
  variant: string;
  onClick: () => void;
  textButton : string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function DefaultButton ({className, variant, onClick, textButton}: Props){
  return (
    <Button className={className} variant={variant} onClick={onClick}>
      {textButton}
    </Button>
  );
}



