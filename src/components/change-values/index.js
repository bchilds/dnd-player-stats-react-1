import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../default-props/empty';

const ChangeValues = ({
  increaseStat,
  decreaseStat
}) => (
  <div className='change-stat-buttons'>
    <button onClick={increaseStat}>+</button>
    <button onClick={decreaseStat}>-</button>
  </div>
);

ChangeValues.propTypes = {
  increaseStat: PropTypes.func,
  decreaseStat: PropTypes.func,
};

ChangeValues.defaultProps = {
  increaseStat: noop,
  decreaseStat: noop,
};

export default ChangeValues;