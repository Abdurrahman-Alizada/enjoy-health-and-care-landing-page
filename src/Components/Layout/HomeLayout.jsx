import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header7 from '../Header/Header7';

const headerData = {
  logo: '/images/logo1.png',
};

const footerData = {
  logo: '/images/logo1.png',
  bgImg: '/images/footer-bg.png',
  subTitle:
    ' Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp incididunt ut labore. Lorem Ipsum is simply dummy.',
};
const Layout7 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header7 data={headerData} />
          <Outlet />
          <Footer data={footerData} />
        </>
      )}
    </>
  );
};

export default Layout7;
