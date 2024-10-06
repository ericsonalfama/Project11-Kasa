import React from "react";
import Card from "../Card/card";
import { data } from "../../data/logements";
import { Link } from 'react-router-dom';

function Gallery () {
    return (
        <div className='cards-container'>
            {data.map(({ id, title, cover, tags }) => (
                <div key={id}>
                    <Link to={`/fiche/${id}`}>
                        <Card
                            title={title}
                            picture={cover}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Gallery;