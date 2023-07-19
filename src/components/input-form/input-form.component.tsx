import { useStyles } from '@/components/input-form/input-form.styles';
import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

type Params = {
  label: string;
  name: string;
  placeHolder?: string;
  value?: string;
  type: HTMLInputTypeAttribute;
  error?: string;
  onChange?: ChangeEventHandler | any;
};

export function InputForm(params: Params) {
  const classes = useStyles();

  return (
    <div className={classes.inputGroup}>
      <label htmlFor={params.name} className={classes.label}>
        {params.label}
      </label>
      <input
        id={params.name}
        name={params.name}
        type={params.type}
        placeholder={params?.placeHolder || ''}
        onChange={params?.onChange}
        value={params?.value}
        className={classes.input}
      />
      <div className={classes.error}>{params?.error || ''}</div>
    </div>
  );
}
