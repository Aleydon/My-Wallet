import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

import Container from './style';

const Layout = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  );
};

export default Layout;
