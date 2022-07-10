import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

export const ToggleLabel = styled.span`
  margin-top: 10px;
  color: ${props => props.theme.color.white};
`;

export const SelectThemeSwitch = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({ onColor: theme.color.info, offColor: theme.color.warn })
)<ReactSwitchProps>`
  margin: 0 7px;
`;

export default Container;
