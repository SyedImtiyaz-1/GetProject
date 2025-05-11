import React from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import LoginPrompt from './LoginPrompt';

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <LoginPrompt />
      </SignedOut>
    </>
  );
};

export default ProtectedRoute; 