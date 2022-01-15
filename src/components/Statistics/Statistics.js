import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';
export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div className={s.wrap}>
      <p className={s.text}>Good:{good}</p>
      <p className={s.text}>Neutral:{neutral}</p>
      <p className={s.text}>Bad:{bad}</p>
      {total >= 1 && <p className={s.text}>Total:{total}</p>}
      {percentage > 0 && <span>{percentage}%</span>}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
