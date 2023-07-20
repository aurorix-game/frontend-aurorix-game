import { Color, theme } from '@/config';
import { Link as LinkMUI } from '@mui/material';

type Params = {
  path: string;
  label: string;
  color?: Color;
};

export function Link(params: Params) {
  return (
    <LinkMUI
      href={params.path}
      style={{
        fontFamily: theme.fonts.PixelOperatorSC,
        color: params.color ? theme.colors[params.color].original.hex : 'white',
      }}
    >
      {params.label}
    </LinkMUI>
  );
}
