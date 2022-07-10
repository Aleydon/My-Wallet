import Container, { ToggleLabel, SelectThemeSwitch } from './styles';

const ToggleButton = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <SelectThemeSwitch
      onChange={() => {}}
      checked={false}
      uncheckedIcon={false}
      checkedIcon={false}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default ToggleButton;
