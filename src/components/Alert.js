import React from "react";

function Alert(props) {
    const capitalize = (word)=>  {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);

    }
  return (
    /*if props.alert is not null(true) do the following*/
    <div style={{height:'50px'}}>
    {props.alert &&
      <div className={`alert alert-${props.alert.type} alert-dismissible fade-in-down show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>} 
      </div>   
  );
}

export default Alert;
