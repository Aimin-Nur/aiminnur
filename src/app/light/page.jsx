import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Blog from '@/components/light/home/blog';
import ContactUs from '@/components/light/contact/ContactUs';
import Info from '@/components/light/contact/info';
import Footer from '@/components/light/home/footer';
import NavTop from '@/components/light/home/nav-top';
import Navbar from '@/components/light/home/navbar';
import Portfolio from '@/components/light/home/portfolio';
import Price from '@/components/light/home/price';
import Profile from '@/components/light/home/profile';
import Services from '@/components/light/home/services';
import Skills from '@/components/light/home/skills';
import Testimonials from '@/components/light/home/testimonials';
import Script from 'next/script';
import React from 'react';

function Light() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />

      <div>
        <NavTop />
        <main className="container">
          <Profile />
          <Navbar />
          <section className="in-box">
            <Services />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Price />
            <Info />
            <Blog />
          </section>
        </main>
        <Footer />
      </div>
      <Script
        src="/light/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/light/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/light/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/light/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/light/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default Light;
