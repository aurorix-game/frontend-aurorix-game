import { Grid } from '@mui/material';
import { Character, CHARACTER_ATTRIBUTE, CHARACTER_ATTRIBUTES_LABEL } from 'aurorix-core';
import { useStyles } from './character-attribute.styles';

type Params = {
  attribute:
    | Character.MopyCaptureAttribute
    | Character.ExpertiseAttribute
    | Character.ElementTunningAttribute;
};

export function CharacterAttribute(params: Params) {
  const { attribute } = params;
  const classes = useStyles();

  const percentage = attribute.value / 100;
  const diff_percentage = 100 - percentage;

  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      className={classes.attributeBox}
    >
      <Grid container item xs={2}>
        <img
          src={CHARACTER_ATTRIBUTE[attribute.type].icon}
          alt={attribute.type}
          className={classes.icon}
        />
      </Grid>
      <Grid container item xs={8}>
        <Grid>
          <span className={classes.label}>{CHARACTER_ATTRIBUTES_LABEL[attribute.type]}</span>
        </Grid>
        <Grid
          container
          item
          xs={12}
          wrap="nowrap"
          style={{ width: '80%', border: '0.5vh solid black' }}
          alignItems="center"
        >
          <div
            style={{
              backgroundColor: CHARACTER_ATTRIBUTE[attribute.type].color,
              height: '2.5vh',
              width: `${percentage}%`,
            }}
          >
            {percentage >= 30 && <div className={classes.percentage}>{percentage}%</div>}
          </div>
          <div style={{ backgroundColor: 'white', height: '2.5vh', width: `${diff_percentage}%` }}>
            {percentage < 30 && <div className={classes.percentage}>{percentage}%</div>}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
