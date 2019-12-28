import React from 'react';
import CalcRow from '../calc-row';
import {
  POINT_BUY,
  POINTS_TOTAL,
} from '../../constants';
import {
  defaultStats,
  calculatePointsRemaining,
} from '../../helpers';
import './style.css';



export default class CalcWrapper extends React.Component {
  // initial pass does not take levels or race into account
  state = {
    level: 1,
    pointsRemaining: POINTS_TOTAL,
    mode: POINT_BUY,
    stats: defaultStats(),
  }

  defaultStats

  resetStats = () => {
    this.setState({
      pointsRemaining: POINTS_TOTAL,
      stats: defaultStats()
    });
  }

  updateStat = NAME => increment => {
    const { stats } = this.state;
    const currentValue = stats[NAME];
    const newValue = currentValue + increment;
    // for validation, floor/max at stat cap and replace going forward


    // points based on new _total_ for now, add racial later
    const newStats = {
      ...stats,
      [NAME]: newValue,
    };
    const pointsRemaining = calculatePointsRemaining(newStats);
    console.log('Points remaining: ', pointsRemaining);

    if (!this.changeIsValid(newValue, pointsRemaining)) {
      return;
    }
    console.log(`Updating ${NAME} to ${newValue}`);

    this.setState({
      pointsRemaining: pointsRemaining,
      stats: newStats,
    });
  }

  changeIsValid = (newValue, pointsRemaining) => {
    if (newValue < 8 || newValue > 15) {
      return false;
    }

    if (Number.isNaN(pointsRemaining) || pointsRemaining < 0) {
      return false;
    }

    return true;
  }

  render() {
    const { stats, pointsRemaining } = this.state;
    return (
      <div className='calc-wrapper' >
        <div className='calc-header'>
          <h3>Points Remaining: {pointsRemaining}</h3>
          <button className='reset-button' onClick={this.resetStats}>Reset</button>
        </div>
        <div className='calc-body'>
          {Object.entries(stats).map(([key, value]) => { // least efficient method?
            return (<CalcRow
              key={key}
              stat={key}
              value={value}
              incrementStat={this.updateStat(key)}
            />);
          })
          }
        </div>
      </div>
    )
  }
}