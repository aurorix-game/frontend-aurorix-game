import { Title } from '@/components';
import { Grid } from '@mui/material';
import { useStyles } from './header.styles';

type ParamsHeader = {
  title: string;
};

export function Header(params: ParamsHeader) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.primary}>
        <Grid container justifyContent="center" alignContent="center">
          <Grid container item alignItems="center" xs={10}>
            <img
              src="/images/logo-aurorix-16-pixel-art.png"
              alt="logo aurorix"
              style={{ height: '8vh', margin: '1vh' }}
            />
            <div style={{ marginLeft: '2vh' }}>
              <Title label={params.title} size="4vh" />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.secondary} />
    </>
  );
}
