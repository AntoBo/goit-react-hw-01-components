import styled from 'styled-components';

const SpanStyled = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 15px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
`;

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  border-radius: 7px;
  padding: 5px;
  -webkit-box-shadow: -2px 3px 9px 5px rgba(0, 0, 0, 0.11);
  box-shadow: -2px 3px 9px 5px rgba(0, 0, 0, 0.11);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ImgStyled = styled.img`
  width: 70px;
  height: 70px;
`;

const PStyled = styled.p`
  margin-left: 15px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;

export { SpanStyled, LiStyled, ImgStyled, PStyled };
