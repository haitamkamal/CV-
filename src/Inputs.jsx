import React from 'react';
import CV from './CV.jsx';
import { useState } from 'react';


function Inputs(){
  const [fullName, setfullName] = useState("Youssef");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [studies, setStudies] = useState("");
  const [exprience, setExprience] = useState("");
  const [arrStudies, setArrStudies] = useState([]);

  
  const addStudies = () => {
    if (studies.trim()) {
      setArrStudies([...arrStudies, studies]);
      setStudies("");
    }
  };
  const removeStudy = (index) => {
    setArrStudies(arrStudies.filter((study, i) => i !== index)); 
  };
  return(
    <>
      <div className="inputs">
        <label>
          Fullname : 
        <input type="text" 
        value={fullName}
        onChange={(event) => setfullName(event.target.value)}
        />
        </label>

        <label >
          Email :
          <input type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Telephone :
          <input type="text" 
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </label>
        <label>
          Address :
          <input type="text" 
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>
        <button key={crypto.randomUUID} onClick={addStudies}>Add</button>

        <lable>
          Studies:
          <input
          value={studies}
          onChange={(event) => setStudies(event.target.value)}/>
        </lable>
        <button key={crypto.randomUUID} onClick={addStudies}>Add</button>
        <label>
          Exprience :
          <input type="text"
            value={exprience}
            onChange={(event) => setExprience(event.target.value)}/>
        </label>

        <CV fullName={fullName} email={email} telephone={telephone} address={address} studies={studies} exprience={exprience} arrStudies={arrStudies} />
      </div>
    </>
  )
}

export default Inputs