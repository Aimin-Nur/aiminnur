import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Nav from '@/components/light/blogs/nav';
import ContactUs from '@/components/light/contact/ContactUs';
import Footer from '@/components/light/home/footer';
import Portfolio from '@/components/light/works/portfolio';
import Script from 'next/script';
import React from 'react';

function Works() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />

      <main class="container">
        <Portfolio />
      </main>
      <Footer />
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

export default Works;
