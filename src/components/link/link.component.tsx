import { Link as LinkMUI } from '@mui/material';
import { useStyles } from './link.styles';
import { ParamsLink } from './link.type';

export function Link(params: ParamsLink) {
  const classes = useStyles(params);

  return (
    <LinkMUI href={params.path} className={classes.link}>
      {params.label}
    </LinkMUI>
  );
}
