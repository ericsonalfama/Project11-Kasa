import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './accordion.scss';
import chevron from '../../assets/chevron.svg';
function Accordion({ items }) {
    const [expandedIndices, setExpandedIndices] = useState([]);
    const contentRefs = useRef([]);
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    const toggleExpand = (index) => {
        if (expandedIndices.includes(index)) {
            setExpandedIndices(expandedIndices.filter(i => i !== index));
        } else {
            setExpandedIndices([...expandedIndices, index]);
        }
    };

    useEffect(() => {
        // Set maxHeight dynamically based on content height when expanded
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.maxHeight = expandedIndices.includes(index) ? `${ref.scrollHeight}px` : '0px';
            }
        });
    }, [expandedIndices]);

    return (
        <div className={isAboutPage ? "accordion-container-2" : "accordion-container"}>
            {items.map(({ title, content }, index) => (
                <div key={index} className={`accordion-item ${expandedIndices.includes(index) ? 'expanded' : ''}`}>
                    <div className="accordion-header" onClick={() => toggleExpand(index)}>
                        <h1>{title}</h1>
                        <button
                            className={`accordion-toggle ${expandedIndices.includes(index) ? 'expanded' : ''}`}
                        >
                            <img
                                src={chevron}
                                alt="chevron"
                                className={`chevron ${expandedIndices.includes(index) ? 'rotate' : ''}`}
                            />
                        </button>
                    </div>
                    <div
                        className="accordion-content"
                        ref={(el) => (contentRefs.current[index] = el)}
                    >
                        {Array.isArray(content) ? (
                            <ul>
                                {content.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                                <p>{content}</p>
                            
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

Accordion.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]).isRequired,
        })
    ).isRequired,
};

export default Accordion;
