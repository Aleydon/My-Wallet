import { useMemo } from 'react';

import Container, { Profile, Welcome, Username } from './style';
import emojis from '../../utils/emojis';
import ToggleButton from '../ToggleButton';

const MainHeader = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <ToggleButton />
      <Profile>
        <Welcome>Hello, {emoji}</Welcome>
        <Username>Roberto Aleydon</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
