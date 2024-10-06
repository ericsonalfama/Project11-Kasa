/* import { about } from "../../data/apropos"
import Header from "../Header/header"
import './Dropdown.scss'

function Dropdown () {

    return (
        <div className='cards-container'>
            {about.map(({ name, content}) => (
                <div key={name} className="collapse__visible">
                    <div>
                        <h1>{name}</h1>
                    </div>

                    <div>
                        <p>{content}</p>

                    </div>
                </div>
            ))}
        </div>
        
    )
}

export default Dropdown */

import PropTypes from 'prop-types';
import './Dropdown.scss';

function Dropdown({ items }) {
    return (
        <div className='cards-container'>
            {items.map(({ title, content }, index) => (
                <div key={index} className="collapse__visible">
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div>
                        <p>{content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

Dropdown.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Dropdown;
