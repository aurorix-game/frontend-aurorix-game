'use client';

import { useStyles } from '@/app/page.styles';
import { Button, Grid } from '@mui/material';

export default function Home() {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.blur}>
        <Grid container alignItems="center" className={classes.gridMain}>
          <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            md={6}
          >
            <img
              className={classes.logo}
              src="images/logo-aurorix-16-pixel-art.png"
              alt="logo aurorix"
            />
          </Grid>
          <Grid className={classes.gridMessages} md={6}>
            <h1 className={classes.title}>
              Aventuras, criaturas e evolução.{' '}
              <span className={classes.aurorix}>Aurorix</span>
            </h1>
            <p className={classes.text}>
              “Descubra terras de maravilhas e mistérios em um jogo épico de
              aventura, captura de criaturas e evolução. Uma jornada
              extraordinária, onde você será o mestre das criaturas mágicas.
              Explore vastas terras desconhecidas.”
            </p>
            <Button
              className={classes.btnPlayNow}
              variant="contained"
              disableElevation
            >
              Play now!
            </Button>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
