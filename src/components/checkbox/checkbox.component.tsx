import { theme } from '@/config';
import { Checkbox as CheckboxMUI, FormControlLabel } from '@mui/material';
import { ChangeEventHandler } from 'react';

type Params = {
  name: string;
  label: string;
  value: boolean;
  checkboxColor: string;
  labelColor: string;
  onChange: ChangeEventHandler | any;
};

export function Checkbox(params: Params) {
  return (
    <FormControlLabel
      control={
        <CheckboxMUI style={{ color: params.checkboxColor }} disableRipple />
      }
      name={params.name}
      onChange={params.onChange}
      value={params.value}
      label={
        <span
          style={{
            fontFamily: theme.fonts.PixelOperatorSC,
            color: params.labelColor,
          }}
        >
          {params.label}
        </span>
      }
    />
  );
}
