import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const VillagerForm = props => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height: "",
    id: new Date()
  });
console.log(form)
  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
      e.preventDefault();
      
    
  };
  return (
    <div className="VillagerFormContainer">
      <h3>Fill The Form and Become our village!</h3>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
         
          value={form.name}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFor="age">Age : </label>
        <input
          type="text"
          name="age"
         
          value={form.age}
          onChange={changeHandler}
        />
        <br />
        <br />
        <label htmlFor="height">Height : </label>
        <input
          type="text"
          name="height"
        
          value={form.height}
          onChange={changeHandler}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};


export default connect(
  null,
  {  }
)(VillagerForm);

