interface ContentLayoutColProps {
    children: React.ReactNode;
    className?: string;
}

const ContentLayoutCol = ({children, className}: ContentLayoutColProps) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {children}
        </div>
    );
}

export default ContentLayoutCol;