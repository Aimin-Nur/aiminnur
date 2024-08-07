import Script from 'next/script';
import LoadingScreen from '@/components/Common/loader';
import generateStylesheetObject from '@/Common/generateStylesheetsObject';
import Cursor from '@/components/Common/cusor';
import ProgressScroll from '@/components/Common/ProgressScroll';
import Navbar from '@/components/home/Navbar';
import Landing from '@/components/home/Landing';
import Lines from '@/components/Common/Lines';
export const metadata = {
  title: 'Gavi',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
    ]),
  },
};
export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div>
        <div>
          <div>
            <Navbar />
            <main>
              <Landing />
            </main>
          </div>
        </div>
      </div>
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
    </body>
  );
}
