import React from 'react';
import PropTypes from 'prop-types';
import ChangeValues from '../change-values';
import { noop } from '../../default-props/empty';

export default class CalcRow extends React.Component {
  static propTypes = {
    stat: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    updateStat: PropTypes.func,
  };

  static defaultProps = {
    updateStat: noop,
  }

  increaseStat = () => {
    const { value, updateStat } = this.props;
    this.updateStat(1);
  }

  decreaseStat = () => {
    const { value, updateStat } = this.props;
    this.updateStat(-1);
  }

  updateStat = newValue => {
    const { updateStat } = this.props;
    // validate
    const valid = true;
    if (valid) {
      updateStat(newValue);
    }
  }

  setStatDirectly = e => {

  }

  // debounce above

  render() {
    const { stat, value } = this.props;

    return (
      <div className='stat-row'>
        {`${stat.toUpperCase()}:`}
        <input value={value} onChange={this.setStatDirectly}/>
        <ChangeValues increaseStat={this.increaseStat} decreaseStat={this.decreaseStat} />
      </div>
    );
  }
}