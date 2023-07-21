import { theme } from '@/config';
import { Grid } from '@mui/material';

type Params = {
  children: React.ReactNode;
  card?: {
    width?: string;
    height?: string;
  };
};

export function CardLogo(params: Params) {
  return (
    <div>
      <div
        style={{
          ...(params?.card?.height && { height: params.card.height }),
          ...(params?.card?.width && { width: params.card.width }),
          backgroundColor: theme.colors.purpleDark.dark?.hex,
          border: `solid 0.8vh ${theme.colors.greenNeon.original.hex}`,
          padding: 10,
          margin: 20,
        }}
      >
        <Grid container style={{ height: '20%' }} justifyContent="center">
          <img
            src="images/logo-aurorix-16-pixel-art.png"
            alt="logo aurorix"
            style={{
              marginTop: '-10vh',
              height: '22vh',
            }}
          />
        </Grid>
        <Grid container style={{ height: '75%' }}>
          {params.children}
        </Grid>
      </div>
    </div>
  );
}
