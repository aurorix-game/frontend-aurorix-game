import { Character } from '@/interfaces';
import { Grid } from '@mui/material';
import { useStyles } from './character-attribute.styles';

type Params = {
  attribute: Character.Attribute;
};

export function CharacterAttribute(params: Params) {
  const { attribute } = params;
  const classes = useStyles();

  return (
    <Grid container justifyContent="space-evenly" alignItems="center" className={classes.attributeBox}>
      <Grid container item xs={2}>
        <img
          src={attribute.style.icon}
          alt={attribute.label}
          style={{
            height: '90%',
            width: '90%',
          }}
        />
      </Grid>
      <Grid container item xs={8}>
        <Grid>
          <span className={classes.label}>{attribute.label}</span>
        </Grid>
        <Grid
          container
          item
          xs={12}
          wrap="nowrap"
          style={{ width: '80%', border: '0.5vh solid black' }}
          alignItems="center"
        >
          <div style={{ backgroundColor: attribute.style.color, height: '2.5vh', width: '30%' }}>
            <div className={classes.percentage}>60%</div>
          </div>
          <div style={{ backgroundColor: 'white', height: '2.5vh', width: '90%' }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
