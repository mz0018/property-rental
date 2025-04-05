import React, { useEffect } from 'react';
import useNetworkStore from './store/useNetworkStore';
import WelcomePage from './pages/WelcomePage';
import NoInternetLandingPage from './pages/NoInternetLandingPage';

const App = () => {
  const { isOnline, checkIfOnline } = useNetworkStore();

  useEffect(() => {
    checkIfOnline();
  }, [checkIfOnline]);

  return (
    <div>
      {isOnline ? <WelcomePage/> : <NoInternetLandingPage/>}
    </div>
  );
};

export default App;
