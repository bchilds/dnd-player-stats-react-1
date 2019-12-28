import {
  statNames,
  POINT_COST_MAP,
  POINTS_TOTAL,
} from './constants';

export const defaultStats = function() {
  return statNames.reduce((acc, curr) => {
    acc[curr] = 8;
    return acc;
  }, {});
};

export const calculateModifier = function(value) {
  return Math.floor((value - 10)/2);
};

export const calculatePointsRemaining = function(stats) {
  return statNames.reduce((acc, curr) => {
    return acc - POINT_COST_MAP[stats[curr]]; 
  }, POINTS_TOTAL);
}