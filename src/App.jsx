import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Router = lazy(() => import('./router'));

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App bg-gray-100 min-h-screen">
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="flex flex-col items-center">
            {/* دائرة التحميل */}
            <div className="spinner w-16 h-16 border-4 border-t-indigo-500 border-gray-300 rounded-full animate-spin">
              <span className='w-2 h-8 bg-black'>/</span>
            </div>
            {/* النص أسفل الدائرة */}
            <p className="mt-4 text-gray-500 text-lg">
              Loading, please wait...
            </p>
          </div>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="spinner w-16 h-16 border-4 border-t-indigo-500 border-gray-300 rounded-full animate-spin"></div>
            </div>
          }
        >
          <Router />
        </Suspense>
      )}
      <Footer />
    </div>
  );
}

export default App;
