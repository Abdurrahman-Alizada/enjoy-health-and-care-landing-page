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
import ForWhom from './Pages/ForWhom.jsx'
import WaitingTime from './Pages/WaitingTime.jsx'


import DoctorProfilePage from './Pages/DoctorProfilePage';
import Appointment from './Pages/Appointment';
import Method from './Pages/Method.jsx';
import WorkAt from './Pages/WorkAt.jsx';
import PrivacyPage from './Pages/Privacy.jsx';

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
        <Route path='privacy' element={<PrivacyPage />} />
        <Route path='gallery' element={<GalleryPage />} />
        <Route path='pricing' element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="forWhom" element={<ForWhom />} />
        <Route path="method" element={<Method />} />
        <Route path="waiting-time" element={<WaitingTime />} />
        <Route path="work-at" element={<WorkAt />} />
        <Route path="post/:postId" element={<PostDetails />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>

    </Routes>
  );
};

export default App;
