import React from 'react';

interface ContentLayoutProps {
  headline: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ContentLayout = ({ headline, children, className = '', id = '' }: ContentLayoutProps) => {
  return (
    <div className={`flex flex-col gap-4 w-full mt-4 ${className}`} id={id}>
      <h2 className="font-bold text-xl">{ headline }</h2>
      <div className="flex gap-4 w-full">
        { children }
      </div>
    </div>
  );
};

export default ContentLayout;