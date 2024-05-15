import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PostDetails from './Pages/PostDetails';
import SerivceDetails from './Pages/ServiceDetails.jsx';
import PageNotFound from './Components/404/PageNotFound';
import Home from './Pages/Home';
import Layout7 from './Components/Layout/HomeLayout';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import PricingPage from './Pages/PricingPage';
import PostPage from './Pages/PostPage';
import ContactPage from './Pages/ContactPage';
import Serivces from './Pages/Service.jsx'


import DoctorProfilePage from './Pages/DoctorProfilePage';
import Appointment from './Pages/Appointment';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>

      <Route path="/" element={<Layout7 />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='services' element={<Serivces />} />
        <Route path='services/:serviceId' element={<SerivceDetails />} />
        <Route path='appointment' element={<Appointment />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>

    </Routes>
  );
};

export default App;
