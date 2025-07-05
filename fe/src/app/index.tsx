import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import '../styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <h1>Welcome to CalmSphere</h1> 
      </main>
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}