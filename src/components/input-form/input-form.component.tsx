import { useStyles } from '@/components/input-form/input-form.styles';
import { HTMLInputTypeAttribute } from 'react';

type Params = {
  label: string;
  name: string;
  placeHolder?: string;
  type: HTMLInputTypeAttribute;
  error?: string;
};

export function InputForm(params: Params) {
  const classes = useStyles();

  return (
    <>
      <label htmlFor={params.name} className={classes.label}>
        {params.label}
      </label>
      <input
        id={params.name}
        name={params.name}
        type={params.type}
        placeholder={params?.placeHolder || ''}
        className={classes.input}
      />
      <div className={classes.error}>{params?.error || ''}</div>
    </>
  );
}
