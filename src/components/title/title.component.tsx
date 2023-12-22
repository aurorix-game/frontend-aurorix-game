import { TitleStyled } from './title.styles';
import { Title } from './title.type';

export function Title(params: Title.Params) {
  return <TitleStyled size={params.size}>{params.label}</TitleStyled>;
}
