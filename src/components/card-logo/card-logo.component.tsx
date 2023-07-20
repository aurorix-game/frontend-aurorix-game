import { theme } from '@/config';
import { Grid } from '@mui/material';

type Params = {
  children: React.ReactNode;
  card: {
    width: string;
    height: string;
  };
};

export function CardLogo(params: Params) {
  return (
    <>
      <img
        src="images/logo-aurorix-16-pixel-art.png"
        alt="logo aurorix"
        style={{
          position: 'absolute',
          height: '22vh',
          top: '15vh',
        }}
      />
      <div
        style={{
          height: params.card.height,
          width: params.card.width,
          backgroundColor: theme.colors.purpleDark.dark?.hex,
          padding: 10,
          border: `solid 0.8vh ${theme.colors.greenNeon.original.hex}`,
        }}
      >
        <Grid container style={{ height: '20%' }} />
        <Grid container style={{ height: '75%' }}>
          {params.children}
        </Grid>
      </div>
    </>
  );
}
