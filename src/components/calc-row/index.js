import React from 'react';
import PropTypes from 'prop-types';
import ChangeValues from '../change-values';
import { noop } from '../../default-props/empty';

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
    const { incrementStat } = this.props;
    incrementStat(1);
  }

  _decreaseStat = () => {
    const { incrementStat } = this.props;
    incrementStat(-1);
  }

  _maxStat = (e, increment = 1) => {
    const { value, incrementStat } = this.props;
    if (value + increment < 15) {
      return this._maxStat(e, increment + 1);
    }

    incrementStat(increment);
    return;
  }

  _setStatDirectly = e => {

  }

  // debounce above

  render() {
    const { stat, value } = this.props;

    return (
      <div className='stat-row'>
        {`${stat.toUpperCase()}:`}
        <input value={value} onChange={this._setStatDirectly}/>
        <ChangeValues increaseStat={this._increaseStat} decreaseStat={this._decreaseStat} maxStat={this._maxStat} />
      </div>
    );
  }
}