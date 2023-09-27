import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import { HomeContainer } from './home.styles';
import { Carousel } from './home.styles'


const Home = () => {
  return (
    <HomeContainer>
      <Carousel>
        <MainCarousel />
      </Carousel>
      <Directory />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;
