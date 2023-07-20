import { Button as ButtonMUI, CircularProgress } from '@mui/material';
import { useStyles } from './button.styles';
import { ParamsButton } from './button.type';

export function Button(params: ParamsButton) {
  const classes = useStyles(params);

  return (
    <ButtonMUI
      endIcon={
        params.loading?.status && (
          <CircularProgress
            style={{
              height: params.loading.size,
              width: params.loading.size,
              color: 'white',
              marginTop: 5,
            }}
          />
        )
      }
      type={params?.type || 'button'}
      onClick={params?.onClick}
      className={classes.btn}
      disableRipple
      disableElevation
      variant="contained"
      disabled={params.loading?.status}
    >
      {params.label}
    </ButtonMUI>
  );
}
