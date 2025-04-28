import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string; 
};

const Layout = ({ children, className }: LayoutProps) => (
    <div className={`w-full ${className}`}>
      {children}
    </div>
);

export default Layout;