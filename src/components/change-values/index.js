import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../default-props/empty';

import './style.css';

const ChangeValues = ({
  increaseStat,
  decreaseStat,
  maxStat
}) => (
  <div className='change-stat-buttons'>
    <button className='change-stat-button' onClick={increaseStat}>+</button>
    <button className='change-stat-button' onClick={decreaseStat}>-</button>
    <button className='change-stat-button' onClick={maxStat}>MAX</button>
  </div>
);

ChangeValues.propTypes = {
  increaseStat: PropTypes.func,
  decreaseStat: PropTypes.func,
  maxStat: PropTypes.func,
};

ChangeValues.defaultProps = {
  increaseStat: noop,
  decreaseStat: noop,
  maxStat: noop,
};

export default ChangeValues;