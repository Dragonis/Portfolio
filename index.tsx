import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//export { default as About } from `./About/About`;
import { About, Footer, Skills, Work } from './container';
import { Navbar } from './components';
import App from './App';

import './App.scss';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  </StrictMode>
);
