import React from 'react';
import PropTypes from 'prop-types';
import ChangeValues from '../change-values';
import { noop } from '../../default-props/empty';

import './style.css';

export default class CalcRow extends React.Component {
  static propTypes = {
    stat: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    incrementStat: PropTypes.func,
  };

  static defaultProps = {
    incrementStat: noop,
  }

  _increaseStat = () => {
    const { incrementStat, stat } = this.props;
    incrementStat(stat, 1);
  }

  _decreaseStat = () => {
    const { incrementStat, stat } = this.props;
    incrementStat(stat, -1);
  }

  _maxStat = (e, increment = 1) => {
    const { value, incrementStat, stat } = this.props;
    if (value + increment < 15) {
      return this._maxStat(e, increment + 1);
    }

    incrementStat(stat, increment);
    return;
  }

  _setStatDirectly = e => {

  }

  // debounce above

  render() {
    const { stat, value } = this.props;
    // TODO: the input should be able to _show_ values out of range, but pass on capped values to wrapper.
    // I think the above is best done with a mix of local state and props
    // finish futzing with input, set on input, but validate and correct onBlur
    return (
      <div className='stat-row'>
        <div>
          {`${stat.toUpperCase()}:`}
          <input type='number' className='stat-input' value={value} onChange={this._setStatDirectly} />
        </div>
        <ChangeValues className='change-values-group' increaseStat={this._increaseStat} decreaseStat={this._decreaseStat} maxStat={this._maxStat} />
      </div>
    );
  }
}