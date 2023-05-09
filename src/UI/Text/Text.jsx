import style from './Text.module.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize, // for tablet
    dsize, // for desctop
    className,
    children,
    href,
    center,
    fontWeight,
    onClick,
    ariaLabel,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    style[fontWeight],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    {[style[`fst${tsize}`]]: tsize},
    {[style[`fsd${dsize}`]]: dsize},
  );
  
  return <As className={classes} href={href}>{children}</As>
};

Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
  fontWeight: PropTypes.string,
};
