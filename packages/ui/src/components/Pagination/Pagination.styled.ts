import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;