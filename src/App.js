import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import Pizzaform from "./components/form";

import formSchema from './validation/formSchema';
import * as yup from 'yup';

const intVals = {
  name:"",
  size:"",
  pepperoni:false,
  sausage:false,
  olives:false,
  mushrooms:false,
  special:""
}

const intErrs = {
  name:""
}


const App = () => {

  const {values, setValues} = useState(intVals);
  const {errors, setErrors} = useState(intErrs);
  const {orders, setOrders} = useState([]);

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]})) 
  }

  const change = (name, value) => {
    validate(name, value)
    setValues({...values, [name]: value})
  }

  const submit = () => {
    axios.post(`https://reqres.in/api/orders`, values)
    .then(res => {
      setOrders([res.data, ...orders])
      setValues(intVals)
    })
    .catch(err => console.error(err))
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <Link to="/">Home</Link>
      <Link id="order-pizza" to="/pizza">Order Pizza</Link>

      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/pizza" element={<Pizzaform values={values} change={change} submit={submit} errors={errors}/>}/>
      </Routes>

    </>
  );
};
export default App;
