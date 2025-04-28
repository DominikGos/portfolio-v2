import { useLocation } from 'react-router-dom';

interface NavbarItem {
    name: string; 
    url: string; 
};


const MainNavbar = ({className, items} : { className: string, items: NavbarItem[]} ) => {

    const currenntLocation = useLocation().hash;

    const isActive = (url: string): boolean => {
        return currenntLocation === url;
    };
    
    return (
        <nav className={`flex flex-col items-start ${className}`}>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} className={`text-gray-200 uppercase hover:text-white transition-all ${isActive(item.url) ? 'text-white font-bold' : '' }`}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
    
    
export default MainNavbar