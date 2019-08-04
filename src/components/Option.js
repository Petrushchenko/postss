import React from 'react';
import cn from 'classnames';

const Option = ({pr, value}) => {
  return (
    <li className={cn("option", {"option-blue": pr === "proposals"})}>
      <div className="option__key">
        {pr === "proposals" ? value : pr}:
        {
          (typeof value === "string" || typeof value === "number")
            ?
              <span className="option__value">
                {pr === "budget" 
                  ? "$"+value 
                  : pr === "proposals" 
                  ? pr 
                  : value}
              </span>
            : (typeof value === "object" && value instanceof Array)
            ? <>
                {value.map((item, i) => i<3 && <span 
                      key={item.id} 
                      className={cn("option__value", {"option__value-background": pr ==="skills" })}>
                    {item.name}
                  </span>
                )}
                
              </>
            : <>
              <span className="option__value">{Object.keys(value).map(item => value[item]).join(' ')}</span>
              {
                pr === "client" && <ul className="option__stars">
                  {Array.from({length:5}).map((item, index) => {
                    return <li 
                    key={index} 
                    className={cn("option__star", {"option__star-colored": value.rating > index+1 })}></li>})
                  }
                </ul>
              }
              </>
        }
        {pr !== "proposals" && pr !== "skills" && pr !== "client" && <span className="option__separator"></span>}

      </div>
      {
        value instanceof Array && value.length > 3 && <button type="button" className="btn">
          {value.length-3} more
        </button>
      }
    </li>
    )
}

export default Option;
