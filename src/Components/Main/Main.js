import React, { useState } from "react";
import axios from "axios";

import Form from "./Form/Form";
import Card from "./Card/Card";

const Main = () => {
  // Declare a new state variable
  const [value, setValue] = useState("");
  const [info, setInfo] = useState([]);

  //Submit event handler
  const handleSubmit = e => {
    e.preventDefault();
    if (value) {
      axios
        .get(`https://api.github.com/users/${value}`)
        .then(response => {
          setInfo([...info, response.data]);
        })
        .catch(error => console.log(error));
      setValue("");
    }
  };

  //Set value on change
  const handleValue = e => {
    setValue(e.target.value);
  };

  //sort array on based of the followers
  info.sort(function(a, b) {
    return b.followers - a.followers;
  });

  //Map through user values
  const CardData = info.map(data => <Card cardInfo={data} key={data.id} />);

  return (
    <div className="Form">
      <Form
        submitHandler={handleSubmit}
        valueHandler={handleValue}
        value={value}
      />
      <div className="Card-container">{CardData}</div>
    </div>
  );
};

export default Main;
