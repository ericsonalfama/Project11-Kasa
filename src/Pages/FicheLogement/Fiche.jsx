import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";
import { useParams } from 'react-router-dom'
import React from 'react';
import { data } from "../../data/logements";
import FicheContainer from "../../components/FicheContainer/FicheLogement.jsx";

function Fiche() {
    const { id } = useParams();
    const logement = data.find((logement) => logement.id === id);

    if (!logement) {
        return <div>Logement not found</div>;
    }

    return (
        <div>
            <Header/>
            <FicheContainer logement={logement} />
            <Footer/>
        </div>
    );
}

export default Fiche;