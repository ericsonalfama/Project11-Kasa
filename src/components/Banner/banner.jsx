import './banner.scss'
import { useLocation } from 'react-router-dom';

export default function Banner() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';
    const bannerText = "Chez vous, partout et ailleurs";

    return (
        <div className={isAboutPage ? "banner-container-2" : "banner-container"}>
            <div className="banner-text-container">
                {isHomePage && (
                    <div className="banner-text">{bannerText}</div>
                )}
            </div>
        </div>
    );
}
