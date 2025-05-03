interface ContentLayoutRowProps {
    children: React.ReactNode;
    className?: string;
}

const ContentLayoutRow = ({children, className}: ContentLayoutRowProps) => {
    return (
        <div className={`flex flex-row gap-6 ${className}`}>
            {children}
        </div>
    );
}

export default ContentLayoutRow;