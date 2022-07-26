import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/globals';
import { RecoilRoot } from 'recoil';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <RecoilRoot>
        <Suspense fallback={<span>Loading.......</span>}>
          <App />
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
