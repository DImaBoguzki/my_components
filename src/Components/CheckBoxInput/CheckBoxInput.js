import React,{ useState } from 'react';

/**
 * @param { Function } callback to parent with (id,partName,value).
 * @param { Number } id of value will cahnge.
 * @param { String } paramName name column id Data Base will change.
 * @param { String } value first value of input.
 * @param { Boolean } isDisable if it possible to edit the field 
 * @param { String } type type of input ect text,number, password....
 */

function CheckBoxInput({callBack, title, id, value, paramName, clear}) {
  const [active, setActive] = useState(value);
  console.log("re render check box input ",id,paramName)
  const handleClick=()=>{
    value=!active;
    callBack(id, paramName, value);
    setActive(!active);
  }
  return(
    <div className="dima-checkbox-input">
      <div className="title">{title}</div>
      <div className="action" onClick={handleClick}>
        {
          active ? <img src={require('../../assest/icons/done.svg')} alt=""/> 
          : (clear===undefined || clear) ? null
          : <img src={require('../../assest/icons/cancel.svg')} alt=""/>}
      </div>
    </div>
  )
};

export default React.memo(CheckBoxInput);