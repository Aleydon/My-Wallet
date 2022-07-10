import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  border-bottom: solid 1px ${props => props.theme.color.gray};
  grid-area: MH;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.secondary};
`;

export const Profile = styled.div`
  color: ${props => props.theme.color.white};
  display: flex;
`;
export const Welcome = styled.h3``;
export const Username = styled.span``;

export default Container;
