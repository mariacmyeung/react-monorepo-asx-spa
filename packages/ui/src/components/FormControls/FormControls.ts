import styled from 'styled-components';
import { up } from '../../themes/breakpoints';

export const StyledFormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSizes.base};

  ${up('lg')} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const StyledFormButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 4px;

  ${up('lg')} {
     background: ${({ theme }) => theme.colors.secondary};
     color: yellow;
  }
`;
