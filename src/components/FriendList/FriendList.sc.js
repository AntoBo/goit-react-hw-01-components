import styled from 'styled-components';

const SpanStyled = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

export { SpanStyled };
