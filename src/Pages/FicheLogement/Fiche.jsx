import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/header";
import { useParams } from 'react-router-dom'
import { data } from "../../data/logements";
import FicheContainer from "../../components/FicheContainer/FicheLogement.jsx";
import Error from '../Error/Error';

function Fiche() {
    const { id } = useParams();
    const logement = data.find((logement) => logement.id === id);

    if (!logement) {
        return <Error />;
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