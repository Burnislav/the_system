import React from 'react';
import ReactDOM from 'react-dom/client';

const App: React.FC = () => {
  return <h1>Hello, Electron with React and TypeScript!!!!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

if (module.hot) {
  module.hot.accept();
}