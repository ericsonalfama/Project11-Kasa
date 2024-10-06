import { Link } from "react-router-dom";
import "./Error.scss"
import Footer from "../../components/Footer/Footer";

function Error() {
	return (
		<div>
			<div className="errorContainer">
				<p className="errorNumber">404</p>
				<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
				<Link to="/" className="errorLinkHome">
					Retourner sur la page d’accueil
				</Link>
			</div>
			<Footer />
		</div>
	);
}

export default Error