import { React } from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.scss';
export default function Feedback({ options, onClick }) {
  return (
    <div className={s.container}>
      {options.map(btn => {
        return (
          <button
            className={s.button}
            key={btn}
            type="button"
            onClick={e => {
              onClick(e);
            }}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func.isRequired,
};
