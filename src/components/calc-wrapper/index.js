import React from 'react';
import CalcRow from '../calc-row';
import { statNames, POINT_BUY, POINT_BUY_COST_INCREASE_POINT } from '../../constants';
import './style.css';

export default class CalcWrapper extends React.Component {
  // initial pass does not take levels or race into account
  state = {
    level: 1,
    pointsRemaining: 27,
    mode: POINT_BUY,
    stats: statNames.reduce((acc, curr) => {
      acc[curr] = 10;
      return acc;
    }, {})
  }

  updateStat = NAME => increment => {
    const { stats, pointsRemaining } = this.state;
    const currentValue = stats[NAME];
    const newValue = currentValue + increment;

    // validate 
    
    // points based on new _total_
    const pointCost = Math.sign(increment) * (newValue < POINT_BUY_COST_INCREASE_POINT
      ? 1
      : 2);
    console.log(`Updating ${NAME} to ${newValue}`);

    this.setState({
      pointsRemaining: pointsRemaining - pointCost,
      stats: {
        ...stats,
        [NAME]: newValue,
      },
    });
  }

  validateChange = newValue => {

  }

  render() {
    const { stats, pointsRemaining } = this.state;
    return (
      <div className='calc-wrapper'>
        <div>
          <h3>Points Remaining: {pointsRemaining}</h3>
        </div>
        {Object.entries(stats).map(([key, value]) => { // least efficient method?
          return (<CalcRow
            key={key}
            stat={key}
            value={value}
            updateStat={this.updateStat(key)}
          />);
        })
        }
      </div>
    )
  }
}