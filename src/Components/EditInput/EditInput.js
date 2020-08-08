import React,{ useState } from 'react';
/**
 * @param { Function } callback to parent with (id,partName,value).
 * @param { Number } id of value will cahnge.
 * @param { String } paramName name column id Data Base will change.
 * @param { String } value first value of input.
 * @param { Boolean } isDisable if it possible to edit the field 
 * @param { String } type type of input ect text,number, password....
 */
function EditInput({callBack, id, paramName, value, isDisable, type}) {
  const [val, setVal] = useState(value);
  console.log("re render edit input",id,paramName)
  const handleBlur=()=>{
    if(val!==value){
      value=val;
      callBack(id, paramName, value);
    }
  }
  return (
    <div className="dima-edit-input">
      <input 
        value={val}
        onBlur={handleBlur}
        onChange={(e)=>{setVal(e.target.value)}}
        disabled={isDisable===undefined ? false : isDisable}
        type={type===undefined ? 'text': type}
        placeholder={val.length > 0 ? val : paramName}
      />
    </div>
  )
}

export default React.memo(EditInput);