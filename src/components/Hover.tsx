import React from "react";

interface HoverProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

const Hover = ({children, className = '', url = ''} : HoverProps) => {
    return (
        <div className={`transition-all cursor-pointer hover:bg-slate-800 hover:shadow-md ${className}`}>
            { children }
        </div>
    );
}

export default Hover;