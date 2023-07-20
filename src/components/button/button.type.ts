import { MouseEventHandler } from 'react';

export type ParamsButton = {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler;
  loading?: {
    status: boolean;
    size: number;
  };
  buttonStyle?: {
    fontSize?: string;
    width?: string;
    height?: string;
  };
};
