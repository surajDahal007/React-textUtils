import React from "react";

export default function Alert(props) {

    // convert 'success' to 'Success'
    const capitalise = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    // if props.alert is present then only alert message will be shown
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)} ! </strong>{props.alert.msg}
      </div>
  );
}
