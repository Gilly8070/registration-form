import React, { useState } from "react";
// import { getAuth } from "firebase/database";
// import { database } from "../firebase";
import { database } from "../../firebase";
import { ref, push, child, update, get } from "firebase/database";
// import { ref, push, child, update } from "firebase/auth";
// import { ref } from 'firebase/storage';
import { useNavigate } from "react-router-dom";
import "./signup.css";
const RegistrationForm = () => {
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [dateofBirth, setDob] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [company, setCompany] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "secondName") {
      setSecondName(value);
    }
    if (id === "dateofBirth") {
      setDob(value);
    }
    if (id === "occupation") {
      setOccupation(value);
    }
    if (id === "company") {
      setCompany(value);
    }
  };

  const handleSubmit = () => {
    // console.log(firstName, secondName, dateofBirth, occupation, company);
    let obj = {
      firstName: firstName,
      secondName: secondName,
      dateofBirth: dateofBirth,
      occupation: occupation,
      company: company,
    };

    // setting location (users) for pushing data
    const usersRef = ref(database, 'users');

    // checking whether user enter firstName
    // if yes then
    // pushing data to database
    // also navigate to /users route
    if (obj?.firstName) {
      push(usersRef, obj);
      navigate('/users');
    }

    console.log('hello', 'running', obj)

    // const newPostKey = push(child(ref(database), "posts")).key;
    // const updates = {};
    // updates["/" + newPostKey] = obj;
    // return update(ref(database), updates);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="secondname">
          <label className="form__label" for="lastName">
            Second Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="secondName"
            value={secondName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="secondName"
          />
        </div>
        <div className="dob">
          <label className="form__label" for="dateofBirth">
            Date Of Birth{" "}
          </label>
          <input
            type="dateofBirth"
            name=""
            id="dateofBirth"
            value={dateofBirth}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="dateofBirth"
          />
        </div>
        <div className="work">
          <label className="form__label" for="Occupation">
            My Occupation{" "}
          </label>
          <input
            className="form__input"
            name=""
            type="text"
            id="Occupation"
            value={occupation}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your occupation"
          />
        </div>
        <div className="company">
          <label className="form__label" for="Company">
            Company{" "}
          </label>
          <input
            className="form__input"
            type="text"
            id="Company"
            value={company}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter your company"
          />
        </div>
      </div>
      <div class="footer">
        <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
