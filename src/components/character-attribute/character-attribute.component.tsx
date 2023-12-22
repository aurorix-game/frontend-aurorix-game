import { Grid } from '@mui/material';
import { useStyles } from './character-attribute.styles';
import { Character, CHARACTER_ATTRIBUTES_LABEL } from 'aurorix-core';

type Params = {
  attribute: Character.Attribute;
};

export function CharacterAttribute(params: Params) {
  const { attribute } = params;
  const classes = useStyles();

  const percentage = attribute.value / 100;
  const diff_percentage = 100 - percentage;

  return (
    <Grid container justifyContent="space-evenly" alignItems="center" className={classes.attributeBox}>
      <Grid container item xs={2}>
        <img src={attribute.style.icon} alt={attribute.type} className={classes.icon} />
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
          <div style={{ backgroundColor: attribute.style.color, height: '2.5vh', width: `${percentage}%` }}>
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
