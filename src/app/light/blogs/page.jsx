import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Blog from '@/components/light/blogs/blog';
import Footer from '@/components/light/blogs/footer';
import Nav from '@/components/light/blogs/nav';
import Posts from '@/components/light/blogs/posts';
import ContactUs from '@/components/light/contact/ContactUs';
import Script from 'next/script';
import React from 'react';

function Blogs() {
  return (
    <div>
      <Cursor />

      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />

      <main class="container">
        <Blog />
        <Posts />
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

export default Blogs;
