import logo from "../../assets/logo-footer.svg";
import './footer.scss'

function Footer() {
    const date = new Date().getFullYear();
	return (
		<footer className="foot-container">
			<img src={logo} alt="logo de kasa" />
			<p className="foot-container__text">© {date} Kasa. All rights reserved</p>
		</footer>
	);
}

export default Footer