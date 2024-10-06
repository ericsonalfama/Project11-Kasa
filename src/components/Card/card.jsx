import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/mountain1.png'
import './card.scss'

export default function Card({ label, title, picture }) { 
	return (
    <article className="card-logement">
        <img src={picture} alt="location" />
        <div className="card-logement__layer">
          <p className="card-logement__title">{title}</p>
        </div>
		</article>
	);
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }
  
  Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
  }