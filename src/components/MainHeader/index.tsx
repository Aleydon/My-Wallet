import { useMemo } from 'react';

import Container, { Profile, Welcome, Username } from './style';
import emojis from '../../utils/emojis';

const MainHeader = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <h5>Toggle Theme</h5>
      <Profile>
        <Welcome>Hello, {emoji}</Welcome>
        <Username>Roberto Aleydon</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
