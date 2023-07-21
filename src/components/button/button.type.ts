import { Color } from '@/interfaces';
import { MouseEventHandler } from 'react';

export type ParamsButton = {
  label: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler;
  loading?: {
    status: boolean;
    size: number;
  };
  font: {
    size: string;
    color?: Color;
  };
  button: {
    color: Color;
    width?: string;
    height?: string;
  };
};
