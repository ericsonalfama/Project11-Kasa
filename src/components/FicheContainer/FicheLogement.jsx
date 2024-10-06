import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import Caroussel from '../Caroussel/Caroussel';
import Stars from '../Rating/rating';
import Tags from '../Tags/tags';
import Accordion from '../Accordion/accordion';
import './FicheLogement.scss';

function FicheContainer({ logement }) {
    const [avatarIsLoading, setAvatarIsLoading] = useState(true);

    const avatarLoaded = () => {
        setAvatarIsLoading(false);
    };

    const accordionItems = [
        {
            title: 'Description',
            content: logement.description,
        },
        {
            title: 'Equipements',
            content: logement.equipments, // Mantenha como array para renderizar como lista
        },
    ];

    return (
        <div className="fiche-container">
            {logement.pictures && logement.pictures.length > 0 ? (
                <Caroussel pictures={logement.pictures} />
            ) : (
                <div>No pictures available for this logement</div>
            )}

            <section id="description">
                <div className="logement">
                    <div className="logement__titre">
                        <h2>{logement.title}</h2>
                        <h3>{logement.location}</h3>
                        <Tags tags={logement.tags} />
                    </div>
                    <aside className="logement__auteur">
                        <div className="logement__auteur__descritpion">
                            <h3>{logement.host.name}</h3>
                            <div className={avatarIsLoading ? "avatar" : "avatar loaded"}>
                                <img
                                    src={logement.host.picture}
                                    onLoad={avatarLoaded}
                                    alt={logement.host.name}
                                    className='host-picture'
                                />
                            </div>
                        </div>
                        <Stars rating={logement.rating} />
                    </aside>
                </div>
                <Accordion items={accordionItems} /> {/* Usando Accordion com dados dinâmicos */}
            </section>
        </div>
    );
}

FicheContainer.propTypes = {
    logement: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        }),
        rating: PropTypes.number.isRequired,
        equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default FicheContainer;
