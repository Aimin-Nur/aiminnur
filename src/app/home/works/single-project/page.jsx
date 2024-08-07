import ProgressScroll from '@/components/Common/ProgressScroll';
import Cursor from '@/components/Common/cusor';
import LoadingScreen from '@/components/Common/loader';
import Footer from '@/components/dark/blogs/footer';
import Nav from '@/components/dark/blogs/nav';
import ContactUs from '@/components/dark/contact/ContactUs';
import ProjectView from '@/components/dark/works/single-project.jsx/project-view';
import Script from 'next/script';
import React from 'react';

function SingleProject() {
  return (
    <div>
      <Cursor />
      <ContactUs />
      <LoadingScreen />
      <ProgressScroll />
      <Nav />

      <main class="container">
        <ProjectView />
      </main>
      <Footer />
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/jquery-migrate-3.4.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js" strategy="beforeInteractive" />
      <Script src="/assets/js/three.min.js" strategy="lazyOnload" />
    </div>
  );
}

export default SingleProject;
