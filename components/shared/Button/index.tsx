import React from 'react';
import { Icon } from '@iconify/react';
import { BTN_META, BTN_VARIATION_ENUM } from "../../../config/constants";
import { ButtonProps } from "./types";

const Button = ({
  disabled = false,
  text,
  iconID,
  variation = BTN_VARIATION_ENUM.PRIMARY,
  arrow = false,
  onClickFn
}: ButtonProps): JSX.Element => {

  const classSuffix = BTN_META[variation].classSuffix;

  return (
    <button
      disabled={disabled}
      onClick={() => onClickFn && onClickFn()}
      type={onClickFn ? "button" : "submit"}
      className={`c-Btn c-Btn__${classSuffix} ${arrow && "c-Btn--arrow"
        }`}
    >
      {iconID && <Icon className="c-Btn__Icon" icon={iconID} />}
      {text}
      {arrow && <svg
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="c-Btn__Arrow"
      >
        <g className="c-Btn__Arrow-head">
          <path
            d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
        <g className="c-Btn__Arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" strokeWidth="2" />
        </g>
      </svg>}
    </button>
  );
};

export default Button;
