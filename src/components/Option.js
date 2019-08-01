import React from 'react';
import cn from 'classnames';

const Option = ({pr, value}) => {

  return (
    <li className={cn("option", {"option-blue": pr === "proposals"})}>
      <div className="option__key">
        {pr === "proposals" ? value : pr}: 
        <span className="option__value">
          {pr === "budget" ? "$"+value : pr === "proposals" ? pr : value}
        </span>
        {pr !== "proposals" && <span className="option__separator"></span>}
      </div>
    </li>
    )
}

export default Option;