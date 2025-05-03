import React from "react";

interface HoverProps {
    children: React.ReactNode;
    className?: string;
}

const Hover = ({children, className = ''} : HoverProps) => {
    return (
        <div className={`hover:bg-amber-100 ${className}`}>
            { children }
        </div>
    );
}

export default Hover;