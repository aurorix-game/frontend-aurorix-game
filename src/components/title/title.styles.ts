import styled from 'styled-components';

import { theme } from '@/config';
import { Title } from './title.type';

export const TitleStyled = styled.span<Title.Style>`
  font-family: ${theme.fonts.PixelOperatorHB};
  color: ${theme.colors.orangeYellow.original.hex};
  font-size: ${({ size }) => size};
`;
