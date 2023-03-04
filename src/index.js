import React         from 'react';
import ReactDOM      from 'react-dom/client';
import App           from './components/app/App';
import ThemeProvider from './providers/ThemeProvider';
import './index.scss';



ReactDOM
.createRoot(document.getElementById('root'))
.render(
  
    <ThemeProvider>
      <App />
    </ThemeProvider>
  
);

