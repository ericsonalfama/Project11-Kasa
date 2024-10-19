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
