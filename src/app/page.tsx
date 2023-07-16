import classes from '@/app/styles.module.css';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';

export default function Home() {
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
          <Grid item md={6} className={classes.gridMessages}>
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
            <Link href="/login">
              <Button
                className={classes.btnPlayNow}
                variant="contained"
                disableElevation
              >
                Play now!
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </main>
  );
}
