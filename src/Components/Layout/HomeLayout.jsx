import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import Header7 from '../Header/Header7';

const headerData = {
  logo: '/images/logo1.svg',
};

const footerData = {
  logo: '/images/logo1.svg',
  bgImg: '/images/footer-bg.png',
  subTitle:
    'Enjoy Health & Care is de entree tot een nieuwe fase waarin jongvolwassenen kunnen werken aan hun toekomst. De kerngedachte is dat jongvolwassenen Enjoy Health & Care in een verbeterde situatie verlaten na een maatgevoerd ontwikkeltraject.',
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
