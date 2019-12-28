import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../default-props/empty';

const ChangeValues = ({
  increaseStat,
  decreaseStat,
  maxStat
}) => (
  <div className='change-stat-buttons'>
    <button onClick={increaseStat}>+</button>
    <button onClick={decreaseStat}>-</button>
    <button onClick={maxStat}>MAX</button>
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