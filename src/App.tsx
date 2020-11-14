import React from 'react';
import Signin from './pages/Signin';
// import Signup from './pages/Signup';

import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
      <GlobalStyles />
    </>
  );
};

export default App;
