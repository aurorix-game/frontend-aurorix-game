import { useStyles } from './title.styles';
import { ParamsTitle } from './title.type';

export function Title(params: ParamsTitle) {
  const classes = useStyles(params);

  return <span className={classes.title}>{params.label}</span>;
}
