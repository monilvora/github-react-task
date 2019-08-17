import React from "react";

const Form = props => {
  return (
    <div className="Form">
      <form onSubmit={props.submitHandler}>
        <div>
          <input
            type="text"
            onChange={props.valueHandler}
            value={props.value}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
