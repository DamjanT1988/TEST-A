import style from './Heading.module.css';
import PropTypes from 'prop-types';

export const Heading = ({text}) => (
  <a
    href='/'
    className={style.heading}
  >
    {text}
  </a>
);

Heading.propTypes = {
  text: PropTypes.string,
};