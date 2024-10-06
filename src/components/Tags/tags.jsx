import React from 'react';
import PropTypes from 'prop-types';
import './tags.scss'
function Tags ({tags}) {

    return (
        <ul className="logement__tags">
            {tags.map((tag, index) => (
                <li className='tags_li' key={index}>{tag}</li>
            ))}
        </ul>

    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags