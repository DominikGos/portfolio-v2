import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='bg-blue-950 w-full'>
        <nav>
            test nav 
        </nav>
      {children}
    </div>
  );
}

export default Layout;