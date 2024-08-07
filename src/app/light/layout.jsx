import generateStylesheetObject from '@/Common/generateStylesheetsObject';
import Lines from '@/components/Common/Lines';
import React from 'react';

export const metadata = {
  title: 'Gavi - Light',
  icons: {
    icon: '/light/assets/imgs/favicon.ico',
    shortcut: '/light/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/light/assets/css/plugins.css',
      '/light/assets/css/style.css',
    ]),
  },
};

function Layout({ children }) {
  return (
    <body className="sub-bg">
      <Lines />
      <div>
        <main>{children}</main>
      </div>
    </body>
  );
}

export default Layout;
