import styled from 'styled-components';

const Container = styled.div`
  grid-area: AS;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.secondary};
  height: 100%;
`;

export default Container;
